import React, { useState } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, StyleSheet, View, Image, TouchableOpacity ,Modal,Pressable} from 'react-native'
import xacnhan from '../assets/images/start.png'
import muiten from '../assets/images/muiten.png'
import kihieu from '../assets/images/kihieuGuide.png'
import locxoay from '../assets/images/kihieu.png'
import txtThank from '../assets/images/txtThank.png'
interface ThankyouProps {
    navigation: StackNavigationProp<any>;
}

const Thankyou: React.FC<ThankyouProps> = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false); return (
        <View>
            <View style={styles.container}>
            <Image style={styles.kihieu} source={kihieu} />
            <Text style={styles.txtTram}>TRẠM TÁI SINH</Text>
                  <Image style={styles.locxoay} source= {locxoay} /> 
                  <Text style={styles.txtCua}>CỦA AQUAFINA</Text>
                  <Text style={styles.txtNoi}>NƠI TÁI SINH DÒNG ĐỜI MỚI CHO CHAI NHỰA</Text>
                  <Text style ={styles.txtThank}>THANK YOU</Text>
                  <Image style={styles.imgThank} source={txtThank} />
                  <Image style={styles.imgStart} source={xacnhan} />
                  <Image style={styles.imgmuiten} source={muiten} />
  
                  <TouchableOpacity style={styles.btnB}
                      onPress={() => {
                          navigation.navigate("Home")
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
  
  export default Thankyou
  const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: 380,
        height: 700,
        marginLeft: 15,
        marginTop: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 40,
      },
      kihieu: {
        position: "absolute",
        width: 380,
        height: 700,
        Color: "#EAF0F8",
    
      },
      locxoay: {
        position: 'absolute',
        width: 70,
        height: 30,
        marginLeft: 285,
        marginTop: 15,
    
      },
      txtTram: {

        position: "absolute",
        marginLeft: 25,
        marginRight: "0.62%",
        marginTop: 40,
        marginBottom: "51.45%",
        // fontFamily:"SVN-Gotham",
        fontStyle: 'normal',
        fontWeight: "bold",
        fontSize: 45,
        lineHeight: 120,
        display: "flex",
        alignItems: 'center',
        textAlign: 'center',
        color: "#1545A5",
        
    },
    txtCua: {

        position: "absolute",
        marginLeft: 35,
        marginTop: 90,
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: 45,
        lineHeight: 120,
        display: "flex",
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: -0.03,
        color: "#1545A5"
    },
    txtNoi: {
        position: "absolute",
        marginLeft: 40,
        marginTop: 130,
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 120,
        display: "flex",
        alignItems: 'center',
        textAlign: 'center',
    
        textTranfrom: "uppercase",
        color: "#1545A5"
    },
    txtThank:{
        position: "absolute",
        marginLeft: 40,
        marginRight: "0.62%",
        marginTop: 270,
        marginBottom: "51.45%",
        // fontFamily:"SVN-Gotham",
        fontStyle: 'normal',
        fontWeight: "bold",
        fontSize: 80,
        lineHeight: 120,
        display: "flex",
        alignItems: 'center',
        textAlign: 'center',
        color: "#1545A5",
    },
    imgThank:{
        position:"absolute",
        width:270,
        height:60,
        marginTop:500,
        marginLeft:55,
    },
    imgmuiten: {
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
        shadowOpacity: 2,
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
        marginTop: 570,
      },
})