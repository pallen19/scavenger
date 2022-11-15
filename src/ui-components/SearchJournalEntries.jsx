/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { SearchField, View } from "@aws-amplify/ui-react";
export default function SearchJournalEntries(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="954px"
      height="144px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "SearchJournalEntries")}
    >
      <View
        width="954px"
        height="144px"
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
        {...getOverrideProps(overrides, "Rectangle 509")}
      ></View>
      <SearchField
        display="flex"
        gap="8px"
        direction="column"
        width="275.81px"
        height="75px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="24.31%"
        bottom="23.61%"
        left="2.73%"
        right="68.36%"
        padding="0px 0px 0px 0px"
        label="Date"
        placeholder="MM/DD/YYYY"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SearchField37483528")}
      ></SearchField>
      <SearchField
        display="flex"
        gap="8px"
        direction="column"
        width="300.19px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="25%"
        bottom="25%"
        left="34.28%"
        right="34.26%"
        padding="0px 0px 0px 0px"
        label="AccountName"
        placeholder="Name"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SearchField37483540")}
      ></SearchField>
      <SearchField
        display="flex"
        gap="8px"
        direction="column"
        width="286px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="calc(50% - 36px - -0.5px)"
        left="68.34%"
        right="1.68%"
        padding="0px 0px 0px 0px"
        label="Amount"
        placeholder="Amount"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "SearchField37483552")}
      ></SearchField>
    </View>
  );
}
