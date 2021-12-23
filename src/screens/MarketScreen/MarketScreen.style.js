import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  container:{
    flex: 1,
    padding: 15,
    backgroundColor: '#181b3e',
  },
  titleContainer:{},
  title:{
    fontSize:28,
    color:'#fff',
    fontWeight: '700',
  },
  parametersContainer:{
    flexDirection: 'row',
    marginTop: 10, 
    alignItems: 'center',
  },
  parameters:{
    color: 'gray',
    marginRight: 10,
    fontWeight: '500',
  },
  searchBoxContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#fff',
    borderColor: 'lightgray',
    borderRadius: 10,
    borderWidth: 1,
  },
  searchBoxText:{
    fontSize:16,
  },
  marketContainer:{
    marginTop:5,
  },
  market:{},
  });