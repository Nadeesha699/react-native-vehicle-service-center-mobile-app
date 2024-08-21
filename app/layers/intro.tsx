import { router } from "expo-router";
import { useEffect } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  BackHandler,
  Alert,
} from "react-native";

const Intro = () => {
  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", function () {
      Alert.alert("මජං කඩේ", "Do you want close the app ?", [
        { text: "cancel", onPress: () => null },
        {
          text: "ok",
          onPress: () => {
            BackHandler.exitApp()
          },
        },
      ]);
      return true;
    });
  }, []);
  return (
    <ImageBackground
      source={require("@/assets/images/3d-rendering-cartoon-welcome-door.jpg")}
    >
      <View style={style.main_intro}>
        <View style={style.submain_intro}>
          <Image
            source={require("@/assets/images/automotive.png")}
            style={{width:140,height:140}}
          ></Image>
          <View>
            <Text style={style.main_lbl_into}>මජං කඩේ</Text>
            <Text style={style.sub_lbl_into}>Majang vahicle service &</Text>
            <Text style={style.sub_lbl_into}>repair shop</Text>
          </View>
        </View>
        <View style={style.submain2_intro}>
            <Text style={style.intro_welcome}><Text style={{color:"yellow"}}>W</Text>elcome</Text>
          <TouchableOpacity style={style.btn_login} onPress={()=>{router.navigate('/layers/login')}}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 25,
                textAlign: "center",
                letterSpacing: 10,
                paddingTop: 5,
              }}
            >
              Sign in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.btn_reg} onPress={()=>{
            router.navigate('/layers/register')
          }}>
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 25,
                textAlign: "center",
                letterSpacing: 10,
                paddingTop: 5,
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Intro;

const style = StyleSheet.create({
  main_intro: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 150,
    backgroundColor: "#00000094",
  },

  submain_intro: {
    backgroundColor: "#ffffff6c",
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "row",
    gap: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  main_lbl_into: {
    color: "white",
    fontWeight: "bold",
    fontSize: 35,
  },

  sub_lbl_into: {
    color: "black",
    fontWeight: "bold",
    fontSize: 17,
  },

  intro_welcome: {
    color: "white",
    fontWeight: "bold",
    fontSize: 85,
    letterSpacing: 4,
  },

  btn_login: {
    backgroundColor: "#ffffff18",
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 3,
    width: 300,
    height: 50,
    borderRadius: 30,
  },

  btn_reg: {
    backgroundColor: "white",
    width: 300,
    height: 50,
    borderRadius: 30,
  },

  submain2_intro: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: 40,
  },
});
