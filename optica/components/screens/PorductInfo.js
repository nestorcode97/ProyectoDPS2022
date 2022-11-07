import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import {COLOURS, Items} from '../database/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductInfo = ({route, navigation}) => {
  const {productID} = route.params;

  const [product, setProduct] = useState({});

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  //cada que se realiza un cambio o se maneja informacion interactua con la el metodo getDataFromDB
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //Almacena la informacion de los productos
  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  //Metodo para añadir al carrito
  const addToCart = async id => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    if (itemArray) {
      let array = itemArray;
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'El producto se agrego al carrito',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(id);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'El producto se agrego al carrito',
          ToastAndroid.SHORT,
        );
        navigation.navigate('Home');
      } catch (error) {
        return error;
      }
    }
  };

  //ver el scroll para ver los productos
  const renderProduct = ({item}) => {
    return (
      <View style={{width: width,height: 240,alignItems: 'center',justifyContent: 'center',}}>
        <Image source={item} style={{width: '100%',height: '100%',resizeMode: 'contain',}}/>
      </View>
    );
  };

  return (
    <View style={styles.contenedor}>
      <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle="dark-content"/>
      <ScrollView>
        <View style={styles.subContenedor}>
          <View
            style={styles.contenedorButton}>
            <TouchableOpacity onPress={() => navigation.goBack('Home')}>
              <Entypo name="chevron-left" style={styles.buttonExit}/>
            </TouchableOpacity>
          </View>
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {x: scrollX}}}],
              {useNativeDriver: false},
            )}/>
          <View style={styles.contenedorImagen}>
            {product.productImageList
              ? product.productImageList.map((data, index) => {
                  let opacity = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [0.2, 1, 0.2],
                    extrapolate: 'clamp',
                  });
                  return (
                    //Animacion del Scoll
                    <Animated.View
                      key={index}
                      style={{
                        width: '16%',
                        height: 2.4,
                        backgroundColor: COLOURS.black,
                        opacity,
                        marginHorizontal: 4,
                        borderRadius: 100,
                      }}></Animated.View>
                  );
                })
              : null}
          </View>
        </View>

        <View style={{paddingHorizontal: 16,marginTop: 6,}}>

          <View style={{flexDirection: 'row',alignItems: 'center',marginVertical: 14,}}>
            <Entypo name="shopping-cart" style={{fontSize: 18,color: COLOURS.blue,marginRight: 6,}}/>
            <Text style={{fontSize: 12,color: COLOURS.black,}}>
              Shopping
            </Text>
          </View>

          <View style={styles.contenedorNombreProducto}>
            <Text style={styles.textProducto}>
              {product.productName}
            </Text>
            <Ionicons name="link-outline" style={styles.IconoText}/>
          </View>
          <Text style={styles.textDescripcion}>
            {product.description}
          </Text>

          <View style={styles.contenedorDireccion}>
            <View style={{flexDirection: 'row',width: '80%',alignItems: 'center',}}>
              <View style={styles.contenedorIconD}>
                <Entypo name="location-pin" style={{fontSize: 16,color: COLOURS.blue,}}/>
              </View>
              <Text style={{color: 'black'}}> Alameda Franklin Delano Roosevelt,{'\n'}San Salvador</Text>
            </View>
            <Entypo name="chevron-right" style={{fontSize: 22,color: COLOURS.backgroundDark,}}/>
          </View>

          <View style={{paddingHorizontal: 16,}}>
            <Text style={styles.textPrecio}>
               Precio: &#36; {product.productPrice}
            </Text>
            <Text style={{color: 'black'}}>
              Descuento: &#36;{product.isOff ? ((product.productPrice*(product.offPercentage/100)).toFixed(2)) : 0 }
            </Text>
          </View>

        </View>
      </ScrollView>

      <View style={styles.contenedorbtnCarrito}>
        <TouchableOpacity
          onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
          style={styles.btnCarritoStilo}>
          <Text style={styles.txtbtnCarrito}>
            {product.isAvailable ? 'Añadir al Carrito' : 'No disponible'}
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    width: '100%',
    height: '100%',
    backgroundColor: COLOURS.white,
    position: 'relative',
  },
  subContenedor: {
    width: '100%',
    backgroundColor: COLOURS.backgroundLight,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  contenedorButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    paddingLeft: 16,
  },
  buttonExit: {
    fontSize: 18,
    color: COLOURS.backgroundDark,
    padding: 12,
    backgroundColor: COLOURS.white,
    borderRadius: 10,
  },
  contenedorImagen: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 32,
  },
  contenedorNombreProducto: {
    flexDirection: 'row',
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textProducto: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginVertical: 4,
    color: COLOURS.black,
    maxWidth: '84%',
  },
  IconoText: {
    fontSize: 24,
    color: COLOURS.blue,
    backgroundColor: COLOURS.blue + 10,
    padding: 8,
    borderRadius: 100,
  },
  textDescripcion: {
    fontSize: 12,
    color: COLOURS.black,
    fontWeight: '400',
    letterSpacing: 1,
    opacity: 0.5,
    lineHeight: 20,
    maxWidth: '85%',
    maxHeight: 44,
    marginBottom: 18,
  },
  contenedorDireccion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 14,
    borderBottomColor: COLOURS.backgroundLight,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  contenedorIconD: {
    color: COLOURS.blue,
    backgroundColor: COLOURS.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 100,
    marginRight: 10,
  },
  textPrecio: {
    fontSize: 18,
    fontWeight: '500',
    maxWidth: '85%',
    color: COLOURS.black,
    marginBottom: 4,
  },
  contenedorbtnCarrito: {
    position: 'absolute',
    bottom: 10,
    height: '8%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCarritoStilo: {
    width: '86%',
    height: '90%',
    backgroundColor: COLOURS.blue,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtbtnCarrito: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    color: COLOURS.white,
    textTransform: 'uppercase',
  }
})

export default ProductInfo;