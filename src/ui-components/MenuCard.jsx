/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Divider, Text, View } from "@aws-amplify/ui-react";
export default function MenuCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="374px"
      height="215px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MenuCard")}
    >
      <View
        width="374px"
        height="212px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1.4%"
        bottom="0%"
        left="3.48%"
        right="-3.48%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "CardFrame")}
      ></View>
      <Button
        width="300px"
        height="36px"
        position="absolute"
        top="74.88%"
        bottom="8.37%"
        left="13.37%"
        right="6.42%"
        backgroundColor="rgba(0,64,77,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="250px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="24.19%"
        bottom="64.65%"
        left="20.05%"
        right="13.1%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="MenuDescription"
        {...getOverrideProps(overrides, "MenuDescription")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="600"
        color="rgba(48,64,80,1)"
        lineHeight="30px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="300px"
        height="36px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="4.65%"
        bottom="78.6%"
        left="13.37%"
        right="6.42%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="MenuLabel"
        {...getOverrideProps(overrides, "MenuLabel")}
      ></Text>
      <Divider
        height="2px"
        position="absolute"
        top="60.93%"
        bottom="38.14%"
        left="13.37%"
        right="6.42%"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </View>
  );
}
