import { useContext } from 'react';
import { I18nContext } from './Context';

export const useTranslation = () => useContext(I18nContext);
