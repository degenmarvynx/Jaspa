"use client";
import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface Props extends Omit<ImageProps, 'onError'> {
  fallbackClassName?: string;
}

export const ImageWithFallback: React.FC<Props> = ({ fallbackClassName = '', ...props }) => {
  const [err, setErr] = useState(false);
  if (err) {
    return <div className={fallbackClassName} />;
  }
  return <Image {...props} onError={() => setErr(true)} />;
};

