/**
 * 找厕所应用
 * 功能 & 搞笑我们是认真
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
  } from 'react-native';

class toiletImitation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TabBarIOS barTintColor="#fff" >
        <TabBarIOS.Item
          title="卫生间"
          >
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="阅读"
          >
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="天气"
          >
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="设置"
          >
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('toiletImitation', () => toiletImitation);