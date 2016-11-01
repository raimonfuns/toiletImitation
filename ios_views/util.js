/*!
 *
 * Util模块 React Native module
 * 主要提供工具方法
 *
 */
import React, { Component } from 'react';
import {
  PixelRatio
  } from 'react-native';

module.exports = {
  pixel: 1 / PixelRatio.get()
};