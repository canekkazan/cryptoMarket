import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './TradeScreen.style'
import Chart from '../../components/Chart'


function TradeScreen({ route, navigation }) {

  const { item } = route.params;

  const exchangeIcon = () => {
    return(
      <Ionicons name="checkmark-done" size={14} color="#6cd3bb" />
    )
  }

  const exchangedsIcon = () => {
    return(
      <FontAwesome name="exchange" size={14} color="#ee6a77" />
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.coinInfoHeader}>
        <View style={styles.coinInfo}>
          <View style={styles.coinInfoLeft}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={28} color="white" />
            </TouchableWithoutFeedback>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.coinTitle}>{item.symbol.toUpperCase()}-USD</Text>
          </View>
          <View style={styles.coinInfoRight}>
            <View style={styles.iconContainer}>
              <Entypo name="info-with-circle" size={18} color="#5c6083" />
            </View>
            <View style={styles.iconContainer}>
              <Ionicons name="notifications" size={18} color="#5c6083" />
            </View>
            <View style={styles.iconContainer}>
              <Fontisto name="star" size={18} color="#5c6083" />
            </View>
          </View>
        </View>
        <View style={styles.coinNumberContainer}>
          <View style={styles.coinNumberLeft}>
            <Text style={styles.price}>${item.current_price}</Text>
            <Text style={styles.percentage, (item.percentage) >= 0 ? { color: '#6cd3bb' } : { color: '#ee6a77' }}>{item.price_change_percentage_24h}%</Text>
          </View>
          <View style={styles.coinNumberRight}>
            <View style={styles.VHLTitleContainer}>
              <Text style={styles.VHLTitle}>Vol</Text>
              <Text style={styles.VHLTitle}>High</Text>
              <Text style={styles.VHLTitle}>Low</Text>
            </View>
            <View style={styles.VHLNumberContainer}>
              <Text style={styles.VHLNumber}>${item.total_volume}</Text>
              <Text style={styles.VHLNumber}>${item.high_24h}</Text>
              <Text style={styles.VHLNumber}>${item.low_24h}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.coinGraphContainer}>
        <Chart sparkline7d={item.sparkline_in_7d.price} />
      </View>
      <View style={styles.ordersContainer}>
        <View style={styles.openOrdersContainer}>
          <Text style={styles.ordersTitle}>OPEN ORDERS</Text>
          <View style={styles.orderContainer}>
            <View style={styles.leftContainer}>
              <View style={styles.orderIconContainer}>
                <FontAwesome name="exchange" size={16} color="#429bdd" />
              </View>
              <View>
                <Text style={styles.title}>{item.symbol.toUpperCase()} - USD</Text>
                <Text style={styles.subtitle}>Limit BUY</Text>
                <Text style={styles.subtitle}>23/12/2020 11:47AM</Text>
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>0.0168 {item.symbol.toUpperCase()}</Text>
              <Text style={styles.subtitle}>{item.current_price*0.0168} USD</Text>
            </View>
          </View>
        </View>
        <View style={styles.filledOrdersContainer}>
          <Text style={styles.ordersTitle}>FILLED ORDERS</Text>
          <View style={styles.orderContainer}>
            <View style={styles.leftContainer}>
              <View style={styles.orderIconContainer}>
                <Ionicons name="checkmark-done" size={16} color="#6cd3bb" />
              </View>
              <View>
                <Text style={styles.title}>{item.symbol.toUpperCase()} - USD</Text>
                <Text style={styles.subtitle}>Market BUY</Text>
                <Text style={styles.subtitle}>20/12/2020 05:23PM</Text>
              </View>
            </View>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>0.0042 {item.symbol.toUpperCase()}</Text>
              <Text style={styles.subtitle}>{item.current_price*0.0042} USD</Text>
            </View>
          </View>
        </View>
      </View>

    </View>
  );
};

export default TradeScreen;
