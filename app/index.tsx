import { SafeAreaView, ScrollView, View,Text, StyleSheet, StatusBar } from "react-native"
import ViewWorks from "./layers/admin/viewwoks"
import Viewcustomer from "./layers/admin/viewcustomer"
import ViewEmployee from "./layers/admin/viewemployee"
import Intro from "./layers/intro"
import Home from "./layers/user/home"
import Login from "./layers/login"
import HomeA from "./layers/admin/home"
import Logins from "./layers/login"
import Register from "./layers/register"
import VehicleRegister from "./layers/user/vehicleregister"
import ProfileUpdate from "./layers/user/profileupdate"
import RegisterAdminAndCustomer from "./layers/admin/registeradminandcustomer"
import HomeE from "./layers/employee/home"


const Index = () =>{
 return(
    <View>
     <Intro></Intro>
    </View>
 )
}

export default Index

