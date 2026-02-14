import React from 'react';

export const RectangleSeparator: React.FC = () => {
  return (
    <div aria-hidden="true">
      <div className="w-full h-[62px] bg-[#df2202]" />
      <div className="h-6 md:h-8 bg-white" />
    </div>
  );
}
