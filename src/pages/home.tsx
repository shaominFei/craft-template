import { useTitle } from '@/hooks/use-title';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();
  useTitle(t('pageTitle.home'));
  return <>I am a home page</>;
};
