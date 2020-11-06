import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  HomeProfile,
  OurStaffCategory,
  RatedOurStaff,
  NewsItem,
  Gap,
} from '../../components';
import {colors, fonts} from '../../utils';
import {DummyOurStaff2, DummyOurStaff3, JSONCategoryOurStaff} from '../../assets';

export default function OurStaff({navigation}) {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperSection}>
            <Gap height={30} />
            <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
            <Text style={styles.welcome}>
              Silahkan memilih Staff dan Layanan Kami
            </Text>
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.category}>
                <Gap width={32} />
                {JSONCategoryOurStaff.data.map((item) => {
                  return (
                    <OurStaffCategory
                      key={item.id}
                      category={item.category}
                      onPress={() => navigation.navigate('ChooseOurStaff')}
                    />
                  );
                })}
                <Gap width={22} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.wrapperSection}>
            <Text style={styles.sectionLabel}>Top Our Staffs</Text>
            <RatedOurStaff
              name="Eko Setiaji,AMK"
              desc="Nurse"
              avatar={DummyOurStaff2}
              onPress={() => navigation.navigate('OurStaffProfile')}
            />
            <RatedOurStaff
              name="Rose"
              desc="Nurse"
              avatar={DummyOurStaff3}
              onPress={() => navigation.navigate('OurStaffProfile')}
            />
            <RatedOurStaff
              name="Eko Setiaji,AMK"
              desc="Nurse"
              avatar={DummyOurStaff2}
              onPress={() => navigation.navigate('OurStaffProfile')}
            />
            <Text style={styles.sectionLabel}>Good News</Text>
          </View>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
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
  wrapperSection: {paddingHorizontal: 16},
  welcome: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: 209,
    marginTop: 30,
    marginBottom: 16,
  },
  category: {flexDirection: 'row'},
  wrapperScroll: {marginHorizontal: -16},
  sectionLabel: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    marginTop: 30,
    marginBottom: 16,
  },
});
