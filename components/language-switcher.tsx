'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useCallback } from 'react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = useCallback(() => {
    const currentLang = pathname.startsWith('/en') ? 'de' : 'en';
    const newPath = currentLang === 'en' 
      ? `/en${pathname}` 
      : pathname.replace('/en', '');
    router.push(newPath);
  }, [pathname, router]);

  return (
    <button
      onClick={switchLanguage}
      className="text-white hover:text-primary-400 transition-colors duration-200"
    >
      {pathname.startsWith('/en') ? 'DE' : 'EN'}
    </button>
  );
} 