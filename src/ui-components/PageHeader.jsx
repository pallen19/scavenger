/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function PageHeader(props) {
  const { width = '"100%"', overrides, ...rest } = props;
  return (
    <View
      width="1124px"
      height="95.02px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PageHeader")}
    >
      <View
        width="1124px"
        height="95.02px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(241,245,249,1)"
        {...getOverrideProps(overrides, "Background")}
      ></View>
      <Text
        fontFamily="Poppins"
        fontSize="24px"
        fontWeight="600"
        color="rgba(33,33,33,1)"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="195px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="40px"
        left="21px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="PageTitle"
        {...getOverrideProps(overrides, "PageTitle")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="12px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="72px"
        left="21px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="SubNavigation"
        {...getOverrideProps(overrides, "SubNavigation")}
      ></Text>
    </View>
  );
}
