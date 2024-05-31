import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Fontisto, Ionicons } from "@expo/vector-icons";
import { avatar, background, menuIcon } from "@/constants/import";
import { Footer, NextIcon } from "@/component";
const Home = () => {
  const headerIcons = [
    {
      Icon: Fontisto,
      iconName: "bell",
    },
    {
      Icon: Ionicons,
      iconName: "search",
    },
  ];
  const banks = [
    { bankName: "Kuda bank", amount: 12000 },
    { bankName: "GT Bank", amount: 950 },
    { bankName: "PiggyVest", amount: 1050 },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          {/* Description */}
          <View>
            <Text style={styles.headerText}>Hello John</Text>
            <Text style={styles.subHeaderText}>
              Your finances are looking good
            </Text>
          </View>
          {/* Icons */}
          <View style={styles.headerIconCont}>
            {headerIcons.map((item, index) => (
              <TouchableOpacity style={styles.iconCont} key={index}>
                <item.Icon
                  name={item.iconName as any}
                  size={20}
                  color={COLORS.customPurple}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Balance Container */}
        <ImageBackground source={background} style={styles.balanceContainer}>
          <View style={styles.balHeader}>
            <Image source={avatar} style={styles.avatar} />
            <Text style={styles.balanceText}>Your available balance is</Text>
            <Text style={styles.balanceAmount}>₦20,983</Text>
            <Text style={styles.balanceSubText}>
              By this time last month, you spent slightly higher (₦22,719)
            </Text>
            <View style={styles.accountsContainer}>
              {banks.map((item, index) => (
                <View style={styles.bankCont} key={index}>
                  <Text style={styles.accountText}>{item.bankName}</Text>
                  <Text style={styles.accountText}>
                    {`${item.amount.toLocaleString()}.00`}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ImageBackground>
        {/* SORT CONTAINER */}
        <View style={styles.sortContainer}>
          <View style={styles.sortDesc}>
            {/* Sort ICON */}
            <View style={styles.sortIconCont}>
              <Feather name="settings" size={20} color="white" />
            </View>
            <View>
              <Text style={styles.sortText}>Sort your transactions</Text>
              <Text style={styles.sortSubText}>
                Get points for sorting your transactions
              </Text>
            </View>
          </View>
          {/* Back Arrow */}
          <NextIcon />
        </View>
        {/* Budget */}
        <View style={styles.miniCont}>
          <Text style={styles.contTitle}>My Budgets</Text>
          <View style={styles.budgetContainer}>
            <View style={styles.flexBetween}>
              <Text style={styles.budgetText}>You have</Text>
              <NextIcon />
            </View>
            <Text style={styles.budgetAmount}>₦29,880</Text>
            <Text style={styles.budgetSubText}>
              Left out of ₦80,888 budgeted
            </Text>
            <View style={styles.budgetBar}>
              <View style={styles.budgetBarFill}></View>
            </View>
            <Text style={styles.warningText}>
              😱 Sapa go soon catch you bros, calm down!!
            </Text>
          </View>
        </View>
        {/* Transactions */}
        <View style={styles.miniCont}>
          <Text style={styles.contTitle}>Transactions</Text>
          <View style={styles.transactionsContainer}>
            <View style={styles.flexBetween}>
              <Text style={styles.transactionsHeader}>Recent Transactions</Text>
              <NextIcon />
            </View>
            <View style={styles.transaction}>
              <Text style={styles.transactionName}>John Ogaga</Text>
              <Text style={styles.transactionAmountPositive}>+₦20,983</Text>
            </View>
            <View style={styles.transaction}>
              <Text style={styles.transactionName}>Habib Yogurt</Text>
              <Text style={styles.transactionAmountNegative}>-₦20,983</Text>
            </View>
            <View style={styles.transaction}>
              <Text style={styles.transactionName}>Habib Yogurt</Text>
              <Text style={styles.transactionAmountNegative}>-₦20,983</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer active="home" />
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    marginBottom: 80,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  subHeaderText: {
    color: "white",
    fontSize: 13,
    fontWeight: "300",
  },
  headerIconCont: { flexDirection: "row", gap: 5 },
  iconCont: {
    backgroundColor: COLORS.darkPrimary,
    borderRadius: 100,
    padding: 12,
  },
  balanceContainer: {
    backgroundColor: "#292E98",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    paddingTop: 40,
  },
  balHeader: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  balanceText: {
    color: "white",
    fontSize: 14,
    marginTop: 10,
    fontWeight: "300",
    textAlign: "center",
  },
  balanceAmount: {
    color: "white",
    fontSize: 32,
    fontWeight: "800",
    marginTop: 10,
    textAlign: "center",
  },
  balanceSubText: {
    color: "white",
    fontSize: 12,
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 30,
  },
  accountsContainer: {
    marginTop: 30,
  },
  bankCont: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accountText: {
    color: "white",
    fontSize: 14,
    marginTop: 12,
  },
  sortContainer: {
    width: "100%",
    backgroundColor: "#2A349C",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sortDesc: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    width: "60%",
  },
  sortIconCont: {
    backgroundColor: COLORS.purple,
    borderRadius: 10,
    padding: 10,
  },
  sortText: {
    color: "white",
    fontSize: 16,
  },
  sortSubText: {
    color: "white",
    fontSize: 12,
    fontWeight: "300",
  },
  budgetContainer: {
    backgroundColor: COLORS.lightPrimary,
    borderRadius: 10,
    padding: 20,
  },
  budgetText: {
    color: "white",
    fontSize: 16,
  },
  budgetAmount: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
  },
  budgetSubText: {
    color: "white",
    fontSize: 14,
    marginTop: 10,
  },
  budgetBar: {
    backgroundColor: "grey",
    height: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  budgetBarFill: {
    backgroundColor: "#4CAF50",
    height: 5,
    borderRadius: 5,
    width: "50%",
  },
  warningText: {
    color: "white",
    fontSize: 12,
    marginTop: 10,
    fontWeight: "500",
  },
  transactionsContainer: {
    backgroundColor: COLORS.lightPrimary,
    borderRadius: 10,
    padding: 20,
  },
  transactionsHeader: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "500",
  },
  transaction: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  transactionName: {
    color: "white",
    fontSize: 16,
  },
  transactionAmountPositive: {
    color: "#4CAF50",
    fontSize: 16,
  },
  transactionAmountNegative: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  flexBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  contTitle: {
    fontSize: 14,
    color: "white",
    fontWeight: "500",
    marginVertical: 10,
  },
  miniCont: {
    marginVertical: 20,
  },
});
