import { provideHttpClient } from '@angular/common/http';

export const appConfig = {
  providers: [provideHttpClient()],
  apiEndpoint: 'https://tetervak.dev.fast.sheridanc.on.ca/exams/angular/data/snape.json'
};
