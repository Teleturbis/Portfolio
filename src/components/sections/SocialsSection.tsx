import Image from 'next/image';
import Link from 'next/link';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

import type { SocialsType } from '@/locales/types';

export default function SocialsSection({ lang }: { lang: SocialsType }) {
  return (
    <div className='py-24 sm:py-32 bg-brand-dark' id='Socials'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4'>
          {lang.icons.map(
            (
              item: {
                icon: string;
                alt: string;
                url: string;
              },
              index: number
            ) => (
              <Link
                className='bg-white/75 p-8 sm:p-10 hover:bg-white/85 flex flex-col gap-2 items-center justify-center transition-opacity duration-300 ease-in-out'
                key={index}
                href={item.url}
                target='_blank'
              >
                <Image
                  className='max-h-12 w-full object-contain h-auto'
                  src={item.icon}
                  alt={item.alt}
                  width={158}
                  height={48}
                />
                <span className='flex items-center gap-1'>
                  <p className='text-center font-semibold text-brand-text'>
                    {item.alt}
                  </p>
                  <ArrowTopRightOnSquareIcon className='w-4 h-4 text-brand-text' />
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
