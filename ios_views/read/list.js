import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  ListView
  } from 'react-native';

class List extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ScrollView style={styles.container}>
        <Text>列表页</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

module.exports = List;
