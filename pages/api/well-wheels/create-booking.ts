import type { NextApiRequest, NextApiResponse } from "next";

import { sendEmail } from "@/src/utils/sendEmail";
// import { truncateLong } from "@/src/utils/common";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }
  const {
    fullName,
    email,
    number,
    tripDateAndTime,
    destination,
    pickUpAddress,
  } = req.body;

  const htmlContent = (
    fullName: string,
    email: string,
    number: string,
    tripDateAndTime: Date,
    destination: string,
    pickUpAddress: string
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
      <h1>Your Appointment Confirmation</h1>
    </div>

    <div class="details">
      <p>Hello ${fullName},</p>
      <p>Thank you for booking an appointment with us. This email ${email} confirms the details of your upcoming appointment.</p>
      <p><strong>Service:</strong>WellWheels Transportation </p>
      <p><strong>Date:</strong> ${tripDateAndTime}</p>
      <p><strong>Number:</strong> ${number}</p>
      <p><strong>Pick up:</strong> ${pickUpAddress}</p>
      <p><strong>Location:</strong> ${destination}</p>
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

  try {
    const emailTemplate = htmlContent(
      fullName,
      email,
      number,
      tripDateAndTime,
      destination,
      pickUpAddress
    );
    await sendEmail({
      to: email,
      from: "Excited User <mailgun@sandboxf25fe5bd655642f6bcfc11377c890587.mailgun.org>",
      subject: "Well Wheels Transportation Service",
      html: emailTemplate,
    });
    res
      .status(201)
      .json({
        message: `Appointment Booked, Check your mail for confirmation`,
        status: 200,
      });
    return;
  } catch (error: unknown) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}
