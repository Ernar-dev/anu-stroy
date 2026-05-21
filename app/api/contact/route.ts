import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const text = `
Новая заявка с сайта!

Имя: ${body.name}
Телефон: ${body.phone}

Сообщение:
${body.message}
`;

  await fetch(
    `https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        chat_id: "YOUR_CHAT_ID",
        text,
      }),
    }
  );

  return NextResponse.json({
    success: true,
  });
}