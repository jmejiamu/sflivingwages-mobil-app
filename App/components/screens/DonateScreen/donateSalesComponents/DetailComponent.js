
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

//import ImageZoom from 'react-native-image-pan-zoom';
import MyBackButton from './MyBackButton';

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            hasDetail: false,
            dataSource: [],
            title: props.navigation.getParam('title', 'no title'),
        }
    }
    fetchData = async () => {
        const response = await fetch('http://157.245.184.202:8080/salesdetail')
        const data = await response.json()
        this.setState({
            isLoading: false,
            dataSource: data[1]
        })
        // console.log("---" + this.state.title);
        data.map(data => {

            if (this.state.title === data.title) {
                console.log("|||" + data.title);
                this.setState({
                    //isLoading: false,
                    hasDetail: true,
                    dataSource: data
                })
            }

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
        // const route = useRoute();
        // const { navigation } = this.props;
        // const title = navigation.getParam('title', 'no title');
        // const description = navigation.getParam('description', 'no description');
        // const path = navigation.getParam("path", "no path");
        // const AuthorImageWrapper = ({ condition, wrapper, children }) =>
        //     condition ? wrapper(children) : children;
        // console.log('>>>', this.props.navigation.state.params);
        const { image, bio, title } = this.props.navigation.state.params;
        const resImage = JSON.stringify(image);
        const resBio = JSON.stringify(bio)
        const resTitle = JSON.stringify(title)
        if (this.state.isLoading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator />
                </View>
            )
        } else {
            return (
                <View style={styles.cardImage}>
                    <ScrollView
                        refreshControl={
                            <RefreshControl
                                refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                            />
                        }
                    >
                        <Text style={styles.titleHeader} >{JSON.parse(resTitle)}</Text>
                        <Image style={{ height: 250, width: 250 }} source={{ uri: JSON.parse(resImage) }} />
                        <Text>{JSON.parse(resBio)}</Text>
                        {/* <Text style={styles.titleHeader}>{title}</Text>
                    <Image  style={styles.detailImage}
                            source={{ uri: path } }
                            alt={JSON.stringify(title)}
                    />
                      
                       
                       <Text style={styles.descriptionText}> {description}
                       </Text>	
                       <AuthorImageWrapper condition={this.state.dataSource.authorImage} wrapper={children =>
                         <Image style={styles.authorImage}
                         source={{ uri: this.state.dataSource.authorImage}}>{children} /</Image>}> 
                            
                            <Text></Text>
                       </AuthorImageWrapper>

                        
                        <Text style={styles.detailInfoText} >
                            { this.state.hasDetail && this.state.dataSource.long_description } </Text> */}
                        <MyBackButton />
                    </ScrollView>


                </View>
            )
        }
    }
}

//export default Detail;