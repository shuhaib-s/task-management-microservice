import amqp  from "amqplib";

let connection;
let channel:any;

export async function connectRabbitMQ(url:string) {
  try {
    connection = await amqp.connect(url);

    channel = await connection.createChannel();

    console.log("RabbitMQ Connected");
  } catch (error) {
    console.error("RabbitMQ Error:", error);
  }
}

export function getChannel() {
  return channel;
}
 