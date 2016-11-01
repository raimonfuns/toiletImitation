import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
  } from 'react-native';

import TWebView from './../webview';
import List from './list';

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
          <TouchableOpacity style={[styles.tjTopicItem, {marginRight:5}]} onPress={this._showDetail.bind(this, "每一个孩子都是一棵小树", "http://mp.weixin.qq.com/s?__biz=MzI1OTE1MzU4NA==&mid=404852295&idx=1&sn=3223f39159d2d52917ff1a6dc50ee9c7#rd")}>
            <Image source={{uri: "http://o94apbmjs.bkt.clouddn.com/yy.jpg"}} resizeMode="stretch" style={styles.img}/>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tjTopicItem, {marginLeft:5}]} onPress={this._showDetail.bind(this, "我想成为坐在路边鼓掌的人", "http://mp.weixin.qq.com/s?__biz=MzI1OTE1MzU4NA==&mid=506401864&idx=1&sn=d8ad06460b6e799642625282c15839b0#rd")}>
            <Image source={{uri: "http://7xtp9h.com2.z0.glb.clouddn.com/1.png"}} resizeMode="stretch" style={styles.img}/>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.tjTQ} onPress={this._showList.bind(this)}>
          <Text style={styles.tjTQText}>查看同期专题 &gt; </Text>
        </TouchableOpacity>
      </View>
    );
  } 

  _showDetail(title, url){
    this.props.navigator.push({
      component: TWebView,
      title: title,
      barTintColor: '#fff',
      passProps:{
        url: url,
        isMargin:1
      }
    });
  }

  _showList(){
    this.props.navigator.push({
      component: List,
      title: '推荐专题',
      barTintColor: '#fff',
      passProps:{
        type: 'manager'
      }
    });
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