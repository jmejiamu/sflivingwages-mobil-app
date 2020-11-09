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

  import styles from './style/styles';

  import InputCds from './inputComponents/CdsInputs';
  import MyNavigationButton from '../donateSalesComponents/MyNavigationButton';

  const Cds = ({cds}) => {
      return(
        <FlatList
        horizontal={true}
        data={cds}
        keyExtractor={(item, index) => index.toString()}

        renderItem={({ item }) => {
          return (
            <View style={{flex:1}}>
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

              <View style={styles.horizontalLine} />

              <Text style={{ marginLeft: 15 }}> {item.details} </Text>

              <InputCds cdsData={item}/>

              <Text style={{ marginLeft: 15 }}> {item.title} </Text>
              <Text style={{ marginLeft: 15 }}> {item.contact} </Text>
              <MyNavigationButton itemPath={item.path}  itemTitle={item.title} 
                                      itemDescription = {item.contact} 
                                      />
              </View>
            </View>
          )
        }}
      />
      );
  }


  export default Cds;