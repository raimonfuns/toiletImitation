import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
  } from 'react-native';

import Search from './read/search';

class ReadView extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
        <Search navigator={this.props.navigator}/>
      </View>
    );
  }
}

class Read extends Component{
  render(){
    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: ReadView,
          title: '阅读'
      }}/>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1
  }
});

module.exports = Read;