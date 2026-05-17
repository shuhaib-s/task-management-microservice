import { getChannel } from "./connection";

const EXCHANGE = "app.events";

export async function publishEvent(routingKey:string, message:any) {
  const channel = getChannel();

await channel.assertExchange(EXCHANGE, "topic", {
    durable: true,
  });

  channel.publish(
    EXCHANGE,
    routingKey,
    Buffer.from(JSON.stringify(message))
  );

  console.log(`Published: ${routingKey}`);
}

module.exports = {
  publishEvent,
};