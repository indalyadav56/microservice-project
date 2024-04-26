
import asyncio
import random

from fastapi import FastAPI, Depends
from starlette.websockets import WebSocket
import redis.asyncio as redis

app = FastAPI()

redis_connection_pool = redis.ConnectionPool(
    host='localhost',
    port=6379,
    password='redis123'
)


def redis_connection() -> redis.Redis:
    return redis.Redis(connection_pool=redis_connection_pool)

@app.websocket("/ws")
async def ws_root(websocket: WebSocket, rdb: redis.Redis = Depends(redis_connection)):
    random_data = random.randint(0,9)
    print('random_data', random_data)
    await websocket.accept()

    async def listen_redis():
        ps = rdb.pubsub()
        await ps.subscribe(f"test_channel:userid_{random_data}")
        while True:
            message = await ps.get_message(ignore_subscribe_messages=True, timeout=None)
            if message is None:
                continue
            text_message = message['data'].decode('utf-8')
            await websocket.send_text(text_message)

    async def listen_ws():
        while True:
            message = await websocket.receive_text()
            await rdb.publish("test_channel", message)

    await asyncio.wait([listen_ws(), listen_redis()], return_when=asyncio.FIRST_COMPLETED)
    await websocket.close()