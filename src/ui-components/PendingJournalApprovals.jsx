/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Heading, View } from "@aws-amplify/ui-react";
import AccountCard from "./AccountCard";
export default function PendingJournalApprovals(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1008px"
      height="860px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "PendingJournalApprovals")}
    >
      <View
        width="1008px"
        height="860px"
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
        {...getOverrideProps(overrides, "Rectangle 508")}
      ></View>
      <Heading
        width="422.78px"
        height="45.79px"
        position="absolute"
        top="2.21%"
        bottom="92.47%"
        left="25.1%"
        right="32.96%"
        level="3"
        children="Entires Pending Approval"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <AccountCard
        width="658.12px"
        height="289.27px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="10.23%"
        bottom="56.13%"
        left="11.41%"
        right="23.3%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "AccountCard37443413")}
      ></AccountCard>
      <Button
        width="103.09px"
        height="37.97px"
        position="absolute"
        border="4px SOLID rgba(184,206,249,1)"
        borderRadius="4px"
        padding="4px 12px 4px 12px"
        top="30.26%"
        bottom="65.32%"
        left="43.8%"
        right="45.97%"
        size="default"
        isDisabled={false}
        variation="default"
        children="Reject"
        {...getOverrideProps(overrides, "RejectButton37443439")}
      ></Button>
      <AccountCard
        width="658.12px"
        height="289.27px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43.84%"
        bottom="22.53%"
        left="12.1%"
        right="22.61%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "AccountCard37443448")}
      ></AccountCard>
      <Button
        width="103.09px"
        height="37.97px"
        position="absolute"
        border="4px SOLID rgba(184,206,249,1)"
        borderRadius="4px"
        padding="4px 12px 4px 12px"
        top="60.65%"
        bottom="34.94%"
        left="43.8%"
        right="45.97%"
        size="default"
        isDisabled={false}
        variation="default"
        children="Reject"
        {...getOverrideProps(overrides, "RejectButton37443502")}
      ></Button>
      <AccountCard
        width="658.12px"
        height="289.27px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="75.47%"
        bottom="-9.1%"
        left="14.78%"
        right="19.93%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="4px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "AccountCard37443469")}
      ></AccountCard>
      <Button
        width="105.17px"
        height="42.44px"
        position="absolute"
        border="4px SOLID rgba(184,206,249,1)"
        borderRadius="4px"
        padding="4px 12px 4px 12px"
        top="84.81%"
        bottom="10.26%"
        left="43.49%"
        right="46.07%"
        size="default"
        isDisabled={false}
        variation="default"
        children="Reject"
        {...getOverrideProps(overrides, "RejectButton37443506")}
      ></Button>
      <Button
        position="absolute"
        border="4px SOLID rgba(184,206,249,1)"
        borderRadius="4px"
        padding="4px 12px 4px 12px"
        top="78.19%"
        bottom="17.15%"
        left="43.8%"
        right="46.38%"
        size="default"
        isDisabled={false}
        variation="default"
        children="Approve"
        {...getOverrideProps(overrides, "ApproveButton37443498")}
      ></Button>
      <Button
        position="absolute"
        border="4px SOLID rgba(184,206,249,1)"
        borderRadius="4px"
        padding="4px 12px 4px 12px"
        top="21.96%"
        bottom="73.39%"
        left="44%"
        right="46.17%"
        size="default"
        isDisabled={false}
        variation="default"
        children="Approve"
        {...getOverrideProps(overrides, "ApproveButton37443494")}
      ></Button>
      <Button
        position="absolute"
        border="4px SOLID rgba(184,206,249,1)"
        borderRadius="4px"
        padding="4px 12px 4px 12px"
        top="52.87%"
        bottom="42.48%"
        left="43.8%"
        right="46.38%"
        size="default"
        isDisabled={false}
        variation="default"
        children="Approve"
        {...getOverrideProps(overrides, "ApproveButton37443490")}
      ></Button>
    </View>
  );
}
