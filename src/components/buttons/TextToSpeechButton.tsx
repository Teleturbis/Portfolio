import React, { useState } from 'react';
import { PlayIcon, StopIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

type Props = {
  text: string;
  variant?: 'base' | 'small';
  className?: string;
};

export default function TextToSpeechButton({
  text,
  className,
  variant = 'base',
}: Props) {
  const [speechRunning, setSpeechRunning] = useState<boolean>(false);

  const run = () => {
    if (speechRunning) {
      window.speechSynthesis.cancel();
      setSpeechRunning(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
    setSpeechRunning(true);

    utterance.onend = () => {
      setSpeechRunning(false);
    };

    utterance.onerror = () => {
      setSpeechRunning(false);
    };
  };

  return (
    <button
      className={clsx(
        className,
        'inline-flex justify-between items-center border border-transparent font-medium rounded-md shadow-sm text-white bg-brand-light hover:bg-brand-mint-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-mint-dark',
        {
          'px-6 py-3 text-base': variant === 'base',
          'px-2.5 py-1.5 text-sm': variant === 'small',
        }
      )}
      onClick={run}
    >
      Text vorlesen
      {speechRunning ? (
        <StopIcon className='ml-2 -mr-0.5 h-5 w-5' />
      ) : (
        <PlayIcon className='ml-2 -mr-0.5 h-5 w-5' />
      )}
    </button>
  );
}
