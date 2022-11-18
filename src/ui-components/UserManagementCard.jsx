/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Icon, Text, View } from "@aws-amplify/ui-react";
export default function UserManagementCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="426px"
      height="196px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "UserManagementCard")}
    >
      <Icon
        width="426px"
        height="196px"
        viewBox={{ minX: 0, minY: 0, width: 426, height: 196 }}
        paths={[
          {
            d: "M7 1L419 1L419 -1L7 -1L7 1ZM425 7L425 189L427 189L427 7L425 7ZM419 195L7 195L7 197L419 197L419 195ZM1 189L1 7L-1 7L-1 189L1 189ZM7 195C3.68629 195 1 192.314 1 189L-1 189C-1 193.418 2.58172 197 7 197L7 195ZM425 189C425 192.314 422.314 195 419 195L419 197C423.418 197 427 193.418 427 189L425 189ZM419 1C422.314 1 425 3.68629 425 7L427 7C427 2.58172 423.418 -1 419 -1L419 1ZM7 -1C2.58172 -1 -1 2.58172 -1 7L1 7C1 3.68629 3.68629 1 7 1L7 -1Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 7C0 3.134 3.13401 0 7 0L419 0C422.866 0 426 3.13401 426 7L426 189C426 192.866 422.866 196 419 196L7 196C3.13401 196 0 192.866 0 189L0 7Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 485")}
      ></Icon>
      <Badge
        width="149px"
        position="absolute"
        borderRadius="7px"
        padding="7px 11px 7px 11px"
        backgroundColor="rgba(184,206,249,1)"
        top="76.28%"
        bottom="8.42%"
        left="2.35%"
        right="62.68%"
        border="1px SOLID rgba(47,41,161,1)"
        size="default"
        variation="default"
        children="Admin"
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
      <Text
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="234px"
        height="29px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="42.86%"
        bottom="42.35%"
        left="3.29%"
        right="41.78%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="UserID"
        {...getOverrideProps(overrides, "UserID")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="234px"
        height="29px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="25%"
        bottom="60.2%"
        left="3.29%"
        right="41.78%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="UserName"
        {...getOverrideProps(overrides, "UserName")}
      ></Text>
      <View
        width="134px"
        height="39.67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="25%"
        bottom="54.76%"
        left="61.5%"
        right="7.04%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "DropDownMenu")}
      ></View>
      <Text
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="21px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="189px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="6.63%"
        bottom="82.65%"
        left="3.29%"
        right="52.35%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Name"
        {...getOverrideProps(overrides, "Name")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="14px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="21px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="162px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="5.1%"
        bottom="79.59%"
        left="58.22%"
        right="3.76%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Status"
        {...getOverrideProps(overrides, "Status")}
      ></Text>
    </View>
  );
}
