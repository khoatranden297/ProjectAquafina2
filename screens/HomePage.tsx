import React, { useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, StyleSheet, View, Button, FlatList, Image, TouchableOpacity,Alert } from 'react-native';
import { TextStyle } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import MinhHang from '../assets/images/minhang.png'
import Hinhtron from '../assets/images/hinhtron1.png'
import Chai from '../assets/images/chai.png'
import logo from '../assets/images/logo.png'
import start from '../assets/images/start.png'
import hoatdong from '../assets/images/hoatdong.png'
import quetma from '../assets/images/QR.png'
import bottom from '../assets/images/bottom.png'
import kihieu from '../assets/images/kihieu.png'
import muiten from '../assets/images/muiten.png'
interface Props {
    navigation: any;
  }
 
  const HomePage: React.FC<Props> = ({ navigation }) => {
    const timeId = useRef<NodeJS.Timeout | null>(null);
    
    return (
      <View style={styles.home}>
        <Image style={styles.logo} source={logo} /> 
        <Text style={styles.txtChao}>CHÀO MỪNG BẠN ĐẾN VỚI </Text>
        <Text style={styles.txtTram}>TRẠM TÁI SINH</Text>
        <Image style={styles.kihieu} source={kihieu} /> 
        <Text style={styles.txtCua}>CỦA AQUAFINA</Text>
        <Text style={styles.txtNoi}>NƠI TÁI SINH DÒNG ĐỜI MỚI CHO CHAI NHỰA</Text>
        <Image style={styles.img} source={MinhHang} /> 
        <Image style={styles.imgT} source={Hinhtron}/>
        <Image style={styles.imgChai} source={Chai}/>
  
        <Image style={styles.imgStart} source={start}/>
        <Image style={styles.imgmuiten} source={muiten}/>
        <TouchableOpacity style={styles.btnB}
          onPress={() => {
            // clearInterval(timeId.current)
            navigation.navigate("User");
            console.log("click");
          }}
        >
          <Text style={styles.txtB}>BẮT ĐẦU</Text>
        </TouchableOpacity>
        <Image style={styles.txthoatdong} source={hoatdong}/>
        <Image style={styles.Qr} source={quetma}/>
        <Text style={styles.txtXem}>Xem thêm</Text>
        <View style={styles.container}>
          <Image style={styles.bottom} source={bottom}/>
        </View>
      </View>
    );
  };
  
  export default HomePage;
  const styles = StyleSheet.create({
    home: {
      position: 'absolute',
      width: 1080,
      height: '100%',
      backgroundColor: '#EAF0F8',
    },
    txtaqua: {
      marginTop: 10,
      color: '#0C65AF',
      width: 154,
      height: 52.8,
      justifyContent: 'center',
      marginLeft: '14.65%',
      fontSize: 25,
    },
    txtChao: {
        position: "absolute",
        marginLeft: "4%",
        marginRight: "-0.37%",
        marginTop: "0.57%",
        marginBottom: "81.85%",
        // fontFamily:"SVN-Gotham",
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 25,
        lineHeight: 120,
        display: "flex",
        alignItems: 'center',
        textAlign: 'center',
        color: "#1545A5",

    },
    txtTram: {

        position: "absolute",
        marginLeft: "4%",
        marginRight: "0.62%",
        marginTop: 40,
        marginBottom: "51.45%",
        // fontFamily:"SVN-Gotham",
        fontStyle: 'normal',
        fontWeight: "900",
        fontSize: 40,
        lineHeight: 120,
        display: "flex",
        alignItems: 'center',
        textAlign: 'center',
        color: "#1545A5",
        
    },
    txtCua: {
        position: "absolute",
        marginLeft: 70,
        marginTop: 80,
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 40,
        lineHeight: 120,
        display: "flex",
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: -0.03,
        color: "#1545A5"
    },
    txtNoi: {
        position: "absolute",
        marginLeft: 50,
        marginTop: 110,
        fontStyle: "normal",
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 120,
        display: "flex",
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: -0.04,
        textTranfrom: "uppercase",
        color: "#1545A5"
    },
    img:{
        position:'absolute',
        width:400,
        height:700,
        marginLeft:7,
        // marginRight:30,
        marginTop:170,
        
    },
    imgT:{
        position:'absolute',
        width:410,
        height:400,
        marginLeft:3,
        // marginRight:30,
        marginTop:360,
    },
    imgChai:{
        position:'absolute',
        width:400,
        height:620,
        marginLeft:15,
        marginRight:28,
        marginTop:150,  
    },
    container:{
        position:'absolute',
        width:"100%",
        height:100,
        marginTop: 720,
        backgroundColor:"rgba(255, 255, 255, 0) 0% ,rgba(255, 255, 255, 0.9271) 59.9%,#FFFFFF @ 100%",
        
    },
    logo:{
        position:'absolute',
        width:100,
        height:30,
        marginLeft:150,
        marginRight:28,
        marginTop:10,   
    },
    imgStart:{
        position:'absolute',
        width:200,
        height:200,
        marginLeft:120,
        marginRight:28,
        marginTop:450,
    },
    txthoatdong:{
        position:'absolute',
        width:280,
        height:30,
        marginLeft:65,
        marginTop:680,
    },
    Qr:{
        position:'absolute',
        width:50,
        height:50,
        marginLeft:360,
        marginTop:650,
    },
    txtXem:{
        position:'absolute',
        width:50,
        height:50,
        fontSize:10,
        marginLeft:360,
        marginTop:710,
        color:"#1545A5",
    },
    bottom:{
        position:'absolute',
        width:420,
        height:20,
        marginTop:50
        
    },
    kihieu:{
        position:'absolute',
        width:100,
        height:60,
        marginLeft:55,
        marginTop:75,
        
    },
    imgmuiten:{
        position:'absolute',
        width:200,
        height:200,
        marginLeft:120,
        marginRight:28,
        marginTop:450,
    },
    btnB:{
        position: "absolute",
        width: 140,
        height: 140,
        marginLeft: 150,
        marginTop: 480,
        backgroundColor: "#0047BA",
        borderRadius: 100,
        boxShadow:"0px 0px 17.8665px #C3CEDF",
        shadowColor: "rgba(155, 192, 255, 0.77)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    txtB:{
        position: "absolute",
        width: 100,
        height: 100,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 30,
        marginLeft: 20,
        marginTop: 30,
        textAlign: "center",
        color: "#FFFFFF",
       
    },
})
  