'use client';

import React from 'react';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ScrollDownButtonHero() {
  return (
    <div className='absolute bottom-6 w-full mx-auto flex justify-center animate-bounce z-50'>
      <Link className='border rounded-full border-gray-400 p-1' href='#AboutMe'>
        <ArrowDownIcon className='w-6 h-6 text-gray-600' />
      </Link>
    </div>
  );
}
