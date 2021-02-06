import React, { ChangeEventHandler, useCallback } from 'react';

import { useTranslation, Language } from '../../i18n';

import styles from './styles.module.scss';

const LanguageSwitcher: React.FC = () => {
  const { t, languages, setLanguage } = useTranslation();
  const handleLanguageSelect = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    (e) => setLanguage(e.target.value as Language),
    [setLanguage]
  );

  return (
    <select className={styles.languageSwitcher} onChange={handleLanguageSelect}>
      {languages.map((language) => (
        <option key={language} value={language}>
          {t.languages[language as keyof typeof t.languages]}
        </option>
      ))}
    </select>
  );
};

export default LanguageSwitcher;
