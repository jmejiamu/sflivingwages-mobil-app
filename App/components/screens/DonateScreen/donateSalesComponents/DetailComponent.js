
import React from 'react';
import styles from './style/styles';
import {
    Platform,
    StyleSheet,
    Text, View,
    ScrollView,
    ActivityIndicator,
    Image,
    FlatList,
    TouchableOpacity,
    RefreshControl,
    TouchableHighlight,
    Alert,
    Dimensions,
    TextInput
} from 'react-native';
// import ImageZoom from 'react-native-image-pan-zoom';
import MyBackButton from './MyBackButton';


export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            dataSource: [],
        }
    }
    fetchData = async () => {
        const response = await fetch('http://157.245.184.202:8080/salesdetail')
        const data = await response.json()
        this.setState({
            isLoading: false,
            dataSource: data[0]
        })

    }
    componentDidMount() {
        this.fetchData();
    }
    _onRefresh() {
        this.setState({ refreshing: true })
        this.fetchData().then(() => {
            this.setState({ refreshing: false })
        })
    }

    render() {
        //const { navigation } = this.detail;
        //const isLoading = true;
        // const itemId = navigation.getParam('itemId', 'NO-ID');
        // const title = navigation.getParam('title', 'no title');
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {
            return (
                <View style={styles.detailViewStyle}>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                            />
                        }
                    >
                        {/* <Text style={styles.aboutInfoText}>{this.state.dataSource}</Text>
                        <Text style={styles.titleHeader}>Details Screen</Text>
                        <Text style={styles.item}>ItemId: </Text>
                        <Text>Title: {this.state.data}</Text> */}

                        <Text>Description:{this.state.dataSource.title} </Text>
                        <Text>Description:{this.state.dataSource.long_description} </Text>
                        <MyBackButton />
                    </ScrollView>


                </View>
            )
        }
    }
}


//export default Detail;