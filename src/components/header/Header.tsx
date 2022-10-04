import * as React from 'react';

export const Header = ({ children }: HeaderProps) => {
  return (
    <div className="sticky top-0 z-10 h-10 bg-gray-600 px-4 py-2 text-start font-bold text-gray-300">
      {children}
    </div>
  );
};

type HeaderProps = {
  children: React.ReactNode;
};
