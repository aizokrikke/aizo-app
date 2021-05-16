// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export let environment: { apiUri: string; production: boolean, apiKey: string };
environment = {
  production: false,
  apiUri: 'https://api.aizo.nl/live',
  apiKey: '748e8218cdbb46b9639dd270da0d8812ad05b82c1beef49b5f30581021cfd2754d0aa919c8c1610fc8a6c47f31342b572ce2865038c060e8686a3fe58c679e36'
};

// In development mode, to ignore zone related logError stack frames such as
// `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
// import the following file, but please comment it out in production mode
// because it will have performance impact when throw logError
// import 'zone.js/dist/zone-logError';  // Included with Angular CLI.
