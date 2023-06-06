import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#0D0D0D',
    },
    selectMoedas:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputMoeda:{
        width: 100,
        height: 40,
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#8C8C8C',
        marginHorizontal: 5
    },
    areaInput:{
        width: 250,
        height: 40,
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#8C8C8C'
    },
    buttonArea:{
        width: 250,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#262626',
        borderRadius: 8
    },
    buttonText:{
        color: '#FFF',
        fontSize: 20,
    },
    valorConvertido:{
        marginVertical: 20,
        color: '#262626',
        fontSize: 25
    }
})

export default styles;