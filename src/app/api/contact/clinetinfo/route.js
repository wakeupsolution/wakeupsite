import { NextResponse } from "next/server";
import JSZip from "jszip";

export async function POST(req) {
  try {
    const formData = await req.formData();
    
    // 1. Extract text fields
    const clientName = formData.get("clientName") || "N/A";
    const companyName = formData.get("companyName") || "N/A";
    const email = formData.get("email") || "N/A";
    const mobile = formData.get("mobile") || "N/A";
    const address = formData.get("address") || "N/A";
    const googleBusiness = formData.get("googleBusiness") || "N/A";

    // 2. Format a beautiful notification layout for Telegram
    const telegramCaption = 
      `🚀 *NEW BULK CLIENT ONBOARDING*\n\n` +
      `👤 *Client Name:* ${clientName}\n` +
      `🏢 *Company:* ${companyName}\n` +
      `📧 *Email:* ${email}\n` +
      `📞 *Mobile:* ${mobile}\n` +
      `📍 *Address:* ${address}\n` +
      `🌐 *GMB Link:* ${googleBusiness}\n\n` +
      `📁 _All batch files and media are compressed inside the zip archive file._`;

    const zip = new JSZip();
    zip.file("client_summary.txt", telegramCaption.replace(/\*/g, "")); 

    // 3. Extract single client avatar/logo image safely
    const clientImage = formData.get("clientImage");
    if (clientImage && clientImage instanceof File && clientImage.size > 0) {
      const buffer = Buffer.from(await clientImage.arrayBuffer());
      zip.file(`logo_${clientImage.name}`, buffer);
    }

    // 4. Extract bulk images using .getAll()
    const bulkImages = formData.getAll("images");
    for (const file of bulkImages) {
      if (file instanceof File && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        zip.file(`images/${file.name}`, buffer); // Placed in images/ subfolder
      }
    }

    // 5. Extract bulk videos using .getAll()
    const bulkVideos = formData.getAll("videos");
    for (const file of bulkVideos) {
      if (file instanceof File && file.size > 0) {
        const buffer = Buffer.from(await file.arrayBuffer());
        zip.file(`videos/${file.name}`, buffer); // Placed in videos/ subfolder
      }
    }

    // 6. Generate the node-buffer variant of the ZIP
    const zipBuffer = await zip.generateAsync({ type: "nodebuffer" });

    // 7. Telegram Configuration
    const TELEGRAM_BOT_TOKEN = "8794886466:AAERFK6CZcXT0R_O6z5N1rzIAIZZM8DY788"; 
    const TELEGRAM_CHAT_ID = "2144882750";     

    // 8. Prepare payload form mapping
    const telegramPayload = new FormData();
    telegramPayload.append("chat_id", TELEGRAM_CHAT_ID);
    telegramPayload.append("caption", telegramCaption);
    telegramPayload.append("parse_mode", "Markdown");
    
    const zipBlob = new Blob([zipBuffer], { type: "application/zip" });
    const cleanFileName = `${companyName.replace(/[^a-zA-Z0-9]/g, "_")}_bulk_assets.zip`;
    telegramPayload.append("document", zipBlob, cleanFileName);

    // 9. Post structure directly to Telegram
    const response = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendDocument`,
      {
        method: "POST",
        body: telegramPayload,
      }
    );

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error("Telegram error trace window:", errorDetails);
      throw new Error("Telegram API rejected the batch upload message.");
    }

    return NextResponse.json({ success: true, message: "Bulk submission sent successfully!" });
  } catch (error) {
    console.error("Backend Error Core Context:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}