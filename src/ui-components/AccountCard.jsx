/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, SwitchField, Text, View } from "@aws-amplify/ui-react";
import Edit from "./Edit";
import Trashalt from "./Trashalt";
export default function AccountCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="632px"
      height="259px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AccountCard")}
    >
      <View
        width="632px"
        height="259px"
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
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "table_body_bg")}
      ></View>
      <Flex
        gap="7px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="26px"
        left="24px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 439")}
      >
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
          width="184px"
          height="30px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="AccountName"
          {...getOverrideProps(overrides, "AccountName")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="700"
          color="rgba(33,33,33,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="294.12px"
          height="33.57px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="AccountNumber"
          {...getOverrideProps(overrides, "AccountNumber")}
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
          width="285.62px"
          height="35.17px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Subcategory"
          {...getOverrideProps(overrides, "Subcategory")}
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
          width="330px"
          height="55.11px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Description"
          {...getOverrideProps(overrides, "AccountDescription")}
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
          width="184px"
          height="31px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="AccountCreation"
          {...getOverrideProps(overrides, "AccountCreation")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-end"
        position="absolute"
        top="84px"
        left="229px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 438")}
      >
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
          width="145px"
          height="31px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Order"
          {...getOverrideProps(overrides, "Order")}
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
          width="145px"
          height="31px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Statement"
          {...getOverrideProps(overrides, "Statement")}
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
          width="145px"
          height="31px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Comments"
          {...getOverrideProps(overrides, "Comments")}
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
          width="145px"
          height="31px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="UserID"
          {...getOverrideProps(overrides, "UserID")}
        ></Text>
      </Flex>
      <View
        padding="0px 0px 0px 0px"
        width="98.45px"
        height="27px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="10.04%"
        bottom="79.54%"
        left="26.42%"
        right="58%"
        {...getOverrideProps(overrides, "AccountLabel")}
      >
        <View
          width="98.45px"
          height="27px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="7px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(88,80,236,0.3)"
          {...getOverrideProps(overrides, "AccountLabelFrame")}
        ></View>
        <Text
          fontFamily="Poppins"
          fontSize="11px"
          fontWeight="500"
          color="rgba(88,80,236,1)"
          lineHeight="16.5px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="81px"
          height="16.12px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="14.81%"
          bottom="25.48%"
          left="8.13%"
          right="9.6%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Asset"
          {...getOverrideProps(overrides, "Label")}
        ></Text>
      </View>
      <Flex
        gap="21px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="21px"
        left="439px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 436")}
      >
        <SwitchField
          label="Active"
          width="96px"
          height="29px"
          shrink="0"
          size="default"
          defaultChecked={true}
          isDisabled={false}
          labelPosition="start"
          {...getOverrideProps(overrides, "SwitchField")}
        ></SwitchField>
        <Edit
          width="21.19px"
          height="17.97px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "edit")}
        ></Edit>
        <Trashalt
          width="16.5px"
          height="18px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "trash-alt")}
        ></Trashalt>
      </Flex>
      <View
        width="163px"
        height="164.57px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="84px"
        left="452px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 437")}
      >
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
          width="145px"
          height="31px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="81.16%"
          left="0%"
          right="11.04%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="NormalSide"
          {...getOverrideProps(overrides, "NormalSide")}
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
          width="162.86px"
          height="33.57px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="23.09%"
          bottom="56.51%"
          left="0%"
          right="0.08%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="InitialBalance"
          {...getOverrideProps(overrides, "InitialBalance")}
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
          width="163px"
          height="21px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="47.74%"
          bottom="39.5%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Debit"
          {...getOverrideProps(overrides, "Debit")}
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
          width="163px"
          height="26px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="64.76%"
          bottom="19.44%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Credit"
          {...getOverrideProps(overrides, "Credit")}
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
          width="163px"
          height="25px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="84.81%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Balance"
          {...getOverrideProps(overrides, "Balance")}
        ></Text>
      </View>
    </View>
  );
}
