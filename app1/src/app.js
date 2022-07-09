import * as poseDetection from '@tensorflow-models/pose-detection';

const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);

const video = document.getElementById('video');
const poses = await detector.estimatePoses(video);

console.log(poses[0].keypoints);