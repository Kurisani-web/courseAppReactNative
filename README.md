# Online Course Marketplace App

The Online Course Marketplace App allows users to easily search, enroll, and study courses across various fields.

## Table of Contents

- [Introduction](#introduction)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [Testing](#test)
- [Deployment](#deployment)

## Introduction

The Online Course Marketplace App is designed to:

- **Create an online learning platform**: Enable users to access and study from a wide range of courses remotely, spanning technology, arts, business, etc.
- **Provide a convenient learning experience**: Users can watch video lectures, access study materials, and take quizzes directly on their mobile devices.
- **Connect instructors and learners**: Facilitate instructors in creating and managing courses while learners can search and enroll in courses that meet their needs.

### Key Features

- Search and browse courses.
- View course details and video lectures.
- Enroll and manage enrolled courses.
- Complete assignments and submit them online.

## Requirements

To run this project, ensure you have the following installed:

- **Node.js** >= 14.x
- **npm** >= 6.x or **yarn** >= 1.x
- **React Native CLI** >= 2.x
- **Xcode** (for iOS) or **Android Studio** (for Android)
- **Expo CLI** (if using Expo)

## Installation

Follow these steps to install the project:

1. **Clone Repository**

   ```bash
   git clone https://github.com/whitemousess/courseAppReactNative.git
   cd courseAppReactNative
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Project**

   ```bash
   npm run start
   # or
   yarn start
   ```

4. **Run on iOS**

   ```bash
   npx react-native run-ios
   ```

5. **Run on Android**
   ```bash
   npx react-native run-android
   ```

## Usage

Provide basic instructions on how to use the application:

- Browse and search for courses.
- View course details, lectures, and study materials.
- Enroll in courses and manage enrolled courses.
- Complete assignments and quizzes.

## Architecture

Briefly describe the project architecture:

<pre>
src/
   ├── components/   # Reusable React components
   ├── Common/       # Reusable components, utilities, resources
   ├── screens/      # Application screens
   ├── navigation/   # Navigation configuration
   ├── assets/       # Images, fonts, etc.
   ├── services/     # API calls and external services
   ├── utils/        # Utility functions
   ├── redux/        # State management (if using Redux)
   └── hooks/        # Custom hooks
</pre>

### Main Libraries Used
- **React Navigation**: Screen navigation.
- **Redux**: State management.
- **Axios**: HTTP client for API calls.

## Test

Provide instructions for running tests:

1. **Run Unit Tests**

   ```bash
   npm test
   # or
   yarn test
   ```

2. **Run End-to-End Tests** (if applicable)
   ```bash
   npx detox test
   ```

## Deployment

Outline deployment steps for production or staging:

1. **iOS Release**

   ```bash
   cd ios
   fastlane release
   ```

2. **Android Release**

   ```bash
   cd android
   ./gradlew assembleRelease
   ```

3. **Expo Deployment** (if using Expo)
   ```bash
   expo publish
   ```
