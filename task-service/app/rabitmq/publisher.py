import json
import pika
from app.rabitmq.connection import RabitMq

EXCHANGE = "app.events"


def publish_event(routing_key, data):
    print(data)
    
    channel = RabitMq.get_channel()
    channel.exchange_declare(
        exchange=EXCHANGE,
        exchange_type="topic",
        durable=True
    )

    channel.basic_publish(
        exchange=EXCHANGE,
        routing_key=routing_key,
        body=json.dumps(data),
        properties=pika.BasicProperties(
            delivery_mode=2
        )
    )

    print(f"Published: {routing_key}")