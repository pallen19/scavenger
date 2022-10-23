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
import NavBar2 from "./NavBar2";
export default function Navbar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        "Rectangle 3": {},
        NavBar2: {},
        "Rectangle 478": {},
        Navbar: {},
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        NavBar2: {},
        "Rectangle 478": { backgroundColor: "rgba(89,157,149,1)" },
        Navbar: {},
      },
      variantValues: { property1: "AdminViewHomeBar" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        NavBar2: {},
        "Rectangle 478": {
          left: "32.21%",
          right: "64.26%",
          backgroundColor: "rgba(89,157,149,1)",
        },
        Navbar: {},
      },
      variantValues: { property1: "AdminViewUser" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        NavBar2: {},
        "Rectangle 478": {
          left: "32.21%",
          right: "64.26%",
          backgroundColor: "rgba(89,157,149,1)",
        },
        Navbar: {},
      },
      variantValues: { property1: "ManagerViewUserBar" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        NavBar2: {},
        "Rectangle 478": {
          left: "38.31%",
          right: "56.03%",
          backgroundColor: "rgba(89,157,149,1)",
        },
        Navbar: {},
      },
      variantValues: { property1: "ManagerViewAcctsBar" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        NavBar2: {},
        "Rectangle 478": { backgroundColor: "rgba(89,157,149,1)" },
        Navbar: {},
      },
      variantValues: { property1: "ManagerViewHomeBar" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        NavBar2: {},
        "Rectangle 478": {
          left: "38.31%",
          right: "56.03%",
          backgroundColor: "rgba(89,157,149,1)",
        },
        Navbar: {},
      },
      variantValues: { property1: "AdminViewAcctsBar" },
    },
    {
      overrides: {
        "Rectangle 3": {},
        NavBar2: {},
        "Rectangle 478": {
          left: "46.76%",
          right: "38.09%",
          backgroundColor: "rgba(89,157,149,1)",
        },
        Navbar: {},
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
      position="relative"
      padding="0px 0px 0px 0px"
      display="block"
      {...rest}
      {...getOverrideProps(overrides, "Navbar")}
    >
      <View
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
        display="block"
        {...getOverrideProps(overrides, "Rectangle 3")}
      ></View>
      <NavBar2
        display="flex"
        gap="20px"
        position="absolute"
        top="50.13%"
        bottom="18.5%"
        left="7.13%"
        right="7.21%"
        width="1165px"
        height="117px"
        justifyContent="center"
        alignItems="center"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBar2")}
      ></NavBar2>
      <View
        position="absolute"
        top="68.63%"
        bottom="30.83%"
        left="25.81%"
        right="70.51%"
        padding="0px 0px 0px 0px"
        display="block"
        {...getOverrideProps(overrides, "Rectangle 478")}
      ></View>
    </View>
  );
}
verrideProps(overrides, "Jobs")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Applicants"
          {...getOverrideProps(overrides, "Applicants")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          letterSpacing="0.01px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Company"
          {...getOverrideProps(overrides, "Company")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        width="100%"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        height="45px"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        <SearchField
          display="flex"
          gap="8px"
          direction="column"
          width="300px"
          shrink="0"
          height="40px"
          position="relative"
          padding="0px 0px 0px 0px"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <View
          width="24px"
          height="24px"
          shrink="0"
          overflow="hidden"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Icon")}
        >
          <Icon
            width="16px"
            height="19.5px"
            viewBox={{ minX: 0, minY: 0, width: 16, height: 19.5 }}
            paths={[
              {
                d: "M8 19.5C9.1 19.5 10 18.6 10 17.5L6 17.5C6 18.6 6.9 19.5 8 19.5ZM14 13.5L14 8.5C14 5.43 12.37 2.86 9.5 2.18L9.5 1.5C9.5 0.67 8.83 0 8 0C7.17 0 6.5 0.67 6.5 1.5L6.5 2.18C3.64 2.86 2 5.42 2 8.5L2 13.5L0 15.5L0 16.5L16 16.5L16 15.5L14 13.5ZM12 14.5L4 14.5L4 8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5L12 14.5Z",
                fill: "rgba(51,51,51,1)",
                fillRule: "nonzero",
              },
            ]}
            position="absolute"
            top="10.42%"
            bottom="8.33%"
            left="16.67%"
            right="16.67%"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
        </View>
        <Image
          width="45px"
          height="45px"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </Flex>
  );
}
