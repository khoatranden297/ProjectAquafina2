import React, { useState, useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, StyleSheet, View, Button, FlatList, Image, TouchableOpacity,Alert,Modal } from 'react-native';
import { TextStyle } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { StackNavigationProp } from '@react-navigation/stack';
import logo from '../assets/images/logo.png'
import kihieu from '../assets/images/kihieuGuide.png'
import back from '../assets/images/back.png'
import locxoay from '../assets/images/kihieu.png'
import Aqua from '../assets/images/Aqua1.png'
import hoantat from '../assets/images/hoantat.png'
import xacnhan from '../assets/images/start.png'
import muiten from '../assets/images/muiten.png'



interface LoadingProps {
    navigation: StackNavigationProp<any>;
}

const Loading: React.FC<LoadingProps> = ({ navigation }) => {
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
                <Text style={styles.txt1}>CHAI NHỰA ĐANG ĐƯỢC XỬ LÝ...</Text>
                <View style={styles.container}>
                    <Image style={styles.kihieu} source={kihieu} />
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }}>
                        <Image style={styles.back} source={back} />
                    </TouchableOpacity>
                    <Text style={styles.txtTram}>TRẠM</Text>
                    <Image style={styles.locxoay} source={locxoay} />
                    <Text style={styles.txtTaiSinh}>TÁI SINH</Text>
                    <Text style={styles.txtCua}>của AQUAFINA</Text>
                    <Image style={styles.khung1} source={Aqua} />
                    <Text style={styles.txt2}>Tự động kết thúc sau:</Text>
                    <Text style={styles.txt3}>{countdown} giây nữa </Text>
                    <View style={styles.circle}>
                        <View style={styles.circle2}>
                            <Text style={styles.txt30}>30</Text>
                            <Text style={styles.txtP}>ĐIỂM</Text>
                        </View>
                    </View>
                    <Image style={styles.imgStart} source={xacnhan} />
                    <Image style={styles.imgmuiten} source={muiten} />
    
                    <TouchableOpacity style={styles.btnB}
                        onPress={() => {
                            clearInterval(timeId.current as NodeJS.Timeout)
                            navigation.navigate("Loading1")
                            console.log("hello")
                        }}
                    >
                        {/* <Image style={styles.imgHT} source={hinhtron} /> */}
                        <Text style={styles.txtB}>HOÀN TẤT</Text>
                    </TouchableOpacity>
    
                </View>
    
            </View>
    )
}
export default Loading
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
        fontSize: 20,
        display: "flex",
        alignItems: "flex-end",
        textAlign: "center",
        color: "#0047BA",
    },

    locxoay: {
        position: 'absolute',
        width: 70,
        height: 30,
        marginLeft: 285,
        marginTop: 15,

    },
    container: {
        position: "absolute",
        width: 380,
        height: 570,
        marginLeft: 15,
        marginTop: 110,
        backgroundColor: "#FFFFFF",
        borderRadius: 40,
    },
    kihieu: {
        position: "absolute",
        width: 380,
        height: "100%",
        marginLeft: 1,
        marginBottom: 100,
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
    circle: {
        position: "absolute",
        width: 200,
        height: 200,
        marginLeft: 90,
        marginTop: 200,
        backgroundColor: "#E6EDF9",
        borderRadius: 100,
    },
    circle2: {
        position: "absolute",
        width: 160,
        height: 160,
        marginLeft: 20,
        marginTop: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 100,
        shadowColor: "rgba(155, 192, 255, 0.77)",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    txt30: {
        position: "absolute",
        width: 100,
        height: 80,
        fontStyle: "normal",
        fontWeight: "900",
        fontSize: 50,
        marginLeft: 30,
        marginTop: 40,
        textAlign: "center",
        color: "#1545A5",

    },
    txtP: {
        position: "absolute",
        width: 100,
        height: 50,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 25,
        marginLeft: 30,
        marginTop: 95,
        textAlign: "center",
        color: "#6691D6",

    },
    khung1: {
        position: "absolute",
        width: "98%",
        height: 80,
        marginLeft: 5,
        marginTop: 410,
    },
    txt2: {
        position: "absolute",
        width: 250,
        height: 100,
        //   marginLeft:5,
        marginTop: 520,
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
        marginTop: 520,
        fontSize: 20,
        fontWeight: "900",
        textAlign: "center",
        color: "#FA4238",
    },
    hoantat: {
        position: 'absolute',
        width: 110,
        height: 110,
        marginLeft: 130,
        marginRight: 28,
        marginTop: 570,
    }, imgmuiten: {
        position: 'absolute',
        width: 120,
        height: 120,
        marginLeft: 130,
        marginRight: 28,
        marginTop: 570,
    },
    btnB: {
        position: "absolute",
        width: 80,
        height: 80,
        marginLeft: 150,
        marginTop: 590,
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
        paddingRight: 18,
        marginTop: 18,

        alignItems: "center",
        textAlign: "center",
        color: "#FFFFFF",
        display: "flex",

    },
    imgStart: {
        position: 'absolute',
        width: 120,
        height: 120,
        marginLeft: 130,
        marginRight: 28,
        marginTop: 570,
    },
    imgHT: {
        position: "absolute",
        width: 100,
        height: 100,
        marginLeft: 165,
        marginTop: 665,
        Color: "#E6EDF9",
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
        height: 400,
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
        width: 390,
        height: 395,
        padding: 20,
        marginTop: 5,
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

        fontSize: 25,
        paddingRight: 8,
        marginTop: 30,

        alignItems: "center",
        textAlign: "center",
        color: "#FFFFFF",
        display: "flex",
        fontWeight: "bold",
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


})
