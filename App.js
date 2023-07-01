import React from 'react';
import { SafeAreaView,View, StyleSheet } from 'react-native';
import GridScreen from './src/components/GridScreen';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
        <GridScreen />
        
      {/* </View> */}
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
  },
});

export default App;

