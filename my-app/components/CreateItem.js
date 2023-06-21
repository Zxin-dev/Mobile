import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useRef, useState } from "react";
import { instance } from "../App";
export default function CreateItem() {
  const [name, setName] = useState();
  const [text, setText] = useState();
  const createPost = async () => {
    await instance.post(`/Post`, {
      username: name,
      post: text,
    });
    console.log(name);
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChange={text}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="text"
      />
      <TextInput
        onChangeText={setName}
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="text"
      />
      <Button
        style={styles.Button}
        onPress={createPost}
        title="Create a post"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
