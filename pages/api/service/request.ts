import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm } from "formidable";
import Mailgun from "mailgun.js";
import FormData from "form-data";

export const config = {
  api: {
    bodyParser: false,
  },
};

const mailgun = new Mailgun(FormData);
const mg = mailgun.client({
  key: process.env.NEXT_PUBLIC_MAILGUN_API_KEY!,
  username: "api",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  console.log("Received request:", req.body);

  const form = new IncomingForm();

  form.parse(req, async (err, fields) => {
    if (err) return res.status(500).json({ error: "Form parsing failed" });

    // fields contains text inputs; files contains uploaded files
    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const number = Array.isArray(fields.number)
      ? fields.number[0]
      : fields.number;
    const method = Array.isArray(fields.method)
      ? fields.method[0]
      : fields.method;
    const service = Array.isArray(fields.service)
      ? fields.service[0]
      : fields.service;
    const location = Array.isArray(fields.location)
      ? fields.location[0]
      : fields.location;
    const comments = Array.isArray(fields.comments)
      ? fields.comments[0]
      : fields.comments;

    interface RequestDataType {
      [key: string]: string | undefined;
    }

    const requestContent = {
      name,
      email,
      number,
      method,
      service,
      location,
      comments,
    };

    const htmlContent = (fields: RequestDataType) => {
      return `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <title>New Job Application</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
              border: 1px solid #eee;
              border-radius: 5px;
            }
            .header {
              text-align: center;
              margin-bottom: 20px;
            }
            .header h1 {
              color: #555;
              margin: 0;
            }
            .details {
              margin-bottom: 20px;
            }
            .details p {
              margin: 0 0 10px 0;
            }
            .details strong {
              display: inline-block;
              width: 100px;
            }
            .footer {
              font-size: 0.9em;
              color: #777;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Service Request for ${fields.service}</h1>
            </div>

            <div class="details">
              <p>Hello Admin,</p>
              <p>You have a new Service Request from ${fields.name}, email: ${fields.email}</p>
            </div>

            <div class="footer">
              <p>Phone Number:   ${fields.number}</p>
              <p>Preferred Contact Method:   ${fields.method}</p>
              <p>Service Requested:   ${fields.service}</p>
              <p>Location:   ${fields.location}</p>
              <p>Comments:   ${fields.comments}</p>

              <p>WellNest Group</p>
            </div>
          </div>
        </body>
        </html>

      `;
    };

    try {
      const emailTemplate = htmlContent(requestContent);
      const messageData = {
        to: ["qudusnurudeen9@gmail.com", "info@wellwheels.org"],
        from: "Excited User <mailgun@sandboxf25fe5bd655642f6bcfc11377c890587.mailgun.org>",
        subject: `New Service Request from ${email}`,
        html: emailTemplate,
      };
      await mg.messages.create(
        process.env.NEXT_PUBLIC_MAILGUN_DOMAIN!,
        messageData,
      );
      res.status(200).json({
        success: true,
        status: 200,
        message: "Service request sent successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Mailgun delivery failed" });
    }
  });
}
