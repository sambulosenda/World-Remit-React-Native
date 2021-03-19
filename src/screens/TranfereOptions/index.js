import React from "react";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import {
  SafeAreaView,
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
} from "react-native";
const transfareOptions = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : null}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.inner}>
          <View style={styles.textContainer}>
            <Text>You Send</Text>
            <View style={styles.textContainerInner}>
              <TextInput placeholder="1"   keyboardType = 'numeric'
 style={styles.textInput} />
              <View style="">
                <View style={{width: 20, height: 20, backgroundColor: 'black', borderRadius: 50}}></View>
                <Text>GBP</Text>
              </View>
            </View>
          </View>

          <View style={{ paddingHorizontal: 10, paddingVertical: 20, flexDirection: 'row', alignItems: 'center'}}>
            <View style={{marginRight: 10}}>
              <Ionicons name="md-swap-vertical" size={24} color="black" />
            </View>
            <Text>1 GB = 1.4323 USD</Text>
          </View>

          <View style={styles.textContainer}>
            <Text>You Send</Text>
            <View style={styles.textContainerInner}>
              <TextInput   keyboardType = 'numeric'
 placeholder="1" style={styles.textInput} />
              <View>
                <Text>NZD</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#813fd6",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              bottom: 20,
              width: "100%",
              flexDirection: "row",
              left: 20,
              borderRadius: "50%",
              height: 50,
            }}
          >
            <Text style={{ color: "white" }}>Done</Text>
            <View style={{ justifyContent: "flex-end" }}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="white"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default transfareOptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
  },
  textContainer: {
    height: 70,
    borderRadius: 8,
    borderColor: "#bac4cf",
    borderWidth: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },

  textContainerInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },

  textInput: {
    fontSize: 35,
  },
});
