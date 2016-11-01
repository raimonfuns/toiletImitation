import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
  } from 'react-native';

  class Topic extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render(){
    return (
      <View>
      	<Text>推荐专题</Text>
      </View>
    );
  } 
}

module.exports = Topic;