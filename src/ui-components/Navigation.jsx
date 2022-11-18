/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import Logo from "./Logo";
import { Button, Flex, Text, View } from "@aws-amplify/ui-react";
import EmailButton from "./EmailButton";
import UserProfileButton from "./UserProfileButton";
export default function Navigation(props) {
  const { className, overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Logo: {},
        "Frame 432": {},
        FullName: {},
        EmailButton: {},
        UserProfileButton: {},
        Welcome: {},
        Home: {},
        Accounts: {},
        Users: {},
        Reports: {},
        "Frame 433": {},
        Navigation: {},
      },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  const homeOnClick = useNavigateAction({ type: "url", url: "/404" });
  const accountsOnClick = useNavigateAction({ type: "url", url: "/404" });
  const usersOnClick = useNavigateAction({ type: "url", url: "/404" });
  const reportsOnClick = useNavigateAction({ type: "url", url: "/404" });
  return (
    <View
      width="1165px"
      height="117px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Navigation")}
    >
      <Logo
        display="flex"
        gap="2px"
        direction="row"
        width="unset"
        height="69px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="24px"
        left="23px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      ></Logo>
      <Flex
        gap="0"
        direction="row"
        width="97px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="39px"
        left="307px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 432")}
      ></Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="176px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="39.32%"
        bottom="40.17%"
        left="19.57%"
        right="65.32%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="FullName"
        {...getOverrideProps(overrides, "FullName")}
      ></Text>
      <EmailButton
        width="41px"
        height="31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43px"
        left="890px"
        padding="0px 0px 0px 0px"
        property1="Navigation"
        property2="EmailButton"
        property3="Default"
        {...getOverrideProps(overrides, "EmailButton")}
      ></EmailButton>
      <UserProfileButton
        width="150px"
        height="45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="36px"
        left="992px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "UserProfileButton")}
      ></UserProfileButton>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="39.32%"
        bottom="40.17%"
        left="12.19%"
        right="81.03%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Welcome,"
        {...getOverrideProps(overrides, "Welcome")}
      ></Text>
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="39px"
        left="404px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 433")}
      >
        <Button
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="Home"
          onClick={() => {
            homeOnClick();
          }}
          {...getOverrideProps(overrides, "Home")}
        ></Button>
        <Button
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="Accounts"
          onClick={() => {
            accountsOnClick();
          }}
          {...getOverrideProps(overrides, "Accounts")}
        ></Button>
        <Button
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="Users"
          onClick={() => {
            usersOnClick();
          }}
          {...getOverrideProps(overrides, "Users")}
        ></Button>
        <Button
          shrink="0"
          size="default"
          isDisabled={false}
          variation="link"
          children="Reports"
          onClick={() => {
            reportsOnClick();
          }}
          {...getOverrideProps(overrides, "Reports")}
        ></Button>
      </Flex>
    </View>
  );
}
