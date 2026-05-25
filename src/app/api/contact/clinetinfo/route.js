import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

let lastRequestTime = 0;

export async function POST(req) {
  try {
    // ✅ Rate limit
    const now = Date.now();

    if (now - lastRequestTime < 5000) {
      return Response.json({
        success: false,
        message: "Too many requests",
      });
    }

    lastRequestTime = now;

    // ✅ Form Data
    const formData = await req.formData();

    const clientName = formData.get("clientName");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const address = formData.get("address");
    const companyName = formData.get("companyName");
    const googleBusiness = formData.get("googleBusiness");

    const clientImage = formData.get("clientImage");

    const images = formData.getAll("images");
    const videos = formData.getAll("videos");

    // ✅ Validation
    if (!clientName || !email) {
      return Response.json({
        success: false,
        message: "Required fields missing",
      });
    }

    // ✅ Upload folder
    const uploadDir = path.join(process.cwd(), "public/uploads");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const attachments = [];

    // ✅ Save file helper
    async function saveFile(file) {
      if (!file || !file.name) return null;

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filePath = path.join(uploadDir, file.name);

      fs.writeFileSync(filePath, buffer);

      return {
        filename: file.name,
        path: filePath,
      };
    }

    // ✅ Client Image
    const clientImageAttachment = await saveFile(clientImage);

    if (clientImageAttachment) {
      attachments.push(clientImageAttachment);
    }

    // ✅ Images
    for (const image of images) {
      const attachment = await saveFile(image);

      if (attachment) {
        attachments.push(attachment);
      }
    }

    // ✅ Videos
    for (const video of videos) {
      const attachment = await saveFile(video);

      if (attachment) {
        attachments.push(attachment);
      }
    }

    // ✅ Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Mail to admin
    await transporter.sendMail({
      from: `"WakeUp Solution" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: "New Client Website Request",

      html: `
        <h2>New Client Submission</h2>

        <p><b>Client Name:</b> ${clientName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Company Name:</b> ${companyName}</p>
        <p><b>Google Business:</b> ${googleBusiness}</p>
      `,

      attachments,
    });

    // ✅ Confirmation Mail
    await transporter.sendMail({
      from: `"WakeUp Solution" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your details 🚀",

      html: `
        <h2>Hello ${clientName},</h2>

        <p>
          Thank you for submitting your business details.
        </p>

        <p>
          Our team will contact you soon regarding your website project.
        </p>

        <br />

        <p>WakeUp Solution</p>
      `,
    });

    return Response.json({
      success: true,
      message: "Submitted Successfully",
    });

  } catch (error) {
    console.log(error);

    return Response.json({
      success: false,
      message: "Server Error",
    });
  }
}