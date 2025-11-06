import mailgun from "mailgun-js";

type SendMailTypes = {
  to: string;
  from: string;
  subject: string;
  html: string;
};

const mailgunClient = mailgun({
  apiKey: process.env.NEXT_PUBLIC_MAILGUN_API_KEY!,
  domain: process.env.NEXT_PUBLIC_MAILGUN_DOMAIN!,
});

export const sendEmail = async ({ to, from, subject, html }: SendMailTypes) => {
  const emailData = {
    from,
    to,
    subject,
    html,
  };

  try {
    const result = await mailgunClient.messages().send(emailData);
    console.log("Email sent successfully!");
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
