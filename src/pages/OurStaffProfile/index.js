import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../utils';
import { Button, Gap, Header, Profile, ProfileItem } from '../../components';

export default function OurStaffProfile({navigation}) {
    return (
      <View>
        <Header title="Our Staff Profile" onPress={() => navigation.goBack()} />
        <Profile name="Eko Setiaji,AMK" desc="Perawat" />
        <Gap height={10} />
        <ProfileItem label="Alumnus" value="Akper Ngesti Waluyo" />
        <ProfileItem label="Tempat Praktik" value="RS.Bayukarta" />
        <ProfileItem label="NIRA" value="070788" />
        <View style={styles.action}>
          <Button title="Let`s Chat" onPress={() => navigation.navigate('Chatting')} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  },
});
