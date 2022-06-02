import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Texto from './Texto';

export default function Botao({ texto, onPress, style }) {
  return <TouchableOpacity style={[estilos.botao, style]} onPress={onPress}>
  <Texto style={estilos.textoBotao}>{ texto }</Texto>
</TouchableOpacity>
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#000000",
    paddingVertical: 16,
    borderRadius: 6
  },
  textoBotao: {
    textAlign: "center",
    color: "#6E6E6E",
    fontSize: 26,
    lineHeight: 26,
    fontWeight: "bold",
  },
});