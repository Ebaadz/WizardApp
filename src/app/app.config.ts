import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig = {
  providers: [provideHttpClient(withFetch())],
  apiEndpoint: 'https://tetervak.dev.fast.sheridanc.on.ca/exams/angular/data/snape.json'
};
