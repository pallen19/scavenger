/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Divider,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function EmailForm(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="373px"
      height="638px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "EmailForm")}
    >
      <View
        width="373px"
        height="638px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 506")}
      ></View>
      <Divider
        width="373px"
        height="1px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="99px"
        left="0px"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="134px"
        left="195px"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Address Book"
        {...getOverrideProps(overrides, "AddressBookButton")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="566px"
        left="264px"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Send"
        {...getOverrideProps(overrides, "Button36574439")}
      ></Button>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="300px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="277px"
        left="37px"
        padding="0px 0px 0px 0px"
        label="Subject:"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField36574432")}
      ></TextField>
      <TextAreaField
        display="flex"
        gap="8px"
        direction="column"
        width="300px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="379px"
        left="37px"
        padding="0px 0px 0px 0px"
        label="Body:"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextAreaField")}
      ></TextAreaField>
      <TextField
        display="flex"
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="175px"
        left="37px"
        padding="0px 0px 0px 0px"
        label="To:"
        placeholder="Enter email address"
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField36574411")}
      ></TextField>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="33px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="264px"
        height="36px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="33px"
        left="64px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Compose New Message"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Button
        display="flex"
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="565px"
        left="142px"
        border="1px SOLID rgba(174,179,183,1)"
        borderRadius="5px"
        padding="8px 16px 8px 16px"
        size="default"
        isDisabled={false}
        variation="default"
        children="Cancel"
        {...getOverrideProps(overrides, "Button36574449")}
      ></Button>
    </View>
  );
}
