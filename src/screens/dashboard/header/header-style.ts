import { StyleSheet } from "react-native";
import { Typography } from '../../../theme/typography'
import { COLORS } from '../../../theme/colors'
import { Spacing } from "../../../theme/spacing";

export const styles = StyleSheet.create({
    overThinkerImageContainer:{
        // marginTop:100,
        // marginBottom: 24,
        marginLeft: 224,
        // backgroundColor:"red"

        // paddingHorizontal:4,
        // paddingVertical:11,
      },
      dayCounterDetails:{
        color:COLORS.white,
        fontFamily:Typography.primary.bold
      },
      overThinkeText:{
        color:COLORS.white,
    
        fontFamily:Typography.secondary.bold,
        fontSize:24,
        lineHeight:32.4,
      },
      container: {
          // marginBottom:565
      },
      subcontainer: {
        // height: 60,
        // marginBottom:565
        // flex:1,
        // flexDirection:'row',
        // marginTop:Spacing.space_44,
        // backgroundColor:"yellow",
        // marginBottom:143
        paddingVertical:19.5,
        paddingLeft:20

      },
      overthinkerDetailsSubContainer: {
        // backgroundColor: 'yellow',
        position: 'absolute',
        bottom: 24,
        marginTop:166,
        // marginBottom: 24,
        marginLeft: 24,
      },
      calendarImage: {
        height: 16,
        width: 16,
        marginVertical: 2.5,
      },
      dateDetailsContainer: {
        // marginTop: 19.5,
        // backgroundColor: 'yellow',
        // paddingVertical: 2.5,
        // marginLeft: 20,
        gap: 8,
      },
      dateDetailsSubContainer: {
        // backgroundColor:"green",
        flexDirection: 'row',
        // marginLeft: 20,
        // marginVertical: 19.5,
        height: 21,
        gap: Spacing.space_8,
      },
      overthinkerDetailsContainer: {
        flexDirection: 'row',
        alignContent: 'space-between',
        marginBottom: 0,
      },
      date: {
        color: COLORS.white,
        fontFamily: Typography.primary.bold,
        fontSize: 14,
        lineHeight: 21,
      },
      overThinkerImage: {
        width:148,
        height:146,
    //    flex:1,
        // position:'absolute',bottom:0,
        // marginBottom: 0,
        // marginRight: 0,
        // paddingHorizontal:10,
        marginVertical:12,
        marginRight:4 ,
        marginLeft:4 ,
        
      },
 })