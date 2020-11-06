import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyOurStaff2, DummyOurStaff8, DummyOurStaff5} from '../../assets';
import {List} from '../../components';
import {colors, fonts} from '../../utils';

export default function Messages({navigation}) {
  const [nurses] = useState([
    {
      id: 1,
      profile: DummyOurStaff2,
      name: 'Eko Setiaji,AMK',
      desc: 'Baik Pak terima kasih atas waktu...',
    },
    {
      id: 2,
      profile: DummyOurStaff8,
      name: 'Ethan Sp.U',
      desc: 'Baik Pak terima kasih atas waktu...',
    },
    {
      id: 3,
      profile: DummyOurStaff5,
      name: 'Bunga.SpKK',
      desc: 'Baik Pak terima kasih atas waktu...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Text style={styles.title}>Chat</Text>
        {nurses.map((nurse) => {
          return (
            <List
              key={nurse.id}
              profile={nurse.profile}
              name={nurse.name}
              desc={nurse.desc}
              onPress={() => navigation.navigate('Chatting')}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: colors.secondary, flex: 1},
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginLeft: 16,
  },
});
