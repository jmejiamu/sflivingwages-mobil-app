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

  const Cds = (props) => {
      return(
        <FlatList
        horizontal={true}
        data={props.cds}
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
              <Text style={{ marginLeft: 15 }}> {item.title} </Text>
              <Text style={{ marginLeft: 15 }}> {item.contact} </Text>
              </View>
            </View>
          )
        }}
      />
      );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      paddingTop: 0,
    },
    header: {
      width: '100%',
      paddingVertical: 0,
      paddingHorizontal: 20,
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    // txt: {
    //   fontSize: 14,
    //   color: '#ffffff',
    //   marginLeft: 15,
      
    // },
    dropDownItem: {
      marginTop: 30,
    },
    titleHeader: {
      fontSize: 24,
      color: '#c91a1a',
      padding: 10,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      paddingBottom: 20,
      paddingTop: 20,
    },
    imageStyle: {
      width: 250,
      height: 350,
      marginLeft: 15,
      marginRight: 15,
      // borderRadius: 4,
    },
    cardImage: {
      // backgroundColor: 'rgba(52, 52, 52, 0.8)',
      backgroundColor:'white',
      margin: 10,
      padding: 20,
      // borderRadius: 10,
      flex: 1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
    horizontalLine: {
      marginTop: 10,
      marginBottom: 10,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },
    submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
    color: 'white'
  }
  });

  export default Cds;