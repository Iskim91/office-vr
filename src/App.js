import React from 'react';
import { asset, Pano, Text, View, AmbientLight, Sound, VrButton} from 'react-vr';

import Primitives from './Primitives';
import Penholder from './Penholder';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: 'background.jpeg',
      sound: 'office.wav',
      visible: true
    };
  }

  changeScene() {
    this.setState({
      background: 'outside.jpeg',
      sound: 'birds.wav',
      visible: false
    });
  }

  renderItems() {
    if (this.state.visible === true) {
      return <Penholder />
    }
  }

  render() {
    return (
      <View>
        <AmbientLight intensity={ 2.5 } />
        <Pano source={asset(this.state.background)}/>
        <Sound
          loop={true}
          source={{
            wav: asset(this.state.sound)
          }}
          />
        <VrButton onClick={this.changeScene.bind(this)}>
          <Text
            style={{
              backgroundColor: 'rgba(0,0,0,0.4)',
              fontSize: 0.8,
              fontWeight: '400',
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 2, -6]}],
            }}>
            My Office
          </Text>
        </VrButton>
        {this.renderItems()}
      </View>
    );
  }
};

