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
      width="520px"
      height="162px"
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
        width="520px"
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
        width="174px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="9.88%"
        bottom="75.31%"
        left="3.85%"
        right="62.69%"
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
        width="242px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="32.72%"
        bottom="54.32%"
        left="3.85%"
        right="49.62%"
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
        width="235px"
        height="22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="48.77%"
        bottom="37.65%"
        left="3.85%"
        right="50.96%"
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
        width="271px"
        height="47px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="64.81%"
        bottom="6.17%"
        left="3.85%"
        right="44.04%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Description"
        {...getOverrideProps(overrides, "AccountDescription")}
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
        width="134px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="64.81%"
        bottom="22.22%"
        left="70.38%"
        right="3.85%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Balance"
        {...getOverrideProps(overrides, "Balance")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="81px"
        height="22px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="10.49%"
        bottom="75.93%"
        left="38.27%"
        right="46.15%"
        {...getOverrideProps(overrides, "AccountLabel")}
      >
        <View
          width="81px"
          height="22px"
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
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="13.64%"
          bottom="9.09%"
          left="30.86%"
          right="30.86%"
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
        top="14px"
        left="324px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 436")}
      >
        <SwitchField
          display="flex"
          gap="8px"
          direction="row"
          width="96px"
          height="29px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 8px 8px 8px"
          label="Active"
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
    </View>
  );
}
