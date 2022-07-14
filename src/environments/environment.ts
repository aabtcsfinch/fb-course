// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  useEmulators: true,
  firebase: {
    apiKey: "AIzaSyCumHDL8JXHxjtgsP4fuMgyR5hhqhq3g7s",
    authDomain: "fir-course-recording-7c297.firebaseapp.com",
    projectId: "fir-course-recording-7c297",
    storageBucket: "fir-course-recording-7c297.appspot.com",
    messagingSenderId: "472398370077",
    appId: "1:472398370077:web:56c707e28a1537d4887df4"
  },
  api: {

  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
