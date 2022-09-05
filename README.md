# FlightsFinder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
"# Client22" 


# Settings up Android Emulator environment
## Install Cordova globally
Run the following:
```
npm i -g cordova
```
## Settings up Android SDK's
### Setting up Java JDK
In order for the Cordova framwork to work properly, we need to install `Java JDK 8 (1.8)` and set the `JAVA_HOME` environment variable to it's directory.
### Forcing Gradle version
We want to force the Gradle version to be compatible with `Java JDK 8`, in our case we want to force it to `Gradle 7.1.1`.
For compatability between Gradle and JDK, see [here](https://docs.gradle.org/current/userguide/compatibility.html). <br>
To force the Gradle version, set `CORDOVA_ANDROID_GRADLE_DISTRIBUTION_URL` environment variable to `https://services.gradle.org/distributions/gradle-7.1.1-all.zip`.

## Running the android emulator
### Create a virtual device
To run our app on an emulator, we need to create our device.
To do that, Go to `Android Studio -> Tools -> AVD Manager` and create your device.
### Build the project
In order to build the Android project, you can run `npm run build-android` to ONLY build the project. Because of some issues with the android platform in Cordova, it's recomment to use the command `npm run get-android-ready` which will: <br>
* Build the Angular project
* Remove the Android platform
* Add the Android platform
* Build the Android project
### Running the project
In order to run the Android project, you can run `npm run run-android` but if you don't mind building the project each time you run it, it's recommended to run `npm run android` which will: <br>
* Build the project using the `npm run get-android-ready` command
* Run the Android project on an emulator
<br>
Make sure to first run the Emulator via Android Studio and then execute the run script.