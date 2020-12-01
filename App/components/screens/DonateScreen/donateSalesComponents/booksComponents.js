import React,{useState,useEffect} from 'react';
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
    TextInput
  } from 'react-native';
  import ImageZoom from 'react-native-image-pan-zoom';

  import InputBooks from './inputComponents/BooksInput';

  import styles from './style/styles'
  import MyNavigationButton from '../donateSalesComponents/MyNavigationButton';
  
const Books = ({books}) => { 
  const calculateTimeLeft = () => {
    // Set bid end day here
    let year = new Date().getFullYear();
    let endDate = books[0].closeDate;
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
      setTimeLeft(calculateTimeLeft());
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
    
    return(
        
        <FlatList
            horizontal={true}
            data={books}
            keyExtractor={(item, index) => index.toString()}

            renderItem={({ item }) => {
              return (
                <View style={{ flex: 1 }}>
                  <View style={styles.cardImage}>
                  <Text style={{textAlign: "center", fontSize:24, marginLeft: 15 }}> {item.title} </Text>
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
                {timerComponents.length ? timerComponents : "Bid is closed!"}
            </Text>

                   <View style={styles.horizontalLine} />

                    <Text style={{ marginLeft: 15 }}> {item.details} </Text>

                    { item.openforbid  &&
                    <InputBooks booksData={item} /> }

                   <Text style={{ marginLeft: 15 }}> {item.contact} </Text>
                   { (item.long_description && item.author_image) &&
                   <MyNavigationButton author={item.author_image} description={item.long_description}
                      title={item.title}
                    />}
                  </View>
                </View>
              )
            }}
          />
    
    );
}

export default Books;