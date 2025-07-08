import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response("Faltan campos", { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: "Nuevo mensaje desde Edga Service Web",
      text: `
Nombre: ${name}
Email: ${email}
Mensaje:
${message}
      `,
    });

    return new Response("Mensaje enviado correctamente", { status: 200 });
  } catch (error) {
    console.error("Error al enviar:", error);
    return new Response("Error al enviar el mensaje", { status: 500 });
  }
}
