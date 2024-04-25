'use client';

import { Fragment } from 'react';
import {
  HeartIcon,
  CommandLineIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

import TextToSpeechButton from '../buttons/TextToSpeechButton';

import type { ResumeType } from '@/locales/types';

export default function Resume({ lang }: { lang: ResumeType }) {
  return (
    <div className='py-24 sm:py-32 bg-brand-mint/25' id='Resume'>
      <div className='max-w-7xl mx-auto'>
        <div className='pb-10 w-full px-8'>
          <h2 className='font-bold text-3xl sm:text-4xl text-brand-text'>
            {lang.title}
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 px-8'>
          <ul role='list' className='flex flex-col gap-y-8'>
            {lang.work.map((position, index: number) => (
              <li
                key={index}
                className='rounded-xl border border-gray-200 bg-white p-6 flex flex-col gap-4 h-full'
              >
                <div className='grid grid-cols-12 items-center gap-4 border-b border-gray-900/5'>
                  {position.icon === 'dev' ? (
                    <CommandLineIcon
                      className='h-10 w-10 col-span-2'
                      aria-hidden='true'
                    />
                  ) : (
                    <HeartIcon
                      className='h-10 w-10 col-span-2'
                      aria-hidden='true'
                    />
                  )}
                  <div className='col-span-10 sm:col-span-6'>
                    <p className='font-semibold leading-6 text-gray-900'>
                      {position.company}
                    </p>
                    <div className='flex flex-col items-start text-xs'>
                      <p className='font-medium text-gray-900'>
                        {position.position}
                      </p>
                      <p className='text-gray-500'>{position.date}</p>
                    </div>
                  </div>
                  <TextToSpeechButton
                    text={
                      position.company +
                      '\n\n' +
                      position.position +
                      '\n\n' +
                      position.date +
                      '\n\n' +
                      position.description.join('\n\n')
                    }
                    variant='small'
                    className='col-span-12 sm:col-span-4'
                  />
                </div>

                <div className='flex flex-col gap-y-4'>
                  <div className='text-sm text-gray-500 flex flex-col gap-2'>
                    {position.description.map((item: string, index: number) => (
                      <Fragment key={index}>
                        <p>{item}</p>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <span className='h-1 w-full rounded-full bg-brand-light-blue my-4 sm:hidden' />

          <ul role='list' className='flex flex-col gap-y-8'>
            {lang.education.map((position, index: number) => (
              <li
                key={index}
                className='overflow-hidden rounded-xl border border-gray-200 bg-white p-6 flex flex-col gap-4 h-full'
              >
                <div className='grid grid-cols-12 items-center gap-4 border-b border-gray-900/5'>
                  <AcademicCapIcon
                    className='h-10 w-10 col-span-2'
                    aria-hidden='true'
                  />
                  <div className='col-span-10 sm:col-span-6'>
                    <p className='font-semibold leading-6 text-gray-900'>
                      {position.company}
                    </p>
                    <div className='flex flex-col items-start text-xs'>
                      <p className='font-medium text-gray-900'>
                        {position.position}
                      </p>
                      <p className='text-gray-500'>{position.date}</p>
                    </div>
                  </div>
                  <TextToSpeechButton
                    text={
                      position.company +
                      '\n\n' +
                      position.position +
                      '\n\n' +
                      position.date +
                      '\n\n' +
                      position.description.join('\n\n')
                    }
                    variant='small'
                    className='col-span-12 sm:col-span-4'
                  />
                </div>

                <div className='flex flex-col gap-y-4'>
                  <div className='text-sm text-gray-500 flex flex-col gap-2'>
                    {position.description.map((item: string, index: number) => (
                      <Fragment key={index}>
                        <p>{item}</p>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
