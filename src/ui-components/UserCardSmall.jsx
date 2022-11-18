/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Icon, Text, View } from "@aws-amplify/ui-react";
export default function UserCardSmall(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="426px"
      height="168px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "UserCardSmall")}
    >
      <Icon
        width="426px"
        height="168px"
        viewBox={{ minX: 0, minY: 0, width: 426, height: 168 }}
        paths={[
          {
            d: "M7 1L419 1L419 -1L7 -1L7 1ZM425 7L425 161L427 161L427 7L425 7ZM419 167L7 167L7 169L419 169L419 167ZM1 161L1 7L-1 7L-1 161L1 161ZM7 167C3.68629 167 1 164.314 1 161L-1 161C-1 165.418 2.58172 169 7 169L7 167ZM425 161C425 164.314 422.314 167 419 167L419 169C423.418 169 427 165.418 427 161L425 161ZM419 1C422.314 1 425 3.68629 425 7L427 7C427 2.58172 423.418 -1 419 -1L419 1ZM7 -1C2.58172 -1 -1 2.58173 -1 7L1 7C1 3.68629 3.68629 1 7 1L7 -1Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 7C0 3.13401 3.13401 0 7 0L419 0C422.866 0 426 3.13401 426 7L426 161C426 164.866 422.866 168 419 168L7 168C3.13401 168 0 164.866 0 161L0 7Z",
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
        position="absolute"
        borderRadius="7px"
        padding="7px 11px 7px 11px"
        backgroundColor="rgba(184,206,249,1)"
        top="8.33%"
        bottom="73.81%"
        left="37.32%"
        right="46.71%"
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
        width="143px"
        height="23px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12.5%"
        bottom="73.81%"
        left="3.76%"
        right="62.68%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Account Name:"
        {...getOverrideProps(overrides, "AccountName")}
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
        width="162px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="32.74%"
        bottom="52.38%"
        left="3.76%"
        right="58.22%"
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
        width="226px"
        height="20px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="54.76%"
        bottom="33.33%"
        left="3.76%"
        right="43.19%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="PasswordExpiration"
        {...getOverrideProps(overrides, "PasswordExpiration")}
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
        width="195px"
        height="24px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="73.81%"
        bottom="11.9%"
        left="3.76%"
        right="50.47%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="DateofGeneratedReport"
        {...getOverrideProps(overrides, "DateofGeneratedReport")}
      ></Text>
    </View>
  );
}
