import React,{useState} from 'react';
import {
    Platform,
    StyleSheet,
    Text, View,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
    RefreshControl,
    TouchableHighlight,
    Alert,
    Dimensions,
    TextInput,
  } from 'react-native';
  import ImageZoom from 'react-native-image-pan-zoom';

  import styles from '../style/styles';

  const InputDvds =(props)=>{

    const  [bid, setBid] = useState('');
    const  [name, setName] = useState('');
    const  [phoneEmail, setPhoneEmail] = useState('');

    const onSubmitData = () => {
      //Text input validations:
      //console.log( "Bid: " + bid + " Name: " + name + " Email/Phone: " + phoneEmail);
      if(bid === "" && name === "" && phoneEmail === ""){
        alert("Please enter all details");
      } else {
        if(bid !== "") {
          if(name !== "") {
            if(phoneEmail !== ""){
              alert("Thanks for your Bid, " + name + " !");
              // Clean the fields after user hits the submit button
              fetch('http://192.168.1.xx:3001/booksbid', {
                method: 'post',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  id: props.booksData.id,
                  name: name,
                  bid: bid,
                  phoneEmail: phoneEmail

                })
              })  
              setBid('');
              setName('');
              setPhoneEmail('');
            } else {
              alert('Please enter your phone or email id');
            }
          } else {
            alert('Please enter your name!');
          }
        } else {
          alert('Please enter an amount to bid!');
        }
      }
      
  }

  //Reset all fields 
    const resetAll = () => {
      setBid('');
      setName('');
      setPhoneEmail('');
    }
      return(
                 <>
                
                 <Text style={{ marginLeft: 15 }}> {"Last BID: $" + bid} </Text>

                 <TextInput
                  style={styles.textInput}
                  placeholder="Bidding amount"
                  keyboardType='numeric'
                  onChangeText={bidInput =>setBid(bidInput)} 
                  value={bid.toString()}
                />
                 
                 <View style={{padding: 5}}/>
                 <TextInput
                  style={styles.textInput}
                  placeholder="Name"
                  onChangeText={nameInput =>setName(nameInput)}
                  value={name}
                
                />
        
                <View style={{padding: 5}}/>
                 <TextInput
                  style={styles.textInput}
                  placeholder="Phone or Email"
                  onChangeText={phoneEmailInput => setPhoneEmail(phoneEmailInput)}
                  value={phoneEmail}
                />

                <View style={styles.buttonStyle}>
                <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {onSubmitData} 
                  >
                  <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style = {styles.resetButton}
                  onPress = {resetAll} 
                  >
                  <Text style = {styles.resetButtonText}> Reset </Text>
                </TouchableOpacity>
                </View>
                </>
         )
  }
  export default InputDvds;