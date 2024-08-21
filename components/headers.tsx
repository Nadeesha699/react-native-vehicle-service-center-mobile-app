import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

const Headerss = () => {
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const id = await AsyncStorage.getItem("UID");
      const response = await fetch(
        `http://13.212.11.85:1001/rcs/api/users/${id}`
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setFName(e.content.firstName);
          setLName(e.content.lastName);
        });
      }
    };

    fetchData();
  }, []);
  return (
    <View style={style.head_main}>
      <TouchableOpacity style={{paddingLeft:300,paddingTop:20}} onPress={()=>{
        router.navigate('/layers/login')
      }}>
        <Image source={require('@/assets/images/out.png')} style={{width:30,height:30}}></Image>
      </TouchableOpacity>
      <View style={style.head_main_sub}>
        <TouchableOpacity
          onPress={() => {
            router.navigate("/layers/user/profileupdate");
          }}
        >
          <Image
            source={require("@/assets/images/proti1.png")}
            style={{ width: 50, height: 50, borderRadius: 50 }}
          ></Image>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              letterSpacing: 4,
              fontSize: 55,
            }}
          >
            <Text style={{ color: "yellow" }}>H</Text>ello
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              letterSpacing: 4,
              fontSize: 20,
            }}
          >
            {fname} {lname}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Headerss;

const style = StyleSheet.create({
  head_main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    // alignItems: "center",
    height: "20%",
  },
  head_main_sub: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap:20,
    paddingLeft:20
  },
});
