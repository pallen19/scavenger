/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function MenuTab(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="190px"
      height="29px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "MenuTab")}
    >
      <View
        width="190px"
        height="25px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2px"
        left="0px"
        borderRadius="3px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(188,186,186,1)"
        {...getOverrideProps(overrides, "TabFrame")}
      ></View>
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="500"
        color="rgba(151,148,241,1)"
        lineHeight="14px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="190px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="7px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="label"
        {...getOverrideProps(overrides, "label")}
      ></Text>
      <Icon
        width="190px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 190, height: 1 }}
        paths={[
          {
            d: "M0 0L190 0L190 -2L0 -2L0 0Z",
            stroke: "rgba(193,191,242,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="27px"
        left="0px"
        {...getOverrideProps(overrides, "SelectionIndicator")}
      ></Icon>
    </View>
  );
}
