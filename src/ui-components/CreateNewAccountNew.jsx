/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function CreateNewAccountNew(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="715px"
      height="814px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="4px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CreateNewAccountNew")}
    >
      <View
        width="685px"
        height="789px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="12px"
        left="15px"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 511")}
      ></View>
      <TextField
        label="Account Description"
        placeholder="Enter account description"
        width="262px"
        height="71px"
        position="absolute"
        top="305px"
        left="53px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "accountDescription")}
      ></TextField>
      <TextField
        label="Account Category"
        placeholder="Enter account category"
        width="262px"
        height="71px"
        position="absolute"
        top="403px"
        left="53px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "accountCategory")}
      ></TextField>
      <TextField
        label="Account Subcategory"
        placeholder="Enter account subcategory"
        width="262px"
        height="71px"
        position="absolute"
        top="500px"
        left="55px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "accountSubcategory")}
      ></TextField>
      <TextField
        label="Account Number"
        placeholder="Enter account number"
        width="262px"
        height="71px"
        position="absolute"
        top="207px"
        left="53px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "accountNumberLabel")}
      ></TextField>
      <TextField
        label="Account Name"
        placeholder="Enter account name"
        width="262px"
        height="71px"
        position="absolute"
        top="109px"
        left="53px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "accountNameLabel")}
      ></TextField>
      <Flex
        gap="0"
        direction="row"
        width="150px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="721px"
        left="385px"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(4,125,149,1)"
        {...getOverrideProps(overrides, "btnsubmit")}
      >
        <Text
          fontFamily="Inter"
          fontSize="17px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="25.5px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="118px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Submit"
          {...getOverrideProps(overrides, "label38794105")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="800"
        color="rgba(0,0,0,1)"
        lineHeight="48px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="530px"
        height="66px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="31px"
        left="93px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create New Account"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <TextField
        label="Order"
        placeholder="Enter order "
        width="297px"
        height="74px"
        position="absolute"
        top="109px"
        left="369px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "order")}
      ></TextField>
      <TextField
        label="Comments"
        placeholder="Enter comments "
        width="264px"
        height="74px"
        position="absolute"
        top="593px"
        left="53px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "comments")}
      ></TextField>
      <TextField
        label="Debit"
        placeholder="$0.00"
        width="143px"
        height="71px"
        position="absolute"
        top="499px"
        left="368px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "debit")}
      ></TextField>
      <TextField
        label="Credit"
        placeholder="$0.00"
        width="143px"
        height="71px"
        position="absolute"
        top="499px"
        left="535px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "credit")}
      ></TextField>
      <TextField
        label="Ending Balance"
        placeholder="$0.00"
        width="142px"
        height="74px"
        position="absolute"
        top="593px"
        left="535px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "endBalance")}
      ></TextField>
      <TextField
        label="Beginning Balance"
        placeholder="$0.00"
        width="144px"
        height="74px"
        position="absolute"
        top="594px"
        left="369px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "beginBalance")}
      ></TextField>
      <Flex
        gap="0"
        direction="row"
        width="152px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="722px"
        left="150px"
        border="1px SOLID rgba(0,85,102,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        {...getOverrideProps(overrides, "btncancel")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,85,102,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Cancel"
          {...getOverrideProps(overrides, "label38794230")}
        ></Text>
      </Flex>
      <View
        width="297px"
        height="238px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="236px"
        left="368px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "dropdownFrame")}
      ></View>
    </View>
  );
}
