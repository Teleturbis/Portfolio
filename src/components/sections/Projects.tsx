'use client';

import { Fragment } from 'react';
import { CommandLineIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Resume({ lang }) {
  return (
    <div className='py-24 sm:py-32 bg-brand-mint/25' id='Projects'>
      <div className='max-w-7xl mx-auto'>
        <div className='pb-10 w-full px-8'>
          <h2 className='font-bold text-3xl sm:text-4xl text-brand-text'>
            {lang.title}
          </h2>
        </div>

        <ul role='list' className='grid grid-cols-1 sm:grid-cols-2 gap-8 px-8'>
          {lang.projects.map((project, index: number) => (
            <li
              key={index}
              className='overflow-hidden rounded-xl border border-gray-200 bg-white p-6 flex flex-col gap-4 h-full'
            >
              <div className='flex xs:items-center gap-x-4 border-b border-gray-900/5'>
                <CommandLineIcon
                  className='h-10 w-10 min-w-5'
                  aria-hidden='true'
                />
                <p className='font-semibold leading-6 text-gray-900'>
                  {project.title}
                </p>
              </div>

              <div className='flex flex-col gap-y-4 justify-between h-full'>
                <div>
                  <div className='flex items-center gap-x-4'>
                    <div className='text-sm font-medium text-gray-900'>
                      {project.type}
                    </div>
                  </div>
                  <div className='text-sm text-gray-500 flex flex-col gap-2'>
                    {project.description.map((item: string, index: number) => (
                      <Fragment key={index}>
                        <p>{item}</p>
                      </Fragment>
                    ))}
                  </div>
                </div>

                {project.images?.length > 0 && (
                  <div className='flex gap-2 flex-wrap bg-brand-mint p-2 rounded-md justify-between'>
                    {project.images.map((image: string, index: number) => (
                      <Link key={index} href={image} target='_blank'>
                        <Image
                          src={image}
                          alt={image}
                          width={120}
                          height={68}
                          className='opacity-75 hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer rounded-sm'
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
