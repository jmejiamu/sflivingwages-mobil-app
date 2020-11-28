import React,{useState} from 'react';
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

                   <View style={styles.horizontalLine} />

                    <Text style={{ marginLeft: 15 }}> {item.details} </Text>

                    { item.openforbid  &&
                    <InputBooks artsData={item} /> }

                    { !item.openforbid  && 
                    <Text style={{ marginLeft: 15, fontSize:24 }} >Bid is closed</Text> }
                    

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