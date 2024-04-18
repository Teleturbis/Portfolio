import clsx from 'clsx';
import Image from 'next/image';
import ScrollDownButtonHero from '@/components/buttons/ScrollDownButtonHero';

export default function Hero({ lang }) {
  return (
    <>
      <div className='relative isolate overflow-hidden bg-white h-hero flex sm:items-center'>
        <svg
          className='absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
          aria-hidden='true'
        >
          <defs>
            <pattern
              id='0787a7c5-978c-4f66-83c7-11c213f99cb7'
              width={200}
              height={200}
              x='50%'
              y={-1}
              patternUnits='userSpaceOnUse'
            >
              <path d='M.5 200V.5H200' fill='none' />
            </pattern>
          </defs>
          <rect
            width='100%'
            height='100%'
            strokeWidth={0}
            fill='url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)'
          />
        </svg>

        <div className='mx-auto max-w-7xl px-6 py-10 hidden sm:flex sm:px-8'>
          <div className='mx-auto max-w-2xl sm:mx-0 xl:max-w-xl xl:flex-shrink-0 sm:pt-8'>
            <div className='flex items-center gap-4 xl:flex-col xl:items-start xl:gap-0'>
              <Image
                height={70}
                width={40}
                className='h-11 w-auto'
                src='/logo.png'
                alt='Your Company'
              />
              <h1 className='xl:mt-10 text-4xl font-bold tracking-tight text-gray-900 xl:text-6xl'>
                {lang.title.map((line: string, index: number) => (
                  <span
                    key={index}
                    className={clsx('block', {
                      'text-brand-light': index === 0,
                      'text-brand-dark': index === 1,
                    })}
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </div>
            <p className='mt-6 text-lg leading-8 text-gray-600 xl:w-auto'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className='mt-10 flex items-center gap-x-6'>
              <a
                href='#'
                className='rounded-md bg-brand-light px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-light-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                {lang['contact-cta']}
              </a>
              <a
                href='#'
                className='text-sm font-semibold leading-6 text-brand-text'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a>
            </div>
          </div>
          <div className='mx-auto mt-16 flex w-1/2 max-w-2xl sm:mt-24 sm:ml-10 sm:mr-0 sm:mt-0 sm:max-w-none sm:flex-none xl:ml-32'>
            <div className='max-w-3xl flex-none sm:max-w-5xl lg:max-w-none'>
              <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                <div className='rounded-md shadow-2xl ring-1 ring-gray-900/10 w-5/6'>
                  <Image
                    src='/Portrait2.png'
                    alt='Portrait of me'
                    width={800}
                    height={800}
                    className='w-2/3 lg:w-full h-full'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='sm:hidden pt-6 pb-24 relative flex flex-col justify-end'>
          <div className='absolute z-10 flex flex-col justify-between h-full max-w-[100vw] w-full pt-6 pb-24 left-0 top-0'>
            <div className='flex items-center justify-between px-4'>
              <Image
                height={70}
                width={40}
                className='h-11 w-auto'
                src='/logo.png'
                alt='Your Company'
              />
              <h1 className='sm:mt-10 text-2xl xs:text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                {lang.title.map((line: string, index: number) => (
                  <span
                    key={index}
                    className={clsx('block', {
                      'text-brand-light': index === 0,
                      'text-brand-dark': index === 1,
                    })}
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </div>
            <p className='mt-6 xs:text-lg leading-8 text-gray-900 bg-white/50 w-full px-4'>
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>

          <div className='w-full overflow-hidden'>
            <Image
              src='/Portrait2.png'
              alt='Portrait of me'
              width={800}
              height={800}
              className='xs:w-full -ml-28 xs:ml-0 xs:h-auto min-w-[500px]'
              priority
            />
          </div>
        </div>
      </div>
      <ScrollDownButtonHero />

      <div className='w-full bg-white h-24 absolute z-40 bottom-0' />
    </>
  );
}
