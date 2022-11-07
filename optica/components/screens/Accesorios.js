import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState}from 'react'
import { COLOURS, Items } from '../database/Database'
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Accesorios = ({navigation}) => {

  const [accessory, setAccessory] = useState([]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB();
        });

        return unsubscribe;
    }, [navigation]);

    
    const getDataFromDB = () => {
        let accessoryList = [];
        for (let index = 0; index < Items.length; index++) {
          if (Items[index].category == 'Accesorio') {
            accessoryList.push(Items[index]);
          } 
        }
        setAccessory(accessoryList);
    };

    const ProductCard = ({data}) => {
      return(
        <TouchableOpacity
          onPress={() => navigation.navigate("PorductInfo",{productID: data.id})} 
          style={{width:'48%',marginVertical:14,}}>
              <View style={styles.contenedorProduct}>
                  {
                      data.isOff ? (
                          <View style={styles.porcentaje1}>
                              <Text style={styles.porcentaje2}>{data.offPercentage}%</Text>
                          </View>
                      ) : null}
                      <Image source={data.productImage} style={{width:'80%',height:'80%',resizeMode:'contain',}}/>
              </View>
              <Text style={styles.textNomProduct}>
                  {data.productName}
              </Text>
              {data.category == 'Accesorio' ? data.isAvailable ? (
                  <View style={{flexDirection:'row',alignItems:'center',}}>
                      <FontAwesome name='circle' style={styles.IconDisponible}> Disponible</FontAwesome>
                  </View>
              ) : (
                  <View style={{flexDirection:'row',alignItems:'center',}}>
                      <FontAwesome name='circle' style={styles.IconNoDisponible}> No Disponible</FontAwesome>
                  </View> 
              ) : null}
              <Text style={{color: COLOURS.black,}}>
                  &#36; {data.productPrice}
              </Text>
        </TouchableOpacity>
      )
  }
  return (
    <View style={{width: '100%',height: '100%',backgroundColor: COLOURS.white,}}>
        <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.contenedorInicio}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="back" style={styles.buttonShop}> Shop</Entypo>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
                    <MaterialCommunityIcons name="cart" style={styles.buttonCarrito}> Carrito</MaterialCommunityIcons>
                </TouchableOpacity>

            </View>

            <View style={{marginBottom:10,padding: 16,}}>
                <Text style={styles.textTitulo}>
                    Optica New Vision
                </Text>
                <Text style={styles.textSubTitulo}>Optica comprometida por tu SALUD.
                    {'\n'}Nos preocupamos por tu vision
                </Text>
            </View>
            
         <View style={{padding:16,}}>

            <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',}}>

                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Text style={styles.txtAccesorios}>Accesorios</Text>

                    <Text style={styles.subTextAccesorios}>--</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Accesorios')}>
                    <Entypo name="archive" style={styles.buttonVerAccesorios}></Entypo>
                </TouchableOpacity>

            </View>

            <View style={{flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'space-around',}}>
              {accessory.map(data => {return <ProductCard data={data} key={data.id}/>})}
            </View>

         </View>

        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedorProduct: {
    width:'100%',
    height:100,
    borderRadius: 10,
    backgroundColor: COLOURS.backgroundLight,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
},
porcentaje1: {
    position:'absolute',
    width:'20%',
    height: '24%',
    backgroundColor: COLOURS.green,
    top: 0,
    left:0,
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
},
porcentaje2: {
    fontSize: 12,
    color: COLOURS.white,
    fontWeight: 'bold',
    letterSpacing: 1,
},
textNomProduct: {
    fontSize:12,
    color: COLOURS.black,
    fontWeight: '600',
    marginBottom:2,
},
IconDisponible: {
    fontSize:12,
    marginRight:6,
    color:COLOURS.green,
},
IconNoDisponible: {
    fontSize:12,
    marginRight:6,
    color:COLOURS.red,
},
contenedorInicio: {
  width:'100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: 16,
},
buttonShop: {
  fontSize: 18,
  color: COLOURS.backgroundMedium,
  padding: 12,
  borderRadius: 10,
  backgroundColor: COLOURS.backgroundLight,
},
buttonCarrito: {
  fontSize: 18,
  color: COLOURS.backgroundMedium,
  padding: 12,
  borderRadius: 10,
  borderWidth: 1,
  borderColor: COLOURS.backgroundLight,
},
textTitulo: {
  fontSize: 26,
  color: COLOURS.black,
  fontWeight: '500',
  letterSpacing: 1,
  marginBottom: 10,
},
textSubTitulo: {
  fontSize: 14,
  color: COLOURS.black,
  fontWeight: '400',
  letterSpacing: 1,
  lineHeight: 24,
},
txtAccesorios: {
  fontSize: 18,
  color: COLOURS.black,
  fontWeight: '500',
  letterSpacing: 1,
},
subTextAccesorios: {
  fontSize: 14,
  color: COLOURS.black,
  fontWeight: '400',
  opacity: 0.5,
  marginLeft: 10,
},
buttonVerAccesorios: {
  fontSize: 18,
  color: COLOURS.blue,
  padding: 12,
  borderRadius: 10,
  backgroundColor: COLOURS.backgroundLight,
}
})

export default Accesorios;