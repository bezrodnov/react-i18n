import React from 'react';

import { I18nContextWrapper } from './i18n';
import { AppHeader } from './components/AppHeader';

import './App.scss';

const App: React.FC = () => {
  return (
    <I18nContextWrapper>
      <div className="App">
        <AppHeader />
        <main />
      </div>
    </I18nContextWrapper>
  );
};

export default App;
