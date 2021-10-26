import { SettingsExt } from './settings.ext';

export interface Settings {
  fieldA: string;
}

export type SettingsModel = Settings & SettingsExt;