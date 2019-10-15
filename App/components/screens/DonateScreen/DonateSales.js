//Import Necessary Packges
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import DonateNav from './DonateNav';



const IC_ARR_DOWN = require('./icons/ic_arr_down.png');
const IC_ARR_UP = require('./icons/ic_arr_up.png');

//type Props = {};
export default class DonateSales extends React.Component {
  state = {
    contents: [
      {
        title: 'CD',
        body: 'FRANCISCO HERRERA - HONOR MIGRANTE $10 \n\nCultural activist Francisco Herrera uses songs to promote social justice. He has a new album called Honor Migrante. Please support Francisco by buying his album, he is donating 30% for every CD he sells on our site to support SF Living Wage.',
      },
      {
        title: 'Books',
        body: 'GROVER LEWIS BY RODGER SCOTT $12 \n\nRodger Scott, activist with AFT Local 2121, delegate to the San Francisco Labor Council and Coordinating Committee member of the San Francisco Living Wage Coalition, is donating 100% of the proceeds from the sale of his book through our site to the Living Wage Coalition.',
      },
      {
        title: 'DVD',
        body: '6TH ANNUAL LGBT ELDER LIFE CONFERENCE $5 \n\nDAVID ROVICS IN CONCERT $5',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ alignSelf: 'stretch' }}>
        <DonateNav
					navigate={this.props.navigation.navigate}

				/>
          {
            this.state.contents
              ? this.state.contents.map((param, i) => {
                return (
                  <DropDownItem
                    key={i}
                    style={styles.dropDownItem}
                    contentVisible={false}
                    invisibleImage={IC_ARR_DOWN}
                    visibleImage={IC_ARR_UP}
                    header={
                      <View style={styles.header}>
                        <Text style={{
                          fontSize: 16,
                          color: 'blue',
                        }}>{param.title}</Text>
                      </View>
                    }
                  >
                    <Text style={[
                      styles.txt,
                      {
                        fontSize: 20,
                      },
                    ]}>
                      {param.body}
                    </Text>
                  </DropDownItem>
                );
              })
              : null
          }
          <View style={{ height: 96 }}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 0,
  },
  header: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 12,
    color: 'rgb(74,74,74)',
    marginRight: 60,
    flexWrap: 'wrap',
  },
  txt: {
    fontSize: 14,
  },
});