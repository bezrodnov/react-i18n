import React from 'react';

import { useTranslation } from '../../i18n';

import LanguageSwitcher from '../LanguageSwitcher';

import styles from './styles.module.scss';

export const AppHeader: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      {t.welcome}
      <LanguageSwitcher />
    </header>
  );
};
