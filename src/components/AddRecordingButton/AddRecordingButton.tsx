import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

function AddRecordingButton({
  moveToRecordVideoScreen,
}: {
  moveToRecordVideoScreen: () => void;
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={moveToRecordVideoScreen}>
        <Text style={styles.buttonText}>Add Recording</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },

  addButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AddRecordingButton;
