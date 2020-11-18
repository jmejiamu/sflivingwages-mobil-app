import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import Detail from './DetailComponent';

class MyNavigationButton extends React.Component {

  render() {
    // console.log('>>>>>>>>>>>>>>>>>>>', this.props.author);
    // return <Button title="Details" onPress={() => { this.props.navigation.navigate('SalesDetail',
    // {
    //     title: this.props.itemTitle, 
    //     description: this.props.itemDescription,
    //     path: this.props.itemPath
    // })
    // }} 
    // />;
    return <Button title="Details" onPress={() => {
      this.props.navigation.navigate('SalesDetail',
        {
          image: this.props.author,
          bio: this.props.description,
          title: this.props.title
        })
    }}
    />;

  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyNavigationButton);