import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class InstaClone extends Component {
  render() {
    return (
      <View style={{flex: 1, width: 100 + '%', height: 100 + '%'}}>
        <View style={styles.tempNav}>
          <Text>Instagram</Text>
        </View>
        <View style={styles.userBar}>

        </View>
        <Image
          style={{width: 100 + '%', height: 100}} 
          source={{uri: 'https://blog.malwarebytes.com/wp-content/uploads/2017/11/shutterstock_688527661-900x506.jpg'}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + '%',
    height: 75,
    marginTop: 20,
    backgroundColor: 'rgb(250, 250, 250)',
    borderBottomColor: 'rgb(233,233,233)',
    // eslint-disable-next-line prettier/prettier
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userBar: {
    width: 100 + '%',
    height: '50',
    backgroundColor: 'rgb(255,255,155)',
  }
})

export default InstaClone;
