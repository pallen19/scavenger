/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import Logo from "./Logo";
import { Button, Flex, View } from "@aws-amplify/ui-react";
import EmailButton from "./EmailButton";
import UserProfileButton from "./UserProfileButton";
export default function Navigation(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Logo: {},
        "Frame 432": {},
        EmailButton: {},
        UserProfileButton: {},
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
        width="358px"
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
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="39px"
        left="307px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 433")}
      >
        <Button
          display="flex"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Home"
          {...getOverrideProps(overrides, "Home")}
        ></Button>
        <Button
          display="flex"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Accounts"
          {...getOverrideProps(overrides, "Accounts")}
        ></Button>
        <Button
          display="flex"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Users"
          {...getOverrideProps(overrides, "Users")}
        ></Button>
        <Button
          display="flex"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Reports"
          {...getOverrideProps(overrides, "Reports")}
        ></Button>
      </Flex>
    </View>
  );
}
