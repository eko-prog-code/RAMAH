import React from 'react';
import {StyleSheet, Text, View, ImageBackground,} from 'react-native';
import {ListOffices} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyOffices1, DummyOffices2, DummyOffices3, ILOfficesBG} from '../../assets';

export default function Offices() {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILOfficesBG} style={styles.background}>
        <Text style={styles.title}>Nearby Offices</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListOffices type="Klinik" name="Hezekiah" address="Budiman Asri Blok H1, no.25" pic={DummyOffices1}/>
        <ListOffices type="Klinik" name="Ethan" address="Kosambi" pic={DummyOffices2}/>
        <ListOffices type="Klinik" name="Mark Zumberg" address="Klari" pic={DummyOffices3}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  background: {
    height: 240,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
