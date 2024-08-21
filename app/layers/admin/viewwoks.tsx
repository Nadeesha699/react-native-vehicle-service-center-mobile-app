import Footers from "@/components/footers";
import Headerss from "@/components/headers";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import { SetStateAction, useEffect, useState } from "react";
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
  Modal,
  TextInput,
  Alert,
  BackHandler,
} from "react-native";

const ViewWorks = () => {
  const localData = [
    {
      id: 0,
      jobDateAndTime: "",
      jobStatus: null,
      jobDescription: "",
      estimateTime: 0,
      estimatePrice: 0.0,
      actualPrice: 0.0,
      repairerItems: [
        {
          id: 0,
          description: null,
          quantity: null,
          estimatePrice: null,
          status: null,
          part: {
            id: 1,
            partCode: "",
            name: "",
            price: 0.0,
            brand: {
              id: 1,
              name: "",
              code: "",
              description: "",
            },
          },
        },
      ],
      vehicle: {
        id: 1,
        vehicleNo: "",
        model: "",
        year: "",
        color: "",
        type: "",
        description: "",
        brand: {
          id: 0,
          name: "",
          code: "",
          description: "",
        },
      },
      status: "",
      customer: {
        id: 0,
        firstName: "",
        lastName: "",
        contactNo: "",
        age: 0,
        genderType: "",
        email: "",
        role: "",
      },
      assignEmployee: {
        id: 0,
        firstName: "",
        lastName: "",
        contactNo: "",
        age: 0,
        genderType: "",
        email: "",
        role: "",
      },
    },
  ];

  const localEmployee = [
    {
      id: 0,
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
      vehicle: [],
    },
  ];

  const [jobType, setJobType] = useState("NEWREQUEST");

  // const [loadAllData, setLoadAllData] = useState(localData);
  const [loadRejectData, setLoadRejectData] = useState(localData);
  const [loadConfirmData, setLoadConfirmData] = useState(localData);
  const [loadWConfirmData, setLoadWConfirmData] = useState(localData);
  const [loadDoneData, setLoadDoneData] = useState(localData);
  const [loadComptData, setLoadComptData] = useState(localData);
  const [loadNewReqData, setLoadNewReqtData] = useState(localData);
  const [loadEmploye, setLoadEmployee] = useState(localEmployee);

  const [hideModel1, setHideMode1] = useState(false);
  const [hideModel2, setHideMode2] = useState(false);
  const [confirmId, setConfirmId] = useState(0);
  const [confirmIdForEmployee, setConfirmIdForEmployee] = useState(0);
  const [etime, setETime] = useState("");
  const [eprice, setEPrice] = useState("");

  const [valETime, setvalETime] = useState("");
  const [valEPrice, setvalEPrice] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (jobType === "REJECT") {
        const response = await fetch(
          `http://13.212.11.85:1001/rcs/api/jobs?jobStatus=${jobType}`
        );
        if (response.ok) {
          const result = response.json();
          result.then((e) => {
            setLoadRejectData(e.content);
          });
        }
      } else if (jobType === "WATINGFORCONFIRM") {
        const response = await fetch(
          `http://13.212.11.85:1001/rcs/api/jobs?jobStatus=${jobType}`
        );
        if (response.ok) {
          const result = response.json();
          result.then((e) => {
            setLoadWConfirmData(e.content);
          });
        }
      } else if (jobType === "DONE") {
        const response = await fetch(
          `http://13.212.11.85:1001/rcs/api/jobs?jobStatus=${jobType}`
        );
        if (response.ok) {
          const result = response.json();
          result.then((e) => {
            setLoadDoneData(e.content);
          });
        }
      } else if (jobType === "CONFIRM") {
        const response = await fetch(
          `http://13.212.11.85:1001/rcs/api/jobs?jobStatus=${jobType}`
        );
        if (response.ok) {
          const result = response.json();
          result.then((e) => {
            setLoadConfirmData(e.content);
          });
        }
      } else if (jobType === "NEWREQUEST") {
        const response = await fetch(
          `http://13.212.11.85:1001/rcs/api/jobs?jobStatus=${jobType}`
        );
        if (response.ok) {
          const result = response.json();
          result.then((e) => {
            setLoadNewReqtData(e.content);
          });
        }
      } else if (jobType === "COMPLETE") {
        const response = await fetch(
          `http://13.212.11.85:1001/rcs/api/jobs?jobStatus=${jobType}`
        );
        if (response.ok) {
          const result = response.json();
          result.then((e) => {
            setLoadComptData(e.content);
          });
        }
      }
    };
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
  }, []);

  const callMethod = async () => {
    if (jobType === "REJECT") {
      const response = await fetch(
        `http://13.212.11.85:1001/rcs/api/jobs?jobStatus=${jobType}`
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setLoadRejectData(e.content);
        });
      }
    } else if (jobType === "WATINGFORCONFIRM") {
      const response = await fetch(
        `http://13.212.11.85:1001/rcs/api/jobs?jobStatus=${jobType}`
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setLoadWConfirmData(e.content);
        });
      }
    } else if (jobType === "DONE") {
      const response = await fetch(
        `http://13.212.11.85:1001/rcs/api/jobs?jobStatus=${jobType}`
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setLoadDoneData(e.content);
        });
      }
    } else if (jobType === "CONFIRM") {
      const response = await fetch(
        `http://13.212.11.85:1001/rcs/api/jobs?jobStatus=${jobType}`
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setLoadConfirmData(e.content);
        });
      }
    } else if (jobType === "NEWREQUEST") {
      const response = await fetch(
        `http://13.212.11.85:1001/rcs/api/jobs?jobStatus=${jobType}`
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setLoadNewReqtData(e.content);
        });
      }
    } else if (jobType === "COMPLETE") {
      const response = await fetch(
        `http://13.212.11.85:1001/rcs/api/jobs?jobStatus=${jobType}`
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setLoadComptData(e.content);
        });
      }
    }
  };

  const loadEmployee = async () => {
    const respose = await fetch(
      "http://13.212.11.85:1001/rcs/api/users?role=EMPLOYEE"
    );
    if (respose.ok) {
      const reault = respose.json();
      reault.then((e) => {
        setLoadEmployee(e.content);
      });
    }
  };

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
              <Text style={style.lbl_jobs_main}>Job Type</Text>
              <Picker
                selectedValue={jobType}
                onValueChange={(itemValue, itemIndex) => setJobType(itemValue)}
                style={style.picker}
              >
                <Picker.Item label="Incoming Request" value="NEWREQUEST" />
                <Picker.Item label="Repair Finalized" value="DONE" />
                <Picker.Item label="Service Completed" value="COMPLETE" />
                <Picker.Item label="Request Rejected" value="REJECT" />
                <Picker.Item
                  label="Pending Confirmation"
                  value="WATINGFORCONFIRM"
                />
                <Picker.Item label="Service Confirm" value="CONFIRM" />
              </Picker>
              <TouchableOpacity onPress={callMethod}>
                <Image
                  source={require("@/assets/images/rotation.png")}
                  style={{ width: 30, height: 30, shadowColor: "black" }}
                ></Image>
              </TouchableOpacity>
            </View>
          </View>
          <SafeAreaView>
            <ScrollView>
              <View style={style.que}>
                {jobType === "DONE"
                  ? loadDoneData.map((e, index) => {
                      return e.jobStatus ? (
                        <View key={index} style={style.card}>
                          <View style={style.subcardR1}>
                            <Text style={style.txt_1}>Job Deatils</Text>
                            <Text style={style.txt_1}>customer Name</Text>
                            <Text style={style.txt_1}>
                              customer Contect Number
                            </Text>
                            <Text style={style.txt_1}>Vehicle model</Text>
                            <Text style={style.txt_1}>Manufacture Year</Text>
                            <Text style={style.txt_1}>Vehicle Number</Text>
                            <Text style={style.txt_1}>Service Technicion</Text>
                            <Text style={style.txt_1}>
                              Technision Contact Number
                            </Text>
                            <Text style={style.txt_1}>Repaired Itmes</Text>
                          </View>
                          <ScrollView horizontal style={{ height: "100%" }}>
                            <View style={style.subcardR1}>
                              <Text style={style.txt_3}>
                                {e.jobDescription}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.customer.firstName} {e.customer.lastName}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.customer.contactNo}
                              </Text>
                              <Text style={style.txt_2}>{e.vehicle.model}</Text>
                              <Text style={style.txt_2}>{e.vehicle.year}</Text>
                              <Text style={style.txt_1}>
                                {e.vehicle.vehicleNo}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.assignEmployee.firstName}{" "}
                                {e.assignEmployee.lastName}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.assignEmployee.contactNo}
                              </Text>
                              <View
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                {e.repairerItems.map((a, index1) => {
                                  return (
                                    <Text style={style.txt_3} key={index1}>
                                      {a.part.name},{" "}
                                    </Text>
                                  );
                                })}
                              </View>
                            </View>
                          </ScrollView>
                        </View>
                      ) : (
                        ""
                      );
                    })
                  : ""}
                {jobType === "COMPLETE"
                  ? loadDoneData.map((e, index) => {
                      return e.jobStatus ? (
                        <View key={index} style={style.cardCom}>
                          <View style={style.subcardCom1}>
                            <Text style={style.txt_1}>Job Deatils</Text>
                            <Text style={style.txt_1}>customer Name</Text>
                            <Text style={style.txt_1}>
                              customer Contect Number
                            </Text>
                            <Text style={style.txt_1}>Vehicle model</Text>
                            <Text style={style.txt_1}>Manufacture Year</Text>
                            <Text style={style.txt_1}>Vehicle Number</Text>
                            <Text style={style.txt_1}>Repaired Itmes</Text>
                            <Text style={style.txt_1}>Service Technicion</Text>
                            <Text style={style.txt_1}>
                              Technision Contact Number
                            </Text>
                            <Text style={style.txt_1}>Total cost</Text>
                          </View>
                          <ScrollView horizontal style={{ height: "100%" }}>
                            <View style={style.subcardCom1}>
                              <Text style={style.txt_3}>
                                {e.jobDescription}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.customer.firstName} {e.customer.lastName}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.customer.contactNo}
                              </Text>
                              <Text style={style.txt_2}>{e.vehicle.model}</Text>
                              <Text style={style.txt_2}>{e.vehicle.year}</Text>
                              <Text style={style.txt_1}>
                                {e.vehicle.vehicleNo}
                              </Text>
                              <View
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                {e.repairerItems.map((a, index1) => {
                                  return (
                                    <Text style={style.txt_3} key={index1}>
                                      {a.part.name},{" "}
                                    </Text>
                                  );
                                })}
                              </View>
                              <Text style={style.txt_2}>
                                {e.assignEmployee.firstName}{" "}
                                {e.assignEmployee.lastName}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.assignEmployee.contactNo}
                              </Text>
                              <Text style={style.txt_3}>
                                LKR {e.estimatePrice}
                              </Text>
                            </View>
                          </ScrollView>
                        </View>
                      ) : (
                        ""
                      );
                    })
                  : ""}
                {jobType === "CONFIRM"
                  ? loadConfirmData.map((e, index) => {
                      return e.jobStatus ? (
                        <View key={index} style={style.cardC}>
                          <View style={style.subcardC1}>
                            <Text style={style.txt_1}>Job Deatils</Text>
                            <Text style={style.txt_1}>customer Name</Text>
                            <Text style={style.txt_1}>
                              customer Contect Number
                            </Text>
                            <Text style={style.txt_1}>Vehicle model</Text>
                            <Text style={style.txt_1}>Vehicle Number</Text>
                            <Text style={style.txt_1}>Manufacture Year</Text>
                            <Text style={style.txt_1}>Repair Itmes</Text>
                            <Text style={style.txt_1}>Estimate Time</Text>
                            <Text style={style.txt_1}>Estimate Price</Text>
                          </View>
                          <ScrollView horizontal style={{ height: "100%" }}>
                            <View style={style.subcardC1}>
                              <Text style={style.txt_3}>
                                {e.jobDescription}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.customer.firstName} {e.customer.lastName}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.customer.contactNo}
                              </Text>
                              <Text style={style.txt_2}>{e.vehicle.model}</Text>
                              <Text style={style.txt_2}>{e.vehicle.year}</Text>
                              <Text style={style.txt_1}>
                                {e.vehicle.vehicleNo}
                              </Text>
                              <View
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                {e.repairerItems.map((a, index1) => {
                                  return (
                                    <Text style={style.txt_3} key={index1}>
                                      {a.part.name},{" "}
                                    </Text>
                                  );
                                })}
                              </View>
                              <Text style={style.txt_2}>
                                {e.estimateTime} Hours
                              </Text>
                              <Text style={style.txt_2}>
                                {e.estimatePrice} Price
                              </Text>
                            </View>
                          </ScrollView>
                          <View style={style.subcardC2}>
                            <TouchableOpacity
                              style={{
                                width: 40,
                                height: 40,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 50,
                              }}
                              onPress={() => {
                                loadEmployee();
                                setHideMode2(true);
                                setConfirmIdForEmployee(e.id);
                              }}
                            >
                              <Image
                                source={require("@/assets/images/assignment.png")}
                                style={{ width: 20, height: 20 }}
                              ></Image>
                            </TouchableOpacity>
                          </View>
                        </View>
                      ) : (
                        ""
                      );
                    })
                  : ""}
                {jobType.match("REJECT")
                  ? loadRejectData.map((e, index) => {
                      return e.jobStatus ? (
                        <View key={index} style={style.cardR}>
                          <View style={style.subcardR1}>
                            <Text style={style.txt_1}>Job Deatils</Text>
                            <Text style={style.txt_1}>customer Name</Text>
                            <Text style={style.txt_1}>
                              customer Contact Number
                            </Text>
                            <Text style={style.txt_1}>Vehicle model</Text>
                            <Text style={style.txt_1}>Manufacture Year</Text>
                            <Text style={style.txt_1}>Vehicle Number</Text>
                            <Text style={style.txt_1}>Repair Itmes</Text>
                          </View>
                          <ScrollView horizontal style={{ height: "100%" }}>
                            <View style={style.subcardR1}>
                              <Text style={style.txt_3}>
                                {e.jobDescription}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.customer.firstName} {e.customer.lastName}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.customer.contactNo}
                              </Text>
                              <Text style={style.txt_2}>{e.vehicle.model}</Text>
                              <Text style={style.txt_2}>{e.vehicle.year}</Text>
                              <Text style={style.txt_1}>
                                {e.vehicle.vehicleNo}
                              </Text>
                              <View
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                {e.repairerItems.map((a, index1) => {
                                  return (
                                    <Text style={style.txt_3} key={index1}>
                                      {a.part.name},{" "}
                                    </Text>
                                  );
                                })}
                              </View>
                            </View>
                          </ScrollView>
                        </View>
                      ) : (
                        ""
                      );
                    })
                  : ""}
                {jobType === "WATINGFORCONFIRM"
                  ? loadWConfirmData.map((e, index) => {
                      return e.jobStatus ? (
                        <View key={index} style={style.cardWC}>
                          <View style={style.subcardWC1}>
                            <Text style={style.txt_1}>Job Deatils</Text>
                            <Text style={style.txt_1}>customer Name</Text>
                            <Text style={style.txt_1}>
                              customer Contact Number
                            </Text>
                            <Text style={style.txt_1}>Vehicle model</Text>
                            <Text style={style.txt_1}>Manufacture Year</Text>
                            <Text style={style.txt_1}>Vehicle number</Text>
                            <Text style={style.txt_1}>Repair Itmes</Text>
                            <Text style={style.txt_1}>Estimate Time</Text>
                            <Text style={style.txt_1}>Estimate Price</Text>
                          </View>
                          <ScrollView horizontal style={{ height: "100%" }}>
                            <View style={style.subcardWC1}>
                              <Text style={style.txt_3}>
                                {e.jobDescription}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.customer.firstName} {e.customer.lastName}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.customer.contactNo}
                              </Text>
                              <Text style={style.txt_2}>{e.vehicle.model}</Text>
                              <Text style={style.txt_2}>{e.vehicle.year}</Text>
                              <Text style={style.txt_1}>
                                {e.vehicle.vehicleNo}
                              </Text>
                              <View
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                {e.repairerItems.map((a, index1) => {
                                  return (
                                    <Text style={style.txt_3} key={index1}>
                                      {a.part.name},{" "}
                                    </Text>
                                  );
                                })}
                              </View>
                              <Text style={style.txt_2}>
                                {e.estimateTime} Hours
                              </Text>
                              <Text style={style.txt_2}>
                                {e.estimatePrice} Price
                              </Text>
                            </View>
                          </ScrollView>
                        </View>
                      ) : (
                        "" // <Text style={{backgroundColor:"red"}}>Hello</Text>
                      );
                    })
                  : ""}
                {jobType.match("NEWREQUEST")
                  ? loadNewReqData.map((e, index) => {
                      return e.jobStatus ? (
                        <View key={index} style={style.cardN}>
                          <View style={style.subcardN1}>
                            <Text style={style.txt_1}>Job Deatils</Text>
                            <Text style={style.txt_1}>customer Name</Text>
                            <Text style={style.txt_1}>
                              customer contact number
                            </Text>
                            <Text style={style.txt_1}>Vehicle model</Text>
                            <Text style={style.txt_1}>Manufacture Year</Text>
                            <Text style={style.txt_1}>vehicle number</Text>
                            <Text style={style.txt_1}>Data was sent on</Text>
                            <Text style={style.txt_1}>Repair Itmes</Text>
                          </View>
                          <ScrollView horizontal style={{ height: "100%" }}>
                            <View style={style.subcardN1}>
                              <Text style={style.txt_3}>
                                {e.jobDescription}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.customer.firstName} {e.customer.lastName}
                              </Text>
                              <Text style={style.txt_3}>
                                {e.customer.contactNo}
                              </Text>
                              <Text style={style.txt_3}>{e.vehicle.model}</Text>
                              <Text style={style.txt_2}>{e.vehicle.year}</Text>
                              <Text style={style.txt_1}>
                                {e.vehicle.vehicleNo}
                              </Text>
                              <Text style={style.txt_2}>
                                {e.jobDateAndTime}
                              </Text>
                              <View
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                              >
                                {e.repairerItems.map((a, index1) => {
                                  return (
                                    <Text style={style.txt_3} key={index1}>
                                      {a.part.name},{" "}
                                    </Text>
                                  );
                                })}
                              </View>
                            </View>
                          </ScrollView>
                          <View style={style.subcardN2}>
                            <TouchableOpacity
                              style={{
                                width: 40,
                                height: 40,
                                backgroundColor: "white",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 50,
                              }}
                              onPress={() => {
                                setConfirmId(e.id);
                                setHideMode1(true);
                              }}
                            >
                              <Image
                                source={require("@/assets/images/confirmation.png")}
                                style={{ width: 20, height: 20 }}
                              ></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={{
                                width: 40,
                                height: 40,
                                backgroundColor: "red",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: 50,
                              }}
                              onPress={async () => {
                                const respnse = await fetch(
                                  `http://13.212.11.85:1001/rcs/api/jobs/${e.id}`,
                                  {
                                    method: "PUT",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                      jobStatus: "REJECT",
                                    }),
                                  }
                                );
                                // console.log(respnse.ok);
                                if (respnse.ok) {
                                  ToastAndroid.show("rejected", 3000);
                                } else {
                                  ToastAndroid.show("can't reject", 3000);
                                }
                              }}
                            >
                              <Image
                                source={require("@/assets/images/denied.png")}
                                style={{ width: 20, height: 20 }}
                              ></Image>
                            </TouchableOpacity>
                          </View>
                        </View>
                      ) : (
                        ""
                      );
                    })
                  : ""}
              </View>
              <View style={{ height: 200 }}></View>
            </ScrollView>
          </SafeAreaView>
          <Modal animationType="slide" transparent={true} visible={hideModel1}>
            <View style={style.popup_msg_back}>
              <View style={style.popup_msg}>
                <TouchableOpacity
                  onPress={() => {
                    setHideMode1(false);
                    setEPrice("");
                    setETime("");
                  }}
                  style={{ marginBottom: 20 }}
                >
                  <Image
                    source={require("@/assets/images/cross.png")}
                    style={{ width: 30, height: 30 }}
                  ></Image>
                </TouchableOpacity>
                <TextInput
                  placeholder="Estimate time                          e.g.,(4)"
                  value={etime}
                  onChangeText={setETime}
                  style={style.txt_email}
                ></TextInput>
                <Text style={style.txt_val}>{valETime}</Text>
                <TextInput
                  placeholder="Estimate price                     e.g.,(5000)"
                  value={eprice}
                  onChangeText={setEPrice}
                  style={style.txt_email}
                ></TextInput>
                <Text style={style.txt_val}>{valEPrice}</Text>
                <TouchableOpacity
                  style={style.btn_login}
                  onPress={async () => {
                    if (etime.length == 0) {
                      setvalETime("Cannot be blank");
                    } else if (eprice.length == 0) {
                      setvalETime("");
                      setvalEPrice("Cannot be blank");
                    } else if (!eprice.match(/^\d+$/)) {
                      setvalETime("Invalid format, enter number only");
                    } else {
                      setvalETime("");
                      setvalEPrice("");
                      const respnse = await fetch(
                        `http://13.212.11.85:1001/rcs/api/jobs/${confirmId}`,
                        {
                          method: "PUT",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            jobStatus: "WATINGFORCONFIRM",
                            estimateTime: etime,
                            estimatePrice: eprice,
                          }),
                        }
                      );
                      if (respnse.ok) {
                        setEPrice("");
                        setETime("");
                        setHideMode1(false);
                        ToastAndroid.show("send message", 3000);
                      }
                    }
                  }}
                >
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: 20,
                      letterSpacing: 3,
                    }}
                  >
                    confrirm
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Modal animationType="slide" transparent={true} visible={hideModel2}>
            <View style={style.send_form_sub}>
              <View style={style.send_form_sub2}>
                <TouchableOpacity
                  onPress={() => {
                    setHideMode2(false);
                  }}
                  style={{ marginBottom: 20 }}
                >
                  <Image
                    source={require("@/assets/images/cross.png")}
                    style={{ width: 30, height: 30 }}
                  ></Image>
                </TouchableOpacity>
                <ScrollView>
                  {loadEmploye.map((e, index) => {
                    return (
                      <View key={index} style={style.send_form_sub3}>
                        <Text style={style.txt_assign}>
                          {e.firstName} {e.lastName}
                        </Text>
                        <TouchableOpacity
                          style={{
                            width: 40,
                            height: 40,
                            backgroundColor: "yellow",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 50,
                          }}
                          onPress={async () => {
                            const response = await fetch(
                              `http://13.212.11.85:1001/rcs/api/jobs/${confirmIdForEmployee}/adminAssign`,
                              {
                                method: "PUT",
                                headers: {
                                  "Content-Type": "application/json",
                                },
                                body: JSON.stringify({
                                  assignEmployee: {
                                    id: e.id,
                                  },
                                }),
                              }
                            );
                            if (response.ok) {
                              setHideMode2(false);
                              ToastAndroid.show("assign success", 3000);
                            }
                          }}
                        >
                          <Image
                            source={require("@/assets/images/assignment.png")}
                            style={{ width: 20, height: 20 }}
                          ></Image>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
        <Footers a="admin"></Footers>
      </View>
    </ImageBackground>
  );
};

export default ViewWorks;

const style = StyleSheet.create({
  main_viewc: {
    backgroundColor: "#0000007c",
    // backgroundColor: "white",
    width: "100%",
    height: "80%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
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
    gap: 20,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },

  lbl_jobs_main: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    fontSize: 18,
  },

  picker: {
    width: 180,
    height: 30,
    borderRadius: 30,
    backgroundColor: "transparent",
    color: "black",
    fontWeight: "bold",
  },

  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#eba03051",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
    shadowColor: "yellow",
    gap: 20,
  },

  subcard1: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  subcard: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  cardN: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#00aaff51",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
    gap: 20,
  },

  subcardN1: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  subcardN2: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  cardC: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#00ff2f51",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
    gap: 20,
  },

  subcardC1: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  subcardC2: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  cardR: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ff000051",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
    gap: 20,
  },

  subcardR1: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  cardWC: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#a600ff51",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
    gap: 20,
  },

  subcardWC1: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  cardCom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#00fff751",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    padding: 10,
    gap: 20,
  },

  subcardCom1: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },

  txt_1: {
    color: "yellow",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  txt_2: {
    color: "white",
    fontWeight: "bold",
    textTransform: "lowercase",
    letterSpacing: 3,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  txt_3: {
    color: "yellow",
    fontWeight: "bold",
    textTransform: "capitalize",
    letterSpacing: 3,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  que: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    paddingTop: 10,
  },

  popup_msg_back: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  popup_msg: {
    backgroundColor: "white",
    width: 300,
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },

  send_form_sub: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  send_form_sub2: {
    backgroundColor: "white",
    width: 280,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },

  send_form_sub3: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    marginBottom: 20,
  },

  notLoad: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
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
  btn_login: {
    backgroundColor: "#ffffff18",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 3,
    width: 140,
    height: 30,
    borderRadius: 30,
  },
  txt_val: {
    fontWeight: "bold",
    color: "red",
    fontSize: 12,
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  txt_assign: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 3,
    textShadowColor: "rgba(0, 0, 0, 0.996)",
    textShadowOffset: { width: 4, height: 3 },
    textShadowRadius: 20,
  },
});
