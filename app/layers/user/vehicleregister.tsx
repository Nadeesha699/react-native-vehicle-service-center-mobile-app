import { Link, router } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  Alert,
  BackHandler,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const VehicleRegister = () => {

  const loadVihiclelocal = [
    {
      id: 0,
      vehicleNo: "",
      model: "",
      year: "",
      color: "",
      type: "",
      description: "",
    },
  ];

  const [loadV, setV] = useState(loadVihiclelocal);

  useEffect(() => {

    // const fetchData = () =>{
    //    fetch('')
    // }

    const handleBackPress = () => {
      Alert.alert("මජං කඩේ", "Would you like to return to the home page ?", [
        { text: "Cancel", onPress: () => null },
        {
          text: "OK",
          onPress: () => {
            router.navigate("/layers/user/home");
          },
        },
      ]);
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackPress);

    const fetchData = async () => {
      const id = await AsyncStorage.getItem("UID");
      const response = await fetch(
        `http://13.212.11.85:1001/rcs/api/users/${id}`
      );
      if (response.ok) {
        const result = await response.json();
        setV(result.content.vehicle);
      }
    };

    fetchData();

  }, []);
  const [vehicleNo, setVehicleNo] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [type, setType] = useState("");
  const [discription, setDiscription] = useState("");
  const [brand, setBrand] = useState("select");

  const [vehicleNoVal, setVehicleNoVal] = useState("");
  const [modelVal, setModelVal] = useState("");
  const [yearVal, setYearVal] = useState("");
  const [colorVal, setColorVal] = useState("");
  const [typeVal, setTypeVal] = useState("");
  const [discriptionVal, setDiscriptioValn] = useState("");
  const [brandVal, setBrandVal] = useState("");

  const validField = async () => {
    if (vehicleNo.length == 0) {
      setVehicleNoVal("Cannot be blank");
    } else if (!vehicleNo.match(/^[A-Z]{2,3}\d{4}$/)) {
      setVehicleNoVal("Invalid format. Use the format: (e.g., AB1234)");
    } else if (model.length == 0) {
      setVehicleNoVal("");
      setModelVal("Cannot be blank");
    } else if (!model.match(/^[A-Z][a-zA-Z-' ]+$/)) {
      setVehicleNoVal("");
      setModelVal(
        "Invalid format. Use only letters, starting with a capital (e.g., Model X)"
      );
    } else if (year.length == 0) {
      setVehicleNoVal("");
      setModelVal("");
      setYearVal("Cannot be blank");
    } else if (!year.match(/^(19|20)\d{2}$/)) {
      setVehicleNoVal("");
      setModelVal("");
      setYearVal(
        "Invalid year. Enter a year between 1900 and 2099 (e.g., 2024)"
      );
    } else if (color.length == 0) {
      setVehicleNoVal("");
      setModelVal("");
      setYearVal("");
      setColorVal("Cannot be blank");
    } else if (
      !color.match(
        /^(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|purple|red|silver|teal|white|yellow)$/
      )
    ) {
      setVehicleNoVal("");
      setModelVal("");
      setYearVal("");
      setColorVal("Invalid color. Use the fornat (e.g., red, yellow");
    } else if (type.length == 0) {
      setVehicleNoVal("");
      setModelVal("");
      setYearVal("");
      setColorVal("");
      setTypeVal("Cannot be blank");
    } else if (!type.match(/^[A-Z][a-zA-Z-' ]+$/)) {
      setVehicleNoVal("");
      setModelVal("");
      setYearVal("");
      setColorVal("");
      setTypeVal(
        "Invalid type. Use only letters, starting with a capital (e.g., Sedan, SUV)"
      );
    } else if (discription.length == 0) {
      setVehicleNoVal("");
      setModelVal("");
      setYearVal("");
      setColorVal("");
      setTypeVal("");
      setDiscriptioValn("Cannot be blank");
    } else if (brand.match("select")) {
      setVehicleNoVal("");
      setModelVal("");
      setYearVal("");
      setColorVal("");
      setTypeVal("");
      setDiscriptioValn("");
      setBrandVal("Select the brand");
    } else {
      const id = await AsyncStorage.getItem("UID");
    console.log(id);
    const response = await fetch(
      `http://13.212.11.85:1001/rcs/api/users/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vehicle: [
            ...loadV.map((e) => ({
              id: e.id,
              vehicleNo: e.vehicleNo,
              model: e.model,
              year: e.year,
              color: e.color,
              type: e.type,
              description: e.description,
            })),
            {
              vehicleNo: vehicleNo,
              model: model,
              year: year,
              color: color,
              type: type,
              description: discription,
              brand: {
                id: brand
              },
            },
          ],
        }),
      }
    );

      if (response.ok) {
        Alert.alert("", "Would you like to add another vehicle ?", [
          {
            text: "Ignore",
            onPress: () => {
              setVehicleNo("");
              setModel("");
              setYear("");
              setColor("");
              setType("");
              setDiscription("");
              setBrand("select");

              setVehicleNoVal("");
              setModelVal("");
              setYearVal("");
              setColorVal("");
              setTypeVal("");
              setDiscriptioValn("");
              setBrandVal("");
              ToastAndroid.show("register success", 3000);
              router.navigate("/layers/user/home");
            },
          },
          {
            text: "Agree",
            onPress: () => {
              ToastAndroid.show("Vehicle registered successfully!", 3000);
              setVehicleNo("");
              setModel("");
              setYear("");
              setColor("");
              setType("");
              setDiscription("");
              setBrand("select");

              setVehicleNoVal("");
              setModelVal("");
              setYearVal("");
              setColorVal("");
              setTypeVal("");
              setDiscriptioValn("");
              setBrandVal("");
            },
          },
        ]);
      } else {
        ToastAndroid.show(
          "Vehicle registration failed. Please try again later",
          3000
        );
      }
    }
  };

  return (
    <ImageBackground
      source={require("@/assets/images/3d-rendering-cartoon-welcome-door.jpg")}
    >
      <View style={style.main_login}>
        <View>
          <TouchableOpacity
            style={{ paddingTop: 15, paddingLeft: 15 }}
            onPress={() => {
              router.navigate("/layers/user/home");
            }}
          >
            <Image
              style={style.btn_backs}
              source={require("@/assets/images/previous.png")}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 55,
              letterSpacing: 4,
              paddingLeft: 40,
              paddingTop: 30,
              textShadowColor: "rgba(0, 0, 0, 0.996)",
              textShadowOffset: { width: 4, height: 3 },
              textShadowRadius: 4,
            }}
          >
            <Text style={{ color: "yellow" }}>R</Text>egister
          </Text>
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 55,
              letterSpacing: 4,
              paddingLeft: 40,
              textShadowColor: "rgba(0, 0, 0, 0.996)",
              textShadowOffset: { width: 4, height: 3 },
              textShadowRadius: 4,
            }}
          >
            Your Vehicle
          </Text>
        </View>
        <View style={style.sub_login}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.sub2_login}>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Vehicle Number"
                  value={vehicleNo}
                  onChangeText={setVehicleNo}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{vehicleNoVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Vehicle Model"
                  value={model}
                  onChangeText={setModel}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{modelVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Model Year"
                  value={year}
                  onChangeText={setYear}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{yearVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Vehicle Color"
                  value={color}
                  onChangeText={setColor}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{colorVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Vehicle Type"
                  value={type}
                  onChangeText={setType}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{typeVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Vehicle Details"
                  value={discription}
                  onChangeText={setDiscription}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{discriptionVal}</Text>
              <View style={style.txtfeild_back}>
                <View style={style.picker_main}>
                  <Text style={style.picker_main_lbl}>Vehicle Brand</Text>
                  <View style={style.picker_back}>
                    <Picker
                      selectedValue={brand}
                      onValueChange={(itemValue, itemIndex) =>
                        setBrand(itemValue)
                      }
                      style={style.picker}
                    >
                      <Picker.Item label="select" value="select" />
                      <Picker.Item label="TOYOTA" value="1" />
                      <Picker.Item label="HONDA" value="2" />
                      <Picker.Item label="FORD" value="3" />
                      <Picker.Item label="BMW" value="4" />
                      <Picker.Item label="MERCEDES" value="5" />
                      <Picker.Item label="AUDI" value="6" />
                      <Picker.Item label="TESLA" value="7" />
                      <Picker.Item label="CHEVROLET" value="8" />
                      <Picker.Item label="NISSAN" value="9" />
                      <Picker.Item label="VOLKSWAGEN" value="10" />
                    </Picker>
                  </View>
                </View>
              </View>
              <Text style={style.txt_val}>{}</Text>
              <TouchableOpacity onPress={validField} style={style.btn_login}>
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
                  register
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default VehicleRegister;

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
    paddingTop: 30,
  },

  sub2_login: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "space-around",
    paddingBottom: 50,
  },

  btn_login: {
    backgroundColor: "#ffffff18",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 3,
    width: 280,
    height: 50,
    borderRadius: 30,
  },

  txt_email: {
    fontWeight: "bold",
    width: 280,
    height: 40,
    borderBottomWidth: 2,
    padding: 0,
    borderColor: "black",
    fontSize: 20,
    backgroundColor: "white",
  },

  txt_pass: {
    fontWeight: "bold",
    width: 300,
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
    fontSize: 12,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  sign_up_lbl1: {
    width: "100%",
    textAlign: "right",
    paddingRight: 10,
    paddingTop: 90,
    fontWeight: "bold",
    color: "#666666",
    fontSize: 15,
    letterSpacing: 3,
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
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  btn_backs: {
    width: 40,
    height: 40,
  },
  picker: {
    width: 150,
    height: 30,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "black",
    fontWeight: "bold",
  },

  picker_back: {
    backgroundColor: "rgb(255, 221, 0)",
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
  },

  picker_main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    gap: 40,
  },

  picker_main_lbl: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
