/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { SwitchField, Text, View } from "@aws-amplify/ui-react";
export default function UserCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="700px"
      height="162px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "UserCard")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="700px"
        height="162px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Group 1011")}
      >
        <View
          width="700px"
          height="162px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(230,231,233,1)"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "table_body_bg")}
        ></View>
        <Text
          fontFamily="Poppins"
          fontSize="16px"
          fontWeight="600"
          color="rgba(33,33,33,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="9.88%"
          bottom="75.31%"
          left="2.86%"
          right="83.86%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="John Smith"
          {...getOverrideProps(overrides, "John Smith")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="rgba(33,33,33,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="40.74%"
          bottom="46.3%"
          left="2.86%"
          right="74.71%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="User ID : 09898989898"
          {...getOverrideProps(overrides, "User ID : 09898989898")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="rgba(33,33,33,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="336px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="56.79%"
          bottom="17.28%"
          left="2.86%"
          right="49.14%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="1275 Powers Ferry Road&#xA;Marietta, GA 30067"
          {...getOverrideProps(
            overrides,
            "1275 Powers Ferry Road Marietta, GA 30067"
          )}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="600"
          color="rgba(33,33,33,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="64.81%"
          bottom="22.22%"
          left="71%"
          right="2.29%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Phone no : (770) 555-5555"
          {...getOverrideProps(overrides, "Phone no : (770) 555-5555")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="93.75px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="10.49%"
          bottom="75.93%"
          left="18.14%"
          right="68.46%"
          {...getOverrideProps(overrides, "Group 1005")}
        >
          <View
            width="91px"
            height="22px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="2.94%"
            borderRadius="7px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(88,80,236,0.3)"
            {...getOverrideProps(overrides, "Rectangle 477")}
          ></View>
          <Text
            fontFamily="Poppins"
            fontSize="11px"
            fontWeight="500"
            color="rgba(88,80,236,1)"
            lineHeight="16.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="86.51px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="13.64%"
            bottom="9.09%"
            left="7.73%"
            right="0%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Administrator"
            {...getOverrideProps(overrides, "Administrator")}
          ></Text>
        </View>
      </View>
      <SwitchField
        label="Active"
        width="96px"
        height="29px"
        position="absolute"
        top="9.88%"
        bottom="72.22%"
        left="73%"
        right="13.29%"
        size="default"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "SwitchField")}
      ></SwitchField>
    </View>
  );
}
