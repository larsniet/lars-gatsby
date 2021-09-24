import { ReactNode } from 'react';

export interface LinkCustomProps {
  className?: String;
  children: ReactNode;
  node?: ReactNode;
  url: string;
  effect?: string;
  lenght?: number;
  toggleMenu?: any;
  onClick?: any;
}