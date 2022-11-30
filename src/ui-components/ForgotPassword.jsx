/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Text, TextField, View } from "@aws-amplify/ui-react";
export default function ForgotPassword(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="474px"
      height="423px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "ForgotPassword")}
    >
      <View
        width="475px"
        height="424px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-0.5px"
        left="-0.5px"
        border="0.5px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 505")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="700"
        color="rgba(48,64,80,1)"
        lineHeight="36px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="222px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="9.69%"
        bottom="80.38%"
        left="28.27%"
        right="24.89%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Forgot Password?"
        {...getOverrideProps(overrides, "label")}
      ></Text>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="337px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="22.93%"
        bottom="60.05%"
        left="14.35%"
        right="14.56%"
        padding="0px 0px 0px 0px"
        label="Email"
        placeholder="Enter email"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField35564917")}
      ></TextField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="337px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="45.86%"
        bottom="37.12%"
        left="14.35%"
        right="14.56%"
        padding="0px 0px 0px 0px"
        label="User ID"
        placeholder="Enter user ID"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField35564924")}
      ></TextField>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="150px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="318px"
        left="258px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Next"
        {...getOverrideProps(overrides, "Button35564932")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="152px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="74.94%"
        bottom="15.13%"
        left="14.14%"
        right="53.8%"
        border="1px SOLID rgba(0,85,102,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Cancel"
        {...getOverrideProps(overrides, "Button35564936")}
      ></Button>
    </View>
  );
}
