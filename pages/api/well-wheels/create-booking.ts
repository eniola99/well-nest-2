import type { NextApiRequest, NextApiResponse } from "next";
import Mailgun from "mailgun.js";
import FormData from "form-data";

// import { truncateLong } from "@/src/utils/common";

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
  const parseRequest = JSON.parse(req.body);

  const {
    fullName,
    email,
    number,
    tripDateAndTime,
    destination,
    pickUpAddress,
    information,
  } = parseRequest;

  const htmlContent = (
    fullName: string,
    email: string,
    number: string,
    tripDateAndTime: Date,
    destination: string,
    pickUpAddress: string,
    information: string
  ) => {
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
      <h1>wellWheels Appointment form ${fullName}, email: ${email}</h1>
    </div>

    <div class="details">
      <p>The following email ${email} has booked a wellWheels appointment with the following details</p>
      <p><strong>Service:</strong>WellWheels Transportation </p>
      <p><strong>Date:</strong> ${fullName}</p>
      <p><strong>Date:</strong> ${tripDateAndTime}</p>
      <p><strong>Number:</strong> ${number}</p>
      <p><strong>Pick up:</strong> ${pickUpAddress}</p>
      <p><strong>Location:</strong> ${destination}</p>
      <p><strong>Additional Information:</strong> ${information}</p>
    </div>

    <div class="details">
      <p><strong>Details:</strong></p>
      <p>[Any specific instructions, e.g., "Please bring the necessary documents," or "We'll be meeting on [Platform Name]," or "Please arrive 10 minutes early."]</p>
    </div>

    <div class="footer">
      <p>If you need to reschedule or have any questions, please contact us:</p>
      <p>Phone: [Your Phone Number]</p>
      <p>Email: [Your Email Address]</p>
      <p>Best regards,</p>
      <p>WellNest Group</p>
    </div>
  </div>
</body>
</html>

      `;
  };

  const autoReplyContent = (fullName: string) => {
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
      <h1>We’ve received your transportation request – WellWheels</h1>
    </div>

    <div class="details">
      <p>Hello, ${fullName}</p>
      <p>Thank you for contacting WellNest Health Group. We’ve received your submission and our team will review it shortly.</p>
      <p>If this is a booking request, a representative will follow up to confirm your appointment details.</p>
      <p>If you’ve made a general inquiry, we’ll be in touch soon to provide the information or guidance you requested.</p>
      <p>We’re committed to providing seamless care and support—whether it’s at home, on the road, or in the community.</p>
      <p>If your request is time-sensitive, please feel free to call us directly at [insert phone number].</strong></p>
    </div>

    <div class="footer">
      <p>Warm regards,</p>
      <p>The WellNest Health Group Team</p>
      <p>Care. Comfort. Connection.</p>
    </div>
  </div>
</body>
</html>

      `;
  };

  try {
    const emailTemplate = htmlContent(
      fullName,
      email,
      number,
      tripDateAndTime,
      destination,
      pickUpAddress,
      information
    );

    const responseTemplate = autoReplyContent(fullName);

    try {
      await Promise.all([
        mg.messages.create(process.env.NEXT_PUBLIC_MAILGUN_DOMAIN!, {
          from: "Excited User <mailgun@sandboxf25fe5bd655642f6bcfc11377c890587.mailgun.org>",
          to: [email, "info@wellwheels.org"],
          subject: "Well Wheels Transportation Service",
          html: emailTemplate,
        }),
        mg.messages.create(process.env.NEXT_PUBLIC_MAILGUN_DOMAIN!, {
          from: "Excited User <mailgun@sandboxf25fe5bd655642f6bcfc11377c890587.mailgun.org>",
          to: [email],
          subject: "We’ve received your request – WellWheels",
          html: responseTemplate,
        }),
      ]);

      return res.status(200).json({
        success: true,
        status: 200,
        message: "Application sent successfully",
      });
    } catch (error) {
      console.error("Mailgun Error:", error);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send emails" });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}
