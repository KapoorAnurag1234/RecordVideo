import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './navigation/Root.Navigator';
import {VideoDataContextProvider} from './VideoDataContextProvider';

function App() {
  return (
    <NavigationContainer>
      <VideoDataContextProvider>
        <RootNavigator />
      </VideoDataContextProvider>
    </NavigationContainer>
  );
}

export default App;
