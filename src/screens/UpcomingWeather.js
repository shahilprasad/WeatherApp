import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from 'react-native'
import ListItem from '../components/Listtem'

const DATA = [
    {
        dt_txt: '2024-04-01 12:00:00',
        main: {
            temp_min: 20,
            temp_max: 30
        },
        weather: [
            {
                main: 'Clear'
            }
        ]
    },
    {
        dt_txt: '2024-04-02 12:00:00',
        main: {
            temp_min: 17,
            temp_max: 26
        },
        weather: [
            {
                main: 'Rain'
            }
        ]
    },
    {
        dt_txt: '2024-04-03 12:00:00',
        main: {
            temp_min: 19,
            temp_max: 25
        },
        weather: [
            {
                main: 'Clouds'
            }
        ]
    }
]

const UpcomingWeather = () => {
    const renderItem = ({ item }) => {
        <ListItem 
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max} />
    }
    const { container, image } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
                style={image}
                source={require('../../assets/upcoming-background.jpg')}
            >
                <Text>UpcomingWeather</Text>
                <FlatList 
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt} 
                />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'orange'
    },
    image: {
        flex: 1
    }
})

export default UpcomingWeather