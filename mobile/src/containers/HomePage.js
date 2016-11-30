/** @flow */

import React from 'react';
import ReactNative from 'react-native';
import { InputGroup, Input, Button } from 'native-base';

import Router from '../routes';

const {
  View,
  Text,
  StyleSheet,
  Dimensions,
  KeyboardAvoidingView,
} = ReactNative;

class HomePage extends React.Component {

  static route = {
    navigationBar: {
      title: 'Connect to Game',
      backgroundColor: '#160030',
      titleStyle: {
        color: '#fff'
      }
    }
  };

  constructor() {
    super();
    this.state = {
      newName: '',
      alreadyName: '',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.center}>
          <View style={styles.content}>
            <Text style={styles.header}>Create new game</Text>
            <InputGroup borderType="rounded" >
              <Input
                placeholder="Type your new game name here"
                onChangeText={(newName) => this.setState({ ...this.state, newName })}
              />
            </InputGroup>
            <Button
              rounded
              block
              success
              onPress={() => this.props.navigator.push(Router.getRoute('game'))}
              style={{ marginTop: 5, backgroundColor: '#160030' }}>
              Create
            </Button>
            <View style={styles.break} />
            <Text style={styles.header}>Join to game</Text>
            <InputGroup borderType="rounded" >
              <Input
                onChangeText={(alreadyName) => this.setState({ ...this.state, alreadyName })}
                placeholder="Type game name here"
              />
            </InputGroup>
            <Button
              rounded
              block
              info
              style={{ marginTop: 5, backgroundColor: '#160030' }}>
              Join
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView >
    )
  }
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f3f3f3'
  },
  center: {
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5
  },
  content: {
    width: Dimensions.get('window').width-20,
    borderWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    borderRadius: 5
  },
  header: {
    textAlign: 'center',
    marginBottom: 10,
    fontSize: 20,
  },
  break: {
    height: 40
  }
});