import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddRecordingButton from '../../components/AddRecordingButton/AddRecordingButton';

function NoDataFound() {
  const navigation = useNavigation();

  const moveToRecordVideoScreen = useCallback(() => {
    navigation.navigate('RecordVideo');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>No data available.</Text>
      <AddRecordingButton moveToRecordVideoScreen={moveToRecordVideoScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default NoDataFound;
