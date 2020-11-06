import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { ILLogo } from '../../assets/illustration';
import { colors, fonts } from '../../utils';


export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted')
    }, 2000)
  }, [])
    return (
      <View style={styles.page}>
        <ILLogo />
        <Text style={styles.title}>RAMAH</Text>
        <Text style={styles.subtitle1}>(Rawat di Rumah)</Text>
        <Text style={styles.subtitle2}>Home Care Area Karawang</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
  subtitle1: {
    fontSize: 16,
    fontWeight: '600',
    color: '#122340',
    marginTop: 6,
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: '600',
    color: '#122340',
    marginTop: 6,
  },
});
