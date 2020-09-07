import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import * as React from 'react';
import {encontrarMejorCombinacion} from '../funciones/encontrar-mejor-combinacion';

export const FormularioPociones = ({campos}: any) => {
    const keysCampo = Object.keys(campos);

    let valores: number[] = new Array(5).fill(0);

    let danio = 0;

    let iteracion = 1;

    const escucharCambios = (valor: string, posicion: number) => {
        const valorASetear: number = +valor;
        valores[posicion] = valorASetear;
    };

    return (
        <View>
            {keysCampo.map((llave) => {
                const campo = campos[llave];
                return (
                    <View key={llave}>
                        <Text>
                            <Image
                                style={estilosFormulario.imagenes}
                                source={campo.imagen}/>

                            {campo.label}
                        </Text>
                        <TextInput
                            style={estilosFormulario.formulario}
                            {...campo.input}
                            keyboardType={'numeric'}
                            onChangeText={
                                (texto) => escucharCambios(texto, campo.input.posicion)
                            }
                        />
                    </View>
                )
            })}
            <Button
                title={'Encontrar mejor combinación'}
                onPress={
                    () => encontrarMejorCombinacion(
                        valores,
                        danio,
                        iteracion
                    )
                }
            />
        </View>
    )
};

const estilosFormulario = StyleSheet.create({
    formulario: {
        paddingBottom: 20,
    },
    imagenes: {
        width: 15,
        height: 15
    }
});
