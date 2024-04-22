
# consuming messages
# from kafka import KafkaConsumer
# import json

# # Create a Kafka consumer
# consumer = KafkaConsumer('my-topic', bootstrap_servers='kafka-broker-1:9092,kafka-broker-2:9092')

# # Consume messages from the topic
# for message in consumer:
#     # Deserialize the message value from bytes to a dictionary
#     message_data = json.loads(message.value.decode('utf-8'))
#     print(message_data)

# # Close the consumer
# consumer.close()