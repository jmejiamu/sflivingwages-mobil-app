//Import Necessary Packages
import React from 'react';
import {View, Text, ScrollView, Image, Linking, StyleSheet} from 'react-native';
import {Card, CardItem} from 'react-native-elements';
import HomeNavComponent from './HomeNavComponent';

export default class MediaScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }

    componentDidMount() {
        fetch('https://www.livingwage-sf.org/wp-json/wp/v2/media', {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    dataSource: json
                });
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {

        const data = this.state.dataSource.map((t, index) => {

            var updatedTitle = (t.title.rendered).replace('&#8211; ', '');
            var updatedDate = (t.date).split('T')[0];
            if (!t.guid.rendered.endsWith(".pdf")) {
                return (


                    <>
                        <Card
                            title={updatedTitle} style={styles.featuredTitleStyle}
                        >
                            <Image source={{uri: t.guid.rendered}} style={styles.imageStyle}/>
                            <Text key={index} onPress={() => Linking.openURL(t.link)} style={styles.textStyle}>

                                <Text style={styles.noteStyle}>
                                    Date Published:
                                    {
                                        " " + updatedDate
                                    }


                                </Text>

                            </Text>

                        </Card>
                    </>
                )
            }
        });

        return (
            <ScrollView style={{flex: 1}}>
                {/*Home Navigation Bar*/}
                <HomeNavComponent
                    navigate={this.props.navigation.navigate}

                />
                {/*Page Contents*/}
                <View>
                    <Text style={{textAlign: 'center'}}> Media</Text>

                    {data}


                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        marginLeft: 'auto',
        color: 'maroon',
        fontSize: 15,
        padding: 10,
        alignSelf: 'flex-start'
    },
    imageStyle: {
        width: '100%',
        // Without height undefined it won't work
        height: 300,
        // figure out your image aspect ratio
        // aspectRatio: 135 / 76,
    },
    featuredTitleStyle: {
        marginHorizontal: 5,
        textShadowColor: '#00000f',
        textShadowOffset: {width: 3, height: 3},
        textShadowRadius: 3
    },
    noteStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 10
    },


});
