//import the file necessities

import React from "react";
import {View, Text, TouchableOpacity, Modal, WebView, Button, StyleSheet} from "react-native";

export default class App extends React.Component {
    state = {
        showModal: false,
        status: "Pending"
    };
    handleResponse = data => {
        if (data.title === "success") {
            this.setState({ showModal: false, status: "Complete" });
        } else if (data.title === "cancel") {
            this.setState({ showModal: false, status: "Cancelled" });
        } else {
            return;
        }
    };
    render() {
        return (
            //view
            <View>
                <Modal
                    visible={this.state.showModal}
                    onRequestClose={() => this.setState({ showModal: false })}
                >
                    <WebView useWebKit={true}
                        source={{ uri: "http://192.168.0.7:3000"}}
                         onNavigationStateChange={data =>
                            this.handleResponse(data)
                        }
                        injectedJavaScript={`document.f1.submit()`}
                    />

                </Modal>
                <TouchableOpacity
                    style={{ width: 300, height: 100 }}
                    onPress={() => this.setState({ showModal: true })}
                >
                   <Button title={'Direct to Paypal Website >>'}
                    />
                </TouchableOpacity>
                <Text style={thestyles.activeTitle}>Payment Status: {this.state.status}</Text>
            </View>
        );
    }
}

//The style sheets

const thestyles = StyleSheet.create({
    container: {
        backgroundColor: '#dba7d8',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
    },
    activeTitle: {
        textAlign: 'center',
        color: 'red',
    },
});