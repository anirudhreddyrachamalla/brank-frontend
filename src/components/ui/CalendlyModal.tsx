'use client';

import React, { useEffect, useState } from 'react';
import { PopupModal } from 'react-calendly';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
}

const CalendlyModal: React.FC<CalendlyModalProps> = ({
  isOpen,
  onClose,
  url = 'https://calendly.com/anirudhreddy/30min',
}) => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      setRootElement(document.body);
    }
  }, []);

  if (!rootElement) {
    return null;
  }

  return (
    <PopupModal
      url={url}
      onModalClose={onClose}
      open={isOpen}
      rootElement={rootElement}
    />
  );
};

export { CalendlyModal };

