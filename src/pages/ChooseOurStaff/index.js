import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyOurStaff2, DummyOurStaff9} from '../../assets';
import {Header, List} from '../../components';
import {colors} from '../../utils';

export default function ChooseOurStaff({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="pilih perawat"
        onPress={() => navigation.goBack()}
      />
      <List
        type="next"
        profile={DummyOurStaff9}
        name="Nairobi Putri Hayza"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        profile={DummyOurStaff2}
        name="Eko Setiaji,AMK"
        desc="Pria"
      />
      <List
        type="next"
        profile={DummyOurStaff2}
        name="Eko Setiaji,AMK"
        desc="Pria"
      />
      <List
        type="next"
        profile={DummyOurStaff2}
        name="Eko Setiaji,AMK"
        desc="Pria"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
