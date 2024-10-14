import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform,Text, TouchableOpacity } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

export default function TabTwoScreen() {
  const[date,setDate]=useState(new Date())
  const[show,setShow]=useState(false)

  const tarihata=(event,secilitarih)=>{
    const tari=secilitarih || date;

    setDate(date)
    setShow(false)
  }

  const takvimgoster=()=>{
    setShow(true)
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
      
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>
      <Text>{JSON.stringify(date)}</Text>

    <TouchableOpacity onPress={takvimgoster}>
      <Text>Tarih Seç</Text>
    </TouchableOpacity>

      </ThemedView>
      {show && (
      <DateTimePicker
      testID='dateTimePicker'
      value={date}
      mode="date"
      onChange={tarihata}
      />
      )}
        
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
