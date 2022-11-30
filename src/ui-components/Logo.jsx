/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image } from "@aws-amplify/ui-react";
export default function Logo(props) {
  const { overrides, ...rest } = props;
  const imageOnClick = useNavigateAction({ type: "url", url: "/404" });
  return (
    <Flex
      gap="2px"
      direction="row"
      width="unset"
      height="69px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Logo")}
    >
      <Image
        width="95px"
        height="102.05px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="/Images/BusinessLogo.jpg"
        onClick={() => {
          imageOnClick();
        }}
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </Flex>
  );
}
