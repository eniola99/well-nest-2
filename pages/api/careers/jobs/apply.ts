import type { NextApiRequest, NextApiResponse } from "next";
import { IncomingForm, File as FormidableFile } from "formidable";
import fs from "fs";
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
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const form = new IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ error: "Form parsing failed" });

    // fields contains text inputs; files contains uploaded files
    const name = Array.isArray(fields.name) ? fields.name[0] : fields.name;
    const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;
    const contact = Array.isArray(fields.contact)
      ? fields.contact[0]
      : fields.contact;
    const position = Array.isArray(fields.position)
      ? fields.position[0]
      : fields.position;
    const status = Array.isArray(fields.status)
      ? fields.status[0]
      : fields.status;
    const cprCertification = Array.isArray(fields.cprCertification)
      ? fields.cprCertification[0]
      : fields.cprCertification;
    const foodCertification = Array.isArray(fields.foodCertification)
      ? fields.foodCertification[0]
      : fields.foodCertification;
    const validVulnerable = Array.isArray(fields.validVulnerable)
      ? fields.validVulnerable[0]
      : fields.validVulnerable;
    const accessVehicle = Array.isArray(fields.accessVehicle)
      ? fields.accessVehicle[0]
      : fields.accessVehicle;
    const infractionFree = Array.isArray(fields.infractionFree)
      ? fields.infractionFree[0]
      : fields.infractionFree;

    interface ApplicationDataType {
      [key: string]: string | boolean | undefined;
    }
    const applicationData = {
      name,
      email,
      contact,
      position,
      status,
      cprCertification,
      foodCertification,
      validVulnerable,
      accessVehicle,
      infractionFree,
    };

    const resume = Array.isArray(files.resume) ? files.resume[0] : files.resume;

    if (!resume) return res.status(400).json({ error: "No resume uploaded" });

    const htmlContent = (applicationData: ApplicationDataType) => {
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
              <h1>New Job Application for ${applicationData.position}</h1>
            </div>

            <div class="details">
              <p>Hello Admin,</p>
              <p>You have a new Job Application from ${name}, email: ${applicationData.email}</p>
            </div>

            <div class="footer">
              <p>Are you legally eligible to work in Canada?.   ${applicationData.status}</p>
              <p>Do you have a valid First Aid and CPR Certification?   ${applicationData.cprCertification}</p>
              <p>Do you have a valid Food Handling Certification?   ${applicationData.foodCertification}</p>
              <p>Do you have a valid Vulnerable Sector Check issued in last 3 months?   ${applicationData.validVulnerable}</p>
              <p>Do you have access to a vehicle?   ${applicationData.accessVehicle}</p>
              <p>Have you ever been convicted of an infraction?   ${applicationData.infractionFree}</p>

              <p>Applicant contact information:  ${applicationData.contact}</p>
              <p>WellNest Group</p>
            </div>
          </div>
        </body>
        </html>

      `;
    };

    try {
      const fileBuffer = fs.readFileSync(resume.filepath);

      const emailTemplate = htmlContent(applicationData);
      const messageData = {
        to: ["qudusnurudeen9@gmail.com", "info@wellwheels.org"],
        from: "Excited User <mailgun@sandboxf25fe5bd655642f6bcfc11377c890587.mailgun.org>",
        subject: `New Application from ${name} ${email}`,
        html: emailTemplate,
        attachment: [
          {
            data: fileBuffer,
            filename: resume.originalFilename || "resume.pdf",
          },
        ],
      };
      await mg.messages.create(
        process.env.NEXT_PUBLIC_MAILGUN_DOMAIN!,
        messageData
      );
      res.status(200).json({
        success: true,
        status: 200,
        message: "application sent successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Mailgun delivery failed" });
    }
  });
}
