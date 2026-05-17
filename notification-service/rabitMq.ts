import amqplib from "amqplib"
let channel:any , connection ;

export const connectRabitMq = async(url:string)=>{
    connection = await amqplib.connect(url)
    channel = await connection.createChannel();
    console.log("Connected to rabitmq")
    
}

export const getChannel = () => channel