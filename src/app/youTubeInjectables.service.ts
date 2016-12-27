let YOUTUBE_API_KEY: string = 'AIzaSyAi_mT1i2ES5yg1sc7yUcNkhXFKs_MBbuQ';
let YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';

export const youTubeServiceInjectables: Array<any> = [
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];