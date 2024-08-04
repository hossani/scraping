import nodemailer from 'nodemailer';

// Définition du type pour la configuration du transporteur
interface MailTransportConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

// Fonction pour créer le transporteur
const createTransporter = (config: MailTransportConfig) => {
  return nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.auth.user,
      pass: config.auth.pass
    }
  });
};

export { createTransporter };
