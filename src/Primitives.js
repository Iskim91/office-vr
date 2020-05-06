import React from 'react';
import { View, Box, Cylinder, Sphere, StyleSheet } from 'react-vr';
import {Surface} from 'react-360-web';
const myCylinderSurface = new Surface(
  1000, /* width */
  600, /* height */
  Surface.SurfaceShape.Cylinder /* shape */
);

export default class Primitives extends React.Component {

  render() {
    return (
      <View>
        <Cylinder
                radiusTop={0.5}
                radiusBottom={0}
                dimHeight={2}
                segments={50}
                // lit={true}
                style={{
                  color: '#96ff00',
                  transform: [{translate: [0,0,-2]}],
                }}
              />
      </View>
    );
  }
};
