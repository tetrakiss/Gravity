/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*
Тест
*/


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  Alert,
  TouchableHighlight,
  Animated,
  Dimensions
} from 'react-native';
import { LoginButton } from 'react-native-fbsdk';
import Animation from 'lottie-react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};
class ButtonG extends Component {
  render() {
    return (
      <TouchableHighlight underlayColor='rgba(255, 255, 255, 0)' style={styles.ButtonGPosition}
      onPress={() => {onButtonPress}}>
        <View style={styles.ButtonG}>
        <Text style={styles.buttonGText}> ВОЙТИ ЧЕРЕЗ </Text>

        </View>
      </TouchableHighlight>
    );

  }
}
export default class gravity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
console.log('start Anim');
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 2000,
    }).start();
  }

  render() {
    let {width, height} = Dimensions.get('window')
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',

          backgroundColor: '#3aa8dc',

        }}
      >
  <ButtonG/>

      <Animation
        style={{
          width: width,
          height: height,
          zIndex:-100,
          position:'absolute'
        }}
        source={require('./Lottie/startGravityCut.json')}
        progress={this.state.progress}
      />
      <Image source={require('./img/top_r.jpg')}
      style={{
          height: '100%',
          opacity: 0.95,
          position:'absolute',
          zIndex:-101,
      }}
      />
      </View>
    );
  }
}
/*
export default class gravity extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Welcome to the Facebook SDK for React Native!</Text>
        <LoginButton />
      </View>
    );
  }
}*/

const styles = StyleSheet.create({
ButtonGPosition: {
  position:'absolute',
  left: 30,
  bottom:30,
  zIndex:1000
},
  buttonGText: {
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center',
    color:'#3aa8dc',
  },
  ButtonG: {

    backgroundColor:'rgba(255, 255, 255, 0)',
    padding:10,
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 0,
    borderColor:'#3aa8dc',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3aa8dc',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('gravity', () => gravity);
