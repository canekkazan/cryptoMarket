import { StyleSheet, Dimensions } from 'react-native';


export default StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#181b3e',
    padding:15,

  },
  coinInfoHeader:{
    backgroundColor: '#131838',
    padding: 15,
    borderRadius: 10,
  },
  coinInfo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  coinInfoLeft:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  image:{
    marginLeft: 12,
    width: 32,
    height: 32,
  },
  coinIcon:{},
  coinTitle:{
    color: '#fff',
    marginLeft: 8,
    fontSize: 18,
  },
  coinInfoRight:{
    flexDirection: 'row',
  },
  iconContainer:{
    backgroundColor: '#1e1e42',
    marginLeft: 5,
    padding: 10,
    borderRadius: 5,
  },
  coinNumberContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:10,
  },
  coinNumberLeft:{},
  price:{
    fontSize: 28,
    fontWeight: '400',
    color: '#fff',
  },
  percentage:{
    fontSize: 12,
    color: '#fff',
  },
  coinNumberRight:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  VHLTitleContainer:{ 
  },
  VHLNumberContainer:{
    alignItems: 'flex-end',
  },
  VHLTitle:{
    fontSize: 12,
    color: '#5c6083',

  },
  VHLNumber:{
    alignContent: 'flex-end',
    fontSize: 12,
    color: '#fff',
  },

  coinGraphContainer:{
    backgroundColor: '#181b3e',
  },
  ordersContainer:{
    marginTop:210,
  },
  ordersTitle:{
    fontSize: 12,
    color: '#5c6083',
    fontWeight: '500',
  },
  orderContainer:{
    justifyContent: 'space-between',
    backgroundColor: '#2a2d52',
    flexDirection: 'row',
    borderRadius:10,
    padding: 10,
    alignItems: 'flex-start',
    
  },
  leftContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderIconContainer:{
    borderRadius: 100,
    backgroundColor: '#3c416b',
    padding: 10,
  },
  title:{
    color: 'white',
    marginLeft: 5,
    fontWeight: '500',
  },
  subtitle:{
    color: '#5c6083',
    marginLeft: 5,
  },
  rightContainer:{
    alignItems: 'flex-end',
  },
  filledOrdersContainer:{
    marginTop: 10,
  },
  
});