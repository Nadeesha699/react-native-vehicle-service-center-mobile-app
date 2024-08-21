import Footers from "@/components/footers";
import Headerss from "@/components/headers";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ToastAndroid,
  Image,
  Alert,
  BackHandler,
} from "react-native";

const HomeE = () => {
  const localData = [
    {
      id: 0,
      jobDateAndTime: "",
      jobStatus: "",
      jobDescription: "",
      estimateTime: 0,
      estimatePrice: 0.0,
      actualPrice: null,
      repairerItems: [
        {
          id: 0,
          description: null,
          quantity: null,
          estimatePrice: null,
          status: null,
          part: {
            id: 0,
            partCode: "",
            name: "",
            price: 0.0,
            brand: {
              id: 0,
              name: "",
              code: "",
              description: "",
            },
          },
        },
      ],
      vehicle: {
        id: 0,
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

  const [loadData, setLoadData] = useState(localData);
  const [selectedJobId, setSelectedJobId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const id = await AsyncStorage.getItem("UID");
      const response = await fetch(
        `http://13.212.11.85:1001/rcs/api/jobs?assignEmployeeId=${id}&jobStatus=ASSIGN`
      );
      if (response.ok) {
        const result = await response.json();
        setLoadData(result.content);
      }
    };
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

  const handleMarkAllTasksDone = async (jobId: number) => {
    const job = loadData.find((job) => job.id === jobId);

    if (!job || !job.repairerItems.length) return;

    const repairerItemsToUpdate = job.repairerItems.map((item) => ({
      id: item.id,
      status: "DONE",
    }));

    const response = await fetch(
      `http://13.212.11.85:1001/rcs/api/jobs/${jobId}/taskDone`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          repairerItems: repairerItemsToUpdate,
        }),
      }
    );

    if (response.ok) {
      ToastAndroid.show("All tasks marked as done", 3000);
      // Refresh data after successful update
      await fetchData();
    } else {
      ToastAndroid.show("Unable to mark tasks as done", 3000);
    }
  };

  const fetchData = async () => {
    const id = await AsyncStorage.getItem("UID");
    const response = await fetch(
      `http://13.212.11.85:1001/rcs/api/jobs?assignEmployeeId=${id}&jobStatus=ASSIGN`
    );
    if (response.ok) {
      const result = await response.json();
      setLoadData(result.content);
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
        <Headerss />
        <View style={style.main_viewc}>
        <View style={style.head}>
            <View style={style.sub_head}>
              <Text style={style.lbl_jobs_main}>Your Jobs</Text>
              </View>
              </View>
          <SafeAreaView>
            <ScrollView>
              {loadData.length != 0 ? (
                loadData.map((job, jobIndex) => (
                  <View key={jobIndex} style={style.card}>
                    <View style={style.subcard}>
                      <View>
                        <Text style={style.txt_1}>Job Description</Text>
                        <Text style={style.txt_1}>Customer Name</Text>
                        <Text style={style.txt_1}>Customer contact number</Text>
                        <Text style={style.txt_1}>Vehicle Model</Text>
                        <Text style={style.txt_1}>Vehicle Number</Text>
                        <Text style={style.txt_1}>Repairing Part</Text>
                      </View>
                      <ScrollView
                        horizontal
                        showsVerticalScrollIndicator={false}
                      >
                        <View>
                          <Text style={style.txt_2}>{job.jobDescription}</Text>
                          <Text style={style.txt_2}>{job.customer.firstName} {job.customer.lastName}</Text>
                          <Text style={style.txt_2}>{job.customer.contactNo}</Text>
                          <Text style={style.txt_2}>{job.vehicle.model}</Text>
                          <Text style={style.txt_1}>{job.vehicle.vehicleNo}</Text>
                          <View style={{display:"flex",flexDirection:"row"}}>
                            {job.repairerItems.map((item, itemIndex) => (
                              <Text key={itemIndex} style={style.txt_2}>
                                {item.part.name}
                              </Text>
                            ))}
                          </View>
                        </View>
                      </ScrollView>
                    </View>
                    <TouchableOpacity
                      onPress={() => handleMarkAllTasksDone(job.id)}
                      style={style.button}
                    >
                      <Text style={style.buttonText}>Mark All as Done</Text>
                    </TouchableOpacity>
                  </View>
                ))
              ) : (
                <View style={style.nodataback}>
                  <View style={style.nodatabacksub}>
                    <Text style={style.txtnodatabacksub}>No Jobs found</Text>
                    <Image
                      source={require("@/assets/images/notloads.png")}
                      style={{ width: 200, height: 300 }}
                    ></Image>
                  </View>
                </View>
              )}
            </ScrollView>
          </SafeAreaView>
        </View>
        {/* <Footers a="employee" /> */}
      </View>
    </ImageBackground>
  );
};

export default HomeE;

const style = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff51",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    elevation: 5, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  subcard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  main_viewc: {
    backgroundColor: "#0000007c",
    width: "100%",
    height: "80%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  nodataback: {
    width: "100%",
    height: 500,
    justifyContent: "center",
    alignItems: "center",
  },
  nodatabacksub: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  txtnodatabacksub: {
    fontSize: 30,
    fontWeight: "bold", // Enhanced font weight
    textTransform: "uppercase",
    letterSpacing: 4,
    color: "white",
  },
  button: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    marginTop: 10,
    elevation: 3, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 3,
    // Enhanced font weight
  },
  txt_1: {
    color: "white",
    fontSize: 15,
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  txt_2: {
    color: "yellow",
    fontSize: 15,
    letterSpacing: 3,
    textTransform: "capitalize",
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
    padding:10
  },

  lbl_jobs_main: {
    color: "black",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 7,
    fontSize: 18,
  },
});
