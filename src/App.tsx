import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import RootDrawer from '@navigators/RootDrawer';

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootDrawer />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
