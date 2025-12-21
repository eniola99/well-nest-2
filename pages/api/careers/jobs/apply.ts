import type { NextApiRequest, NextApiResponse } from "next";
import * as formidable from "formidable";
import { writeFile, readFile, mkdir } from "fs/promises";
import path from "path";

import { sendEmail } from "@/src/utils/sendEmail";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { fields, files } = await new Promise<{
    fields: formidable.Fields;
    files: formidable.Files;
  }>((resolve, reject) => {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });

  const resumeFile = Array.isArray(files.resume)
    ? files.resume[0]
    : files.resume;
  const fullName = Array.isArray(fields.name) ? fields.name[0] : fields.name;
  const email = Array.isArray(fields.email) ? fields.email[0] : fields.email;

  if (!resumeFile) {
    return res.status(400).json({ error: "Missing required resume file." });
  }

  try {
    // Read the temporarily saved file
    const buffer = await readFile(resumeFile.filepath);
    const filename = resumeFile.originalFilename || "resume.pdf";
    const uploadDir = path.join(process.cwd(), "public/resumes");

    // Ensure the directory exists
    await mkdir(uploadDir, { recursive: true });

    // Write the file to its final destination
    await writeFile(path.join(uploadDir, filename), buffer);

    console.log(
      `Application received from ${fullName} (${email}). Resume saved.`
    );

    return res
      .status(200)
      .json({ message: "Application submitted successfully!" });
  } catch (error) {
    console.error("File operation error:", error);
    return res.status(500).json({ error: "Failed to save the file." });
  }

  // const {
  //   name,
  //   contact,
  //   email,
  //   position,
  //   status,
  //   cprCertification,
  //   foodCertification,
  //   validVulnerable,
  //   accessVehicle,
  //   infractionFree,
  //   resume,
  // } = req.body;
  // console.log({
  //   name,
  //   contact,
  //   email,
  //   position,
  //   status,
  //   cprCertification,
  //   foodCertification,
  //   validVulnerable,
  //   accessVehicle,
  //   infractionFree,
  //   resume,
  // });
}
