/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
import Navigation from "./Navigation";
import AccountCard from "./AccountCard";
export default function AdminAccounts(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1165px"
      height="854px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(241,245,249,1)"
      {...rest}
      {...getOverrideProps(overrides, "AdminAccounts")}
    >
      <Text
        fontFamily="Poppins"
        fontSize="24px"
        fontWeight="600"
        color="rgba(33,33,33,1)"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="195px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="201px"
        left="31px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Accounts"
        {...getOverrideProps(overrides, "PageTitle")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="600"
        color="rgba(88,80,236,1)"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="259px"
        left="84px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Accounts"
        {...getOverrideProps(overrides, "Tab1")}
      ></Text>
      <Icon
        width="1055px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1055, height: 1 }}
        paths={[
          {
            d: "M0 0L1055 0L1055 -1L0 -1L0 0Z",
            stroke: "rgba(230,231,233,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="288px"
        left="54px"
        {...getOverrideProps(overrides, "TopBorder")}
      ></Icon>
      <Icon
        width="125px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 125, height: 1 }}
        paths={[
          {
            d: "M0 0L125 0L125 -2L0 -2L0 0Z",
            stroke: "rgba(88,80,236,1)",
            fillRule: "nonzero",
            strokeWidth: 2,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="288px"
        left="54px"
        {...getOverrideProps(overrides, "TabHighlight")}
      ></Icon>
      <Navigation
        width="1166px"
        height="117px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1px"
        left="-1px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        property1="Default"
        {...getOverrideProps(overrides, "Navigation")}
      ></Navigation>
      <AccountCard
        width="520px"
        height="162px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="321px"
        left="31px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "AccountCard")}
      ></AccountCard>
    </View>
  );
}
