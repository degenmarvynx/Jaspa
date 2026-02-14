import React from 'react';
import Image from 'next/image';

export const CertRow: React.FC = () => {
  return (
    <div className="flex items-center gap-6 text-white">
      <div className="flex items-center gap-2">
        <span className="font-medium">Licensed by CBN</span>
        <Image src="/figma/cbn.png" alt="CBN" width={24} height={24} />
      </div>
      <div className="w-px h-6 bg-white/80" />
      <div className="flex items-center gap-2">
        <span>Insured by</span>
        <span className="font-extrabold tracking-wide">NDIC</span>
      </div>
    </div>
  );
};

