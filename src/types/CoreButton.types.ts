import { LucideIcon } from 'lucide-react';
import React from 'react';
export type TCoreButton = {
  text: string;
  type?: 'cta';
  url?: string;
  icon?: LucideIcon | React.ReactNode;
};
