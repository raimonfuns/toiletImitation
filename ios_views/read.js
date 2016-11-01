import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS,
  ActivityIndicator
  } from 'react-native';

import Util from './util';
import Search from './read/search';
import Topic from './read/topic';
import Recommend from './read/recommend';

class ReadView extends Component{
  constructor(props){
    super(props);
    this.state = {
      isShow: false,
      recommendTopic: null,
      hotTopic: null
    };
  }

  render(){
    return(
      <View style={styles.container}>
        <Search navigator={this.props.navigator}/>
        {
          this.state.isShow ?
            (<ScrollView
              style={[styles.container, {paddingTop:20}]}>
              <Topic data={this.state.recommendTopic} navigator={this.props.navigator} />
              <HrLine/>
              <Recommend title="热门推荐" data={this.state.hotTopic} navigator={this.props.navigator}/>
            </ScrollView>)
            :
            (<ActivityIndicator
              animating={true}
              style={[{height: 80}]}
              size="large"
              />)
        }
      </View>
    );
  }

  componentDidMount(){
    this._fetchData();
  }

  _fetchData(callback){
    var self = this;
    Util.get('http://123.57.39.116:3000/data/read?type=config', function(data){
      console.log(data)
      if(data.status){
        let obj = data.data;
        self.setState({
          isShow: true,
          recommendTopic: obj.recommendTopic,
          hotTopic: obj.hotTopic
        });
      }else{
        alert('服务异常,正在紧急修复,请耐心等待');
      }
    }, function(err){
      alert(err);
      alert('服务异常,正在紧急修复,请耐心等待2');
    });
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