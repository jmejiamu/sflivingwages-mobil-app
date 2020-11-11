import React from 'react';

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

  import InputPhotos from './inputComponents/PhotoInputs';

  import styles from './style/styles';
  import MyNavigationButton from '../donateSalesComponents/MyNavigationButton';

  const Photos = ({photos}) => {
      return(
        
        <FlatList
        horizontal={true}
        data={photos}
        keyExtractor={(item, index) => index.toString()}

        renderItem={({ item }) => {
          return (
            <View style={{ flex: 1 }}>
              <View style={styles.cardImage}>
              <Text style={{textAlign: "center", fontSize:24,marginLeft: 15 }}> {item.title} </Text>
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

                <InputPhotos photoData={item}/>

                <Text style={{ marginLeft: 15 }}> {item.contact} </Text>
                <MyNavigationButton itemPath={item.path} itemTitle={item.title} 
                                      itemDescription = {item.contact} 
                                      />
              </View>
            </View>
          )
        }}
      />
      )
  }

export default Photos;