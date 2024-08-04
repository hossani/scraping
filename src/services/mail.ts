import { createTransporter } from './createTransporter';

export const sendEmail = async (to:string, subject:string, text:string) => {
  try {
    
const transporter = createTransporter({
    host: process.env.SMTP_HOST as string,
    port: Number(process.env.SMTP_PORT) as number,
    secure: true,
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASSWORD as string
    }
  });

    await transporter.sendMail({
      from: process.env.SMTP_USER ,
      to,
      subject,
      text
    });
    console.log(`E-mail envoyé à ${to}`);
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
  }
};
