import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
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
      <View style={styles.tj}>
        <View style={styles.tjTitle}>
          <Text style={styles.bigText}>推荐专题</Text>
        </View>
        <View style={[styles.row,styles.tjTopic]}>
          <View style={[styles.tjTopicItem, {marginRight:5}]}>
            <Image source={{uri: "http://o94apbmjs.bkt.clouddn.com/yy.jpg"}} style={styles.img}/>
          </View>
          <View style={[styles.tjTopicItem, {marginLeft:5}]}>
            <Image source={{uri: "http://7xtp9h.com2.z0.glb.clouddn.com/1.png"}} style={styles.img}/>
          </View>
        </View>
        <View style={styles.tjTQ}>
          <Text style={styles.tjTQText}>查看同期专题 &gt; </Text>
        </View>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  tj:{
    marginTop:-5,
    marginLeft:10,
    marginRight:10
  },
  tjTitle:{

  },
  bigText:{
    fontSize:17,
    fontWeight: '300',
    marginBottom: 5
  },
  row:{
    flexDirection: 'row'
  },
  tjTopic:{
    marginTop:10
  },
  tjTopicItem:{
    height: 100,
    //borderWidth: Util.pixel,
    //borderColor: '#ccc',
    flex:1,
    borderRadius:5
  },
  tjTQ:{
    marginTop:10
  },
  tjTQText:{
    fontWeight: '300',
    fontSize:15,
    color: '#7D7D81'
  },
  img:{
    height:100,borderRadius:5
  }
});

module.exports = Topic;