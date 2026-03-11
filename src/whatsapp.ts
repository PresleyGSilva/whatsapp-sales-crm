import { Client, LocalAuth } from 'whatsapp-web.js';
import qrcode from 'qrcode-terminal';
import { Server } from 'socket.io';

export const initializeWhatsAppClient = (io: Server) => {
  const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
      args: ['--no-sandbox']
    }
  });

  client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    io.emit('qr', qr);
  });

  client.on('ready', () => {
    console.log('WhatsApp Client is ready!');
    io.emit('ready');
  });

  client.on('message', async (msg) => {
    io.emit('message', {
      from: msg.from,
      body: msg.body,
      timestamp: msg.timestamp
    });
  });

  client.initialize();
};
