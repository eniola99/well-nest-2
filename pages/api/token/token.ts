import { NextApiResponse, NextApiRequest } from "next";

import dbConnect from "@/src/lib/mongoose";
import { Token } from "@/src/models/token";
import { sendEmail } from "@/src/utils/sendEmail";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  const { method } = req;

  const htmlContent = (code: string) => {
    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Appointment Confirmation</title>
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
      <h1>Your Authentication Code</h1>
    </div>

    <div class="details">
      <p>Hello Admin,</p>
      <p>Please use the following code <strong> ${code} </strong>to complete your process.</p>
    </div>

    <div class="footer">
      <p>If you did not request for this code please avoid sharing it, Thank you.</p>
      <p>Best regards,</p>
      <p>WellNest Group</p>
    </div>
  </div>
</body>
</html>

      `;
  };

  switch (method) {
    case "POST":
      const saveToken = new Token({
        token: req.body,
      });
      await saveToken.save();
      const emailTemplate = htmlContent(req.body);
      await sendEmail({
        to: ["qudusnurudeen9@gmail.com", "info@wellwheels.org"],
        from: "Excited User <mailgun@sandboxf25fe5bd655642f6bcfc11377c890587.mailgun.org>",
        subject: "Authentication Code",
        html: emailTemplate,
      });
      res
        .status(200)
        .json({
          success: true,
          message: "Authentication Code sent successfully",
        });
      break;
    default:
      res
        .status(400)
        .json({ success: false, message: "Failed to send code, Try again" });
      break;
  }
}
