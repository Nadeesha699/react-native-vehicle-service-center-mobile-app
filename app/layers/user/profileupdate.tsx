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

const ProfileUpdate = () => {
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
          setCNo(e.content.contactNo);
          setAge(String(e.content.age));
          setNic(e.content.nic);
          setNationality(e.content.nationality);
          setReligion(e.content.religion);
          setEmail(e.content.email);
          setEmailForCurrentPassword(e.content.email);
          setGender(e.content.genderType);
        });
      } else {
        console.log("connection error");
      }
    };
    fetchData();

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
  }, []);

  const [emailForCurrentPassword, setEmailForCurrentPassword] = useState("");
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [gender, setGender] = useState("select");
  const [nic, setNic] = useState("");
  const [cno, setCNo] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [religion, setReligion] = useState("");
  const [email, setEmail] = useState("");
  const [cupassword, setCuPassword] = useState("");
  const [npassword, setNPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [passwordIconValid1, setPasswordIconValid1] = useState(false);
  const [passwordIconValid2, setPasswordIconValid2] = useState(false);
  const [passwordIconValid3, setPasswordIconValid3] = useState(false);

  const [validIcon1, setValidIcon1] = useState(false);
  const [validIcon2, setValidIcon2] = useState(false);
  const [validIcon3, setValidIcon3] = useState(false);
  const [validIcon4, setValidIcon4] = useState(false);
  const [validIcon5, setValidIcon5] = useState(false);
  const [validIcon6, setValidIcon6] = useState(false);
  const [validIcon7, setValidIcon7] = useState(false);
  const [validIcon8, setValidIcon8] = useState(false);

  const [fnameVal, setFNameVal] = useState("");
  const [lnameVal, setLNameVal] = useState("");
  const [genderVal, setGenderVal] = useState("");
  const [nicvVal, setNicVal] = useState("");
  const [cnoVal, setCNoVal] = useState("");
  const [ageVal, setAgeVal] = useState("");
  const [nationalityVal, setNationalityVal] = useState("");
  const [religionVal, setReligionVal] = useState("");
  const [emailVal, setEmailVal] = useState("");
  const [npasswordVal, setNPasswordVal] = useState("");
  const [cpasswordVal, setCPasswordVal] = useState("");
  const [cUPasswordVal, setCUPasswordVal] = useState("");

  const validField = async () => {
    const id = await AsyncStorage.getItem("UID");
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
    } else if (nic.length == 0) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("Cannot be blank");
    } else if (!nic.match(/^\d{10}$/)) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
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
      setNationalityVal("Cannot be blank");
    } else if (!nationality.match(/^[A-Z][a-zA-Z-' ]+$/)) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
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
      setReligionVal("Cannot be blank");
    } else if (!religion.match(/^[A-Z][a-zA-Z-' ]+$/)) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
      setNationalityVal("");
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
      setEmailVal(
        "Invalid format. Use a valid format (e.g., example@example.com)"
      );
    } else if (cupassword.length == 0) {
      setFNameVal("");
      setLNameVal("");
      setCNoVal("");
      setAgeVal("");
      setGenderVal("");
      setNicVal("");
      setNationalityVal("");
      setReligionVal("");
      setEmailVal("");
      setCUPasswordVal("Cannot be blank");
    } else if (
      !cupassword.match(
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
      setCUPasswordVal(
        "Password must be at least 8 characters with upper, lower, number, and special character (e.g., Pass1@)"
      );
    } else {
      const response = await fetch(
        `http://13.212.11.85:1001/rcs/api/users?email=${emailForCurrentPassword}&passWord=${cupassword}`
      );
      if (response.ok) {
        if(cpassword.length == 0){
          const id = await AsyncStorage.getItem("UID");
          const response = await fetch(
            `http://13.212.11.85:1001/rcs/api/users/${id}`,
            {
              method: "PUT",
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
                passWord: cupassword,
              }),
            }
          );

          if (response.ok) {
            setFNameVal("");
            setLNameVal("");
            setCNoVal("");
            setAgeVal("");
            setGenderVal("");
            setNicVal("");
            setNationalityVal("");
            setReligionVal("");
            setEmailVal("");
            setCUPasswordVal("");
            setNPasswordVal("");
            setCPasswordVal("");
            router.navigate("/layers/user/home");
            ToastAndroid.show(
              "Update successful! Your changes have been saved",
              3000
            );
          } else {
            ToastAndroid.show("Update failed. Please try again later", 3000);
          }
        }

        if (npassword.length == 0) {
          setFNameVal("");
          setLNameVal("");
          setCNoVal("");
          setAgeVal("");
          setGenderVal("");
          setNicVal("");
          setNationalityVal("");
          setReligionVal("");
          setEmailVal("");
          setCUPasswordVal("");
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
          setCUPasswordVal("");
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
          setCUPasswordVal("");
          setNPasswordVal("");
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
          setCUPasswordVal("");
          setNPasswordVal("");
          setCPasswordVal(
            "Invalid format. Use a valid format (e.g., example@example.com)"
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
          setCUPasswordVal("");
          setNPasswordVal("");
          setCPasswordVal("Passwords do not match. Please try again");
        } else {
          const id = await AsyncStorage.getItem("UID");
          const response = await fetch(
            `http://13.212.11.85:1001/rcs/api/users/${id}}`,
            {
              method: "PUT",
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
              }),
            }
          );

          if (response.ok) {
            setFNameVal("");
            setLNameVal("");
            setCNoVal("");
            setAgeVal("");
            setGenderVal("");
            setNicVal("");
            setNationalityVal("");
            setReligionVal("");
            setEmailVal("");
            setCUPasswordVal("");
            setNPasswordVal("");
            setCPasswordVal("");
            router.navigate("/layers/user/home");
            ToastAndroid.show(
              "Update successful! Your changes have been saved",
              3000
            );
          } else {
            ToastAndroid.show("Update failed. Please try again later", 3000);
          }
        }
      } else {
        console.log("Incorrect old password. Please try again");
      }
    }
  };

  const localData = {
    role: "",
  };

  const [local, setLocalData] = useState(localData);
  return (
    <ImageBackground
      source={require("@/assets/images/3d-rendering-cartoon-welcome-door.jpg")}
    >
      <View style={style.main_login}>
        <View>
          <TouchableOpacity
            style={{ paddingTop: 15, paddingLeft: 15 }}
            onPress={async () => {
              const value = await AsyncStorage.getItem("UID");
              const response = await fetch(
                `http://13.212.11.85:1001/rcs/api/users/${value}`
              );
              if (response.ok) {
                const result = response.json();
                result.then((e) => {
                  setLocalData(e.content);
                });
              }
              if (local.role === 'USER'){
                router.navigate("/layers/user/home");
              }else if(local.role === 'ADMIN'){
                router.navigate("/layers/admin/home");
              } else if(local.role === 'EMPLOYEE'){
                router.navigate("/layers/employee/home");
              }
              
              
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
            <Text style={{ color: "yellow" }}>E</Text>dit
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
            Details
          </Text>
        </View>
        <View style={style.sub_login}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={style.sub2_login}>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="First name"
                  value={fname}
                  onChangeText={setFName}
                  style={style.txt_email}
                  editable={validIcon1 ? true : false}
                />
                <TouchableOpacity
                  onPress={() => {
                    validIcon1 ? setValidIcon1(false) : setValidIcon1(true);
                  }}
                  style={{
                    backgroundColor: validIcon1 ? "#00ffeef7" : "orange",
                    borderRadius: 20,
                    padding: 5,
                    elevation: 6,
                    shadowColor: "black",
                  }}
                >
                  <Image
                    source={require("@/assets/images/editing.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={style.txt_val}>{fnameVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Last name"
                  value={lname}
                  onChangeText={setLName}
                  style={style.txt_email}
                  editable={validIcon2 ? true : false}
                />
                <TouchableOpacity
                  onPress={() => {
                    validIcon2 ? setValidIcon2(false) : setValidIcon2(true);
                  }}
                  style={{
                    backgroundColor: validIcon2 ? "#00ffeef7" : "orange",
                    borderRadius: 20,
                    padding: 5,
                    elevation: 6,
                    shadowColor: "black",
                  }}
                >
                  <Image
                    source={require("@/assets/images/editing.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={style.txt_val}>{lnameVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Mobile number"
                  value={cno}
                  onChangeText={setCNo}
                  style={style.txt_email}
                  editable={validIcon3 ? true : false}
                />
                <TouchableOpacity
                  onPress={() => {
                    validIcon3 ? setValidIcon3(false) : setValidIcon3(true);
                  }}
                  style={{
                    backgroundColor: validIcon3 ? "#00ffeef7" : "orange",
                    borderRadius: 20,
                    padding: 5,
                    elevation: 6,
                    shadowColor: "black",
                  }}
                >
                  <Image
                    source={require("@/assets/images/editing.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={style.txt_val}>{cnoVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Age"
                  value={age}
                  onChangeText={setAge}
                  style={style.txt_email}
                  editable={validIcon4 ? true : false}
                />
                <TouchableOpacity
                  onPress={() => {
                    validIcon4 ? setValidIcon4(false) : setValidIcon4(true);
                  }}
                  style={{
                    backgroundColor: validIcon4 ? "#00ffeef7" : "orange",
                    borderRadius: 20,
                    padding: 5,
                    elevation: 6,
                    shadowColor: "black",
                  }}
                >
                  <Image
                    source={require("@/assets/images/editing.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={style.txt_val}>{ageVal}</Text>
              <View style={style.picker_main}>
                <Text style={style.picker_main_lbl}>gender type</Text>
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
              <Text style={style.txt_val}>{genderVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="NIC number"
                  value={nic}
                  onChangeText={setNic}
                  style={style.txt_email}
                  editable={validIcon5 ? true : false}
                />
                <TouchableOpacity
                  onPress={() => {
                    validIcon5 ? setValidIcon5(false) : setValidIcon5(true);
                  }}
                  style={{
                    backgroundColor: validIcon5 ? "#00ffeef7" : "orange",
                    borderRadius: 20,
                    padding: 5,
                    elevation: 6,
                    shadowColor: "black",
                  }}
                >
                  <Image
                    source={require("@/assets/images/editing.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={style.txt_val}>{nicvVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Nationality"
                  value={nationality}
                  onChangeText={setNationality}
                  style={style.txt_email}
                  editable={validIcon6 ? true : false}
                />
                <TouchableOpacity
                  onPress={() => {
                    validIcon6 ? setValidIcon6(false) : setValidIcon6(true);
                  }}
                  style={{
                    backgroundColor: validIcon6 ? "#00ffeef7" : "orange",
                    borderRadius: 20,
                    padding: 5,
                    elevation: 6,
                    shadowColor: "black",
                  }}
                >
                  <Image
                    source={require("@/assets/images/editing.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={style.txt_val}>{nationalityVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Religion"
                  value={religion}
                  onChangeText={setReligion}
                  style={style.txt_email}
                  editable={validIcon7 ? true : false}
                />
                <TouchableOpacity
                  onPress={() => {
                    validIcon7 ? setValidIcon7(false) : setValidIcon7(true);
                  }}
                  style={{
                    backgroundColor: validIcon7 ? "#00ffeef7" : "orange",
                    borderRadius: 20,
                    padding: 5,
                    elevation: 6,
                    shadowColor: "black",
                  }}
                >
                  <Image
                    source={require("@/assets/images/editing.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={style.txt_val}>{religionVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={setEmail}
                  style={style.txt_email}
                  editable={validIcon8 ? true : false}
                />
                <TouchableOpacity
                  onPress={() => {
                    validIcon8 ? setValidIcon8(false) : setValidIcon8(true);
                  }}
                  style={{
                    backgroundColor: validIcon8 ? "#00ffeef7" : "orange",
                    borderRadius: 20,
                    padding: 5,
                    elevation: 6,
                    shadowColor: "black",
                  }}
                >
                  <Image
                    source={require("@/assets/images/editing.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={style.txt_val}>{emailVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="Current Password"
                  value={cupassword}
                  onChangeText={setCuPassword}
                  style={style.txt_pass}
                  secureTextEntry={!passwordIconValid3}
                />
                <TouchableOpacity
                  onPress={() => setPasswordIconValid3(!passwordIconValid3)}
                >
                  <Image
                    source={
                      passwordIconValid3
                        ? require("@/assets/images/eye.png")
                        : require("@/assets/images/visibility-off.png")
                    }
                    style={{ width: 25, height: 25 }}
                  />
                </TouchableOpacity>
              </View>
              <Text style={style.txt_val}>{cUPasswordVal}</Text>
              <View style={style.txtfeild_back}>
                <TextInput
                  placeholder="New Password             (e.g., Passw0rd@1)"
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
                  placeholder="Confirm Password       (e.g., Passw0rd@1)"
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
                  update & exit
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ProfileUpdate;

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
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 5,
    gap: 35,
  },

  picker_main_lbl: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
  },

  btn_backs: {
    width: 40,
    height: 40,
  },
});
