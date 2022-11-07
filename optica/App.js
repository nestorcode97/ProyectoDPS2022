import { View, Text,Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, Button, Alert, ToastAndroid} from 'react-native'
import React from 'react'
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/screens/Home'
import MyCart from './components/screens/MyCart';
import PorductInfo from './components/screens/PorductInfo';
import Products from './components/screens/Products';
import Accesorios from './components/screens/Accesorios';

import {BlurView} from 'expo-blur';

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {initializeApp} from 'firebase/app';
import {firebaseConfig} from './firebase'

import AnimatedLottieView from "lottie-react-native";

const uri = 'https://i.pinimg.com/564x/01/95/df/0195dfba74f3148618322ee7735baaaf.jpg'
const logo = 'https://i.pinimg.com/564x/84/d6/9e/84d69e74e7c77fee80d6500f16cc7324.jpg'


function Splash(){

  const navigation = useNavigation();

  return(
    <View style={{
      flex:1,
      backgroundColor: 'black',
      alignItems: 'center'
  }}
  >
      <AnimatedLottieView source={require('./assets/lf30_editor_hqy12n1o.json')}
      autoPlay
      loop = {false}
      speed = {1.2}
      onAnimationFinish = {() => {
          console.log('Finis')
          navigation.navigate('Login')
      }}
      />
  </View>
  )
}

function LoginScreen() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth,email,password).then((userCredential)=>{
      console.log('Cuenta creada')
      const user = userCredential.user;
      console.log(user)
      Alert.alert('Usuario Registrado')
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }

  const handleSignIn = () =>{
    signInWithEmailAndPassword(auth,email,password).then((userCredential) =>{
      console.log('Ingresando')
      const user = userCredential.user;
      console.log(user)
      ToastAndroid.show(
        'Iniciando Sesion',
        ToastAndroid.SHORT,
      );
      navigation.navigate('Home')
    })
    .catch(error => {
      console.log(error)
      Alert.alert("Error de autenticacion")
    })
  }

  return (
    <View  style={styles.container}>
      <Image source={{uri}} style={[styles.imagen, StyleSheet.absoluteFill]}/>
      <ScrollView contentContainerStyle={{
        flex:1,
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
      }}>
        <BlurView intensity={200}>
          <View style={styles.login}>
            <Image source={{uri: logo}} style={styles.logo}/>

            <View>
              <Text style={{fontSize:17, fontWeight:'400', color:'white'}}>Correo</Text>
              <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='Correo'></TextInput>
            </View>

            <View>
              <Text style={{fontSize:17, fontWeight:'400', color:'white'}}>Contraseña</Text>
              <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder='Contraseña' secureTextEntry={true}></TextInput>
            </View>

            <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={{fontSize:17, fontWeight:'400', color:'white'}}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, {backgroundColor: 'white', borderColor:'black'}]}>
            <Text style={{fontSize:17, fontWeight:'400', color:'black'}}>Crear Cuenta</Text>
            </TouchableOpacity>

          </View>
        </BlurView>
      </ScrollView>
    </View>
  )
}



export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Splash'
      screenOptions={{
        headerShown: false,    
      }}>
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='MyCart' component={MyCart}/>
        <Stack.Screen name='PorductInfo' component={PorductInfo}/>
        <Stack.Screen name='Products' component={Products}/>
        <Stack.Screen name='Accesorios' component={Accesorios}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  imagen:{
    width:'100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
  },
  login:{
    width:350,
    height:600,
    borderColor: '#fff',
    borderWidth:2,
    borderRadius: 10,
    padding:10,
    alignItems:'center',
  },
  logo:{
    width:100,
    height:100,
    borderRadius:25,
    borderColor:'black',
    borderWidth: 1,
    marginVertical:30,
  },
  input:{
    width:250,
    height:40,
    borderColor:'#fff',
    borderWidth:2,
    borderRadius:10,
    padding: 10,
    marginVertical:10,
    backgroundColor: '#ffffff90',
    marginBottom: 20,
    color:'black'
  },
  button:{
    width:250,
    height:40,
    borderRadius:10,
    backgroundColor: 'black',
    alignItems:'center',
    justifyContent:'center',
    marginVertical:10,
    borderColor: '#fff',
    borderWidth: 1,
  }
})