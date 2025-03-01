import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Input, Link} from '../../components';
import {ILLogo} from '../../assets/illustration';
import {colors, fonts} from '../../utils';

export default function Login({navigation}) {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai memilih layanan Kami</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={10} />
      <Link title="Lupa Password" size={12} />
      <Gap height={40} />
      <Button title="Masuk" onPress={() => navigation.replace('MainApp')} />
      <Gap height={30} />
      <Link title="Create New Account" size={16} align="center" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: colors.white, flex: 1},
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    maxWidth: 153,
  },
});
