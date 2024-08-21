import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  BackHandler,
  Alert,
  ToastAndroid,
} from "react-native";

interface test {
  a: React.ReactNode;
}

const Footers = ({ a }: test) => {
  const [visibleu, setVisibleU] = useState(false);
  const [visiblee, setVisibleE] = useState(false);
  const [visiblea, setVisibleA] = useState(false);

  const [changeUserHome, setChangeUserHome] = useState(true);
  const [changeUserNotifi, setChangeUserNotifi] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", function () {
      Alert.alert("", "Do you want back to main menu ?", [
        { text: "cancel", onPress: () => null },
        {
          text: "ok",
          onPress: () => {
            router.navigate("/layers/intro");
          },
        },
      ]);
      return true;
    });

    function setVisual() {
      if (a === "user") {
        setVisibleU(true);
        setVisibleA(false);
        setVisibleE(false);
      } else if (a === "employee") {
        setVisibleA(false);
        setVisibleU(false);
        setVisibleE(true);
      } else if (a === "admin") {
        setVisibleA(true);
        setVisibleU(false);
        setVisibleE(false);
      }
    }
    setVisual();
  }, []);

  return (
    <View style={style.footer_main}>
      <View style={style.footer_sub}>
        {visibleu ? (
          <>
            <TouchableOpacity
              style={{
                alignItems: "center",
                padding: 2,
                borderRadius: 10,
              }}
              onPress={() => {
                router.navigate("/layers/user/home");
              }}
            >
              <Image
                source={require("@/assets/images/home.png")}
                style={{ width: 40, height: 40 }}
              ></Image>
              <Text
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                alignItems: "center",
                padding: 2,
                borderRadius: 10,
                backgroundColor: changeUserNotifi ? "#56565651" : "transparent",
              }}
              onPress={() => {
                router.navigate("/layers/user/notification");
              }}
            >
              <Image
                source={require("@/assets/images/bell.png")}
                style={{ width: 40, height: 40 }}
              ></Image>
              <Text
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontSize: 12,
                }}
              >
                Notification
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          ""
        )}
        {visiblea ? (
          <>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                router.navigate("/layers/admin/home");
              }}
            >
              <Image
                source={require("@/assets/images/home.png")}
                style={{ width: 30, height: 30 }}
              ></Image>
              <Text
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                router.navigate("/layers/admin/viewcustomer");
              }}
            >
              <Image
                source={require("@/assets/images/multiple-users-silhouette.png")}
                style={{ width: 30, height: 30 }}
              ></Image>
              <Text
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontSize: 12,
                }}
              >
                View Customers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                router.navigate("/layers/admin/viewemployee");
              }}
            >
              <Image
                source={require("@/assets/images/man.png")}
                style={{ width: 30, height: 30 }}
              ></Image>
              <Text
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontSize: 12,
                }}
              >
                View Employees
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                router.navigate("/layers/admin/viewwoks");
              }}
            >
              <Image
                source={require("@/assets/images/suitcase.png")}
                style={{ width: 30, height: 30 }}
              ></Image>
              <Text
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontSize: 12,
                }}
              >
                View Jobs
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          ""
        )}
        {visiblee ? (
          <>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                router.navigate("/layers/admin/home");
              }}
            >
              <Image
                source={require("@/assets/images/home.png")}
                style={{ width: 40, height: 40 }}
              ></Image>
              <Text
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                router.navigate("/layers/admin/home");
              }}
            >
              <Image
                source={require("@/assets/images/bell.png")}
                style={{ width: 40, height: 40 }}
              ></Image>
              <Text
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  fontSize: 12,
                }}
              >
                Notification
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          ""
        )}
      </View>
    </View>
  );
};

export default Footers;

const style = StyleSheet.create({
  footer_main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    // padding: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    // borderTopWidth: 0.6,
    backgroundColor: "white",
  },
  footer_sub: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // position: "absolute",
    // bottom: 0,
    // left: 0,
    width: "100%",
    padding: 10,
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
    // borderTopWidth: 0.6,
    backgroundColor: "#eeff007c",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
