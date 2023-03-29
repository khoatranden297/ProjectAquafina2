import React, { useState,useEffect,useRef } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, StyleSheet, View, Image, TouchableOpacity ,Modal,Pressable} from 'react-native'
import logo from '../assets/images/logo.png'
import kihieu from '../assets/images/hinhtronqr.png'
import kihieu1 from '../assets/images/kihieuGuide.png'
import locxoay from '../assets/images/kihieu.png'
import xacnhan from '../assets/images/start.png'
import muiten from '../assets/images/muiten.png'
import maQr from '../assets/images/maQr.png'
import txtQr from '../assets/images/txtQr.png'
interface ScanProps {
    navigation: StackNavigationProp<any>;
}

const Scan: React.FC<ScanProps> = ({ navigation }) => {
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
    return(
        <View style={styles.bck}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.txt1}>QUÉT QR ĐỂ TÍCH ĐIỂM</Text>    
        <View style={styles.container}>
            <Image style={styles.kihieu} source={kihieu}/>
            <Text style={styles.txt2}>Điểm qui đổi:</Text>
            <Text style={styles.txt3}>10</Text>
        </View>  
        <View style={styles.container1}>
            <Image style={styles.kihieu1} source={kihieu1}/>
            <Text style={styles.txtTram}>TRẠM</Text>
                <Image style={styles.locxoay} source={locxoay} />
                <Text style={styles.txtTaiSinh}>TÁI SINH</Text>
                <Text style={styles.txtCua}>của AQUAFINA</Text>
                <Image style={styles.imgtxt} source ={txtQr}/>
                <Image style={styles.imgmaQr} source = {maQr}/>
                <Text style={styles.txtthoigian}>Thời gian quét QR còn:</Text>
                <Text style={styles.txtgiay}>{countdown} giây nữa </Text>
                <Image style={styles.imgStart} source={xacnhan} />
                <Image style={styles.imgmuiten} source={muiten} />

                <TouchableOpacity style={styles.btnB}
                    onPress={() => {
                        clearInterval(timeId.current as NodeJS.Timeout)
                        navigation.navigate("Thankyou")
                        console.log("hello")
                    }}
                >
                    {/* <Image style={styles.imgHT} source={hinhtron} /> */}
                    <Text style={styles.txtB}>XÁC NHẬN</Text>
                </TouchableOpacity>
        </View>   
        </View>
    )
}
export default Scan
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
        height: 100,
        marginLeft: 15,
        marginTop: 110,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },
    kihieu: {
        position: "absolute",
        width: 300,
        height: 100,
        marginLeft: 80,
        marginBottom: 100,
        Color: "#EAF0F8",

    },
    txt2:{
        position: "absolute",
        width: 200,
        height: 30,
        paddingRight:50,
        marginTop: 40,
        fontWeight: "bold",
        fontSize: 20,
        display: "flex",
        alignItems: "flex-end",
        textAlign: "center",
        color: "#336CC8",
    },
    txt3:{
        position: "absolute",
        width: 200,
        height: 40,
        marginLeft:190,
        marginTop: 23,
        fontWeight: "800",
        fontSize: 40,
        display: "flex",
        alignItems: "flex-end",
        textAlign: "center",
        color: "#1545A5",    
    },
    container1:{
        position: "absolute",
        width: 380,
        height: 450,
        marginLeft: 15,
        marginTop: 220,
        backgroundColor: "#FFFFFF",
        borderRadius: 20,
    },
    kihieu1:{
        position: "absolute",
        width: 380,
        height: "100%",
        marginLeft: 1,
        Color: "#EAF0F8",
    },
    txtTram: {
        position: "absolute",
        width: 100,
        height: 50,
        marginLeft: 285,
        marginTop: 2,
        fontSize: 20,
        fontWeight: "900",
        textAlign: "center",
        color: "#1545A5"
    },
    txtTaiSinh: {
        position: "absolute",
        width: 100,
        height: 80,
        marginLeft: 290,
        marginTop: 20,
        fontSize: 15,
        fontWeight: "900",
        textAlign: "center",
        color: "#1545A5"
    },
    txtCua: {
        position: "absolute",
        width: 100,
        height: 100,
        marginLeft: 290,
        marginTop: 35,
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center",
        color: "#1545A5"
    },
    locxoay: {
        position: 'absolute',
        width: 70,
        height: 20,
        marginLeft: 295,
        marginTop: 8,

    },
    txtthoigian: {
        position: "absolute",
        width: 250,
        height: 100,
        //   marginLeft:5,
        marginTop: 400,
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        color: "#707172",
      },
      txtgiay: {
        position: "absolute",
        width: 300,
        height: 100,
        marginLeft: 125,
        marginTop: 400,
        fontSize: 20,
        fontWeight: "900",
        textAlign: "center",
        color: "#FA4238",
      },
    imgmaQr:{
        position:"absolute",
        width:200,
        height:200,
        marginLeft:95,
        marginTop:135,

    },
    txtQuet:{
        position:"absolute",
        width:300,
        height:30,
        fontStyle:"normal",
        fontWeight:"450",
        fontSize:20,
        textAlign:"center",
        color:"#707172",
        marginTop:50,
    },
    imgtxt:{
        position:"absolute",
        width:210,
        height:80,
        marginLeft:95,
        marginTop:50,
    },
    imgmuiten: {
        position: 'absolute',
        width: 120,
        height: 120,
        marginLeft: 130,
        marginRight: 28,
        marginTop: 450,
      },
      btnB: {
        position: "absolute",
        width: 80,
        height: 80,
        marginLeft: 150,
        marginTop: 470,
        backgroundColor: "#0047BA",
        borderRadius: 100,
        boxShadow: "0px 0px 17.8665px #C3CEDF",
        shadowColor: "rgba(155, 192, 255, 0.77)",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 2,
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
        paddingRight:18,
        marginTop: 18,
        alignItems:"center",
        textAlign: "center",
        color: "#FFFFFF",
        display:"flex",
      },
      imgStart: {
        position: 'absolute',
        width: 120,
        height: 120,
        marginLeft: 130,
        marginRight: 28,
        marginTop: 450,
      },
})