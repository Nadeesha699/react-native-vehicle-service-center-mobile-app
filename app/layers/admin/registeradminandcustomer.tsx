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

const RegisterAdminAndCustomer = () => {
  useEffect(() => {
    const handleBackPress = () => {
      Alert.alert("මජං කඩේ", "Would you like to return to the home page ?", [
        { text: "Cancel", onPress: () => null },
        {
          text: "OK",
          onPress: () => {
            router.navigate("/layers/admin/home");
          },
        },
      ]);
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
  }, []);

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [gender, setGender] = useState("select");
  const [role, setRole] = useState("select");
  const [nic, setNic] = useState("");
  const [cno, setCNo] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [religion, setReligion] = useState("");
  const [email, setEmail] = useState("");
  const [npassword, setNPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [passwordIconValid1, setPasswordIconValid1] = useState(false);
  const [passwordIconValid2, setPasswordIconValid2] = useState(false);

  const [fnameVal, setFNameVal] = useState("");
  const [lnameVal, setLNameVal] = useState("");
  const [genderVal, setGenderVal] = useState("");
  const [rolerVal, setRoleVal] = useState("");
  const [nicvVal, setNicVal] = useState("");
  const [cnoVal, setCNoVal] = useState("");
  const [ageVal, setAgeVal] = useState("");
  const [nationalityVal, setNationalityVal] = useState("");
  const [religionVal, setReligionVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [npasswordVal, setNPasswordVal] = useState("");
  const [cpasswordVal, setCPasswordVal] = useState("");

  const validField = async () => {
    if (fname.length == 0) {
      setFNameVal("Cannot be blank");
    } else if (!fname.match(/^[A-Z][a-zA-Z-' ]+$/)) {
      setFNameVal(
        "Invalid format. Use only letters, starting with a capital (e.g., Saman Kumara)"
      );
    } else if (lname.length == 0) {
      setFNameVal("");
      setLNameVal("Cannot be blank");
    } else if (!lname.match(/^[A-Z][a-zA-Z-' ]+$/)) {
      setFNameVal("");
      setLNameVal(
        "Invalid format. Use only letters, starting with a capital (e.g., Saman Kumara)"
      );
    } else if (cno.length == 0) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("Cannot be blank");
    } else if (!cno.match(/^\d{10}$/)) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("Invalid format. Enter a 10-digit number (e.g., 0711764232)");
    } else if (age.length == 0) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("Cannot be blank");
    } else if (!age.match(/^(?:[1-9]|[1-9][0-9]|1[01][0-9]|120)$/)) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("Invalid age. Enter a number between 18 and 120 (e.g., 25)");
    } else if (gender.match("select")) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("Select your gender");
    } else if (role.match("select")) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setRoleVal("");
    } else if (nic.length == 0) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setRoleVal("");
      setNicVal("Cannot be blank");
    } else if (!nic.match(/^\d{10}$/)) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setRoleVal("");
      setNicVal(
        "Invalid NIC number. Enter a 10-digit number (e.g., 20023421341)"
      );
    } else if (nationality.length == 0) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
      setRoleVal("");
      setNationalityVal("Cannot be blank");
    } else if (!nationality.match(/^[A-Z][a-zA-Z-' ]+$/)) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
      setRoleVal("");
      setNationalityVal(
        "Invalid format. Use only letters, starting with a capital (e.g., American)"
      );
    } else if (religion.length == 0) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
      setNationalityVal("");
      setRoleVal("");
      setReligionVal("Cannot be blank");
    } else if (!religion.match(/^[A-Z][a-zA-Z-' ]+$/)) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
      setNationalityVal("");
      setRoleVal("");
      setReligionVal(
        "Invalid format. Use only letters, starting with a capital (e.g., Buddhism)"
      );
    } else if (email.length == 0) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
      setNationalityVal("");
      setReligionVal("");
      setRoleVal("");
      setEmailVal("Cannot be blank");
    } else if (
      !email.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$")
    ) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
      setNationalityVal("");
      setReligionVal("");
      setRoleVal("");
      setEmailVal(
        "Invalid format. Use a valid format (e.g., example@example.com)"
      );
    } else if (npassword.length == 0) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
      setNationalityVal("");
      setReligionVal("");
      setEmailVal("");
      setRoleVal("");
      setNPasswordVal("Cannot be blank");
    } else if (
      !npassword.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
      setNationalityVal("");
      setReligionVal("");
      setEmailVal("");
      setRoleVal("");
      setNPasswordVal(
        "Password must be at least 8 characters with upper, lower, number, and special character (e.g., Pass1@)"
      );
    } else if (cpassword.length == 0) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
      setNationalityVal("");
      setReligionVal("");
      setEmailVal("");
      setNPasswordVal("");
      setRoleVal("");
      setCPasswordVal("Cannot be blank");
    } else if (
      !cpassword.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
      )
    ) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
      setNationalityVal("");
      setReligionVal("");
      setEmailVal("");
      setNPasswordVal("");
      setRoleVal("");
      setCPasswordVal(
        "Password must be at least 8 characters with upper, lower, number, and special character (e.g., Pass1@)"
      );
    } else if (!npassword.match(cpassword)) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
      setNationalityVal("");
      setReligionVal("");
      setEmailVal("");
      setNPasswordVal("");
      setRoleVal("");
      setCPasswordVal("Passwords do not match. Please try again");
    } else {
      const response = await fetch("http://13.212.11.85:1001/rcs/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: fname,
          lastName: lname,
          contactNo: cno,
          age: age,
          genderType: gender,
          nic: nic,
          nationality: nationality,
          religion: religion,
          email: email,
          passWord: cpassword,
          role: role,
        }),
      });

      if (response.ok) {
        router.navigate("/layers/admin/home");
        if (role.match("EMPLOYEE")) {
          ToastAndroid.show("Employee registered successfully!", 3000);
        } else if (role.match("ADMIN")) {
          ToastAndroid.show("Admin registered successfully!", 3000);
        }
      } else {
        ToastAndroid.show("registration failed. Please try again later", 3000);
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
              router.navigate("/layers/admin/home");
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
            <Text style={{ color: "yellow" }}>C</Text>reate
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
            New User
          </Text>
        </View>
        <View style={style.sub_login}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.sub2_login}>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="First name                             (e.g., Saman)"
                  value={fname}
                  onChangeText={setFName}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{fnameVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Last name                            (e.g., Kumara)"
                  value={lname}
                  onChangeText={setLName}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{lnameVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Mobile number                  (e.g., 07723456789)"
                  value={cno}
                  onChangeText={setCNo}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{cnoVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Age                                          (e.g., 25)"
                  value={age}
                  onChangeText={setAge}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{ageVal}</Text>
              <View style={style.txtfeild_back}>
                <View style={style.picker_main1}>
                  <Text style={style.picker_main_lbl}>Gender Type</Text>
                  <View style={style.picker_back}>
                    <Picker
                      selectedValue={gender}
                      onValueChange={(itemValue, itemIndex) =>
                        setGender(itemValue)
                      }
                      style={style.picker}
                    >
                      <Picker.Item label="select" value="select" />
                      <Picker.Item label="Male" value="MALE" />
                      <Picker.Item label="Female" value="FEMALE" />
                    </Picker>
                  </View>
                </View>
              </View>
              <Text style={style.txt_val}>{genderVal}</Text>
              <View style={style.txtfeild_back}>
                <View style={style.picker_main2}>
                  <Text style={style.picker_main_lbl}>Role Type</Text>
                  <View style={style.picker_back}>
                    <Picker
                      selectedValue={role}
                      onValueChange={(itemValue, itemIndex) =>
                        setRole(itemValue)
                      }
                      style={style.picker}
                    >
                      <Picker.Item label="select" value="select" />
                      <Picker.Item label="Employee" value="EMPLOYEE" />
                      <Picker.Item label="Admin" value="ADMIN" />
                    </Picker>
                  </View>
                </View>
              </View>
              <Text style={style.txt_val}>{rolerVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="NIC number                 (e.g., 200204602733))"
                  value={nic}
                  onChangeText={setNic}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{nicvVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Nationality                        (e.g., Sri Lankan)"
                  value={nationality}
                  onChangeText={setNationality}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{nationalityVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Religion                             (e.g., Buddhism)"
                  value={religion}
                  onChangeText={setReligion}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{religionVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Email                      (e.g., example@gmail.com)"
                  value={email}
                  onChangeText={setEmail}
                  style={style.txt_email}
                />
                {/* <Image
                source={require("@/assets/images/email.png")}
                style={{ width: 25, height: 25, opacity: 0 }}
              /> */}
              </View>
              <Text style={style.txt_val}>{emailVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="New Password         (e.g., Passw0rd@1)"
                  value={npassword}
                  onChangeText={setNPassword}
                  style={style.txt_pass}
                  secureTextEntry={!passwordIconValid1}
                />
                <TouchableOpacity
                  onPress={() => setPasswordIconValid1(!passwordIconValid1)}
                >
                  <Image
                    source={
                      passwordIconValid1
                        ? require("@/assets/images/eye.png")
                        : require("@/assets/images/visibility-off.png")
                    }
                    style={{ width: 25, height: 25 }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={style.txt_val}>{npasswordVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Confirm Password    (e.g., Passw0rd@1)"
                  value={cpassword}
                  onChangeText={setCPassword}
                  style={style.txt_pass}
                  secureTextEntry={!passwordIconValid2}
                />
                <TouchableOpacity
                  onPress={() => setPasswordIconValid2(!passwordIconValid2)}
                >
                  <Image
                    source={
                      passwordIconValid2
                        ? require("@/assets/images/eye.png")
                        : require("@/assets/images/visibility-off.png")
                    }
                    style={{ width: 25, height: 25 }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={style.txt_val}>{cpasswordVal}</Text>
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
                  add & exit
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegisterAdminAndCustomer;

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
    width: 300,
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
    width: 230,
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
    marginLeft: 10,
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

  picker_main1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    gap: 40,
  },

  picker_main2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    gap: 60,
  },

  picker_main_lbl: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
  },
});
