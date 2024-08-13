declare module '@capacitor/core' {
  interface PluginRegistry {
    AppResources: AppResourcesPlugin;
  }
}

export interface AppResourcesPlugin {
  getStringByKey(options: { key: string }): Promise<{ value: string }>;
}
