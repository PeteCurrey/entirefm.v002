import { NextResponse } from "next/server";

function generateCertId(slug: string): string {
  return `EFM-${slug.slice(0, 4).toUpperCase()}-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

export async function POST(req: Request) {
  try {
    const { name, email, courseSlug, courseTitle, completionDate } = await req.json();
    if (!name || !email || !courseSlug || !courseTitle) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const certId = generateCertId(courseSlug);
    const dateStr = new Date(completionDate || Date.now()).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
    console.log("[Academy Certificate]", { name, email, courseSlug, certId });

    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><title>Certificate | EntireFM Academy</title>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Playfair+Display:wght@400;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box}html,body{width:297mm;height:210mm;background:#fff;font-family:'Inter',sans-serif}
@page{size:A4 landscape;margin:0}
.cert{width:297mm;height:210mm;border:12px solid #0a1c3b;position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:30px 60px}
.corner{position:absolute;width:40px;height:40px}.corner.tl{top:8px;left:8px;border-top:3px solid #d4af37;border-left:3px solid #d4af37}.corner.tr{top:8px;right:8px;border-top:3px solid #d4af37;border-right:3px solid #d4af37}.corner.bl{bottom:8px;left:8px;border-bottom:3px solid #d4af37;border-left:3px solid #d4af37}.corner.br{bottom:8px;right:8px;border-bottom:3px solid #d4af37;border-right:3px solid #d4af37}
.logo{font-size:11px;font-weight:600;letter-spacing:.3em;text-transform:uppercase;color:#0a1c3b;margin-bottom:4px}.logo-sub{font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:#d4af37;margin-bottom:20px}
.cert-type{font-family:'Playfair Display',serif;font-size:28px;color:#0a1c3b;margin-bottom:4px}.divider{width:120px;height:1px;background:#d4af37;margin:0 auto 16px}
.certifies{font-size:12px;color:#666;letter-spacing:.05em;margin-bottom:8px}.recipient{font-family:'Playfair Display',serif;font-size:36px;color:#0a1c3b;font-weight:700;margin-bottom:8px}
.completed{font-size:12px;color:#666;margin-bottom:8px}.course-title{font-size:16px;font-weight:600;color:#0a1c3b;max-width:480px;text-align:center;line-height:1.4;margin-bottom:20px}
.footer{display:flex;gap:60px;align-items:center;justify-content:center}.footer-col{text-align:center}.footer-label{font-size:9px;letter-spacing:.15em;text-transform:uppercase;color:#999;margin-bottom:4px}.footer-line{width:100px;height:1px;background:#ddd;margin:4px 0}.footer-value{font-size:11px;font-weight:600;color:#0a1c3b}
.watermark{position:absolute;bottom:16px;right:20px;font-size:8px;color:#ccc;letter-spacing:.1em;text-transform:uppercase}
</style><script>window.onload=()=>setTimeout(()=>window.print(),800)</script></head>
<body><div class="cert">
<div class="corner tl"></div><div class="corner tr"></div><div class="corner bl"></div><div class="corner br"></div>
<div class="logo">EntireFM</div><div class="logo-sub">Academy</div>
<div class="cert-type">Certificate of Completion</div>
<div class="divider"></div>
<p class="certifies">This certifies that</p>
<div class="recipient">${name}</div>
<p class="completed">has successfully completed</p>
<div class="course-title">${courseTitle}</div>
<div class="footer">
<div class="footer-col"><div class="footer-label">Completion Date</div><div class="footer-line"></div><div class="footer-value">${dateStr}</div></div>
<div class="footer-col"><div class="footer-label">Issued by</div><div class="footer-line"></div><div class="footer-value">EntireFM Academy</div></div>
<div class="footer-col"><div class="footer-label">Certificate ID</div><div class="footer-line"></div><div class="footer-value">${certId}</div></div>
</div>
<div class="watermark">entirefm.com/academy · Verify: ${certId}</div>
</div></body></html>`;

    return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  } catch (err) {
    return NextResponse.json({ error: "Could not generate certificate" }, { status: 500 });
  }
}
