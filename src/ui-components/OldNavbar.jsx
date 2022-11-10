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
} from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
import OldNavBarB from "./OldNavBarB";
export default function OldNavbar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Rectangle 3": {},
        OldNavBarB: {},
        "Rectangle 478": {},
        OldNavbar: {},
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        OldNavBarB: {},
        "Rectangle 478": { backgroundColor: "rgba(89,157,149,1)" },
        OldNavbar: {},
      },
      variantValues: { property1: "AdminViewHomeBar" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        OldNavBarB: {},
        "Rectangle 478": {
          width: "48px",
          left: "32.21%",
          right: "64.26%",
          backgroundColor: "rgba(89,157,149,1)",
        },
        OldNavbar: {},
      },
      variantValues: { property1: "AdminViewUser" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        OldNavBarB: {},
        "Rectangle 478": {
          width: "48px",
          left: "32.21%",
          right: "64.26%",
          backgroundColor: "rgba(89,157,149,1)",
        },
        OldNavbar: {},
      },
      variantValues: { property1: "ManagerViewUserBar" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        OldNavBarB: {},
        "Rectangle 478": {
          width: "77px",
          left: "38.31%",
          right: "56.03%",
          backgroundColor: "rgba(89,157,149,1)",
        },
        OldNavbar: {},
      },
      variantValues: { property1: "ManagerViewAcctsBar" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        OldNavBarB: {},
        "Rectangle 478": { backgroundColor: "rgba(89,157,149,1)" },
        OldNavbar: {},
      },
      variantValues: { property1: "ManagerViewHomeBar" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        OldNavBarB: {},
        "Rectangle 478": {
          width: "77px",
          left: "38.31%",
          right: "56.03%",
          backgroundColor: "rgba(89,157,149,1)",
        },
        OldNavbar: {},
      },
      variantValues: { property1: "AdminViewAcctsBar" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        OldNavBarB: {},
        "Rectangle 478": {
          width: "206px",
          left: "46.76%",
          right: "38.09%",
          backgroundColor: "rgba(89,157,149,1)",
        },
        OldNavbar: {},
      },
      variantValues: { property1: "AdminViewPwBar" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="1360px"
      height="373px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "OldNavbar")}
    >
      <View
        width="1360px"
        height="373px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="100%"
        right="-100%"
        transformOrigin="top left"
        transform="rotate(180deg)"
        border="2px SOLID rgba(21,150,0,1)"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <OldNavBarB
        display="flex"
        gap="20px"
        direction="row"
        width="1165px"
        height="117px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="50.13%"
        bottom="18.5%"
        left="7.13%"
        right="7.21%"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "OldNavBarB")}
      ></OldNavBarB>
      <View
        width="50px"
        height="2px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="68.63%"
        bottom="30.83%"
        left="25.81%"
        right="70.51%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 478")}
      ></View>
    </View>
  );
}
