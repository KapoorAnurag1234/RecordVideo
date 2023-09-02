import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

//TODO: Permission Handling is not completed

function NoPermissionScreen() {
  return (
    <View style={styles.container}>
      <Text>
        You have not given permission so you need to uninstall the App to grant
        permission again
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});

export default NoPermissionScreen;
