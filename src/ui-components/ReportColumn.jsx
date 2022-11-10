/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function ReportColumn(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="222px"
      height="91px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ReportColumn")}
    >
      <View
        width="223px"
        height="92px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-0.55%"
        bottom="-0.55%"
        left="-0.23%"
        right="-0.23%"
        border="0.5px SOLID rgba(69,91,113,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(69,91,113,1)"
        {...getOverrideProps(overrides, "ColumnFrame")}
      ></View>
      <Text
        fontFamily="Poppins"
        fontSize="20px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="30px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="222px"
        height="91px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ColumnName"
        {...getOverrideProps(overrides, "ColumnName")}
      ></Text>
    </View>
  );
}
