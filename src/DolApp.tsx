
import { DrawerNavigators } from './navigators/DrawerNavigators';
import 'react-native-gesture-handler';

import { ThemeContextProvider } from './context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import Orientation from 'react-native-orientation-locker';



const queryClient = new QueryClient();




export const DolApp = () => {
  useEffect( () => {
    Orientation.lockToPortrait();
  }, [] );
  
  return (
    <QueryClientProvider client={ queryClient }>
      <ThemeContextProvider>
        <DrawerNavigators />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};
