import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useVideoDataContext} from '../../../VideoDataContextProvider';
import AddRecordingButton from '../../components/AddRecordingButton/AddRecordingButton';

function VideoList() {
  const {videoData} = useVideoDataContext();
  const navigation = useNavigation();

  const moveToVideoShowScreen = useCallback(
    videoPath => {
      navigation.navigate('ShowVideo', {
        videoPath,
      });
    },
    [navigation],
  );

  const moveToRecordVideoScreen = useCallback(
    videoPath => {
      navigation.navigate('RecordVideo', {
        videoPath,
      });
    },
    [navigation],
  );

  const renderItem = ({item, index}) => (
    <TouchableOpacity
      style={styles.videoItem}
      key={index}
      onPress={() => moveToVideoShowScreen(item.path)}>
      <Text style={styles.videoTitle}>Video {index + 1}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Video List</Text>
      <FlatList data={videoData} renderItem={renderItem} />
      <AddRecordingButton moveToRecordVideoScreen={moveToRecordVideoScreen} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  videoItem: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VideoList;
