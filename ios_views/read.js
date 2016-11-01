import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS
  } from 'react-native';

import Search from './read/search';
import Topic from './read/topic';

class ReadView extends Component{
  constructor(props){
    super(props);
    this.state = {
      isShow: false
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <Search navigator={this.props.navigator}/>
        {
          <ScrollView
            style={[styles.container, {paddingTop:20}]}>
            <Topic/>
          </ScrollView>
        }
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
          title: '阅读',
          navigationBarHidden: true
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