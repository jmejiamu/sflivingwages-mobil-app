//Import Necessary Packges
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text, View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import DonateNav from './DonateNav';



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
    photos: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    Promise.all([
      fetch('http://157.245.229.180:8080/pictures'),//Books
      fetch('http://157.245.229.180:8080/arts'),
      fetch('http://157.245.229.180:8080/photos')
    ])
      .then(([resBooks, resArt, resPhotos]) => Promise.all([resBooks.json(), resArt.json(), resPhotos.json()]))
      .then(([dataBooks, dataArt, dataPhotos]) => this.setState({
        books: dataBooks,
        art: dataArt,
        photos: dataPhotos
      }))
  }


  render() {
    // return (
    //   <View style={styles.container}>
    //     <ScrollView style={{ alignSelf: 'stretch' }}>
    //     <DonateNav
    // 			navigate={this.props.navigation.navigate}
    // 		/>
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
      <ScrollView style={{ flex: 1 }}>

        <DonateNav navigate={this.props.navigation.navigate} />

        <View style={{ justifyContent: "center", alignItems: "center" }}>

          <Text>Books</Text>
          
          <FlatList
            horizontal={true}
            data={this.state.books}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View style={{ flex: 1 }}>

                  <TouchableOpacity>
                    <Image
                      style={{ width: 155, height: 150, marginLeft: 15, marginRight: 15 }}
                      source={{ uri: item.path }}
                    />
                  </TouchableOpacity>

                  <Text style={{ marginLeft: 15 }}> {item.details} </Text>
                  <Text style={{ marginLeft: 15 }}> {item.title} </Text>

                </View>
              )
            }}
          />

          <Text>Art</Text>

          <FlatList
            horizontal={true}
            data={this.state.art}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View style={{ flex: 1 }}>

                  <TouchableOpacity>
                    <Image
                      style={{ width: 155, height: 150, marginLeft: 15, marginRight: 15 }}
                      source={{ uri: item.path }}
                    />
                  </TouchableOpacity>

                  <Text style={{ marginLeft: 15 }}> {item.details} </Text>
                  <Text style={{ marginLeft: 15 }}> {item.title} </Text>

                </View>
              )
            }}
          />

          <Text>Photos</Text>

          <FlatList
            horizontal={true}
            data={this.state.photos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => {
              return (
                <View style={{ flex: 1 }}>

                  <TouchableOpacity>
                    <Image
                      style={{ width: 155, height: 150, marginLeft: 15, marginRight: 15 }}
                      source={{ uri: item.path }}
                    />
                  </TouchableOpacity>

                  <Text style={{ marginLeft: 15 }}> {item.details} </Text>
                  <Text style={{ marginLeft: 15 }}> {item.title} </Text>

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
});