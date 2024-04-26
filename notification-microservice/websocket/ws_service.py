from fastapi import WebSocket, WebSocketDisconnect
from services.redis_service import RedisService
import aioredis
import os
import redis
redis_url = 'redis://:redis123@localhost:6379/0'

redis_connection_pool = redis.ConnectionPool(
    host=os.environ.get('REDIS_URL'),
    port=os.environ.get('REDIS_PORT'),
    password=os.environ.get('REDIS_PASSWORD')
)


def redis_connection() -> redis.Redis:
    return redis.Redis(connection_pool=redis_connection_pool)

class WebSocketService:
    def __init__(self):
        self.host = os.environ.get('REDIS_URL')
        self.port = os.environ.get('REDIS_PORT')
        self.db = os.environ.get('REDIS_DB')
        self.password = os.environ.get('REDIS_PASSWORD')
        self.redis_client = redis_connection()
        self.websockets = []

    async def handle_websocket(self, websocket: WebSocket):
        await websocket.accept()
        try:
            ps = self.redis_client.pubsub()
            await ps.psubscribe("test_channel")

            while True:
                message = await ps.get_message(ignore_subscribe_messages=True, timeout=None)
                if message is None:
                    continue

                message = await websocket.receive_text()
                await self.broadcast(message)
                
        except WebSocketDisconnect:
            self.websockets.remove(websocket)

    # async def handle_websocket(self, websocket: WebSocket):
    #     await websocket.accept()
    #     redis = aioredis.from_url(redis_url)
    #     pubsub = redis.pubsub()
    #     await pubsub.subscribe('chat')

    #     while True:
    #         try:
    #             message = await pubsub.get_message(ignore_subscribe_messages=True)
    #             print('indal-message', message)
    #             if message:
    #                 data = message['data']
    #                 await websocket.send_text(data)
    #             else:
    #                 data = await websocket.receive_text()
    #                 await redis.publish('chat', data)
    #         except WebSocketDisconnect:
    #             await pubsub.close()
    #             await pubsub.unsubscribe('chat')
    #             break
            
    # async def handle_websocket(self, websocket: WebSocket):
    #     await websocket.accept()
    #     try:
    #         await self.redis_listener(websocket)
                
    #     except WebSocketDisconnect:
    #         self.websockets.remove(websocket)

    async def broadcast(self, message: str):
        for ws in self.websockets:
            await ws.send_text(message)

    async def redis_listener(self, websocket):
        redis = await aioredis.from_url("redis://:redis123@localhost:6379/0")
        pubsub = redis.pubsub()
        await pubsub.subscribe("NOTIFICATION_CHANNEL")
        message = await pubsub.get_message(ignore_subscribe_messages=True)
        print('message===========>', message)

        if message:
                await websocket.send_text(message.decode())