import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 335, 
        height: 546, 
        paddingVertical: 32, 
        paddingHorizontal: 24, 
        marginVertical: 24, 
        borderRadius: 16,
        backgroundColor: "white",
    },
    subContainer1:{
        backgroundColor:"#F1FCFA",
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    buttonText:{
        fontFamily: 'Quicksand',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: '#178A86',
        borderRadius: 8,
    },
    buttonText2:{
        fontFamily: 'Quicksand',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: 'white',
        borderRadius: 8,
    },

    button:{
        paddingHorizontal: 20, 
    }
});
