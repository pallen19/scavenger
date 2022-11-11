/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Heading, SelectField, TextField, View } from "@aws-amplify/ui-react";
import ButtonSubmit from "./ButtonSubmit";
export default function JournalEntryForm(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="643px"
      height="840px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "JournalEntryForm")}
    >
      <View
        width="643px"
        height="840px"
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
        {...getOverrideProps(overrides, "Rectangle 507")}
      ></View>
      <ButtonSubmit
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="733px"
        left="229px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ButtonSubmit")}
      ></ButtonSubmit>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="361px"
        height="73px"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="614px"
        left="141px"
        padding="0px 0px 0px 0px"
        label="Credit"
        placeholder="Enter Credit"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Credit")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="361px"
        height="107px"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="476px"
        left="141px"
        padding="0px 0px 0px 0px"
        label="Debit"
        placeholder="Enter Debit Amount"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Debit")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="361px"
        height="87px"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="354px"
        left="141px"
        padding="0px 0px 0px 0px"
        label="Entry Date"
        placeholder="Enter Entry Date"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Entry Date")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="361px"
        height="93px"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="226px"
        left="141px"
        padding="0px 0px 0px 0px"
        label="Refrence #"
        placeholder="Enter Refrence Number"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Reference#")}
      ></TextField>
      <SelectField
        display="flex"
        gap="8px"
        direction="column"
        width="361px"
        height="83px"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="117px"
        left="141px"
        borderRadius="7px"
        padding="0px 0px 0px 0px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectAccount")}
      ></SelectField>
      <Heading
        display="flex"
        gap="0"
        direction="row"
        width="423px"
        height="40px"
        position="absolute"
        top="51px"
        left="110px"
        padding="0px 0px 0px 0px"
        level="3"
        children="Request New Journal Entry"
        {...getOverrideProps(overrides, "Journal Entry Requests")}
      ></Heading>
    </View>
  );
}
