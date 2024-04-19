import Link from 'next/link';
import Icons from '../Icons';

import type { SocialsType } from '@/locales/types';

export default function Footer({ lang }: { lang: SocialsType }) {
  return (
    <footer className='bg-brand-dark'>
      <div className='mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {lang.icons.map((item) => (
            <a
              key={item.alt}
              href={item.url}
              className='text-brand-light-blue hover:text-brand-light-blue-hover h-5 w-5'
            >
              <span className='sr-only'>Icon {item.alt}</span>
              <Icons variant={item.alt} color='#D1E8EE' hoverColor='#bcdbe3' />
            </a>
          ))}
        </div>
        <div className='mt-8 md:order-1 md:mt-0 flex flex-col sm:flex-row gap-4 items-center'>
          <p className='text-center text-xs leading-5 text-brand-light-blue'>
            &copy; 2024 Kevin Poppe. All rights reserved.
          </p>
          <span className='h-4 hidden sm:block border-l border-brand-light-blue' />
          <Link
            className='text-center text-xs leading-5 text-brand-light-blue hover:text-brand-light-blue-hover flex items-center gap-1'
            href='/impressum'
          >
            Impressum
          </Link>
          {false && (
            <span className='h-4 hidden sm:block border-l border-brand-light-blue' />
          )}
          {false && (
            <Link
              className='text-center text-xs leading-5 text-brand-light-blue hover:text-brand-light-blue-hover flex items-center gap-1'
              href='/'
            >
              Datenschutz
            </Link>
          )}
          {false && (
            <span className='h-4 hidden sm:block border-l border-brand-light-blue' />
          )}
          {false && (
            <Link
              className='text-center text-xs leading-5 text-brand-light-blue hover:text-brand-light-blue-hover flex items-center gap-1'
              href='/'
            >
              Cookie-Einstellungen
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
