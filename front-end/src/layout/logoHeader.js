import React from "react";
import { View, Text, Image } from "react-native";
import LogoImage from "../../assets/logo/1x/upcycle(2).png";

const LogoHeader = () => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: "6%",
        width: 80,
        height: 60,
        alignSelf: "center",
      }}
    >
      <Image source={LogoImage} style={{ width: 70, height: 50 }} />
    </View>
  );
};

export default LogoHeader;
