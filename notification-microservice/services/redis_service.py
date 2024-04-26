import os
from typing import Any

import redis

from utils.singleton_meta import SingletonMeta


class RedisService(metaclass=SingletonMeta):
    def __init__(self):
        self.host = os.environ.get('REDIS_URL')
        self.port = os.environ.get('REDIS_PORT')
        self.db = os.environ.get('REDIS_DB')
        self.password = os.environ.get('REDIS_PASSWORD')
        self.redis_client = redis.StrictRedis(host=self.host, port=self.port, db=self.db, password=self.password)

    def publish(self, channel: str, message: Any):
        self.redis_client.publish(channel, message)

    async def subscribe(self, channel: str):
        pubsub = self.redis_client.pubsub()
        pubsub.subscribe(channel)
        return pubsub