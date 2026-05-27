import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const FORM_ID =
    process.env.FORMSPREE_FORM_ID || process.env.NEXT_PUBLIC_FORMSPREE_ID;
  if (!FORM_ID) {
    return NextResponse.json(
      { error: "Formspree not configured on server." },
      { status: 501 },
    );
  }

  const url = `https://formspree.io/f/${FORM_ID}`;
  const contentType =
    req.headers.get("content-type") || "application/x-www-form-urlencoded";
  const body = await req.text();

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": contentType },
    body,
  });

  const text = await res.text();
  return new Response(text, {
    status: res.status,
    headers: {
      "Content-Type": res.headers.get("content-type") || "text/plain",
    },
  });
}

export async function GET() {
  return NextResponse.json({ ok: true });
}
