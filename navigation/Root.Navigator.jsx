import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import VideoList from '../src/screens/VideoList/VideoList';
import ShowVideo from '../src/screens/ShowVideo/ShowVideo';
import InitialLoaderScreen from '../src/screens/InitialLoaderScreen/InitialLoaderScreen';
import RecordVideo from '../src/screens/RecordVideo/RecordVideo';
import NoCameraScreen from '../src/screens/NoCameraScreen/NoCameraScreen';
import NoPermissionScreen from '../src/screens/NoPermissionScreen/NoPermissionScreen';
import NoDataFound from '../src/screens/NoDataFound/NoDataFound';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="InitialLoaderScreen"
        component={InitialLoaderScreen}
      />
      <Stack.Screen name="VideoList" component={VideoList} />
      <Stack.Screen name="NoCameraScreen" component={NoCameraScreen} />
      <Stack.Screen name="NoPermissionScreen" component={NoPermissionScreen} />
      <Stack.Screen name="NoDataFound" component={NoDataFound} />
      <Stack.Screen name="RecordVideo" component={RecordVideo} />
      <Stack.Screen name="ShowVideo" component={ShowVideo} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
