//Import Necessary Packages
import React from 'react';
import {View, Text, ScrollView, Image, Linking, StyleSheet} from 'react-native';
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

            var updatedTitle = (t.title.rendered).replace('&#8211; ','');
            var updatedDate = (t.date).split('T')[0];
            if (!t.guid.rendered.endsWith(".pdf")) {
                return (
                    <>
                    <Text key={index} onPress={() => Linking.openURL(t.link)} style={styles.textStyle}>
                        Title:
                        {
                            " " + updatedTitle + "\n"
                        }
                        <Text key={index} style={styles.textStyle}>
                            Date Published:
                            {
                                " " + updatedDate
                            }


                        </Text>
                    </Text>
                        <Image source={{uri: t.guid.rendered}} style={styles.imageStyle}/>
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

                    {/* <Text> */}
                        {data}
                    {/* </Text> */}

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
        padding: 50,
        alignSelf: 'flex-start'
    },
    imageStyle: {
        width: '100%',
        // Without height undefined it won't work
        height: 300,
        // figure out your image aspect ratio
        // aspectRatio: 135 / 76,
    },
});