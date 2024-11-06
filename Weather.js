import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = { // 날씨 옵션들
        ThunderStorm: {
            iconName:"weather-lightning",
            gradient: ["#373B44", "#4286F4"]
        },
        Drizzle: {
            iconName: "weather-hail",
            gradient: ["#89F7FE", "#66a6FF"]
        },
        Rain: {
            iconName:"weather-rainy",
            gradient: ["#00C6FB", "#005BEA"]
        },
        Snow: {
            iconName:"weather-snowy",
            gradient: ["#7DE2FC", "#B9B6E5"]
        },
        Atmosphere: {
            iconName:"weather-hail",
            gradient: ["#89F7FE", "#66A6FF"]
        },
        Clear: {
            iconName:"weather-sunny",
            gradient: ["#FF7300", "#FEF253"]
        },
        Clouds: {
            iconName:"weather-cloudy",
            gradient: ["#D7D2CC", "#304352"]
        },
        Haze: {
            iconName: "weather-hail",
            gradient: ["#4DA0b0", "#D39D38"],
        },
        Mist: {
            iconName:"weather-hail",
            gradient: ["#4DA0B0", "#D39D38"]
        },
        Dust: {
            iconName:"weather-hail",
            gradient: ["#4DA0B0", "#D39D38"]
        }
    };

export default function Weather({temp, condition}) { // 날씨 불러오기
    return (
    <LinearGradient // 그래디언트
        colors={weatherOptions[condition].gradient} // condition에 따른 배경 그래이언트 변경
        style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons  // 아이콘
                size={96} 
                name={weatherOptions[condition].iconName} // condition에 따라 색상 바뀜 
                color="white"
                />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={styles.halfContainer}>
               <View> 
                    <Text style={styles.title}>Title</Text> 
                    <Text style={styles.subtitle}>SubTitle</Text>
                </View>
            </View>
        </LinearGradient>
    );
}


Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "ThunderStorm", 
        "Drizzle", 
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center", 
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        fontWeight: "600",
        color: "white",
        fontSize: 24
    }
})
