import logging

from fastapi import Request
from starlette.middleware.base import BaseHTTPMiddleware


# Configure logging
logging.basicConfig(
    filename="logs/app.log",
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)

logger = logging.getLogger(__name__)

class LoggingMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        try:
            logger.info(f"Request: {request.method} {request.url}")
            response = await call_next(request)
            logger.info(f"Response: {response.status_code}")

            return response
        
        except Exception as err:
            logger.error(f"Error: {err}")
            raise err
