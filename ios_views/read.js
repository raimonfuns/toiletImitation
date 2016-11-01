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
import Recommend from './read/recommend';

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
            <Topic navigator={this.props.navigator} />
            <HrLine/>
            <Recommend title="热门推荐" navigator={this.props.navigator}/>
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

class HrLine extends Component{
  render(){
    return (
      <View style={styles.hr}></View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1
  }
});

module.exports = Read;