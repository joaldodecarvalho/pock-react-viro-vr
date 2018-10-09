'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import { ViroScene, ViroText, Viro360Image } from 'react-viro';

export default class HelloWorldScene extends Component {

  constructor() {
    super();

    this.state = {}
  }

  render() {
    return (
      <ViroScene>
        <Viro360Image source={require('./res/360_park.jpg')} />
        <ViroText text="Bem vindo!" width={2} height={2} position={[0, 0, -2]} style={styles.helloWorldTextStyle} />
      </ViroScene>
    );
  }

}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 60,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

module.exports = HelloWorldScene;
