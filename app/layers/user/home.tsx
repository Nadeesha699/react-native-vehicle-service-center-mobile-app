import Index from "@/app";
import Footers from "@/components/footers";
import Headerss from "@/components/headers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
  ToastAndroid,
  ScrollView,
  Modal,
  TextInput,
  Alert,
  BackHandler,
} from "react-native";

const Home = () => {
  const localData = [
    {
      id: 0,
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
  ];

  const loactDataItem = [
    {
      id: 1,
      partCode: "",
      name: "",
      price: 0,
      description: "",
      brand: {
        id: 1,
        name: "",
      },
      status: "",
    },
  ];

  const repair = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  const [loadVehicle, setLoadVehicle] = useState(localData);
  const [loadItem, setLoadItem] = useState(loactDataItem);
  const [repairItem, setRepairItem] = useState(repair);

  const [vehicleId, setVehicleId] = useState(0);
  const [modelName, setModelName] = useState("Vehicle");
  const [itemName, setItemName] = useState("");

  const [hideUI, sethideUi] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [visibleSendForm, setVisibleSendForm] = useState(false);

  const [changeSelectVehicleIcon, setChangeSelectVehicleIcon] = useState(false);
  const [changeSelectVehicleName, setChangeSelectVehicleName] = useState(false);
  const [changeSelectVehicleUiI, setChangeSelectVehicleUI] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const id = await AsyncStorage.getItem("UID");
      const response = await fetch(
        `http://13.212.11.85:1001/rcs/api/users/${id}`
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setLoadVehicle(e.content.vehicle);
        });
      }
    };
    const fetchItem = async () => {
      const response = await fetch(
        "http://13.212.11.85:1001/rcs/api/vehicleParts/suggestions/1"
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setLoadItem(e.content);
        });
      }
    };
    fetchItem();
    fetchData();

    const handleBackPress = () => {
      Alert.alert("මජං කඩේ", "Would you like to login out now ?", [
        { text: "Cancel", onPress: () => null },
        {
          text: "OK",
          onPress: () => {
            router.navigate("/layers/login");
          },
        },
      ]);
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", handleBackPress);
  }, []);

  const updateRepairItem = (index: number) => {
    // Create a copy of the current repairItem array
    const updatedRepair = [...repairItem];
    // Set the specific index to true
    if (updatedRepair[index] == true) {
      updatedRepair[index] = false;
    } else {
      updatedRepair[index] = true;
    }
    // Update the state with the new array
    setRepairItem(updatedRepair);
  };

  return (
    <ImageBackground
      source={require("@/assets/images/3d-rendering-cartoon-welcome-door.jpg")}
      style={style.home_back}
    >
      <View style={style.home1_main}>
        <Headerss></Headerss>
        <View style={style.home2_main}>
          <Image
            source={require("@/assets/images/3D-model.png")}
            style={{ width: 450, height: 450 }}
          ></Image>
          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              width: 14,
              height: 14,
              alignItems: "center",
              padding: 2,
              borderRadius: 20,
              position: "absolute",
              top: 448,
              right: 210,
            }}
            onPress={() => {
              setItemName("Tyre");
              if (modelName.match("Vehicle")) {
                ToastAndroid.show("select vehicle first", 3000);
              } else {
                hideUI ? sethideUi(false) : sethideUi(true);
              }
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              width: 14,
              height: 14,
              alignItems: "center",
              padding: 2,
              borderRadius: 20,
              position: "absolute",
              top: 433,
              right: 197,
            }}
            onPress={() => {
              setItemName("Rim");
              if (modelName.match("Vehicle")) {
                ToastAndroid.show("select vehicle first", 3000);
              } else {
                hideUI ? sethideUi(false) : sethideUi(true);
              }
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              width: 14,
              height: 14,
              alignItems: "center",
              padding: 2,
              borderRadius: 20,
              position: "absolute",
              top: 353,
              right: 277,
            }}
            onPress={() => {
              setItemName("Bonet");
              if (modelName.match("Vehicle")) {
                ToastAndroid.show("select vehicle first", 3000);
              } else {
                hideUI ? sethideUi(false) : sethideUi(true);
              }
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              width: 14,
              height: 14,
              alignItems: "center",
              padding: 2,
              borderRadius: 20,
              position: "absolute",
              top: 399,
              right: 247,
            }}
            onPress={() => {
              setItemName("Head Light");
              if (modelName.match("Vehicle")) {
                ToastAndroid.show("select vehicle first", 3000);
              } else {
                hideUI ? sethideUi(false) : sethideUi(true);
              }
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              width: 14,
              height: 14,
              alignItems: "center",
              padding: 2,
              borderRadius: 20,
              position: "absolute",
              top: 350,
              right: 177,
            }}
            onPress={() => {
              setItemName("Side Mirrors");
              if (modelName.match("Vehicle")) {
                ToastAndroid.show("select vehicle first", 3000);
              } else {
                hideUI ? sethideUi(false) : sethideUi(true);
              }
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              width: 14,
              height: 14,
              alignItems: "center",
              padding: 2,
              borderRadius: 20,
              position: "absolute",
              top: 310,
              right: 237,
            }}
            onPress={() => {
              setItemName("Wind screen");
              if (modelName.match("Vehicle")) {
                ToastAndroid.show("select vehicle first", 3000);
              } else {
                hideUI ? sethideUi(false) : sethideUi(true);
              }
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              width: 14,
              height: 14,
              alignItems: "center",
              padding: 2,
              borderRadius: 20,
              position: "absolute",
              top: 323,
              right: 80,
            }}
            onPress={() => {
              setItemName("Rear Door");
              if (modelName.match("Vehicle")) {
                ToastAndroid.show("select vehicle first", 3000);
              } else {
                hideUI ? sethideUi(false) : sethideUi(true);
              }
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              width: 14,
              height: 14,
              alignItems: "center",
              padding: 2,
              borderRadius: 20,
              position: "absolute",
              top: 343,
              right: 127,
            }}
            onPress={() => {
              setItemName("Front Door");
              if (modelName.match("Vehicle")) {
                ToastAndroid.show("select vehicle first", 3000);
              } else {
                hideUI ? sethideUi(false) : sethideUi(true);
              }
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "yellow",
              width: 14,
              height: 14,
              alignItems: "center",
              padding: 2,
              borderRadius: 20,
              position: "absolute",
              top: 420,
              right: 297,
            }}
            onPress={() => {
              setItemName("Front Buffer");
              if (modelName.match("Vehicle")) {
                ToastAndroid.show("select vehicle first", 3000);
              } else {
                hideUI ? sethideUi(false) : sethideUi(true);
              }
            }}
          />
          <View
            style={{
              backgroundColor: "#0000007a",
              borderRadius: 10,
              alignItems: "center",
              padding: 20,
              position: "absolute",
              top: hideUI ? 400 : -400,
              right: 40,
              width: 150,
              gap: 3,
            }}
          >
            <Text style={style.clickitemMain}>{itemName}</Text>
            <TouchableOpacity
              onPress={() => {
                if (itemName === "Rim") {
                  updateRepairItem(0);
                } else if (itemName === "Tyre") {
                  updateRepairItem(1);
                } else if (itemName === "Bonet") {
                  updateRepairItem(2);
                } else if (itemName === "Head Light") {
                  updateRepairItem(3);
                } else if (itemName === "Side Mirrors") {
                  updateRepairItem(4);
                } else if (itemName === "Wind screen") {
                  updateRepairItem(5);
                } else if (itemName === "Rear Door") {
                  updateRepairItem(6);
                } else if (itemName === "Front Door") {
                  updateRepairItem(7);
                } else if (itemName === "Front Buffer") {
                  updateRepairItem(8);
                }
              }}
              style={style.clickitemBack}
            >
              <Text style={style.txt_click}>Repair</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              // backgroundColor: "#0000007a",
              backgroundColor: "white",
              // borderWidth: 2,
              position: "absolute",
              alignItems: "center",
              padding: 10,
              left: 30,
              top: 20,
              borderRadius: 20,
              gap: 5,
              width: 200,
              height: 150,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.5,
              shadowRadius: 6,
              elevation: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                width: "100%",
                gap: 50,
              }}
            >
              <Text style={style.txt_itemMainview}>Item Name</Text>
              <Text style={style.txt_itemMainview}>Repair</Text>
            </View>
            <FlatList
              data={loadItem}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <Text style={style.txt_viewItem}>{item.name}</Text>
                  {repairItem[item.id - 1] ? (
                    <Image
                      style={style.iconCheck}
                      source={require("@/assets/images/checked.png")}
                    ></Image>
                  ) : (
                    <Image
                      style={style.iconCheck}
                      source={require("@/assets/images/cancel.png")}
                    ></Image>
                  )}
                </View>
              )}
            />
            <TouchableOpacity
              onPress={() => {
                sethideUi(false);
                setVisibleSendForm(true);
              }}
              style={style.view_back}
            >
              <Text style={style.txt_click1}>send</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: "absolute",
              top: 50,
              borderRadius: 20,
              // borderWidth: 2,
              right: changeSelectVehicleUiI ? 5 : -160,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              gap: 40,
              padding: 5,
              // Shadow properties for iOS
              shadowColor: "#000", // Dark shadow color
              shadowOffset: { width: 0, height: 4 }, // Offset of the shadow
              shadowOpacity: 0.5, // Higher opacity for a darker shadow
              shadowRadius: 6, // Increased radius for a softer shadow
              // Shadow property for Android
              elevation: 8, // Increased elevation for a more prominent shadow
            }}
          >
            <TouchableOpacity
              onPress={() => {
                changeSelectVehicleIcon
                  ? setChangeSelectVehicleIcon(false)
                  : setChangeSelectVehicleIcon(true);
                changeSelectVehicleUiI
                  ? setChangeSelectVehicleUI(false)
                  : setChangeSelectVehicleUI(true);
              }}
            >
              <Image
                source={
                  changeSelectVehicleIcon
                    ? require("@/assets/images/right-arrow.png")
                    : require("@/assets/images/left-arrow.png")
                }
                style={{ width: 30, height: 30 }}
              ></Image>
              <Text>{modelName}</Text>
            </TouchableOpacity>
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                backgroundColor: "white",
                width: 120,
                height: "100%",
                padding: 20,
                borderRadius: 20,
                gap: 10,
              }}
            >
              <Text
                style={{
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                select your vehicle
              </Text>
              <ScrollView>
                {loadVehicle.length ? (
                  loadVehicle.map((e, Index) => {
                    return (
                      <View key={Index}>
                        <TouchableOpacity
                          onPress={() => {
                            setChangeSelectVehicleIcon(false);
                            setChangeSelectVehicleUI(false);
                            setModelName(e.model);
                            setVehicleId(e.id);
                          }}
                        >
                          <Text
                            style={{
                              color: "black",
                              fontSize: 20,
                              letterSpacing: 3,
                              textTransform: "uppercase",
                              padding: 2,
                              backgroundColor: changeSelectVehicleName
                                ? "yellow"
                                : "transparent",
                              borderRadius: 5,
                            }}
                          >
                            {e.model}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    );
                  })
                ) : (
                  <Text
                    style={{ textTransform: "uppercase", fontWeight: "bold" }}
                  >
                    No vehicle found
                  </Text>
                )}
              </ScrollView>
              <TouchableOpacity
                style={style.view_back1}
                onPress={() => {
                  router.navigate("/layers/user/vehicleregister");
                }}
              >
                <Text style={style.txt_click2}>add new</Text>
              </TouchableOpacity>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={visibleSendForm}
            >
              <View style={style.send_form}>
                <View style={style.send_form_sub}>
                  <TouchableOpacity
                    onPress={() => {
                      setVisibleSendForm(false);
                    }}
                    style={{ marginBottom: 20 }}
                  >
                    <Image
                      source={require("@/assets/images/cross.png")}
                      style={{ width: 30, height: 30 }}
                    ></Image>
                  </TouchableOpacity>
                  <TextInput
                    placeholder="Enter repair issue in detail"
                    value={jobDescription}
                    onChangeText={setJobDescription}
                    style={style.txt_email1}
                  />
                  <View style={style.send_form_sub2}>
                    <TouchableOpacity
                      onPress={async () => {
                        setVisibleSendForm(false);
                        if (jobDescription.length == 0) {
                        } else if (
                          !jobDescription.match(/^[A-Z][a-zA-Z-' ]+$/)
                        ) {
                        } else {
                          const id = await AsyncStorage.getItem("UID");

                          const now = new Date();
                          const date = now.toISOString();
                          String(date);
                          console.log(repairItem);
                          console.log(vehicleId);
                          console.log(id);
                          console.log(jobDescription);

                          const response = await fetch(
                            "http://13.212.11.85:1001/rcs/api/jobs",
                            {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                jobDescription: jobDescription,
                                repairerItems: repairItem
                                  .map((item, index) =>
                                    item ? { part: { id: index + 1 } } : {}
                                  ) // Map to the desired structure
                                  .filter(
                                    (item) => Object.keys(item).length !== 0
                                  ), // Filter out empty objects
                                vehicle: {
                                  id: vehicleId,
                                },
                                customer: {
                                  id: id,
                                },
                              }),
                            }
                          );
                          if (response.ok) {
                            setVisibleSendForm(false);
                            setRepairItem(repair);
                            ToastAndroid.show("job send", 3000);
                          } else {
                            ToastAndroid.show("unsent", 3000);
                          }
                        }
                      }}
                      style={style.view_back}
                    >
                      <Text>send</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
          <Footers a="user"></Footers>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Home;

const style = StyleSheet.create({
  home_back: {
    width: "100%",
    height: "100%",
  },

  home1_main: {
    backgroundColor: "#00000094",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },

  home2_main: {
    backgroundColor: "white",
    width: "100%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  iconCheck: {
    width: 10,
    height: 10,
  },

  clickitemMain: {
    color: "yellow",
    fontSize: 30,
    letterSpacing: 4,
    textTransform: "uppercase",
  },

  clickitemBack: {
    borderWidth: 2,
    borderColor: "black",
    padding: 2,
    width: 70,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 5,
  },

  txt_click: {
    color: "black",
    letterSpacing: 2,
    fontWeight: "bold",
  },

  txt_itemMainview: {
    color: "black",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontWeight: "bold",
  },

  txt_viewItem: {
    color: "black",
    letterSpacing: 1,
    fontWeight: "bold",
    width: 70,
  },
  view_back: {
    borderWidth: 2,
    borderColor: "black",
    padding: 2,
    width: 70,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 5,
    // backgroundColor:"green"
  },

  txt_click1: {
    color: "black",
    letterSpacing: 5,
    fontWeight: "bold",
  },

  view_back1: {
    borderWidth: 2,
    borderColor: "black",
    padding: 2,
    width: 100,
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 5,
  },

  txt_click2: {
    color: "black",
    letterSpacing: 5,
    fontWeight: "bold",
  },

  txt_email: {
    fontWeight: "bold",
    width: 250,
    height: 40,
    borderBottomWidth: 2,
    padding: 0,
    borderColor: "black",
    fontSize: 20,
  },

  send_form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "#00000095",
  },

  send_form_sub: {
    width: 300,
    height: 150,
    backgroundColor: "white",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    // Shadow properties for iOS
    shadowColor: "#000", // Dark shadow color
    shadowOffset: { width: 0, height: 4 }, // Offset of the shadow
    shadowOpacity: 0.5, // Higher opacity for a darker shadow
    shadowRadius: 6, // Increased radius for a softer shadow
    // Shadow property for Android
    elevation: 8, // Increased elevation for a more prominent shadow
  },

  send_form_sub2: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
    marginTop: 20,
  },

  form_tittle: {
    fontSize: 20,
    textTransform: "uppercase",
  },

  txt_email1: {
    fontWeight: "bold",
    borderBottomWidth: 2,
    padding: 0,
    width: 220,
    borderColor: "black",
    fontSize: 20,
  },
});
