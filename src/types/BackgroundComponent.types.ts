import React from 'react';

export type TBackgroundComponent = {
  src: string;
  children?: React.ReactNode;
  bgHeight?: number;
  showChildren: boolean;
};
