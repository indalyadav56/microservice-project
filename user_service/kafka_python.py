# from kafka import KafkaProducer
# import json

# # Create a Kafka producer
# producer = KafkaProducer(bootstrap_servers='localhost:9092')

# # Define a topic name
# topic_name = 'python-topic'

# # Create a sample message
# message = {'key': 'value'}

# # Send the message to the Kafka topic
# producer.send(topic_name, value=json.dumps(message).encode('utf-8'))

# # Flush and close the producer
# producer.flush()
# producer.close()

from kafka import KafkaProducer
import json

producer = KafkaProducer(bootstrap_servers='192.168.31.69:9092',
                         value_serializer=lambda v: json.dumps(v).encode('utf-8'))

for i in range(10):
    message = {'number': i}
    producer.send('python-topic', value=message)
    print(f"Sent: {message}")

producer.flush()
