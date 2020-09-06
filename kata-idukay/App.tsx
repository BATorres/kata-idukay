import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FormularioPociones } from './componentes/FormularioPociones'

export default function App() {
  return (
    <View style={styles.container}>
      <FormularioPociones
          campos={{
            pocionRoja: {
              label: 'Poción roja',
              input: {
                posicion: 0,
                placeholder: 'Ingrese el número de pociones rojas'
              }
            },
            pocionAzul: {
              label: 'Poción azul',
              input: {
                posicion: 1,
                placeholder: 'Ingrese el número de pociones azules'
              }
            },
            pocionVerde: {
              label: 'Poción verde',
              input: {
                posicion: 2,
                placeholder: 'Ingrese el número de pociones verdes'
              }
            },
            pocionAmarilla: {
              label: 'Poción amarilla',
              input: {
                posicion: 3,
                placeholder: 'Ingrese el número de pociones amarillas'
              }
            },
            pocionGris: {
              label: 'Poción gris',
              input: {
                posicion: 4,
                placeholder: 'Ingrese el número de pociones grises'
              }
            }
          }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
