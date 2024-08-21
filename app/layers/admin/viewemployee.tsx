import Footers from "@/components/footers";
import Headerss from "@/components/headers";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  Alert,
  BackHandler,
  Modal,
} from "react-native";

const ViewEmployee = () => {

  const localData = [
    {
      id: 1,
      firstName: "",
      lastName: "",
      contactNo: "",
      dateJoin: "",
      age: 0,
      genderType: "",
      nic: "",
      nationality: "",
      image: null,
      religion: "",
      email: "",
      userLogging: null,
      passWord: "",
      role: "",
      status: "",
      vehicle: [
        {
          vehicleNo: "",
          model: "",
          year: "",
          color: "",
          type: "",
          description: "",
          brand: {
              id: 0,
          },
        },
      ],
    },
  ];

  const [visibleCus, setvisibleCus] = useState(false);
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [emaill, setEmail] = useState("");
  const [nationality, setNationality] = useState("");
  const [genderType, setGenderType] = useState("");
  const [religion, setReligion] = useState("");


  const [queData,setQueData] = useState(localData);

  useEffect(()=>{
    const fetchData = async () =>{
        const response =  await fetch('http://13.212.11.85:1001/rcs/api/users')
        if(response.ok){
           const result = response.json();
           result.then((e)=>{
              setQueData(e.content)
           })
        }
    }

    fetchData();

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
  },[]);
  
  return (
    <ImageBackground
      source={require("@/assets/images/3d-rendering-cartoon-welcome-door.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={{ width: "100%", height: "100%", backgroundColor: "#0000009a" }}
      >
        <Headerss></Headerss>
        <View style={style.main_viewc}>
        <View style={style.head}>
        <View style={style.sub_head}>
          <Text style={style.lbl_jobs_main}>User Name</Text>
          <Text style={style.lbl_jobs_main}>Email</Text>
          <Text style={style.lbl_jobs_main}>See more</Text>
        </View>
        </View>
          <SafeAreaView>
            <ScrollView>
              {queData.map((e, Index) => {
                if(e.role == 'EMPLOYEE'){
                  return (
                    <View key={Index} style={style.customerv_card}>
                      <ScrollView horizontal >
                      <Text style={style.txt_vcard1}>{e.firstName} {e.lastName}</Text>
                      </ScrollView>
                      <ScrollView horizontal >
                      <Text style={style.txt_vcard2}>{e.email}</Text>
                      </ScrollView>
                      <TouchableOpacity
                         onPress={() => {
                          setvisibleCus(true);
                          setFName(e.firstName)
                          setLName(e.lastName)
                          setEmail(e.email)
                          setGenderType(e.genderType)
                          setReligion(e.contactNo)
                          setNationality(e.nationality)
                        }}
                      >
                        <Image
                          source={require("@/assets/images/plus.png")}
                          style={style.img_govmore}
                        ></Image>
                      </TouchableOpacity>
                    </View>
                  );
                }
              })}
              <View style={{ height: 100 }}></View>
            </ScrollView>
          </SafeAreaView>
        </View>
        <Modal animationType="slide" transparent={true} visible={visibleCus}>
          <View style={style.container}>
            <TouchableOpacity
              onPress={() => {
                setvisibleCus(false);
              }}
            >
              <Image
                source={require("@/assets/images/cross.png")}
                style={{ width: 50, height: 50 }}
              ></Image>
            </TouchableOpacity>
            <View style={style.innerContainer}>
              <View style={style.card}>
                <View style={style.subcard}>
                  {/* <View style={style.infoContainer}>
                    <Text style={style.ageText}>18</Text>
                    <Text style={style.ageLabel}>Age</Text>
                  </View> */}
                  <View style={style.detailsContainer}>
                    <Text style={style.name}>{fname}</Text>
                    <Text style={style.name}>{lname}</Text>
                    <Text style={style.email}>{emaill}</Text>
                  </View>
                </View>
                <View style={style.imageContainer}>
                  <Image
                    source={require("@/assets/images/userss.jpg")}
                    style={style.image}
                  />
                </View>
              </View>
              <ScrollView horizontal showsVerticalScrollIndicator={true}>
                <View style={style.detailsScrollContainer}>
                  {/* <View style={style.detailItem}>
                    <Text style={style.detailLabel}>Register Vehicles</Text>
                    <Text style={style.detailValue}>Toyota, Audi</Text>
                  </View> */}
                  <View style={style.detailItem}>
                    <Text style={style.detailLabel}>Gender Type</Text>
                    <Text style={style.detailValue}>{genderType}</Text>
                  </View>
                  <View style={style.detailItem}>
                    <Text style={style.detailLabel}>Nationality</Text>
                    <Text style={style.detailValue}>{nationality}</Text>
                  </View>
                  <View style={style.detailItem}>
                    <Text style={style.detailLabel}>Contact No</Text>
                    <Text style={style.detailValue}>{religion}</Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
        <Footers a="admin"></Footers>
      </View>
    </ImageBackground>
  );
};

export default ViewEmployee;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: '#f5f5f5',
  },
  innerContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    maxWidth: 400,
  },
  card: {
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "#e74c3c",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 18,
  },
  subcard: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  infoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  ageText: {
    fontSize: 100,
    fontWeight: "bold",
    color: "#3498db",
  },
  ageLabel: {
    fontWeight: "bold",
    color: "#e74c3c",
  },
  detailsContainer: {
    justifyContent: "center",
  },
  name: {
    fontWeight: "bold",
    color: "#2c3e50",
    letterSpacing: 1,
    fontSize: 18,
  },
  email: {
    fontWeight: "bold",
    color: "#e74c3c",
    fontSize: 16,
    letterSpacing: 1,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 200,
    borderRadius: 20,
    borderColor: "#3498db",
    borderWidth: 2,
    marginVertical: 10,
  },
  detailsScrollContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  detailItem: {
    marginRight: 20,
    backgroundColor: "#ecf0f1",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 200,
  },
  detailLabel: {
    fontWeight: "bold",
    color: "#e74c3c",
    marginBottom: 5,
  },
  detailValue: {
    fontWeight: "bold",
    color: "#2c3e50",
  },
  main_viewc: {
    backgroundColor: "#0000007c",
    // backgroundColor: "white",
    width: "100%",
    height: "80%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },

  customerv_card: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    paddingLeft:10,
    paddingRight:10
  },

  customer_vprofi: {
    borderRadius: 50,
    width: 65,
    height: 65,
  },

  img_govmore: {
    width: 20,
    height: 20,
  },

  txt_vcard1: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    width:150
  },

  txt_vcard2: {
    color: "yellow",
    width:150,
    fontSize: 18,
  },

  txt_vcm:{
    textTransform:"uppercase",
    color:"yellow",
    fontWeight:"bold",
    width:100
  },
  head: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    width: "100%",
    // padding: 29,
    alignItems: "center",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },

  sub_head: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#eeff007c",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    gap: 90,
    padding:15,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  lbl_jobs_main: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: 15,
  },
});
