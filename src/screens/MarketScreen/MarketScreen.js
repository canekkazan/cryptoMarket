import React,{useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather'
import CoinCard from '../../components/CoinCard';
import styles from './MarketScreen.style'
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading'
import Error from '../../components/Error'

function MarketScreen({ navigation}) {


  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100&page=1&sparkline=true'

  const { loading, error, data } = useFetch(url)

  const renderCoins = ({item}) =>  <CoinCard title={item.name} img={item.image} price={item.current_price} percentage={item.price_change_percentage_24h} onSelect={() => handleCoinSelect(item)}/>

  const [list, setList]  = useState(data);


  const handleChange = (input) => {
    const filteredList = data.filter(item => {
      const searchedText = input.toLowerCase();
      const currentID = item.id.toLowerCase();
      const currentSymbol = item.symbol.toLowerCase();
      return ((currentID).indexOf(searchedText) > -1) + ((currentSymbol).indexOf(searchedText) > -1); 
    }) 
    setList(filteredList)  
  };

  const handleCoinSelect = item => {
    navigation.navigate("Trade", {item})
}

  


  if(loading) {
    return <Loading/>;
  }
  if(error) {
    return <Error/>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Markets</Text>
      </View>
      <View style={styles.parametersContainer}>
        <Fontisto name="star" size={14} color="#fff" style={{marginRight: 10}}/>
        <Text style={[styles.parameters,{color: '#fff'}]}>USD</Text>
        <Text style={styles.parameters}>EUR</Text>
        <Text style={styles.parameters}>BTC</Text>
        <Text style={styles.parameters}>ETH</Text>
      </View>     
      <View style={styles.searchBoxContainer}>
        <Feather name="search" size={22} color="lightgray" style={{marginHorizontal: 10}}/>
        <TextInput style={styles.searchBoxText} placeholderTextColor="gray" onChangeText={handleChange}
                 placeholder="Search crypto.."/>
      </View>      
      <View style={styles.marketContainer}>

        
        <FlatList keyExtractor={(coins) => coins.id} data={(list.length>0) ? list : data} renderItem={renderCoins}/>
      </View>
    </View>
  );
};

export default MarketScreen;
