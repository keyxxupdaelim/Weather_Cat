import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = { // 날씨 옵션들
        ThunderStorm: {
            iconName:"weather-lightning",
            gradient: ["#373B44", "#4286F4"],
            title: "ThunderStorm",
            subtitle: "Watch out for thunderstorms! Take your umbrella."
        },
        Drizzle: {
            iconName: "weather-hail",
            gradient: ["#89F7FE", "#66a6FF"],
            title: "Drizzle",
            subtitle: "It's drizzling!"
        },
        Rain: {
            iconName:"weather-rainy",
            gradient: ["#00C6FB", "#005BEA"],
            title: "Rain",
            subtitle: "Be sure to bring an umbrella!"
        },
        Snow: {
            iconName:"weather-snowy",
            gradient: ["#7DE2FC", "#B9B6E5"],
            title: "Snow",
            subtitle: "Let's have a snowball fight!❄"
        },
        Atmosphere: {
            iconName:"weather-hail",
            gradient: ["#89F7FE", "#66A6FF"],
            title: "Atmosphere",
            subtitle: "The sky is blue."
        },
        Clear: {
            iconName:"weather-sunny",
            gradient: ["#FF7300", "#FEF253"],
            title: "Sunny",
            subtitle: "Let's go outside."
        },
        Clouds: {
            iconName:"weather-cloudy",
            gradient: ["#D7D2CC", "#304352"],
            title: "Clouds",
            subtitle: "The sky is dark.."
        },
        Haze: {
            iconName: "weather-hail",
            gradient: ["#4DA0b0", "#D39D38"],
            title: "Haze",
            subtitle: "Just don't go outside."
        },
        Mist: {
            iconName:"weather-hail",
            gradient: ["#4DA0B0", "#D39D38"],
            title: "Mist",
            subtitle: "The fog is too thick!"
        },
        Dust: {
            iconName:"weather-hail",
            gradient: ["#4DA0B0", "#D39D38"],
            title: "Dust",
            subtitle: "Thanks China 😂"
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
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text> 
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
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
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})
