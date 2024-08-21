import {
  ImageBackground,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  BackHandler,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

// npm install react-native-vector-icons react-native-paper  add icon into input feild

const Login = () => {
  const [lemail, setLEmail] = useState("");
  const [lpassword, setLPassword] = useState("");
  const [valEmail, setValEmail] = useState(" ");
  const [valPassword, setValPass] = useState(" ");
  const [passwordIconValid, setPasswordIconValid] = useState(false);

  const [state, setState] = useState<string | null>(null);

  useEffect(() => {
    const handleBackPress = () => {
      Alert.alert("මජං කඩේ", "Do you back to main menu?", [
        { text: "Cancel", onPress: () => null },
        {
          text: "OK",
          onPress: () => {
            router.navigate("/layers/intro");
          },
        },
      ]);
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackPress);
    };
  }, []);

  const handleLogin = async () => {
    if (lemail.length === 0) {
      setValEmail("Empty email");
    } else if (
      !lemail.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$")
    ) {
      setValEmail("Invalid email");
    } else if (lpassword.length === 0) {
      setValEmail(" ");
      setValPass("Empty password");
    } else if (
      lpassword.match(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
      )
    ) {
      setValEmail(" ");
      setValPass("Invalid password (e.g., StrongPass$123)");
    } else {
      const response = await fetch(
        "http://13.212.11.85:1001/rcs/api/users/login",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: lemail, passWord: lpassword }),
        }
      );
      if (response.ok) {
        setValEmail(" ");
        setValPass(" ");
        const result = response.json();
        result.then(async (e) => {
          // // Retrieve data
          // const value = await AsyncStorage.getItem('key');

          // // Remove data
          // await AsyncStorage.removeItem('key');

          await AsyncStorage.removeItem('UID');
          if (e.content.role == "USER") {
            // Save data
            const id = String(e.content.id);
            await AsyncStorage.setItem("UID", id);
            // const storedValue = await AsyncStorage.getItem("UID");
            // console.log(storedValue);
            // await AsyncStorage.removeItem('UID');
            if (e.content.vehicle[0]) {
              ToastAndroid.show("Login successful", 3000);
              router.navigate("/layers/user/home");
            } else {
              ToastAndroid.show("Login successful", 3000);
              router.navigate("/layers/user/vehicleregister");
            }
          } else if (e.content.role == "ADMIN") {
            // Save data
            
            const id = String(e.content.id);
            await AsyncStorage.setItem("UID", id);
            ToastAndroid.show("Login successful", 3000);
            router.navigate("/layers/admin/home");
          } else if (e.content.role == "EMPLOYEE") {
            // Save data
            const id = String(e.content.id);
            await AsyncStorage.setItem("UID", id);
            ToastAndroid.show("Login successful", 3000);
            router.navigate("/layers/employee/home");
          }
        });
      } else {
        ToastAndroid.show("Wrong credentials", 3000);
      }
    }
  };

  return (
    <ImageBackground
      source={require("@/assets/images/3d-rendering-cartoon-welcome-door.jpg")}
    >
      <View style={style.main_login}>
        <View>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 55,
              letterSpacing: 4,
              paddingLeft: 40,
              paddingTop: 80,
            }}
          >
            <Text style={{ color: "yellow" }}>H</Text>ello
            {state}
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 55,
              letterSpacing: 4,
              paddingLeft: 40,
            }}
          >
            Sign in
          </Text>
        </View>
        <View style={style.sub_login}>
          <View style={style.txtfeild_back}>
            <TextInput
              placeholder="Email"
              value={lemail}
              onChangeText={setLEmail}
              style={style.txt_email}
            />
            <Image
              source={require("@/assets/images/email.png")}
              style={{ width: 25, height: 25, opacity: 0 }}
            />
          </View>
          <Text style={style.txt_val}>{valEmail}</Text>
          <View style={style.txtfeild_back}>
            <TextInput
              placeholder="Password"
              value={lpassword}
              onChangeText={setLPassword}
              style={style.txt_pass}
              secureTextEntry={!passwordIconValid}
            />
            <TouchableOpacity
              onPress={() => setPasswordIconValid(!passwordIconValid)}
            >
              <Image
                source={
                  passwordIconValid
                    ? require("@/assets/images/eye.png")
                    : require("@/assets/images/visibility-off.png")
                }
                style={{ width: 25, height: 25 }}
              />
            </TouchableOpacity>
          </View>
          <Text style={style.txt_val}>{valPassword}</Text>
          <TouchableOpacity onPress={handleLogin} style={style.btn_login}>
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
              Sign In
            </Text>
          </TouchableOpacity>
          <Text style={style.sign_up_lbl1}>Hey new customer you haven't an account?</Text>
          <Link href={"/layers/register"} style={style.sign_up_lbl2}>
            <Text>Sign Up</Text>
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const style = StyleSheet.create({
  main_login: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000000a3",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  sub_login: {
    backgroundColor: "white",
    width: "100%",
    height: "70%",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 60,
    gap: 15,
  },

  btn_login: {
    backgroundColor: "#ffffff18",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 3,
    width: 300,
    height: 50,
    borderRadius: 30,
  },

  txt_email: {
    fontWeight: "bold",
    width: 250,
    height: 40,
    borderBottomWidth: 2,
    padding: 0,
    borderColor: "black",
    fontSize: 20,
    backgroundColor: "white",
  },

  txt_pass: {
    fontWeight: "bold",
    width: 250,
    height: 40,
    borderBottomWidth: 2,
    padding: 0,
    borderColor: "black",
    fontSize: 20,
    backgroundColor: "white",
  },

  txt_val: {
    fontWeight: "bold",
    color: "red",
    width: "100%",
    textAlign: "right",
    paddingRight: 30,
  },

  sign_up_lbl1: {
    width: "100%",
    textAlign: "right",
    paddingRight: 10,
    paddingTop: 90,
    fontWeight: "bold",
    color: "#666666",
    fontSize: 15,
    letterSpacing: 2,
  },

  sign_up_lbl2: {
    width: "100%",
    textAlign: "right",
    fontWeight: "bold",
    color: "blue",
    fontSize: 25,
    paddingRight: 17,
    letterSpacing: 3,
  },

  txtfeild_back: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 10,
    justifyContent: "space-around",
  },
});
