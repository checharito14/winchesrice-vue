import nodemailer from "nodemailer";
// import dotenv from "dotenv";

// dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido. Usa POST." });
  }

  const { nombre, email, telefono, pais, estado, mensaje } = req.body;

  // Validación de datos del formulario
  const validation = validateFormData({
    nombre,
    email,
    telefono,
    pais,
    estado,
    mensaje,
  });

  if (!validation.valid) {
    return res.status(400).json({ message: validation.message });
  }

  // Configuración de Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MAIL_EMAIL,
    subject: `Nuevo mensaje de ${nombre}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nPaís: ${pais}\Estado: ${estado}\nMensaje: ${mensaje}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    return res.status(500).json({ message: "Error al enviar el correo" });
  }
}

// Función para validar los datos
function validateFormData(data) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(data.email)) {
    return { valid: false, message: "Email inválido" };
  }

  const phonePattern = /^\(\d{3}\)\s\d{3}-\d{4}$/;
  if (!phonePattern.test(data.telefono)) {
    return { valid: false, message: "Teléfono inválido" };
  }

  if (!data.nombre || !data.pais || !data.mensaje) {
    return { valid: false, message: "Todos los campos son requeridos" };
  }

  return { valid: true };
}
