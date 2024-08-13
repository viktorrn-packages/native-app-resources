import { WebPlugin } from '@capacitor/core';

import type { AppResourcesPlugin } from './definitions';

export class AppResourcesWeb extends WebPlugin implements AppResourcesPlugin {
  async getStringByKey(options: { key: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    alert('ECHO '+ options.key);
    return { value: options.key };
  }
}
