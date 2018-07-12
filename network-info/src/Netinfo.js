import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import { withConnection, connectionShape } from 'react-native-connection-info';

const MyComponent = ({ connection }) => (
  <View>
    <Text
      style={{ color: connection.isConnected ? 'lightskyblue' : 'lightcoral' }}
    >
      {connection.isConnected ? 'Connected' : 'Offline'}
    </Text>
  </View>
)

MyComponent.propTypes = {
  connection: connectionShape,
};

export default withConnection(MyComponent);
