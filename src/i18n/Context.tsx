import React, { createContext, FC, useMemo, useState } from 'react';

import { Translation, translations, Language, languages, DEFAULT_LANGUAGE } from './languages';

export const I18nContext = createContext<{
  language: Language;
  languages: Language[];
  setLanguage: (language: Language) => void;
  t: Translation;
}>({
  language: DEFAULT_LANGUAGE,
  languages: [],
  setLanguage: () => undefined,
  t: translations[DEFAULT_LANGUAGE],
});

export const I18nContextWrapper: FC<{ defaultLanguage?: Language }> = ({
  children,
  defaultLanguage = DEFAULT_LANGUAGE,
}) => {
  const [language, setLanguage] = useState<Language>(defaultLanguage);
  const context = useMemo(
    () => ({
      t: translations[language],
      languages,
      language,
      setLanguage,
    }),
    [translations, language, setLanguage, languages]
  );

  return <I18nContext.Provider value={context}>{children}</I18nContext.Provider>;
};
