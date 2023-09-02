import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useVideoDataContext} from '../../../VideoDataContextProvider';

function RecordVideo() {
  const [isRecording, setIsRecording] = useState(false);
  const [deviceData, setDeviceData] = useState(undefined);
  const camera = useRef(null);
  const devices = useCameraDevices('wide-angle-camera');
  const {setVideoData} = useVideoDataContext();
  const navigation = useNavigation();

  useEffect(() => {
    setDeviceData(devices.back);
  }, [devices]);

  const startRecording = () => {
    setIsRecording(true);
    camera.current.startRecording({
      flash: 'on',
      onRecordingFinished: video => {
        setVideoData(prev => [...prev, video]);
        setIsRecording(false);

        navigation.navigate('VideoList');
      },
      onRecordingError: error => console.error('error', error),
    });
  };

  const stopRecording = async () => {
    await camera.current.stopRecording();
  };

  return (
    <SafeAreaView style={styles.container}>
      {deviceData && (
        <View style={styles.camera}>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={deviceData}
            isActive={true}
            video={true}
            audio={true}
            photo={true}
          />
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={styles.button}
              onPress={isRecording ? stopRecording : startRecording}>
              <Text style={styles.buttonText}>
                {isRecording ? 'Stop' : 'Record'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 50,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  buttonText: {color: 'white', fontSize: 18},
});

export default RecordVideo;
