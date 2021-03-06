
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Bookmark Screen</Text>
      <Button
        title="Click here"
        onPress={() => alert('Button clicked!')}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
