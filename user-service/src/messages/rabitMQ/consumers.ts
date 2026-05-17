// const { getChannel } = require("./connection");
// const eventBus = require("../../events/eventBus");

// const EXCHANGE = "app.events";
// const QUEUE = "task-service-queue";

// async function startConsumer() {
//   const channel = getChannel();

//   await channel.assertExchange(EXCHANGE, "topic", {
//     durable: true,
//   });

//   const q = await channel.assertQueue(QUEUE, {
//     durable: true,
//   });

//   await channel.bindQueue(q.queue, EXCHANGE, "user.created");

//   channel.consume(q.queue, (message) => {
//     if (!message) return;

//     const routingKey = message.fields.routingKey;

//     const data = JSON.parse(message.content.toString());

//     console.log("Message From RabbitMQ:", data);

//     // emit internally again
//     eventBus.emit(routingKey, data);

//     channel.ack(message);
//   });
// }

// module.exports = {
//   startConsumer,
// };