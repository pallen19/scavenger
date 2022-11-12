/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function NewUser2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="472px"
      height="713px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NewUser2")}
    >
      <View
        width="450px"
        height="693px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5.5px"
        left="10.5px"
        border="1px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NewUserForm2")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="33px"
          height="24px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="94.08%"
          bottom="2.46%"
          left="calc(50% - 16.5px - -7px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="2/2"
          {...getOverrideProps(overrides, "label35564702")}
        ></Text>
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
          width="264px"
          height="44px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="1.59%"
          bottom="92.05%"
          left="22.27%"
          right="18.93%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Request New Account"
          {...getOverrideProps(overrides, "label35564703")}
        ></Text>
        <Flex
          gap="10px"
          direction="column"
          width="170px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="81.5%"
          bottom="10.69%"
          left="54.12%"
          right="8.02%"
          padding="10px 45px 2px 10px"
          {...getOverrideProps(overrides, "Frame 420")}
        >
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="150px"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Submit"
            {...getOverrideProps(overrides, "Button35564705")}
          ></Button>
        </Flex>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="152px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="83.09%"
          bottom="10.84%"
          left="10.91%"
          right="55.23%"
          border="1px SOLID rgba(0,85,102,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          size="default"
          isDisabled={false}
          variation="default"
          children="Cancel"
          {...getOverrideProps(overrides, "Button35564706")}
        ></Button>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="337px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="46.24%"
          bottom="47.98%"
          left="14.03%"
          right="10.91%"
          padding="0px 0px 0px 0px"
          placeholder="Enter security question answer"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField35564707")}
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
          top="24.13%"
          bottom="70.09%"
          left="14.03%"
          right="10.91%"
          padding="0px 0px 0px 0px"
          placeholder="Enter security question answer"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField35564708")}
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
          top="69.22%"
          bottom="25%"
          left="14.03%"
          right="10.91%"
          padding="0px 0px 0px 0px"
          placeholder="Enter security question answer"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField35564709")}
        ></TextField>
        <SelectField
          display="flex"
          gap="8px"
          direction="column"
          width="337px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="84px"
          left="63px"
          padding="0px 0px 0px 0px"
          label="Security Question 1"
          placeholder="Select Security Question"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField35564710")}
        ></SelectField>
        <SelectField
          display="flex"
          gap="8px"
          direction="column"
          width="337px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="235px"
          left="63px"
          padding="0px 0px 0px 0px"
          label="Security Question 2"
          placeholder="Select Security Question"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField35564711")}
        ></SelectField>
        <SelectField
          display="flex"
          gap="8px"
          direction="column"
          width="337px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="395px"
          left="63px"
          padding="0px 0px 0px 0px"
          label="Security Question 3"
          placeholder="Select Security Question"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField35564712")}
        ></SelectField>
      </View>
    </View>
  );
}
