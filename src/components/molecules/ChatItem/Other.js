import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyOurStaff9 } from '../../../assets';
import {colors, fonts} from '../../../utils';

export default function Other() {
    return (
      <View style={styles.container}>
        <Image source={DummyOurStaff9} style={styles.avatar} />
        <View>
          <View style={styles.chatContent}>
            <Text style={styles.text}>Selamat Pagi,juga..</Text>
          </View>
          <Text style={styles.date}>08:02 AM</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {marginBottom: 20, alignItems: 'flex-end', paddingLeft: 16, flexDirection: 'row'},
  avatar: {width: 30, height: 30, borderRadius: 30/2, marginRight: 12},
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  },
});
