import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../constants/Colors';
import SearchView from '../components/SearchView';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import {RECOMMENDED_SHOES} from '../data/dummy-data';
import ShoeItem from '../components/ShoeItem';
import BestSellingItem from '../components/BestSellingItem';

const Home = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <SearchView />
        <View>
          <FlatList
            style={styles.shoesList}
            horizontal={true}
            data={RECOMMENDED_SHOES}
            keyExtractor={(Item) => Item.id}
            renderItem={(itemData) => (
              <ShoeItem
                onSelect={() => {
                  console.log('ljfksa;');
                  props.navigation.navigate('ShoesDetails');
                }}
              />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <Text style={styles.bestSellingText}>Best Selling</Text>
        <View>
          <FlatList
            style={styles.shoesList}
            data={RECOMMENDED_SHOES}
            keyExtractor={(Item) => Item.id}
            renderItem={(itemData) => <BestSellingItem />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.primary,
    flex: 1,
    padding: 16,
  },
  shoesList: {
    marginVertical: 16,
  },
  bestSellingText: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
  },
});
export default Home;
