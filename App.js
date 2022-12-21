import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style ={styles.container}> 
      {/* Today's Tasks */}
      <View styles= {styles.tasksWrapper}>
        <Text styles= {styles.sectionTitle}> Today's Tasks </Text>
        <View styles = {styles.items}> 
         {/* This is where the tasks will go! */}

        </View>

      </View>
       

      </View>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
tasksWrapper: {
  paddingTop: 80, 
  paddingHorizontal: 20,
},
sectionTitle:{
  fontSize: 24,
  fontWeight: 'bold'
},
items:{},
});
