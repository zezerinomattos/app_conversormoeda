import React,{ useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import styles from './styles';

import api from '../../services/api';
import { chave_key } from '../../../chave_key';

export default function Home(){

    const [valorMoedaB, setValorMoedaB] = useState('');
    const [valorConvertido, setValorConvertido] = useState(0);

    const [moedaA, setMoedaA] = useState('USD');
    const [moedaB, setMoedaB] = useState('BRL');

    async function converter(){
        await api.get(`/convert?q=${moedaA}_${moedaB}&compact=ultra&apiKey=${chave_key}`)
            .then(response => {
                let cotacao = response.data.USD_BRL;

                let result = (cotacao * parseFloat(valorMoedaB));
                setValorConvertido(result.toFixed(2));
                Keyboard.dismiss();
            })
            .catch(error => {
                console.log(error);
            })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{moedaA} para {moedaB}</Text>

            <View style={styles.selectMoedas}>
                <TextInput 
                    value={moedaA}
                    placeholderTextColor={'#262626'}
                    style={styles.inputMoeda}
                    onChangeText={setMoedaA}
                />

                <TextInput 
                    value={moedaB}
                    placeholderTextColor={'#262626'}
                    style={styles.inputMoeda}
                    onChangeText={setMoedaB}
                />
            </View>

            <TextInput 
                placeholder='Valor a ser convertido'
                placeholderTextColor={'#262626'}
                style={styles.areaInput}
                keyboardType='numeric'
                onChangeText={setValorMoedaB}
            />

            <TouchableOpacity style={styles.buttonArea} onPress={converter}>
                <Text style={styles.buttonText} >Converter</Text>
            </TouchableOpacity>

            <Text style={styles.valorConvertido}>
                {valorConvertido === 0 ? '' : valorConvertido}
            </Text>
        </View>
    );
}