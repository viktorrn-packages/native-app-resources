import { registerPlugin } from '@capacitor/core';

import type { AppResourcesPlugin } from './definitions';

const AppResources = registerPlugin<AppResourcesPlugin>('AppResources', {
  web: () => import('./web').then(m => new m.AppResourcesWeb()),
});

export * from './definitions';
export { AppResources };
