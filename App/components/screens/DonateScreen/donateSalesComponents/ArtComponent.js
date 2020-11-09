import { Button } from 'native-base';
import React, { Component, useContext } from 'react'
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
import DetailComponent from './DetailComponent';

const Art = ({ art }) => {

  return (
    <FlatList
      horizontal={true}
      data={art}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => {
        return (
          <View style={{ flex: 1 }}>
            <View style={styles.cardImage}>

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
              <View
                style={styles.horizontalLine}
              />
              <Text style={{ marginLeft: 15 }}> {item.details} </Text>

              <InputArts artsData={item} />

              <Text style={{ marginLeft: 15 }}> {item.title} </Text>
              <Text style={{ marginLeft: 15 }}> {item.contact} </Text>

              <MyNavigationButton data={item} />

            </View>
          </View>
        )
      }}
    />
  )
}


export default Art;