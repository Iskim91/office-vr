import React from 'react';
import { asset, Model, View, StyleSheet } from 'react-vr';

export default class Penholder extends React.Component {
  render() {
    return (
      <View>
        <Model
          source={{
            obj: asset('/penholder/Table_Set_obj.obj'),
            mtl: asset('/penholder/Table_Set_obj.mtl')
          }}
          style={{
            position: 'absolute',
            transform: [
              { translate: [-2.30, 0.70, -4] },
              { scale: 0.001 },
              { rotateX: -90 }
            ]
          }}
        />
        <Model
          source={{
            obj: asset('/penholder/Table_Set_obj.obj'),
            mtl: asset('/penholder/Table_Set_obj.mtl')
          }}
          style={{
            position: 'absolute',
            transform: [
              { translate: [5.00, 0.70, -4] },
              { scale: 0.001 },
              { rotateX: -90 }
            ]
          }}
        />
        <Model
          source={{
            obj: asset('/penholder/Table_Set_obj.obj'),
            mtl: asset('/penholder/Table_Set_obj.mtl')
          }}
          style={{
            position: 'absolute',
            transform: [
              { translate: [ 12.00, 0.50, -4] },
              { scale: 0.001 },
              { rotateY: 90 },
              { rotateX: -90 },
            ]
          }}
        />
      </View>
    );
  }
};
