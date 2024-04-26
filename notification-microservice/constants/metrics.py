from prometheus_client import make_metrics_server, Counter, Histogram, generate_latest

# Create a counter metric for tracking requests
requests_counter = Counter(
    'http_requests_total',
    'Total number of HTTP requests',
    ['method', 'path', 'status_code']
)

# Create a histogram metric for tracking request latencies
request_latency = Histogram(
    'http_request_duration_seconds',
    'HTTP request latency in seconds',
    ['method', 'path']
)

# Create a metrics server for exposing the metrics
metrics_server = make_metrics_server(
    registry=None,
    metrics_path='/metrics',
    metrics_default_route=False
)

# Function to get the latest metrics
def get_metrics():
    return generate_latest(metrics_server.registry)