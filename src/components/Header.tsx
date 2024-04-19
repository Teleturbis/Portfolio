'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

import de from '@/locales/de.json';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = {
    left: [
      { name: de['about-me'].title, href: '/#AboutMe' },
      { name: de.map.title, href: '/#Location' },
      { name: de.resume.title, href: '/#Resume' },
    ],
    right: [
      { name: de.socials.title, href: '/#Socials' },
      { name: de.projects.title, href: '/#Projects' },
    ],
  };

  return (
    <header className='bg-white sticky top-0 border-b z-30' id='Header'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex flex-1'>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.left.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
        </div>

        <a href='#' className='-m-1.5 p-1.5'>
          <span className='sr-only'>Your Company</span>
          <Image
            height={70}
            width={40}
            className='h-11 w-auto'
            src='/logo.png'
            alt='Your Company'
          />
        </a>

        <div className='flex flex-1 justify-end'>
          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.right.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className='text-sm font-semibold leading-6 text-gray-900'
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile */}
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-40' />
        <Dialog.Panel className='fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 py-6'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-1'>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Kevin Poppe</span>
              <Image
                height={70}
                width={40}
                className='h-11 w-auto'
                src='/logo.png'
                alt='Your Company'
              />
            </a>
            <div className='flex flex-1 justify-end'></div>
          </div>
          <div className='mt-6 space-y-2'>
            {navigation.left.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
              >
                {item.name}
              </a>
            ))}
            {navigation.right.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
              >
                {item.name}
              </a>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
