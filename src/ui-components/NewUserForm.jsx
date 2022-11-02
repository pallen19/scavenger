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
import NewUserForm1 from "./NewUserForm1";
import { View } from "@aws-amplify/ui-react";
export default function NewUserForm(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: { NewUserForm1: {}, NewUserForm: {} },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="497px"
      height="943px"
      position="relative"
      padding="0px 0px 0px 0px"
      display="block"
      {...rest}
      {...getOverrideProps(overrides, "NewUserForm")}
    >
      <NewUserForm1
        display="flex"
        gap="10px"
        position="absolute"
        top="0.95%"
        bottom="1.06%"
        left="0%"
        right="6.84%"
        alignItems="flex-start"
        padding="8px 7px 8px 7px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NewUserForm1")}
      ></NewUserForm1>
    </View>
  );
}
