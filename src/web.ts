import { WebPlugin } from '@capacitor/core';

import type { AppResourcesPlugin } from './definitions';

export class AppResourcesWeb extends WebPlugin implements AppResourcesPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
