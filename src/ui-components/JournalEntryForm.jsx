/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Heading, SelectField, TextField } from "@aws-amplify/ui-react";
import ButtonSubmit from "./ButtonSubmit";
export default function JournalEntryForm(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="33px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="44px 110px 44px 110px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "JournalEntryForm")}
    >
      <Heading
        display="flex"
        gap="0"
        direction="row"
        width="423px"
        height="40px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        level="3"
        children="Request New Journal Entry"
        {...getOverrideProps(overrides, "Journal Entry Requests")}
      ></Heading>
      <SelectField
        display="flex"
        gap="8px"
        direction="column"
        width="361px"
        height="83px"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        borderRadius="7px"
        padding="0px 0px 0px 0px"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SelectAccount")}
      ></SelectField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="361px"
        height="93px"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Refrence #"
        placeholder="Enter Refrence Number"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "Reference#")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="361px"
        height="87px"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
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
        height="107px"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
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
        height="73px"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        label="Credit"
        placeholder="Enter Credit"
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
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ButtonSubmit")}
      ></ButtonSubmit>
    </Flex>
  );
}
