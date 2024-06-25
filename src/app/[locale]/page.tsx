import { useTranslations } from 'next-intl';

import Button from '@/components/Button';
import Cards from '@/components/Cards';

export default function Home() {
  const t = useTranslations('Home');
  return (
    <div className="flex w-screen h-screen bg-rose-50 items-center justify-center">
      <Button />
      <Cards />
      {t('helloWorld')}
    </div>
  );
}
