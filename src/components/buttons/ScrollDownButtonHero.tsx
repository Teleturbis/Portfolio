'use client';

import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {};

export default function ScrollDownButtonHero({}: Props) {
  const scrollDown = () => {
    const firstSection = document.getElementById('AboutMe');

    window.scrollTo({
      top: firstSection?.offsetHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className='absolute bottom-6 w-full mx-auto flex justify-center animate-bounce z-50'>
      {/* <button
        className='border rounded-full border-gray-400 p-1'
        onClick={scrollDown}
      >
        <ArrowDownIcon className='w-6 h-6 text-gray-600' />
      </button> */}

      <Link className='border rounded-full border-gray-400 p-1' href='#AboutMe'>
        <ArrowDownIcon className='w-6 h-6 text-gray-600' />
      </Link>
    </div>
  );
}
