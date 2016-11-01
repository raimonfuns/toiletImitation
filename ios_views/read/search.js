import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
  } from 'react-native';

import Util from './../util';

class Search extends Component{
  render(){
    return (
      <View style={{height:70, borderBottomWidth:Util.pixel,borderColor:'#ccc'}}>
        <TextInput style={styles.search} 
        					placeholder="搜索"
                  placeholderTextColor="#494949"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    marginLeft: 10,
    marginRight: 10,
    height: 35,
    borderWidth: Util.pixel,
    borderColor: '#ccc',
    borderRadius:3,
    marginTop:25,
    paddingLeft:10,
    fontSize:15
  }
});

module.exports = Search;