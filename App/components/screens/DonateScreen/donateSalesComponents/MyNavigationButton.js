import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import Detail from './DetailComponent';

class MyNavigationButton extends React.Component {
  render() {
    return <Button title="Details" data={this.props.data} onPress={() => { this.props.navigation.navigate('SalesDetail') }} />;
  }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(MyNavigationButton);