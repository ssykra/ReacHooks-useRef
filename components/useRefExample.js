import React, {useState, useEffect, useRef} from 'react'
import {StyleSheet, TextInput, View, Text} from 'react-native';
import {styles} from '../assets/style'

export default function Example(props) {
  const [umur, setUmur] = useState('')
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <View style={StyleSheet.container}>
      <TextInput 
        style={styles.input}
        value={umur} 
        onChange={e => setUmur(e.target.value)}
        placeholder="Masukkan teks disini"/>
      <Text style={styles.teks}>Hai, namaku {props.nama}</Text>
      <Text style={styles.teks}>Umurku adalah {umur}</Text>
      <Text style={styles.teks}>Aku mengklik {renderCount.current} kali</Text>
    </View>
  )
}
