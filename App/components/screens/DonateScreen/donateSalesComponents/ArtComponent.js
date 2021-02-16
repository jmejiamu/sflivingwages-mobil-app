import { Button } from 'native-base';
import React, { Component, useContext , useEffect, useState} from 'react'
import MyBackButton from '../donateSalesComponents/MyNavigationButton';
import {
  Platform,
  StyleSheet,
  Text, View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  TouchableHighlight,
  Alert,
  Dimensions,
  TextInput,
} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

import InputArts from './inputComponents/ArtInputs';
import styles from './style/styles'
import MyNavigationButton from '../donateSalesComponents/MyNavigationButton';

const Art = ({ art }) => {
  const calculateTimeLeft = (value) => {
    // Set bid end day here
    let year = new Date().getFullYear();
    //let endDate = art[0].closeDate;
    let endDate = value
    //Date format: 2021-06-01T12:00:00.000Z
    let difference = +new Date(endDate) - +new Date();
    
    
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return timeLeft;
  }
   
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer=setTimeout(() => {
      setTimeLeft(calculateTimeLeft(art[0].closeDate));
    }, 1000); 



    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
     <Text>
         {timeLeft[interval]} {interval}{" "}
     </Text>
    );
  });

  return (
    <FlatList
      horizontal={true}
      data={art}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <View style={{ flex: 1 }}>
            <View style={styles.cardImage}>
              <Text style={{ textAlign: "center", fontSize: 16, marginLeft: 15 }}> {item.title} </Text>
               
              <TouchableHighlight>
                <ImageZoom
                  cropWidth={300}
                  cropHeight={400}
                  imageWidth={250}
                  imageHeight={350}>
                  <Image
                    style={styles.imageStyle}
                    source={{ uri: item.path }}
                  />
                </ImageZoom>
              </TouchableHighlight>
              
              <Text>
                {() => calculateTimeLeft(item.closeDate)}
                {timerComponents.length ? timerComponents : "Bid is closed" }
                {timerComponents.length ? item.openforbid = "left" : item.openforbid = null }
            </Text>
              <View
                style={styles.horizontalLine}
              />
              <Text style={{ marginLeft: 15 }}> {item.details} </Text>

             { item.openforbid  &&
              <InputArts artsData={item} /> }
            
              <Text style={{ marginLeft: 15 }}> {item.contact} </Text>
              { (item.long_description || item.author_image) &&
              <MyNavigationButton author={item.author_image} 
              description={item.long_description} title={item.title} /> }

            </View>
          </View>
        )
      }}
    />
  )
}



export default Art;