import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  StatusBar,
  FlatList,
  Text,
} from 'react-native';
import Header from '../components/Header';
import {CATEGORIES, PRODUCTS, BEST_SELLING_PRODUCTS} from '../data/dummy-data';
import CategoryItem from '../components/CategoryItem';
import {ScrollView} from 'react-native-gesture-handler';
import ProductItem from '../components/ProductItem';
import BestSellingProductItem from '../components/BestSellingProductItem';

const Dashboard = (props) => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <ScrollView style={styles.screen}>
        <View>
          <Text style={styles.title}>Choose {'\n'}your favorit furniture</Text>
          <View style={styles.searchContainer}>
            <View style={styles.searchView}>
              <Image source={require('../../assets/search_icon.png')} />
              <TextInput style={styles.searchText} placeholder={'Search'} />
            </View>
            <View style={styles.filtterIcon}>
              <Image source={require('../../assets/filtter_icon.png')} />
            </View>
          </View>
          <Header title={'Category'} endText={'View All'} />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={CATEGORIES}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(itemData) => (
              <CategoryItem
                name={itemData.item.name}
                imageUrl={itemData.item.imageUrl}
                elevation={itemData.item.name.includes('Chair') ? 5 : 0}
                backgroundColor={
                  itemData.item.name.includes('Chair')
                    ? 'white'
                    : 'rgba(230, 234, 234, 0.25)'
                }
              />
            )}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={PRODUCTS}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(itemData) => (
              <ProductItem
                name={itemData.item.name}
                rating={itemData.item.rating}
                price={itemData.item.price}
                imageUrl={itemData.item.imageUrl}
                color={itemData.item.color}
                onSelectFurniture={() => {
                  props.navigation.navigate('FurnitureDetails');
                }}
              />
            )}
          />
          <Header title={'Best Selling'} endText={'View All'} />
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={BEST_SELLING_PRODUCTS}
            keyExtractor={(item) => item.id.toString()}
            renderItem={(itemData) => (
              <BestSellingProductItem
                name={itemData.item.name}
                rating={itemData.item.rating}
                price={itemData.item.price}
                imageUrl={itemData.item.imageUrl}
                color={itemData.item.color}
                onSelectFurniture={() => {
                  props.navigation.navigate('FurnitureDetails');
                }}
              />
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
    flex: 1,
    padding: 16,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 25,
  },
  searchText: {
    marginStart: 10,
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
  },
  searchContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    marginTop: 15,
  },
  searchView: {
    flex: 1,
    backgroundColor: '#E6EAEA',
    height: 40,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingStart: 10,
    paddingEnd: 10,
  },
  filtterIcon: {
    marginLeft: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    elevation: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;
