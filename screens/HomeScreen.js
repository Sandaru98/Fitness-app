import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";

const HomeScreen = () => {
  const {
    minutes,

    calories,

    workout,
  } = useContext(FitnessItems);
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white", marginTop: 50 }}
      >
        <View
          style={{
            backgroundColor: "#1E2B3C", //#170809 #411719 #472B31 #3D1106 #1E2B3C #3A2627
            padding: 10,
            width: "100%",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 18,
              paddingLeft: 10,
            }}
          >
            HOME WORKOUT
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 18,
                }}
              >
                {workout}
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
                {" "}
                WORKOUTS {"\n"}COMPLETED
              </Text>
            </View>

            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 18,
                }}
              >
                {calories}
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
                CALORIES {"\n"} BURNED
              </Text>
            </View>

            <View>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 18,
                }}
              >
                {minutes}
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 6 }}>
                WORKOUT {"\n"}TIME(MIN)
              </Text>
            </View>
          </View>

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{
                width: "90%",
                height: 140,
                marginTop: 20,
                borderRadius: 7,
              }}
              source={require("../images/homescreen4.jpg")}
            />
          </View>
          <FitnessCards />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
