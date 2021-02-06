import en from './en';
import ru from './ru';

export type Translation = typeof en;

export enum Language {
  EN = 'en',
  RU = 'ru',
}

export const translations: Record<Language, Translation> = {
  en,
  ru,
};

export const DEFAULT_LANGUAGE: Language = Language.EN;
export const languages = Object.values(Language) as Language[];
