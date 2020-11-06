import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Gap, Header, List, Profile } from '../../components';


export default function UserProfile({navigation}) {
    return (
      <View style={styles.page}>
        <Header title="Profile" onPress={() => navigation.goBack()} />
        <Gap height={10} />
        <Profile name="Priskila" desc="Mobile Dev" />
        <Gap height={14} />
        <List
          name="Edit Profile"
          desc="Last Up Date Yesterday"
          type="next"
          icon="edit-profile"
          onPress={() => navigation.navigate('UpdateProfile')}
        />
        <List
          name="Edit Profile"
          desc="Last Up Date Yesterday"
          type="next"
          icon="language"
        />
        <List
          name="Edit Profile"
          desc="Last Up Date Yesterday"
          type="next"
          icon="rate"
        />
        <List
          name="Edit Profile"
          desc="Last Up Date Yesterday"
          type="next"
          icon="help"
        />
      </View>
    );
}

const styles = StyleSheet.create({
    page: {flex: 1, backgroundColor: 'white'},
})
