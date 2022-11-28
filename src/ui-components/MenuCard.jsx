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
        height="215px"
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
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "CardFrame")}
      ></View>
      <Button
        width="300px"
        height="37px"
        position="absolute"
        top="74.42%"
        bottom="8.37%"
        left="9.89%"
        right="9.89%"
        backgroundColor="rgba(0,64,77,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="ButtonLabel"
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
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="23.26%"
        bottom="65.58%"
        left="16.58%"
        right="16.58%"
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
        height="37px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="3.26%"
        bottom="79.53%"
        left="9.89%"
        right="9.89%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="MenuLabel"
        {...getOverrideProps(overrides, "MenuLabel")}
      ></Text>
      <Divider
        height="2px"
        position="absolute"
        top="60.47%"
        bottom="38.6%"
        left="9.89%"
        right="9.89%"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
    </View>
  );
}
