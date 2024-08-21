import Footers from "@/components/footers";
import Headerss from "@/components/headers";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import { BarChart } from "react-native-chart-kit";

const HomeA = () => {
  const screenWidth = Dimensions.get("window").width;

  const [userCount, setUserCount] = useState(0);
  const [employeeCount, setEmployeeCount] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [confirmCount, setConfirmCount] = useState(0);
  const [rejectCount, setRejectCount] = useState(0);
  const [requestCount, setRequestCount] = useState(0);
  const [wconfirmCount, setWconfirmCount] = useState(0);
  const [aLLCount, setALLCount] = useState(0);

  useEffect(() => {
    const loadUser = async () => {
      const response = await fetch(
        "http://13.212.11.85:1001/rcs/api/users?role=USER"
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setUserCount(e.content.length);
        });
      }
    };

    const loadEmployee = async () => {
      const response = await fetch(
        "http://13.212.11.85:1001/rcs/api/users?role=EMPLOYEE"
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setEmployeeCount(e.content.length);
        });
      }
    };

    const loadComplete = async () => {
      const response = await fetch(
        "http://13.212.11.85:1001/rcs/api/jobs?jobStatus=COMPLETE"
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setCompleteCount(e.content.length);
        });
      }
    };

    const loadReject = async () => {
      const response = await fetch(
        "http://13.212.11.85:1001/rcs/api/jobs?jobStatus=REJECT"
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setRejectCount(e.content.length);
        });
      }
    };

    const loadRequest = async () => {
      const response = await fetch(
        "http://13.212.11.85:1001/rcs/api/jobs?jobStatus=NEWREQUEST"
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setRequestCount(e.content.length);
        });
      }
    };

    const loadConfirm = async () => {
      const response = await fetch(
        "http://13.212.11.85:1001/rcs/api/jobs?jobStatus=CONFIRM"
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setConfirmCount(e.content.length);
        });
      }
    };

    const loadDone = async () => {
      const response = await fetch(
        "http://13.212.11.85:1001/rcs/api/jobs?jobStatus=DONE"
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setDoneCount(e.content.length);
        });
      }
    };

    const loadWConfirm = async () => {
      const response = await fetch(
        "http://13.212.11.85:1001/rcs/api/jobs?jobStatus=WATINGFORCONFIRM"
      );
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setWconfirmCount(e.content.length);
        });
      }
    };

    const loadALl = async () => {
      const response = await fetch("http://13.212.11.85:1001/rcs/api/jobs");
      if (response.ok) {
        const result = response.json();
        result.then((e) => {
          setALLCount(e.content.length);
        });
      }
    };

    loadALl();
    loadReject();
    loadWConfirm();
    loadRequest();
    loadConfirm();
    loadDone();
    loadComplete();
    loadEmployee();
    loadUser();

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

  // function setMaths(a: number) {
  //   return a / 60;
  // }

  return (
    <ImageBackground
      source={require("@/assets/images/3d-rendering-cartoon-welcome-door.jpg")}
    >
      <View
        style={{ backgroundColor: "#0000009a", width: "100%", height: "100%" }}
      >
        <Headerss></Headerss>
        <View style={style.admin_scrolll}>
          <SafeAreaView>
            <ScrollView
              horizontal
              style={{ marginTop: 40 }}
              showsHorizontalScrollIndicator={false}
            >
              <View style={style.admin_subscrollM1}>
                <View style={style.admin_subscroll2}>
                  <Text style={style.txt_adminscoll}>Customer</Text>
                  <Text style={style.txt_adminscoll}>{userCount}</Text>
                </View>
                <Image
                  source={require("@/assets/images/boy.png")}
                  style={{ width: 30, height: 30 }}
                ></Image>
              </View>
              <View style={style.admin_subscrollM2}>
                <View style={style.admin_subscroll2}>
                  <Text style={style.txt_adminscoll}>Employee</Text>
                  <Text style={style.txt_adminscoll}>{employeeCount}</Text>
                </View>
                <Image
                  source={require("@/assets/images/staff.png")}
                  style={{ width: 30, height: 30 }}
                ></Image>
              </View>
              <View style={style.admin_subscrollM3}>
                <View style={style.admin_subscroll2}>
                  <Text style={style.txt_adminscoll}>Completed</Text>
                  <Text style={style.txt_adminscoll}>{completeCount}</Text>
                </View>
                <Image
                  source={require("@/assets/images/completed-task.png")}
                  style={{ width: 30, height: 30 }}
                ></Image>
              </View>
              <View style={style.admin_subscrollM4}>
                <View style={style.admin_subscroll2}>
                  <Text style={style.txt_adminscoll}>Pending</Text>
                  <Text style={style.txt_adminscoll}>{wconfirmCount}</Text>
                </View>
                <Image
                  source={require("@/assets/images/clock.png")}
                  style={{ width: 35, height: 35 }}
                ></Image>
              </View>
              <View style={style.admin_subscrollM5}>
                <View style={style.admin_subscroll2}>
                  <Text style={style.txt_adminscoll}>Rejected</Text>
                  <Text style={style.txt_adminscoll}>{rejectCount}</Text>
                </View>
                <Image
                  source={require("@/assets/images/fired.png")}
                  style={{ width: 30, height: 30 }}
                ></Image>
              </View>
              <View style={style.admin_subscrollM6}>
                <View style={style.admin_subscroll2}>
                  <Text style={style.txt_adminscoll}>Finalized</Text>
                  <Text style={style.txt_adminscoll}>{doneCount}</Text>
                </View>
                <Image
                  source={require("@/assets/images/final-call.png")}
                  style={{ width: 30, height: 30 }}
                ></Image>
              </View>
              <View style={style.admin_subscrollM7}>
                <View style={style.admin_subscroll2}>
                  <Text style={style.txt_adminscoll}>Request</Text>
                  <Text style={style.txt_adminscoll}>{requestCount}</Text>
                </View>
                <Image
                  source={require("@/assets/images/communication.png")}
                  style={{ width: 30, height: 30 }}
                ></Image>
              </View>
              <View style={style.admin_subscrollM8}>
                <View style={style.admin_subscroll2}>
                  <Text style={style.txt_adminscoll}>Confirm</Text>
                  <Text style={style.txt_adminscoll}>{confirmCount}</Text>
                </View>
                <Image
                  source={require("@/assets/images/conformity.png")}
                  style={{ width: 30, height: 30 }}
                ></Image>
              </View>
            </ScrollView>
          </SafeAreaView>
      <BarChart
        data={{
          labels: ["Completed", "Pending", "Rejected", "Finalized", "Request", "Confirm"],
          datasets: [
            {
              data: [completeCount, wconfirmCount, rejectCount, doneCount, requestCount, confirmCount],
            },
          ],
        }}
        width={Dimensions.get("window").width - 32} // from react-native
        height={250}
        yAxisLabel="" // Label before the value (e.g., "$")
        yAxisSuffix="" // Suffix after the value (e.g., "k")
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#93b5ff95",
          backgroundGradientTo: "#ff93b795",
          decimalPlaces: 0, // No decimal places needed for counts
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
            padding: 20, // Add padding inside the chart
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 3,
            elevation: 5, // For Android shadow
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        style={{
          marginVertical: 10,
          borderRadius: 16,
          paddingVertical: 10,
          paddingHorizontal: 10,
          backgroundColor: "transparent", // White background
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 3,
          elevation: 5, // For Android shadow
        }}
      />
          <TouchableOpacity
            style={style.btn_go}
            onPress={() => {
              router.navigate("/layers/admin/registeradminandcustomer");
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                letterSpacing: 3,
                paddingTop: 5,
              }}
            >
              add recruit
            </Text>
          </TouchableOpacity>
        </View>
        <Footers a="admin"></Footers>
      </View>
    </ImageBackground>
  );
};

export default HomeA;

const style = StyleSheet.create({
  
  admin_scrolll: {
    backgroundColor: "#00000075",
    height: "80%",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: 30,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },

  admin_subscrollM1: {
    flexDirection: "row",
    backgroundColor: "#ff006695",
    width: 200,
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 10,
  },

  admin_subscrollM2: {
    flexDirection: "row",
    backgroundColor: "#00ff5995",
    width: 200,
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 10,
  },

  admin_subscrollM3: {
    flexDirection: "row",
    backgroundColor: "#bf00ff95",
    width: 200,
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 10,
  },

  admin_subscrollM4: {
    flexDirection: "row",
    backgroundColor: "#0088ff95",
    width: 200,
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 10,
  },

  admin_subscrollM5: {
    flexDirection: "row",
    backgroundColor: "#ddff0095",
    width: 200,
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 10,
  },

  admin_subscrollM6: {
    flexDirection: "row",
    backgroundColor: "#00ffff95",
    width: 200,
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 10,
  },

  admin_subscrollM7: {
    flexDirection: "row",
    backgroundColor: "#ffb30095",
    width: 200,
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 10,
  },

  admin_subscrollM8: {
    flexDirection: "row",
    backgroundColor: "#cc00ff95",
    width: 200,
    height: 100,
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 20,
    marginLeft: 10,
  },

  admin_subscroll2: {
    gap: 13,
  },

  txt_adminscoll: {
    color: "white",
    fontWeight: "bold",
    fontSize: 19,
    letterSpacing: 3,
  },

  btn_go: {
    borderWidth: 2,
    borderColor: "white",
    width: 120,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 200,
    padding: 4,
  },
  backs: {
    borderRadius: 30,
  },
});
