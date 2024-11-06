import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "9c321d86ce26c90d68146f106df84bc4";

export default class extends React.Component {
  state = {
     isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data: {main :{temp}, weather} } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
  this.setState({isLoading: false, condition: weather[0].main, temp})
    // console.log(data);    
  }
  getLocation = async() => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      // throw Error();
      await Location.getCurrentPositionAsync();
      const {coords: {latitude, longitude} } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      // console.log(latitude, longitude);
      
      this.setState({ isLoading: true });
      // API로 전송해 날씨를 가져옴
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");  
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />;
  }
  }
