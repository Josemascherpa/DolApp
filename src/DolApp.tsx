
import { DrawerNavigators } from './navigators/DrawerNavigators';
import 'react-native-gesture-handler';

import { ThemeContextProvider } from './context/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StackNavigators } from './navigators/StackNavigators';


const queryClient = new QueryClient();

export const DolApp = () => {
  return (
    <QueryClientProvider client={ queryClient }>
      <ThemeContextProvider>
        <DrawerNavigators />        
      </ThemeContextProvider>
    </QueryClientProvider>

  );
};