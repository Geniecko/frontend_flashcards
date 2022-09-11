import { createContext } from 'react';
import { ContextType } from './types';

export const StoreContext = createContext<ContextType | null>(null);
