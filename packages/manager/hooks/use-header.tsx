import { createContext } from 'react';

interface IHeaderContext {
  currentPath?: string;
}

export const HeaderContext = createContext<IHeaderContext>({});
