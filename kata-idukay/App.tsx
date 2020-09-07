import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FormularioPociones} from './componentes/FormularioPociones'

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Kata Idukay
            </Text>
            <Text style={styles.subtitulo}>
                Por: Andrés Torres Albuja
            </Text>
            <Text style={styles.instrucciones}>
                El mago debe ingresar el número de pociones
            </Text>
            <FormularioPociones
                campos={{
                    pocionRoja: {
                        label: 'Poción roja',
                        imagen: require('./assets/imagenes/pocion-roja.png'),
                        input: {
                            posicion: 0,
                            placeholder: 'Ingrese el número de pociones rojas'
                        }
                    },
                    pocionAzul: {
                        label: 'Poción azul',
                        imagen: require('./assets/imagenes/pocion-azul.png'),
                        input: {
                            posicion: 1,
                            placeholder: 'Ingrese el número de pociones azules'
                        }
                    },
                    pocionVerde: {
                        label: 'Poción verde',
                        imagen: require('./assets/imagenes/pocion-verde.png'),
                        input: {
                            posicion: 2,
                            placeholder: 'Ingrese el número de pociones verdes'
                        }
                    },
                    pocionAmarilla: {
                        label: 'Poción amarilla',
                        imagen: require('./assets/imagenes/pocion-amarilla.png'),
                        input: {
                            posicion: 3,
                            placeholder: 'Ingrese el número de pociones amarillas'
                        }
                    },
                    pocionGris: {
                        label: 'Poción gris',
                        imagen: require('./assets/imagenes/pocion-gris.png'),
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
        marginTop: 70,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 40,
    },
    subtitulo: {
        marginBottom: 25,
    },
    instrucciones: {
        marginBottom: 25,
    }
});
