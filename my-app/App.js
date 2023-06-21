import { StatusBar } from "expo-status-bar";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useRef, useState, useEffect } from "react";
import { Image } from "expo-image";
import axios from "axios";
import CreateItem from "./components/CreateItem";

export const instance = axios.create({
  baseURL: "https://servicefy.onrender.com",
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export default function App() {
  const map = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <SafeAreaView>
      <ScrollView>
        <CreateItem></CreateItem>

        <View style={styles.container}>
          {map.map(() => {
            return (
              <View style={styles.mapContainer}>
                <View style={styles.helper}>
                  <Image
                    style={styles.profile}
                    source="https://xf-assets.pokecharms.com/data/attachment-files/2015/10/236934_Squritle_Picture.png"
                    contentFit="cover"
                    transition={1000}
                  ></Image>
                  <View style={styles.names}>
                    <Text>John Smith</Text>
                    <Text>6minutes ago</Text>
                  </View>
                </View>
                <Text style={styles.text}>Good morning!</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    paddingVertical: 10,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: "20px",
  },
  mapContainer: {
    backgroundColor: "#fff",
    height: 110,
    width: 375,
    display: "flex",
    marginVertical: 8,
    padding: 10,
    justifyContent: "space-between",
  },
  names: {
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  helper: {
    display: "flex",
    flexDirection: "row",
  },

  text: {
    fontWeight: "600",
    fontSize: 17,
  },
});
