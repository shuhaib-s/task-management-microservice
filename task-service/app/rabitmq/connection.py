import pika

class RabitMq:
    _connection = None
    _channel = None
    @classmethod
    def connect(cls, url):
        cls._connection = pika.BlockingConnection(
            pika.URLParameters(url)
            )
        cls._channel = cls._connection.channel()

        print("RabbitMQ Connected")
    
    @classmethod
    def get_channel(cls):
        return cls._channel



