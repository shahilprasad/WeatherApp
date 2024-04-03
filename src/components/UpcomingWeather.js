import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const DATA = [
    {},
    {},
    {}
]

const Item = (props) => {
    const { dt_txt, min, max, condition } = props
    return (
        <View>
            <Feather name={condition} size={50} color="white" />
            <Text>{dt_txt}</Text>
            <Text>{min}</Text>
            <Text>{max}</Text>
        </View>
    )
}

const UpcomingWeather = () => {
    return (
        <SafeAreaView styles={styles.cotnatiner}>
            <Text>UpcomingWeather</Text>
            <FlatList>
                data={}
                renderItem={}
            </FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cotnatiner: {
        flex: 1
    }
})

export default UpcomingWeather