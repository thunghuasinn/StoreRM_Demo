import React from 'react'
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:COLORS.light20,
  },
  containerScan: {
    flex: 1,
    height:'100%',
    width:'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    height: 500,
    padding: 50,
    backgroundColor: 'rgba(25, 25, 112, 0.8)',
  },
  imageRadius: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  twinObj: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: COLORS.dark,
    borderRadius: SIZES.borderRadius,
    bottom: 15,
    right: 10,
    left: 10,
    height: 55,
    paddingTop: 5
  },
  txInput: {
    height: 40,
    backgroundColor:COLORS.light,
    marginTop: SIZES.margin/2.5,
    paddingLeft: SIZES.padding/3,
    borderRadius: SIZES.borderRadius/3,
    borderBottomColor: COLORS.input4,     // Add this to specify bottom border color
    borderBottomWidth: 2,      // Add this to specify bottom border thickness

  },
  txInputa: {
    height: 40,
    backgroundColor:COLORS.light,
    marginTop: SIZES.margin/2.5,
    paddingLeft: SIZES.padding/3,
    borderRadius: SIZES.borderRadius/3,

  },
  ViewInput: {
    height: 40,
    backgroundColor:COLORS.light,
    marginTop: SIZES.margin/2.5,
    paddingLeft: SIZES.padding/3,
    borderRadius: SIZES.borderRadius/3,
    flexDirection:'row',
    alignItems:'center'

  },
});

export default styles;


// h1: 30,
// h2: 22,
// h3: 16,
// h4: 14,
// h5: 12,

// txInput: {
//   height: 40,
//   borderColor: COLORS.grey,
//   borderWidth: 1,
//   marginTop: SIZES.margin/2.5,
//   paddingLeft: SIZES.padding/3,
// }