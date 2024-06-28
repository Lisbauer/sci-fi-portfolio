import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());

const corsOptions: cors.CorsOptions = {
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

app.post('/send', (req, res) => {
  const { name, email, message, subject } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  const mailOptions: nodemailer.SendMailOptions = {
    from: email,
    to: process.env.EMAIL_USER!,
    subject: subject!,
    text: `Nombre: ${name}\n\nEmail: ${email}\n\nMensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      return res.status(500).send(error.toString());
    }
    console.log('Correo enviado:', info.response);
    res.status(200).send('Correo enviado correctamente');
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
