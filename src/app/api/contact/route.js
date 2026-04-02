import nodemailer from "nodemailer";

let lastRequestTime = 0; // simple rate limit

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // ✅ 1. Validation
    if (!name || !email || !message) {
      return Response.json({ success: false, message: "Missing fields" });
    }

    if (!email.includes("@")) {
      return Response.json({ success: false, message: "Invalid email" });
    }

    // ✅ 2. Rate limiting (5 sec)
    const now = Date.now();
    if (now - lastRequestTime < 5000) {
      return Response.json({ success: false, message: "Too many requests" });
    }
    lastRequestTime = now;

    // ✅ 3. Transporter (secure)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ 4. Mail to YOU
    await transporter.sendMail({
      from: `"WakeUp Solution" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      html: `
        <h3>New Client Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // ✅ 5. Confirmation mail
    await transporter.sendMail({
      from: `"WakeUp Solution" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your request ✅",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thanks for contacting WakeUp Solution.</p>
        <p>We will reach you soon 🚀</p>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.log(error);
    return Response.json({ success: false });
  }
}