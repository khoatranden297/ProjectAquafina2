import React, { Component, useEffect, useState, useRef } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Modal, Pressable } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import logo from '../assets/images/logo.png'
import kihieu from '../assets/images/kihieuGuide.png'
import locxoay from '../assets/images/kihieu.png'
import locxoay1 from '../assets/images/kihieu.png'
import hinhSp from '../assets/images/hinhSp.png'
import ketthuc from '../assets/images/hinhtronsuot.png'
import muiten from '../assets/images/muitensuot.png'
import canhbao from '../assets/images/canhbao.png'
import bien from '../assets/images/bien.png'
import xacnhan from '../assets/images/start.png'
interface StartProps {
    navigation: StackNavigationProp<any>;
}

const Start: React.FC<StartProps> = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [countdown, setCountdown] = useState(10);
    const timeId = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        timeId.current = setInterval(() => {
            setCountdown(prevState => prevState - 1);
        }, 1000);

        return () => {
            clearInterval(timeId.current as NodeJS.Timeout);
        }
    }, []);

    useEffect(() => {
        if (countdown <= 0) {
            clearInterval(timeId.current!);
            setModalVisible(!modalVisible);
        }
    }, [countdown]);
    return (
        <View style={styles.bck}>
          
          <Image style={styles.logo} source={logo} />
          <Text style={styles.txt1}>HÃY CHO CHAI RỖNG VÀO MÁY</Text>
          <View style={styles.container}>
            <Image style={styles.kihieu} source={kihieu} />
            <TouchableOpacity onPress={() => {
              navigation.goBack()
            }}>
              <Text style={styles.txtHuongdan}>Xem lại hướng dẫn </Text>
            </TouchableOpacity>
            <Text style={styles.txtTram}>TRẠM</Text>
            <Image style={styles.locxoay} source={locxoay} />
            <Text style={styles.txtTaiSinh}>TÁI SINH</Text>
            <Text style={styles.txtCua}>của AQUAFINA</Text>
            <Image style={styles.hinhSp} source={hinhSp} />
            <Text style={styles.txtLL}>Lần lượt bỏ từng chai nhựa rỗng vào ô bên trái</Text>
            <Text style={styles.txt2}>Tự động kết thúc sau:</Text>
            <Text style={styles.txt3}>{countdown} giây nữa </Text>
            {/* <Image style={styles.bck1} source={bien} /> */}
            <Image style={styles.imgStart} source={ketthuc} />
            <Image style={styles.imgmuiten} source={muiten} />
    
            <TouchableOpacity style={styles.btnB}
              onPress={() => {
                clearInterval(timeId.current as NodeJS.Timeout)
                navigation.navigate('Loading')
                console.log("hello")
              }}
            >
    
              {/* <Image style={styles.imgHT} source={hinhtron} /> */}
              <Text style={styles.txtB}>KẾT THÚC</Text>
    
            </TouchableOpacity>
          </View>
        </View>
      )
    }
    
    export default Start
    
    const styles = StyleSheet.create({
        bck: {
          position: "absolute",
          width: 1080,
          height: "100%",
          backgroundColor: "#EAF0F8",
        },
        logo: {
          position: 'absolute',
          width: 100,
          height: 30,
          marginLeft: 150,
          marginRight: 28,
          marginTop: 10,
        },
        txt1: {
          position: "absolute",
          width: 380,
          height: 30,
          marginLeft: 25,
          marginTop: 70,
          fontWeight: "700",
          fontSize: 25,
          display: "flex",
          alignItems: "flex-end",
          textAlign: "center",
          color: "#0047BA",
        },
        container: {
          position: "absolute",
          width: 380,
          height: 500,
          marginLeft: 15,
          marginTop: 130,
          backgroundColor: "#FFFFFF",
          borderRadius: 40,
        },
        kihieu: {
          position: "absolute",
          width: 380,
          height: 500,
          Color: "#EAF0F8",
      
        },
        txtHuongdan: {
          position: "absolute",
          width: 200,
          height: 50,
          // marginLeft:2,
          marginTop: 12,
          fontWeight: "bold",
          fontSize: 20,
          textAlign: "center",
          textDecorationLine: "underline",
          color: "#1545A5",
        },
        txtTram: {
          position: "absolute",
          width: 100,
          height: 100,
          marginLeft: 280,
          marginTop: 10,
          fontSize: 25,
          fontWeight: "900",
          textAlign: "center",
          color: "#1545A5"
        },
        txtTaiSinh: {
          position: "absolute",
          width: 100,
          height: 80,
          marginLeft: 280,
          marginTop: 38,
          fontSize: 20,
          fontWeight: "900",
          textAlign: "center",
          color: "#1545A5"
        },
        txtCua: {
          position: "absolute",
          width: 100,
          height: 100,
          marginLeft: 280,
          marginTop: 60,
          fontSize: 13,
          fontWeight: "bold",
          textAlign: "center",
          color: "#1545A5"
        },
        locxoay: {
          position: 'absolute',
          width: 70,
          height: 30,
          marginLeft: 285,
          marginTop: 15,
      
        },
        hinhSp: {
          position: "absolute",
          width: 350,
          height: 300,
          marginLeft: 30,
          marginTop: 100,
        },
        txtLL: {
          position: "absolute",
          width: 300,
          height: 100,
          marginLeft: 30,
          marginTop: 380,
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          color: "#707172",
        },
        txt2: {
          position: "absolute",
          width: 250,
          height: 100,
          //   marginLeft:5,
          marginTop: 450,
          fontSize: 18,
          fontWeight: "bold",
          textAlign: "center",
          color: "#707172",
        },
        txt3: {
          position: "absolute",
          width: 300,
          height: 100,
          marginLeft: 125,
          marginTop: 450,
          fontSize: 20,
          fontWeight: "900",
          textAlign: "center",
          color: "#FA4238",
        },
        ketthuc: {
          position: 'absolute',
          width: 150,
          height: 150,
          marginLeft: 120,
          marginRight: 28,
          marginTop: 500,
        },
        imgmuiten: {
          position: 'absolute',
          width: 130,
          height: 130,
          marginLeft: 130,
          marginRight: 28,
          marginTop: 520,
        },
        btnB: {
          position: "absolute",
          width: 90,
          height: 90,
          marginLeft: 150,
          marginTop: 540,
          backgroundColor: "#E6EDF9 url(abstract-pool-water-surface-background-with-sun-light-reflection.jpg)",
          borderRadius: 100,
          boxShadow: "0px 0px 17.8665px #C3CEDF",
          shadowColor: "rgba(155, 192, 255, 0.77)",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
      
          elevation: 5,
        },
        txtB: {
          position: "absolute",
          width: 100,
          height: 100,
          fontStyle: "normal",
          fontWeight: "500",
          fontSize: 20,
          paddingRight: 10,
          marginTop: 18,
        
          alignItems: "center",
          textAlign: "center",
          color: "#1545A5",
          display: "flex",
          
        },
        imgStart: {
          position: 'absolute',
          width: 130,
          height: 130,
          marginLeft: 130,
          marginTop: 520,
        },
        bck1: {
          position: "absolute",
          width: 90,
          height: 90,
          marginLeft: 150,
          marginTop: 540,
          backgroundColor: "#E6EDF9",
          mixBlendMode: "soft-light",
          borderRadius: 100,
          boxShadow: "0px 0px 15.4162px #C3CEDF",
          shadowColor: "rgba(155, 192, 255, 0.77)",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
      
          elevation: 5,
        },
        centeredView: {
      
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
        },
        modalView: {
          position: "absolute",
          width: 400,
          height: 350,
          margin: 20,
          backgroundColor: 'white',
          borderRadius: 20,
          padding: 35,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 2,
          shadowRadius: 4,
          elevation: 5,
        },
        button: {
          borderRadius: 20,
          padding: 10,
          elevation: 2,
        },
        buttonOpen: {
          backgroundColor: '#F194FF',
        },
        buttonClose: {
          backgroundColor: '#2196F3',
        },
        textStyle: {
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        },
        modalText: {
          width: 250,
          height: 150,
          position: "absolute",
          marginTop: 20,
          fontSize: 25,
          fontStyle: "normal",
          fontWeight: "700",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
        
          color: "#1545A5"
        },
        kihieuModal: {
          position: "absolute",
          width: 400,
          height: 350,
          marginLeft: 1,
      
      
        },
        txtcode: {
          width: 250,
          height: 150,
          position: "absolute",
          marginTop: 80,
          fontSize: 20,
          fontStyle: "normal",
          fontWeight: "400",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
         
          color: "#707172"
        },
        imgStartM: {
          position: 'absolute',
          width: 180,
          height: 180,
          marginLeft: 130,
          marginRight: 28,
          marginTop: 130,
        },
        imgmuitenM: {
          position: 'absolute',
          width: 180,
          height: 180,
          marginLeft: 130,
          marginRight: 28,
          marginTop: 130
        },
        btnT: {
          position: "absolute",
          width: 120,
          height: 120,
          marginLeft: 150,
          marginTop: 160,
          backgroundColor: "#0047BA",
          borderRadius: 100,
          boxShadow: "0px 0px 17.8665px #C3CEDF",
          shadowColor: "rgba(155, 192, 255, 0.77)",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
      
          elevation: 5,
        },
        txtT: {
          position: "absolute",
          width: 130,
          height: 120,
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 25,
          paddingRight: 8,
          marginTop: 30,
       
          alignItems: "center",
          textAlign: "center",
          color: "#FFFFFF",
          display: "flex",
        
        },
        btnK: {
          position: "absolute",
          width: 100,
          height: 100,
          marginLeft: 150,
          marginTop: 450,
          backgroundColor: "#F2F4F5",
          borderRadius: 100,
          boxShadow: "0px 0px 20px #C3CEDF",
          shadowColor: "radial-gradient(121.14% 387.79% at 16.35% -42.71%, #DADADA 0%, #DADADA 93.31%)",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
      
          elevation: 5,
        },
        txtK: {
          position: "absolute",
          width: 130,
          height: 120,
          fontStyle: "normal",
          fontWeight: "bold",
          fontSize: 20,
          paddingRight: 25,
          marginTop: 40,
         
          alignItems: "center",
          textAlign: "center",
          color: "#1545A5",
          display: "flex",
          
        },
        txtTram1: {
          position: "absolute",
          width: 100,
          height: 100,
          marginLeft: 280,
          marginTop: 10,
          fontSize: 25,
          fontWeight: "900",
          textAlign: "center",
          color: "#1545A5"
        },
        txtTaiSinh1: {
          position: "absolute",
          width: 100,
          height: 80,
          marginLeft: 280,
          marginTop: 38,
          fontSize: 20,
          fontWeight: "900",
          textAlign: "center",
          color: "#1545A5"
        },
        txtCua1: {
          position: "absolute",
          width: 100,
          height: 100,
          marginLeft: 270,
          marginTop: 60,
          fontSize: 13,
          fontWeight: "450",
          textAlign: "center",
          color: "#1545A5"
        },
        locxoay1: {
          position: 'absolute',
          width: 100,
          height: 30,
          paddingRight:"100%",
          marginTop: 15,
      
        },
        txtE:{
          fontStyle:"normal",
          fontWeight:"700", 
          fontSize:25,
          marginTop:50,
          textAlign:"center",
          color:"#1545A5",
        },
        txtS:{
          
          position:"absolute",
          width:380,
          height:70,
          fontStyle:"normal",
          fontWeight:"400", 
          fontSize:22,
          marginTop:120,
          
          textAlign:"center",
          color:"#707172",
        },
        txtBack:{
          position:"absolute",
          width:500,
          height:80,
          fontStyle:"normal",
          fontWeight:"400", 
          fontSize:20,
          paddingRight:130,
          marginTop:200,
          textAlign:"center",
          color:"#707172",
        },
       txtTime:{
         position: "absolute",
          width: 370,
          height: 100,
          paddingLeft:250,
          marginTop: 200,
          fontSize: 20,
          fontWeight: "900",
          textAlign: "center",
          color: "#FA4238",
      },
      btnHome:{
        width:180,
        height:50,
        position:"absolute",
        marginTop:520,
        marginLeft:10,
        backgroundColor:"#DADADA",
        borderRadius:15,
        boxShadow: "0px 0px 17.8665px #C3CEDF",
        shadowColor: "rgba(155, 192, 255, 0.77)",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 3,
        shadowRadius: 3.84,
      
        elevation: 5,
      },
      txtBtn:{
        position: "absolute",
          width: 370,
          height: 100,
          paddingRight:185,
          marginTop: 10,
          fontSize: 20,
          fontWeight: "900",
          textAlign: "center",
          color: "#336CC8",
          
      },btnThem:{
        width:180,
        height:50,
        position:"absolute",
        marginTop:520,
        marginLeft:210,
        backgroundColor:"#1545A5",
        borderRadius:15,
        boxShadow: "0px 0px 17.8665px #C3CEDF",
        shadowColor: "rgba(155, 192, 255, 0.77)",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 3,
        shadowRadius: 3.84,
      
        elevation: 5,
      },
      txtBtn1:{
        position: "absolute",
          width: 370,
          height: 100,
          paddingRight:190,
          marginTop: 12,
          fontSize: 18,
          fontWeight: "900",
          textAlign: "center",
          color: "#FFFFFF",
      },
      })