# DartSight

DartSight is a mobile application for automatic steel-tip darts scoring
using two separate camera devices.

The project is both a functional application and a portfolio/learning project.
Prefer maintainable and understandable solutions while keeping the architecture
realistic for a solo developer.

## Architecture

### React Native + TypeScript
Responsible for:
- UI and navigation
- Game logic and match state
- Player management
- Score display
- Backend communication
- Communication with native modules

Do not implement performance-critical computer vision in JavaScript.

### Swift + AVFoundation
Responsible for:
- iOS camera access and configuration
- Frame capture
- Camera lifecycle
- Passing frames to the C++ vision layer
- Returning native results to React Native

Keep reusable computer vision algorithms out of Swift where practical.

### C++ + OpenCV
Responsible for:
- Dartboard detection and calibration
- Perspective correction / homography
- Coordinate mapping
- Dart detection
- Impact point estimation
- Dartboard geometry and score calculation

Keep the vision core platform-independent where practical so it could
later be reused on Android.

Prefer classical computer vision and geometry first.
Do not introduce ML unless classical approaches prove insufficient.

### Java + Spring Boot + PostgreSQL
Responsible for backend services and persistent application data.

The backend may eventually handle:
- REST APIs
- Users and authentication
- Player profiles
- Matches and match history
- Statistics
- Saved games

Real-time dart detection should remain local on the device whenever practical.

## Camera Development

The final system uses two separate camera devices.

Develop incrementally:

1. Make one camera work reliably.
2. Capture frames.
3. Detect and calibrate the dartboard.
4. Map camera coordinates to dartboard coordinates.
5. Detect a newly thrown dart.
6. Estimate the impact point and calculate the score.
7. Add the second camera only after the one-camera pipeline works.

Do not prematurely build complex multi-camera infrastructure.

## Development Guidelines

- Read relevant existing code before making changes.
- Preserve the architecture described above.
- Prefer small, incremental, testable changes.
- Avoid unrelated refactors.
- Avoid unnecessary abstractions and dependencies.
- Do not change architectural decisions without a clear reason.
- Keep interfaces between React Native, Swift, C++, and Java explicit.
- Prefer simple solutions suitable for a solo developer.
- Add or update tests when appropriate.
- Do not claim tests or builds passed unless they were actually run.
- If a task requires a significant new architectural or technology decision,
  explain the important tradeoffs before committing to a complex approach.

For computer vision, prefer algorithms that can also be tested using saved
images or recorded frames without requiring a live camera.

## Agent Efficiency

Use repository context efficiently:

- Inspect relevant files first instead of scanning the entire repository.
- Avoid repeatedly reading files whose relevant contents are already known.
- Ignore generated files, dependencies, and build outputs unless needed.
- Keep explanations concise.
- Do not sacrifice correctness or necessary investigation merely to reduce
  token usage.

## Scope

Stay focused on the requested task.

Do not:
- Refactor unrelated code.
- Add speculative features.
- Replace libraries without a clear reason.
- Implement later roadmap stages unless requested.
- Perform destructive Git operations unless explicitly requested.