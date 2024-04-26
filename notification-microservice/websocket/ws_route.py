from fastapi import APIRouter
from fastapi import WebSocket, Depends
import os
import redis

from .ws_service import WebSocketService


router = APIRouter()



redis_connection_pool = redis.ConnectionPool(
    host=os.environ.get('REDIS_URL'),
    port=os.environ.get('REDIS_PORT'),
    password=os.environ.get('REDIS_PASSWORD')
)


def redis_connection() -> redis.Redis:
    return redis.Redis(connection_pool=redis_connection_pool)




# @router.websocket('/ws')
# async def websocket_router(websocket: WebSocket, rdb = Depends(redis_connection)):
#     await websocket.accept()
#     # creating pubsub instance and listening on the "test_channel"
#     ps = rdb.pubsub()
#     await ps.psubscribe("test_channel")
#     # waiting for new messages from the channel
#     while True:
#         message = await ps.get_message(ignore_subscribe_messages=True, timeout=None)
#         if message is None:
#             continue
#         text_message = message['data'].decode('utf-8')
#         if text_message == "stop":
#             await websocket.send_text("closing the connection")
#             break
#         await websocket.send_text(text_message)
#     await websocket.close()