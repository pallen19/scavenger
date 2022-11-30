/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Heading, TextField, View } from "@aws-amplify/ui-react";
import ButtonSubmit from "./ButtonSubmit";
export default function JournalEntryForm(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="643px"
      height="814px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "JournalEntryForm")}
    >
      <Heading
        width="423px"
        height="40px"
        position="absolute"
        top="44px"
        left="110px"
        level="3"
        children="Request New Journal Entry"
        {...getOverrideProps(overrides, "Journal Entry Requests")}
      ></Heading>
      <TextField
        label="Debit"
        placeholder="Enter Debit Amount"
        width="361px"
        height="107px"
        position="absolute"
        top="136px"
        left="141px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Debit")}
      ></TextField>
      <TextField
        label="Credit"
        placeholder="Enter Credit"
        width="361px"
        height="73px"
        position="absolute"
        top="277px"
        left="141px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Credit")}
      ></TextField>
      <ButtonSubmit
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="719px"
        left="247px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ButtonSubmit")}
      ></ButtonSubmit>
      <View
        width="361px"
        height="267px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="426px"
        left="141px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "dropdownFrame")}
      ></View>
    </View>
  );
}
