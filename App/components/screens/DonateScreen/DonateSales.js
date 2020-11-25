//Import Necessary Packges
import React, { Component, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Platform,
  StyleSheet,
  Text, View,Button,
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
import DropDownItem from 'react-native-drop-down-item';
import DonateNav from './DonateNav';
import Modal from "react-native-modal";
import ImageZoom from 'react-native-image-pan-zoom';

import Books from './donateSalesComponents/booksComponents';
import Art from './donateSalesComponents/ArtComponent';
import Photos from './donateSalesComponents/PhotosComponent';
import Cds from './donateSalesComponents/CdsComponent';
import Dvds from './donateSalesComponents/DvdsComponent';

import styles from './donateSalesComponents/style/styles'

export default class DonateSales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      art: [],
      books: [],
      photos: [],
      cds: [],
      dvds: [],
      modalVisible: false,
      bid: ''
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  }

  componentWillMount() {
    //this.fetchData();
  }

  // fetchData = async () => {
  //   Promise.all([
  //     fetch('http://157.245.184.202:8080/pictures'),//Booksssss
  //     fetch('http://157.245.184.202:8080/arts'),
  //     fetch('http://157.245.184.202:8080/photos'),
  //     fetch('http://157.245.184.202:8080/cds'),
  //     fetch('http://157.245.184.202:8080/dvds'),
  //   ])
  //     .then(([resBooks, resArt, resPhotos, resCds, resDvds]) => Promise.all([
  //       resBooks.json(), resArt.json(), resPhotos.json(), resCds.json(), resDvds.json()
  //     ]))
  //     .then(([dataBooks, dataArt, dataPhotos, dataCds, dataDvds]) => this.setState({
  //       books: dataBooks,
  //       art: dataArt,
  //       photos: dataPhotos,
  //       cds: dataCds,
  //       dvds: dataDvds

  //     }))

  // }
  fetchArt = async () => {
    Promise.all(
      [
      fetch('http://157.245.184.202:8080/arts') ])
    .then(([ resArt])=> Promise.all([ resArt.json(), ]))
    .then(([dataArt]) => this.setState({ art: dataArt }))
  }
  fetchBook = async () => {
    Promise.all(
      [fetch('http://157.245.184.202:8080/pictures')])
     .then(([ resBooks])=> Promise.all([ resBooks.json(), ]))
     .then(([dataBooks]) => this.setState({ 
      books: dataBooks }))

  }
  fetchPhoto = async () => {
    Promise.all(
      [fetch('http://157.245.184.202:8080/photos')])
     .then(([ resPhotos])=> Promise.all([ resPhotos.json(), ]))
     .then(([dataPhotos]) => this.setState({ photos: dataPhotos }))
  }
  fetchCds = async () => {
    Promise.all(
      [fetch('http://157.245.184.202:8080/cds')])
     .then(([ resCds])=> Promise.all([ resCds.json(), ]))
     .then(([dataCds]) => this.setState({ cds: dataCds }))
  }
  fetchDvds = async () => {
    Promise.all(
      [fetch('http://157.245.184.202:8080/dvds')])
     .then(([ resDvds])=> Promise.all([ resDvds.json(), ]))
     .then(([dataDvds]) => this.setState({ dvds: dataDvds }))
  }


  handleChange = (e) => {
    this.setState({ bid: e })
  }

  _onRefresh() {
    this.setState({ refreshing: true })
    // this.fetchData().then(() => {
    //   this.setState({ refreshing: false })
    // })
    this.setState({ 
          art: [],
          books: [],
          photos: [],
          cds: [],
          dvds: [],
           refreshing: false })
    
  }


  handleScroll(event) {
    console.log(event.nativeEvent.contentOffset.y);
    if(event.nativeEvent.contentOffset.y >= 433){
      // this.fetchBook().then(()=> {
      //   this.setState({ refreshing: false })
      // })
    }
  }

  render() {
    
    return (
      <ScrollView style={{ flex: 1 } }
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
          
        }

        onScroll={this.handleScroll}
      >

        <DonateNav navigate={this.props.navigation.navigate} />


        <View style={{ justifyContent: "center", alignItems: "center", }}>
          <Text>Click on the Categories to view items </Text>
          <Text style={styles.titleHeader}  onPress={this.fetchArt} >Art</Text>
          {this.state.art.length > 0 && 
          <Art art={this.state.art} />}
         
    
          <Text style={styles.titleHeader} onPress={this.fetchBook} >Books </Text>
          {this.state.books.length > 0 && 
          <Books books={this.state.books} />}

          <Text style={styles.titleHeader} onPress={this.fetchPhoto} >Photos</Text>
          {this.state.photos.length > 0 && 
          <Photos photos={this.state.photos} />}

          <Text style={styles.titleHeader} onPress={this.fetchCds} >CDS</Text>
          {this.state.cds.length > 0 && 
          <Cds cds={this.state.cds} />}


          <Text style={styles.titleHeader} onPress={this.fetchDvds}>DVDS</Text>
          {this.state.dvds.length > 0 && 
          <Dvds dvds={this.state.dvds} />}
        </View>

      </ScrollView>
    );
  }
}
