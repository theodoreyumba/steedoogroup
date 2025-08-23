import 'server-only';

export type Locale = 'en' | 'fr' | 'sw' | 'sw-CD' | 'ln';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  fr: () => import('../dictionaries/fr.json').then((module) => module.default),
  sw: () => import('../dictionaries/sw.json').then((module) => module.default),
  'sw-CD': () => import('../dictionaries/sw-CD.json').then((module) => module.default),
  ln: () => import('../dictionaries/ln.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    return dictionaries.en();
  }
  return dictionaries[locale]();
};