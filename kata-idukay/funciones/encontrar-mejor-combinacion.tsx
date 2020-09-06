import {Alert} from 'react-native';
import * as React from 'react';

export function encontrarMejorCombinacion(
    valores: number[],
    danio: number,
    iteracion: number
): any {
    const titulo = 'Mejor combinacion';
    let mensajes = '';
    if (valores.length > 0) {
        const nuevoArreglo = valores.filter(
            (elemento) => {
                if (elemento > 0) {
                    return elemento
                }
            }
        ).map(
            (elemento) => {
                return elemento - 1;
            }
        );

        switch (nuevoArreglo.length) {
            case 1:
                console.log(`Ataque ${iteracion}: Usar ${nuevoArreglo.length} poción distinta causa un 3% de daño`);
                danio += 3;
                break;
            case 2:
                console.log(`Ataque ${iteracion}: Usar ${nuevoArreglo.length - 1} poción distinta causa un 3% de daño`);
                console.log(`Ataque ${iteracion + 1}: Usar ${nuevoArreglo.length - 1} poción distinta causa un 3% de daño`);
                iteracion += 1;
                danio += 6;
                break;
            case 3:
                console.log(`Ataque ${iteracion}: Usar ${nuevoArreglo.length} pociones distintas causa un 10% de daño`);
                danio += 10;
                break;
            case 4:
                console.log(`Ataque ${iteracion}: Usar ${nuevoArreglo.length} pociones distintas causa un 20% de daño`);
                danio += 20;
                break;
            case 5:
                console.log(`Ataque ${iteracion}: Usar ${nuevoArreglo.length} pociones distintas causa un 25% de daño`);
                danio += 25;
                break;
            default:
                console.log(`El mayor daño que puede causar el mago es de ${danio}% de daño`);
                mensajes = `El mayor daño que puede causar el mago es de ${danio}% de daño`;
                Alert.alert(
                    titulo,
                    mensajes
                )
        }
        return encontrarMejorCombinacion(
            nuevoArreglo,
            danio,
            iteracion + 1
        );
    }
}
