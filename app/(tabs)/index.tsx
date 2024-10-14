import { StyleSheet, Text, Touchable, TouchableOpacity, View,TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router, useFocusEffect } from 'expo-router'
import { signInWithEmailAndPassword,signOut } from 'firebase/auth'
import { push, ref, set } from 'firebase/database'
import Firebase from '../../firebaseconfig'

const index = () => {
  const[sayi,setSayi]=useState(0)
  const[mesaj,setMesaj]=useState("")
  const[user,setUser]=useState("")

  useFocusEffect(()=>{
    const giriskontrol= async ()=>{
      const token= await AsyncStorage.getItem('giris');
      if(!token){
        router.replace('./login')
      }
      console.log(token);

      setUser(token)

      set(ref(Firebase.database,'test'),{
        'mesaj':'bu bir test'})
        
    }
    giriskontrol();
  })


  const cikisyap=async()=>{
    try{
      await signOut(Firebase.auth);
      await AsyncStorage.removeItem('giris');
      setSayi(sayi+1)
    
    }
    catch(error){
      console.log(error)
    }
  }

  const gonder=()=>{
    const referans=push(ref(Firebase.database,'users/'+user+'/veri'));
    set(referans,{
      'zaman':Date.now(),
      'mesaj':mesaj
    }).then(()=>{
      setMesaj('')
    })
  }

  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <View style={styles.card}>
        <Text style={styles.cardtitle}>Mesaj Yaz</Text>
        <TextInput style={styles.input} value={mesaj} onChangeText={setMesaj} placeholder='Email Adresiniz'></TextInput>
        <TouchableOpacity style={styles.buton} onPress={gonder}>
            <Text style={styles.butontext}>Gönder</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.cikisbtn} onPress={cikisyap}>
        <Text style={styles.cikistext}>Güvenli Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  cikisbtn:{
    backgroundColor:'crimson',
    padding:8,
  },
  cikistext:{
    color:'white',
    textAlign:'center',
    fontSize:19
  },
  card:{
    margin:20,
    padding:30,
    borderColor:"#cccccc",
    borderWidth:1,
    borderRadius:30,
    backgroundColor:'floralwhite'
},
input:{
    borderBottomWidth:2,
    borderBottomColor:'#cccccc',
    padding:5,
    fontSize:18,
    marginBottom:20,
},
buton:{
    alignItems:'center',
    backgroundColor:'crimson',
    padding:8,
    marginTop:50,
    borderRadius:6,
},
butontext:{
    fontSize:20,
    color:'white',
    fontWeight:'bold',
},
cardtitle:{
    fontSize:36,
    fontWeight:'bold',
    color:'black',
    textAlign:'center',
    marginBottom:50,
}
})