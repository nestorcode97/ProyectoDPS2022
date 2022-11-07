import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLOURS, Items} from '../database/Database';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MyCart = ({navigation}) => {

  const [product, setProduct] = useState();
  const [total, setTotal] = useState(null);
  const [descuento, setDescuento] = useState(null);
  const [totalDescuento, setTotalDescuento] = useState(null);

  
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //obtiene los datos almacenados de los productos en el carrito "cartItems"
  const getDataFromDB = async () => {
    let items = await AsyncStorage.getItem('cartItems');
    items = JSON.parse(items);
    let productData = [];
    if (items) {
      Items.forEach(data => {
        if (items.includes(data.id)) {
          productData.push(data);
          return;
        }
      });
      setProduct(productData);
      getTotal(productData);
    } else {
      setProduct(false);
      getTotal(false);
    }
  };

  //metodo para obtener el precio total a pagar y descuento
  const getTotal = productData => {
    let total = 0;
    let productPrice = 0;
    let Porcdescuento = 0;
    let descuento = 0;
    let totalDescuento = 0;
    for (let index = 0; index < productData.length; index++) {
      if(productData[index].isOff == true){
        productPrice = productData[index].productPrice;
        Porcdescuento = productData[index].offPercentage;
        total = total + productPrice;
        descuento = descuento + (productPrice*(Porcdescuento/100));
        totalDescuento = total - descuento;

      }else if (productData[index].isOff == false) {
        productPrice = productData[index].productPrice;
        Porcdescuento = 0;
        total = total + productPrice;
        descuento = descuento + (productPrice*(Porcdescuento/100));
        totalDescuento = total - descuento;        
      }
    }
    setTotal(total);
    setDescuento(descuento);
    setTotalDescuento(totalDescuento);
  };

  const removeItemFromCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      for (let index = 0; index < array.length; index++) {
        if (array[index] == id) {
          array.splice(index, 1);
        }
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        getDataFromDB();
      }
    }
  };

  const checkOut = async () => {
    try {
      await AsyncStorage.removeItem('cartItems');
    } catch (error) {
      return error;
    }

    ToastAndroid.show('Los Productos llegaran muy pronto, gracias por su compra!', ToastAndroid.SHORT);

    navigation.navigate('Home');
  };

  //Metodo para presentar los productos
  const renderProducts = (data,index) => {
    return(
     <TouchableOpacity 
     key={data.key}
     onPress={() => navigation.navigate("PorductInfo",{productID: data.id})} 
     style= {styles.cart}>
      <View style={styles.contenedorImagen}>
        <Image source={data.productImage} style={{width: '100%',height: '100%',resizeMode: 'contain',}}/>
      </View>

      <View style={{flex: 1,height: '100%',justifyContent: 'space-around',}}>

        <View>
          <Text style={styles.textProducto}>
            {data.productName}
          </Text>
          <View style={{marginTop: 4,flexDirection: 'row',alignItems: 'center',opacity: 0.6,}}>
            <Text style={styles.textProductoPrecio}>&#36; {data.productPrice}</Text>
            <Text>

            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row',justifyContent: 'space-between',alignItems: 'center',}}>
          <TouchableOpacity onPress={() => removeItemFromCart(data.id)}>
            <MaterialCommunityIcons name='delete-outline' style={styles.btnEliminar}/>
          </TouchableOpacity>
        </View>

      </View>
     </TouchableOpacity>
    )
  }

  return (
    <View style={{width: '100%',height: '100%',backgroundColor: COLOURS.white,position: 'relative'}}>

      <ScrollView>

        <View style={styles.contenedorInicio}>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <MaterialCommunityIcons name='chevron-left' style={styles.btnExit}/>
          </TouchableOpacity>
          <Text style={{fontSize: 14,color: COLOURS.black,fontWeight: '4000',}}>
              Detalles del Pedido
          </Text>
          <View></View>
        </View>

        <Text style={styles.textTitulo}>Mi Carrito</Text>

        <View style= {{paddingHorizontal: 16}}>
          {product ? product.map(renderProducts) : null}
        </View>

        <View>
          <View style={{paddingHorizontal: 16,marginVertical: 10,}}>
            <Text style={styles.textSubTitulo1}>Lugar de Envio</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', width: '88%', alignItems: 'center',}}>
                <View style={styles.logoEnvio}>
                  <MaterialCommunityIcons name='truck-delivery-outline' style={{fontSize: 18, color: COLOURS.blue}}/>
                </View>
                <View>
                  <Text  style={{fontSize: 14, color: COLOURS.black, fontWeight: '500'}}>Residencial Santa Lucia</Text>
                </View>
              </View>
              <MaterialCommunityIcons name='home-map-marker' style={{
                fontSize: 22, color: COLOURS.black
              }}/>
            </View>
          </View>

          <View style={{paddingHorizontal: 16,marginVertical: 10,}}>
            <Text style={styles.textSubTitulo2}>Metodo de Pago</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{flexDirection: 'row', width: '88%', alignItems: 'center',}}>
                <View style={styles.IconoPago}>
                  <Text style={{fontSize:10, fontWeight: '900', color: COLOURS.blue, letterSpacing: 1}}>VISA</Text>
                </View>
                <View>
                  <Text  style={{fontSize: 14, color: COLOURS.black, fontWeight: '500'}}>Tarjeta de Credito</Text>
                </View>
              </View>
              <MaterialCommunityIcons name='card-bulleted' style={{fontSize: 22, color: COLOURS.black}}/>
            </View>
          </View>

          <View style={{paddingHorizontal: 16, marginTop: 40, marginBottom: 80,}}>
            <Text style={{fontSize: 16, color: COLOURS.black, fontWeight: '500', letterSpacing: 1, marginBottom: 20,}}>
              Informacion de la Orden
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8,}}>
              <Text style={{fontSize: 12, fontWeight: '400', maxWidth: '80%', color: COLOURS.black, opacity: 0.5}}>SUB TOTAL</Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: COLOURS.black, opacity: 0.8}}>&#36;{total}</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22,}}>
              <Text style={{fontSize: 12, fontWeight: '400', maxWidth: '80%', color: COLOURS.black, opacity: 0.5}}>Descuento</Text>
              <Text style={{fontSize: 12, fontWeight: '400', color: COLOURS.black, opacity: 0.8}}>&#36;{descuento}</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 12, fontWeight: '400', maxWidth: '80%', color: COLOURS.black, opacity: 0.5}}>Total</Text>
              <Text style={{fontSize: 22, fontWeight: '500', color: COLOURS.black,}}>&#36;{totalDescuento}</Text>
            </View>
          </View>

        </View>

      </ScrollView>

      <View
        style={styles.contenedorBtn}>
        <TouchableOpacity
          onPress={() => (total != 0 ? checkOut() : null)}
          style={styles.estilobtnVerifica}>
          <Text style={styles.textbtnVerificar}>
            VERIFICAR (&#36;{totalDescuento})
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  cart: {
    white: '100%',
    height: 100,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  contenedorImagen: {
    width: '30%',
    height: 100,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOURS.backgroundLight,
    borderRadius: 10,
    marginRight: 22,
  },
  textProducto: {
    fontSize: 14,
    maxWidth: '100%',
    color: COLOURS.black,
    fontWeight: '600',
    letterSpacing: 1,
  },
  textProductoPrecio: {
    fontSize:14,
    fontWeight: '400',
    maxWidth: '85%',
    marginRight: 4,
    color: COLOURS.black,
  },
  btnEliminar: {
    fontSize: 16,
    color: COLOURS.backgroundDark,
    backgroundColor: COLOURS.backgroundLight,
    padding: 8,
    borderRadius: 100,
  },
  contenedorInicio: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnExit: {
    fontSize: 18,
    color: COLOURS.backgroundDark,
    padding: 12,
    backgroundColor: COLOURS.backgroundLight,
    borderRadius: 12,
  },
  textTitulo: {
    fontSize: 20,
    color: COLOURS.black,
    fontWeight: '500',
    letterSpacing: 1,
    paddingTop: 20,
    paddingLeft: 16,
    marginBottom: 10,
  },
  textSubTitulo1: {
    fontSize: 16,
    color: COLOURS.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 20,
  },
  logoEnvio: {
    color: COLOURS.blue, 
    backgroundColor: COLOURS.backgroundLight, 
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 12, 
    borderRadius: 10, 
    marginRight: 18,
  },
  textSubTitulo2 : {
    fontSize: 16,
    color: COLOURS.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 20,
  },
  IconoPago: {
    color: COLOURS.blue, 
    backgroundColor: COLOURS.backgroundLight, 
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 12, 
    borderRadius: 10, 
    marginRight: 18,
  },
  contenedorBtn: {
    position: 'absolute',
    bottom: 10,
    height: '8%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  estilobtnVerifica: {
    width: '86%',
    height: '90%',
    backgroundColor: COLOURS.blue,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbtnVerificar: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    color: COLOURS.white,
    textTransform: 'uppercase',
  }
})

export default MyCart;