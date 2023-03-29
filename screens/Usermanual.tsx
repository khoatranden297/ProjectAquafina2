import React, { Component } from 'react'
import { NavigationScreenProp } from 'react-navigation';
import { NavigationState } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import logo from '../assets/images/logo.png'
import kihieu from '../assets/images/kihieuGuide.png'
import back from '../assets/images/back.png'
import locxoay from '../assets/images/kihieu.png'
import khung1 from '../assets/images/khung1.png'
import khung2 from '../assets/images/khung2.png'
import khung3 from '../assets/images/khung3.png'
import huongdan from '../assets/images/huongdan.png'
import xacnhan from '../assets/images/start.png'
import muiten from '../assets/images/muiten.png'
import hinhtron from '../assets/images/hinhtrinbck.png'
interface Props {
    navigation: NavigationScreenProp<NavigationState>;
    }
    
    const Usermanual: React.FC<Props> = ({ navigation }) => {
    return (
    <View style={styles.bck}>
    <Image style={styles.logo} source={logo} />
    <Text style={styles.txt1}>HƯỚNG DẪN THAM GIA</Text>
    <Image style={styles.imgStart} source={xacnhan} />
    <Image style={styles.imgmuiten} source={muiten} />
    <TouchableOpacity
    style={styles.btnB}
    onPress={() => {
      navigation.navigate('Start');
      console.log('hello');
    }}
  >
    {/* <Image style={styles.imgHT} source={hinhtron} /> */}
    <Text style={styles.txtB}>XÁC NHẬN</Text>
  </TouchableOpacity>
  <View style={styles.container}>
    <Image style={styles.kihieu} source={kihieu} />
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
        console.log('Click');
      }}
    >
      <Image style={styles.back} source={back} />
    </TouchableOpacity>
    <Text style={styles.txtTram}>TRẠM</Text>
    <Image style={styles.locxoay} source={locxoay} />
    <Text style={styles.txtTaiSinh}>TÁI SINH</Text>
    <Text style={styles.txtCua}>của AQUAFINA</Text>
    <Image style={styles.container1} source={khung1} />
    <Image style={styles.container2} source={khung2} />
    <Image style={styles.container3} source={khung3} />
    <Image style={styles.huongdan} source={huongdan} />
  </View>
</View>
);
};

export default Usermanual;
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
    fontSize: 30,
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
  }, kihieu: {
    position: "absolute",
    width: 380,
    height: 500,
    Color: "#EAF0F8",

  },
  back: {
    position: "absolute",
    width: 40,
    height: 40,
    marginLeft: 20,
    marginTop: 10,
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
  container1: {
    position: "absolute",
    width: "97%",
    height: 100,
    marginLeft: 5,
    marginTop: 85,

  },
  container2: {
    position: "absolute",
    width: "97%",
    height: 100,
    marginLeft: 5,
    marginTop: 200,

  },
  container3: {
    position: "absolute",
    width: "97%",
    height: 100,
    marginLeft: 5,
    marginTop: 315,

  },
  huongdan: {
    position: "absolute",
    width: 350,
    height: 45,
    marginLeft: 20,
    marginTop: 430,
  },
  xacnhan: {
    position: 'absolute',
    width: 150,
    height: 150,
    marginLeft: 120,
    marginRight: 28,
    marginTop: 630,
  },
  imgmuiten: {
    position: 'absolute',
    width: 130,
    height: 130,
    marginLeft: 150,
    marginRight: 28,
    marginTop: 650,
  },
  btnB: {
    position: "absolute",
    width: 90,
    height: 90,
    marginLeft: 170,
    marginTop: 670,
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
  txtB: {
    position: "absolute",
    width: 100,
    height: 100,
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
    paddingRight:10,
    marginTop: 18,
  
    alignItems:"center",
    textAlign: "center",
    color: "#FFFFFF",
    display:"flex",
   
  },
  imgStart: {
    position: 'absolute',
    width: 130,
    height: 130,
    marginLeft: 150,
    marginRight: 28,
    marginTop: 650,
  },
  imgHT: {
    position: "absolute",
    width: 100,
    height: 100,
    marginLeft: 165,
    marginTop: 665,
    Color: "#EAF0F8",
  }
})