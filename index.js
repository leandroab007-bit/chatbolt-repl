const venom = require('venom-bot');

venom
  .create({ session: 'ChatBolt' })
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage(async (message) => {
    if (message.body === '1') {
      client.sendText(message.from, '🦷 Para agendar sua consulta, envie seu nome e melhor horário. Um atendente irá confirmar!');
    } else if (message.body === '2') {
      client.sendText(message.from, '👩‍💼 Encaminhando para um atendente humano... aguarde um momento.');
    } else if (message.body === '3') {
      client.sendText(message.from, '📍 Rua das Flores, 123 – Centro, Belo Horizonte\nClique aqui: https://maps.google.com/?q=Rua+das+Flores+123');
    } else if (message.body === '4') {
      client.sendText(message.from, '⏰ Segunda a sexta: 8h às 18h\nSábado: 8h às 12h\nDomingo: fechado.');
    } else if (message.body.toLowerCase().includes('oi') || message.body.toLowerCase().includes('olá')) {
      client.sendText(
        message.from,
        'Olá! 👋 Bem-vindo à Clínica Sorriso!\n\nDigite:\n*1* Agendar consulta\n*2* Falar com atendente\n*3* Ver localização\n*4* Horários de funcionamento'
      );
    }
  });
}