# DartSight 🎯

DartSight is a work-in-progress mobile application for automatic steel-tip darts scoring using two camera devices.

The goal is to detect dart impacts using computer vision and automatically calculate the score.

## Tech Stack

- **React Native + TypeScript** – mobile application and game logic
- **Swift + AVFoundation** – native iOS camera system
- **C++ + OpenCV** – dartboard calibration, dart detection and scoring
- **Java + Spring Boot** – backend
- **PostgreSQL** – database

## Status

🚧 **Work in progress**

The project is currently in early development. The initial focus is on building the core mobile application before implementing the camera and computer vision systems.

The computer vision approach will initially focus on classical image processing and geometry. Machine learning may be explored later if the classical approach does not provide sufficient accuracy or robustness.