

exports.run = (client, message, args) => {
  // This will round the api ping of the client
  const apiPing = Math.round(message.client.ping);

  // This will round the response time between when the message was received and when the message was sent
  const responseTime = Math.round(Date.now() - message.createdTimestamp); 
  
  // You can display as
  message.channel.send(`API Ping: \`${apiPing}ms\`\nResponse Time: \`${responseTime}ms\``)
}