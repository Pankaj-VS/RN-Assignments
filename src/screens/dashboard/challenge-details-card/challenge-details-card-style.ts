import { StyleSheet } from "react-native";
import { Typography } from '../../../theme/typography'
import { COLORS } from '../../../theme/colors'
import { Spacing } from "../../../theme/spacing";
import { palette } from "../../../theme/palette";

export const styles = StyleSheet.create({
    audioIconBackground:{
        height:36,
        width:36,
        borderRadius:65.62,
        backgroundColor:COLORS.white,
        elevation: 6,
        shadowColor: palette.audioButtonShadow,
    
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        // justifyContent:'center',
        // alignItems:"center"
      },
      audioIcon:{
        height:12,
        width:12,
    
        marginTop:12,
        marginLeft:12,
      },
      timingDetails:{
        fontFamily:Typography.primary.medium,
      },
      titleText:{
        fontFamily:Typography.secondary.bold,
        fontSize:16,
        lineHeight:22.4,
        color:COLORS.neutral[700]
    
      },
      starIcon:{
        height:16,
        width:16
      },
      completedIcon:{
        height:16,
        width:16
      },
      listenTitle:{
        fontFamily:"Quicksand-bold",
        fontSize:12,
        height:18,
        letterSpacing:0.02,
        color:COLORS.neutral[500]
      },
      timingDetailsContainer:{
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:'row',
        // backgroundColor:"red"
      },
      details:{
        flexDirection:'row',
        gap:8,
      },
      detailsMainContainer: {
        // flex:1,
        alignItems:"center",
        justifyContent:'space-between',
        flexDirection: 'row',
        // backgroundColor:"yellow"
    
      },
      detailsSubContainer: {
        // flex:1,
        // flexDirection:'row',
        // backgroundColor:"pink"
    
      },
      overThinkerGrey: {
        width: 60.01,
        height: 52,
        // resizeMode:'cover',
        // overflow:"visible"
      },
      container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        gap: 16,
        // paddingVertical: 24,
        // backgroundColor: COLORS.primary[50],
        borderRadius:16
        
    
        // flex:1
      },
      imageContainer: {
          marginVertical:28,
      },
      detailsContainer: {
        flex:1,
        marginVertical:24,
        gap:4,
        // backgroundColor:"blue"
      },
      imageBackgroundContainer: {
        // backgroundColor:COLORS.primary[100],
        borderRadius:10,
    
        paddingTop:10,
        paddingBottom:10,
        paddingHorizontal:6
    
      },
 })