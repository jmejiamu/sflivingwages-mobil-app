//import the file necessities

import React from "react";
import { View, Text, TouchableOpacity, Modal, WebView, Button } from "react-native";

export default class App extends React.Component {
    
    render() {
        return (
            <View style={{ flex: 1, marginTop: 100 }}>
                <Modal
                    visible={this.state.showModal}
                    onRequestClose={() => this.setState({ showModal: false })}
                >
                    <WebView
                        source={{ uri: "http://localhost:3000" }}
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
                    <Text>Pay with Paypal</Text>

                </TouchableOpacity>
                <Text>Payment Status: {this.state.status}</Text>
                
                <View style={{ height: 1300 }}>
                    <WebView
                        style={{ margin: 10, flex: 1 }}

                        source={{
                            html:
                                '<form action="https://www.paypal.com/cgi-bin/webscr" method="post"> &lt;!&ndash; Identify your business so that you can collect the payments. &ndash;&gt;<input type="hidden" name="business"value="sflivingwage@riseup.net">&lt;!&ndash; Specify a Donate button. &ndash;&gt;<input type="hidden" name="cmd" value="_donations">&lt;!&ndash; Specify details about the contribution &ndash;&gt;<input type="hidden" name="item_name" value="Donation to San Francisco Living Wage Coalition"><input type="hidden" name="currency_code" value="USD">&lt;!&ndash; Display the payment button. &ndash;&gt;<input type="image" name="submit"src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"alt="Donate"><img alt="" width="1" height="1"src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" ></form>'
                        }}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                    />
                </View>
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