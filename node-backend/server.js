import express from "express";
import nodeMailer from "nodemailer";
import dotenv from "dotenv";
import bodyparse from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();
const port = 3000;

//Middleware
app.use(cors());
app.use(bodyparse.json());

const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.MAIL_EMAIL,
        pass: process.env.MAIL_PASSWORD,
    },
});

app.post("/send-email", (req, res) => {
    const { nombre, email, telefono, pais, estado, mensaje } = req.body;

    const validation = validateFormData({
        nombre,
        email,
        telefono,
        pais,
        estado,
        mensaje,
    });
    if (!validation.valid) {
        return res.status(400).send(validation.message);
    }

    const mailOptions = {
        from: email,
        to: process.env.MAIL_EMAIL,
        subject: `Nuevo mensaje de ${nombre}`,
        text: `Nombre: ${nombre}\nEmail: ${email}\nTelefono: ${telefono}\nPais: ${pais}\nCiudad: ${estado}\nMensaje: ${mensaje}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send("Error al enviar el mensaje");
        }

        console.log("Email enviado: " + info.response);
        res.status(200).send("Email enviado");
    });

});  

//Iniciar el servidor    
app.listen(port, () => {
        console.log(`Server running on port ${port}`); 
});

function validateFormData(data) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(data.email)) {
        return { valid: false, message: "Email invalido" };
    }

    const phonePaterrn = /^\(\d{3}\)\s\d{3}-\d{4}$/;

    if (!phonePaterrn.test(data.telefono)) {
        return { valid: false, message: "Telefono invalido" };
    }

    if (!data.nombre || !data.pais || !data.mensaje) {
        return { valid: false, message: "Todos los campos son requeridos" };
    }

    return { valid: true };
}
