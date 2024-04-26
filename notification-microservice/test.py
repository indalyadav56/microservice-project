from lottie import LottieAnimation

# Load the Lottie animation data from a JSON file
with open('animation.json', 'r') as f:
    animation_data = f.read()

# Create the animation object
animation = LottieAnimation.from_json(animation_data)

# Render the animation to a video file
animation.render_movie('animation.mp4', render_settings={
    'codec': 'libx264',
    'scale': 1.0,
    'output_width': animation.width,
    'output_height': animation.height,
    'frame_rate': animation.frame_rate,
    'loop': True
})