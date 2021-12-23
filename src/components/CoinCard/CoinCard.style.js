import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  container:{
    backgroundColor: '#2a2d52',
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    padding: 12,
    marginTop: 7,
    alignItems: 'center',
  },
  leftContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer:{},
  image:{
    width: 32,
    height: 32,
  },
  titleContainer:{
    marginLeft: 10,
  },
  title:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  priceContainer:{
    alignItems: 'flex-end',
  },
  price:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  percentage:{
    color: '#fff',
    fontSize: 12,
    marginTop: 3,
  },
  });