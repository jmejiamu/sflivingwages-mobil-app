//Import Necessary Packges
import React, { Component, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Platform,
  StyleSheet,
  Text, View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  // Modal,
  TouchableHighlight,
  Alert
} from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import DonateNav from './DonateNav';
import Modal from "react-native-modal"


const IC_ARR_DOWN = require('./icons/ic_arr_down.png');
const IC_ARR_UP = require('./icons/ic_arr_up.png');

//type Props = {};

export default class DonateSales extends React.Component {
  state = {
    // contents: [
    //   {
    //     title: 'CD',
    //     body: 'FRANCISCO HERRERA - HONOR MIGRANTE $10 \n\nCultural activist Francisco Herrera uses songs to promote social justice. He has a new album called Honor Migrante. Please support Francisco by buying his album, he is donating 30% for every CD he sells on our site to support SF Living Wage.',
    //   },
    //   {
    //     title: 'Books',
    //     body: 'GROVER LEWIS BY RODGER SCOTT $12 \n\nRodger Scott, activist with AFT Local 2121, delegate to the San Francisco Labor Council and Coordinating Committee member of the San Francisco Living Wage Coalition, is donating 100% of the proceeds from the sale of his book through our site to the Living Wage Coalition.',
    //   },
    //   {
    //     title: 'DVD',
    //     body: '6TH ANNUAL LGBT ELDER LIFE CONFERENCE $5 \n\nDAVID ROVICS IN CONCERT $5',
    //   },
    // ],
    books: [],
    art: [],
    photos: [],
    cds: [],
    dvds: [],
    modalVisible: false,
    // modalOpen: false,
    // setModalOpen:false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    Promise.all([
      fetch('http://157.245.229.180:8080/pictures'),//Booksssss
      fetch('http://157.245.229.180:8080/arts'),
      fetch('http://157.245.229.180:8080/photos'),
      fetch('http://157.245.229.180:8080/cds'),
      fetch('http://157.245.229.180:8080/dvds'),
    ])
      .then(([resBooks, resArt, resPhotos, resCds, resDvds]) => Promise.all([
        resBooks.json(), resArt.json(), resPhotos.json(), resCds.json(), resDvds.json()
      ]))
      .then(([dataBooks, dataArt, dataPhotos, dataCds, dataDvds]) => this.setState({
        books: dataBooks,
        art: dataArt,
        photos: dataPhotos,
        cds: dataCds,
        dvds: dataDvds
      }))
  }


  _onRefresh() {
    this.setState({ refreshing: true })
    this.fetchData().then(() => {
      this.setState({ refreshing: false })
    })
  }

  render() {
    // const [modalOpen, setModalOpen] = useState(false);
    // return (
    //   <View style={styles.container}>
    //     <ScrollView style={{ alignSelf: 'stretch' }}>
    //     <DonateNav
    // 			navigate={this.props.navigation.navigate}
    // 		/> sfjdjfdshfsdifjsdjfdskfj
    //       {
    //         this.state.contents
    //           ? this.state.contents.map((param, i) => {
    //             return (
    //               <DropDownItem
    //                 key={i}
    //                 style={styles.dropDownItem}
    //                 contentVisible={false}
    //                 invisibleImage={IC_ARR_DOWN}
    //                 visibleImage={IC_ARR_UP}
    //                 header={
    //                   <View style={styles.header}>
    //                     <Text style={{
    //                       fontSize: 20,
    //                       color: '#0188dc',
    //                     }}>{param.title}</Text>
    //                   </View>
    //                 }
    //               >
    //                 <Text style={[
    //                   styles.txt,
    //                   {
    //                     fontSize: 16,
    //                     color: '#100c08',
    //                     paddingHorizontal: 12,
    //                   },
    //                 ]}>
    //                   {param.body}
    //                 </Text>
    //               </DropDownItem>
    //             );
    //           })
    //           : null
    //       }
    //       <View style={{ height: 96 }}/>
    //     </ScrollView>
    //   </View>
    // );
    return (
      <ScrollView style={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >

        <DonateNav navigate={this.props.navigation.navigate} />


        <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: '#C0C0C0' }}>

          <Text style={styles.titleHeader}>Books</Text>

          <FlatList
            horizontal={true}
            data={this.state.books}
            keyExtractor={(item, index) => index.toString()}

            renderItem={({ item }) => {

              return (
                <View style={{ flex: 1 }}>

                  <TouchableOpacity onPress={() => {
                    this.setModalVisible(true)

                  }}>
                    <Image
                      style={styles.imageStyle}
                      source={{ uri: item.path }}
                    />
                  </TouchableOpacity>

                  <Text style={{ marginLeft: 15 }}> {item.details} </Text>
                  <Text style={{ marginLeft: 15 }}> {item.title} </Text>
                  <Text style={{ marginLeft: 15 }}> {item.contact} </Text>

                </View>
              )
            }}
          />
          <View style={{ flex: 1 }}>

            {/* <TouchableOpacity onPress={() => {
              this.setModalVisible(true)

            }}>
              <Image
                style={styles.imageStyle}
                source={{ uri: item.path }}
              />
            </TouchableOpacity> */}

            <Modal



              isVisible={this.state.modalVisible}
              // backdropColor="#B4B3DB"
              // backdropOpacity={0.8}
              animationIn="zoomInDown"
              animationOut="zoomOutUp"
              animationInTiming={600}
              animationOutTiming={600}
              backdropTransitionInTiming={600}
              backdropTransitionOutTiming={600}
            >

              <View style={{ backgroundColor: '#ffffff', margin: 10, padding: 20, borderRadius: 10, flex: 1 }}>
                <MaterialIcons
                  name={"close"}''
                  size={24}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                />
                <Image
                  style={{
                    width: 150,
                    height: 150,
                    marginLeft: 15,
                    marginRight: 15,
                    borderRadius: 4,
                  }}
                  source={{ uri: "http://157.245.229.180/images/Books/pic1.jpg" }}
                />
                {/* <Text style={{ marginLeft: 15 }}> {item.details} </Text>
                <Text style={{ marginLeft: 15 }}> {item.title} </Text>
                <Text style={{ marginLeft: 15 }}> {item.contact} </Text> */}



              </View>

            </Modal>
          </View>

          <Text style={styles.titleHeader}>Art</Text>

          <FlatList
            horizontal={true}
            data={this.state.art}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View >
                  <View style={{
                    backgroundColor: '#ffffff',
                    margin: 10,
                    padding: 20,
                    borderRadius: 10,
                    flex: 1,
                    shadowColor: "#000",
                    shadowOffset: {
                      width: 0,
                      height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,
                  }}>

                    <TouchableOpacity>
                      <Image
                        style={styles.imageStyle}
                        source={{ uri: item.path }}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        marginTop: 10,
                        marginBottom: 10,
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,

                      }}
                    />
                    <Text style={{ marginLeft: 15 }}> {item.details} </Text>
                    <Text style={{ marginLeft: 15 }}> {item.title} </Text>
                    <Text style={{ marginLeft: 15 }}> {item.contact} </Text>

                  </View>
                </View>
              )
            }}
          />

          <Text style={styles.titleHeader}>Photos</Text>

          <FlatList
            horizontal={true}
            data={this.state.photos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View style={{ flex: 1 }}>
                  <View style={styles.cardImage}>
                    <TouchableOpacity>
                      <Image
                        style={styles.imageStyle}
                        source={{ uri: item.path }}
                      />
                    </TouchableOpacity>
                    
                    <View style={styles.horizontalLine} />

                    <Text style={{ marginLeft: 15 }}> {item.details} </Text>
                    <Text style={{ marginLeft: 15 }}> {item.title} </Text>
                    <Text style={{ marginLeft: 15 }}> {item.contact} </Text>
                  </View>
                </View>
              )
            }}
          />

          <Text style={styles.titleHeader}>CDS</Text>
          <FlatList
            horizontal={true}
            data={this.state.cds}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View>

                  <TouchableOpacity>
                    <Image
                      style={styles.imageStyle}
                      source={{ uri: item.path }}
                    />
                  </TouchableOpacity>

                  <Text style={{ marginLeft: 15 }}> {item.details} </Text>
                  <Text style={{ marginLeft: 15 }}> {item.title} </Text>
                  <Text style={{ marginLeft: 15 }}> {item.contact} </Text>

                </View>
              )
            }}
          />

          <Text style={styles.titleHeader}>DVDS</Text>
          <FlatList
            horizontal={true}
            data={this.state.dvds}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View>
                  <TouchableOpacity>
                    <Image
                      style={styles.imageStyle}
                      source={{ uri: item.path }}
                    />
                  </TouchableOpacity>
                  <Text style={{ marginLeft: 15 }}> {item.details} </Text>
                  <Text style={{ marginLeft: 15 }}> {item.title} </Text>
                  <Text style={{ marginLeft: 15 }}> {item.contact} </Text>

                </View>
              )
            }}
          />
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingTop: 0,
  },
  // containerT: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  header: {
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 20,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },

  txt: {
    //fontSize: 14,
  },
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
    width: 200,
    height: 300,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 4,
  },
  cardImage: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 20,
    borderRadius: 10,
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
  }
});