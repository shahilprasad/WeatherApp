import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Curremt Weather</Text>
        <Text style={styles.temp}>27</Text>
        <Text style={styles.feels}>Feels like 25</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 19 </Text>
          <Text style={styles.highLow}>Low:30</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's Sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 30
  },
  highLow: {
    color: 'black',
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default App