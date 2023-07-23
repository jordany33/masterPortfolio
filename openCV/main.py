import cv2
import os
from ultralytics import YOLO
from ultralytics.yolo.v8.detect.predict import DetectionPredictor

class ObjectDetector:
    def __init__(self, model_path, videos_folder, show_detection=True):
        self.model = YOLO(model_path)
        self.videos_folder = videos_folder
        self.show_detection = show_detection

    def process_videos(self):
        video_files = [f for f in os.listdir(self.videos_folder) if f.endswith('.mp4')]
        for video_file in video_files:
            video_path = os.path.join(self.videos_folder, video_file)
            results = self.model.predict(source=video_path, show=self.show_detection)
            print(f'Video: {video_file} - Number of Objects Detected: {len(results)}')
            self.save_results(results, video_file)

    def save_results(self, results, video_file):
        result_file = f'{video_file.split(".")[0]}_results.txt'
        with open(result_file, 'w') as file:
            for result in results:
                file.write(str(result) + '\n')


# Run the object detector
object_detector = ObjectDetector('yolov8n.pt', '/path/to/your/videos/folder', show_detection=True)
object_detector.process_videos()
