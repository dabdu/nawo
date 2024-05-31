import { COLORS } from "@/constants/theme";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

interface FooterProps {
  active: string;
}
const Footer: React.FC<FooterProps> = () => {
  const menuItems = [
    {
      Icon: MaterialIcons,
      iconName: "home-filled",
    },
    {
      Icon: Feather,
      iconName: "pie-chart",
    },
    {
      Icon: AntDesign,
      iconName: "user",
    },
    {
      Icon: AntDesign,
      iconName: "barschart",
    },
  ];
  return (
    <View style={styles.footerContainer}>
      {menuItems.map((item: any, index) => (
        <TouchableOpacity key={index}>
          <item.Icon name={item.iconName} size={30} color={"white"} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Footer;
const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingBottom: 10,
    position: "absolute",
    bottom: 5,
    left: 0,
    backgroundColor: COLORS.primary,
  },
});
