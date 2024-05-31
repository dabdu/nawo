import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "@/constants/theme";

const NextIcon = () => {
  return (
    <TouchableOpacity style={styles.iconCont}>
      <MaterialIcons
        name="navigate-next"
        size={20}
        color={COLORS.customPurple}
      />
    </TouchableOpacity>
  );
};

export default NextIcon;

const styles = StyleSheet.create({
  iconCont: {
    backgroundColor: COLORS.darkPrimary,
    borderRadius: 100,
    padding: 6,
  },
});
