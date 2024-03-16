import { StyleSheet } from "react-native";
import { COLORS } from '../../theme/colors';


export const styles=StyleSheet.create({
    MasteryOftheDayCard:{
        backgroundColor:COLORS.primary[50]
    },
    FlatList:{
        
        marginHorizontal:20,
        marginVertical:16,
        marginBottom:88
        
    },
    flatListContainer:{
        flex:1,
        backgroundColor:COLORS.white
    }
})