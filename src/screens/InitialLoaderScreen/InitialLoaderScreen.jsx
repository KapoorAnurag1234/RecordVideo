import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

function InitialLoaderScreen() {
  const devices = useCameraDevices('wide-angle-camera');
  const navigation = useNavigation();

  useEffect(() => {
    checkPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [devices]);

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();

    const device = devices.back;
    console.log(device);

    if (
      newCameraPermission !== 'authorized' ||
      newMicrophonePermission !== 'authorized'
    ) {
      navigation.navigate('NoPermissionScreen');
    } else if (!device) {
      navigation.navigate('NoCameraScreen');
    } else {
      navigation.navigate('NoDataFound');
    }
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default InitialLoaderScreen;
