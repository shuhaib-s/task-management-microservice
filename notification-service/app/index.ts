import { connectRabitMq, getChannel } from "./rabitMq";
import dotenv from "dotenv";
dotenv.config()
const URL = process.env.RABBITMQ_URL || "amqp://localhost:5672";
const EVENT_TYPES = {
    USER_CREATED:"user.created"
}

const EXCHANGE = "app.events";
const QUEUE = "task-service-queue";

async function startConsumer() {
  await connectRabitMq(URL)
  const channel = getChannel();

  await channel.assertExchange(EXCHANGE, "topic", {
    durable: true,
  });

  const q = await channel.assertQueue(QUEUE, {
    durable: true,
  });

  await channel.bindQueue(q.queue, EXCHANGE, EVENT_TYPES.USER_CREATED);

  channel.consume(q.queue, (message:any) => {
    if (!message) return;

    const routingKey = message.fields.routingKey;

    const data = JSON.parse(message.content.toString());

    if(routingKey === EVENT_TYPES.USER_CREATED){
        console.log("hitted here", data)
    }

    channel.ack(message);
  });
}


startConsumer()