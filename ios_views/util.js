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
  pixel: 1 / PixelRatio.get(),

  /**
   * 基于fetch的get方法
   * @method post
   * @param {string} url
   * @param {function} callback 请求成功回调
   */
  get: function(url, successCallback, failCallback){
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        successCallback(JSON.parse(responseText));
      })
      .catch(function(err){
        failCallback(err);
      });
  },
};