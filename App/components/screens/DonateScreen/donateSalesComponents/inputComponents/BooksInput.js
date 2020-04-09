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

  const InputBooks =(props)=>{

    const  [bid, setBid] = useState('');
    const  [name, setName] = useState('');
    const  [phoneEmail, setPhoneEmail] = useState('');

    const onSubmitData = () => {
      fetch('http://192.168.xx.xx:3001/booksbid',{
          method:'post',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify({
              bid: bid,
              id:props.booksData.id,
              name: name,
              phoneEmail: phoneEmail
  
          })
      })
      alert("Thanks for your Bid " + bid );
      // Clean the fields when user tab submit
      setBid('');
      setName('');
      setPhoneEmail('');
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
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  placeholder="Bid..."
                  keyboardType='numeric'
                  onChangeText={bidInput =>setBid(bidInput)} 
                  value={bid}
                />
                 
                 <View style={{padding: 5}}/>
                 <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  placeholder="Name"
                  onChangeText={nameIput =>setName(nameIput)}
                  value={name}
                
                />
        
                <View style={{padding: 5}}/>
                 <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                  placeholder="Phone or Email"
                  onChangeText={phoneEmailInput => setPhoneEmail(phoneEmailInput)}
                  value={phoneEmail}
                />

                <View style={{padding: 5}}/>

                <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {onSubmitData} 
                  >
                  <Text style = {styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>

                <View style={{padding: 5}}/>

                <TouchableOpacity
                  style = {styles.submitButton}
                  onPress = {resetAll} 
                  >
                  <Text style = {styles.submitButtonText}> Reset </Text>
                </TouchableOpacity>
                </>
         )
  }

 

  export default InputBooks;
  