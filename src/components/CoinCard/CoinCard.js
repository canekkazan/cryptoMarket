import React from 'react';
import {View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './CoinCard.style'

const CoinCard = (props) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={.7} onPress={props.onSelect}>
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image}  source={{uri: props.img }}/>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </View>     
      <View style={styles.priceContainer}>
        <Text style={styles.price}>${props.price}</Text>
        <Text style={[styles.percentage, (props.percentage)>=0 ? {color: '#6cd3bb'}: {color: '#ee6a77'} ]}>
          {props.percentage}%
          </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CoinCard;
