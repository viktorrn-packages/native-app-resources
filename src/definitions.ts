export interface AppResourcesPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
