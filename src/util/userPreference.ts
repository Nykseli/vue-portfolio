import { Languages, defaultLang } from "@/locale/locale";

const PREFERENCE_KEY = "user_preference";

export default class UserPreference {
  private language: Languages;
  private isDarkTheme: boolean;

  constructor() {
    const savedData = JSON.parse(localStorage.getItem(PREFERENCE_KEY) || "{}");

    this.language = savedData.language || defaultLang;
    this.isDarkTheme = savedData.isDarkTheme || false;
  }

  public save(): void {
    localStorage.setItem(PREFERENCE_KEY, JSON.stringify({ ...this }));
  }

  public getLanguage(): Languages {
    return this.language;
  }

  public setLanguage(lang: Languages): void {
    this.language = lang;
  }

  public getIsDarkTheme(): boolean {
    return this.isDarkTheme;
  }

  public setIsDarkTheme(isDark: boolean): void {
    this.isDarkTheme = isDark;
  }
}
