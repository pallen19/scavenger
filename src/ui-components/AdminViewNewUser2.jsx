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
export default function AdminViewNewUser2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="472px"
      height="988px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "AdminViewNewUser2")}
    >
      <View
        width="450px"
        height="969px"
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
        <TextField
          label="Confirm Password"
          placeholder="Re-enter password"
          width="337px"
          position="absolute"
          top="18.06%"
          bottom="74.5%"
          left="14.03%"
          right="10.91%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField35564789")}
        ></TextField>
        <TextField
          label="Password"
          placeholder="Enter password"
          width="337px"
          position="absolute"
          top="8.56%"
          bottom="84%"
          left="14.7%"
          right="10.24%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField35564790")}
        ></TextField>
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
          top="96.18%"
          bottom="1.34%"
          left="calc(50% - 16.5px - -7px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="2/2"
          {...getOverrideProps(overrides, "label35564791")}
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
          width="198px"
          height="44px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="1.96%"
          bottom="93.49%"
          left="28.06%"
          right="27.84%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Create New User"
          {...getOverrideProps(overrides, "label35564792")}
        ></Text>
        <Flex
          gap="10px"
          direction="column"
          width="170px"
          height="54px"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="87.19%"
          bottom="7.23%"
          left="54.12%"
          right="8.02%"
          padding="10px 45px 2px 10px"
          {...getOverrideProps(overrides, "Frame 420")}
        >
          <Button
            width="150px"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Submit"
            {...getOverrideProps(overrides, "Button35564794")}
          ></Button>
        </Flex>
        <TextField
          placeholder="Enter security question answer"
          width="337px"
          position="absolute"
          top="52.69%"
          bottom="43.18%"
          left="14.03%"
          right="10.91%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField35564796")}
        ></TextField>
        <TextField
          placeholder="Enter security question answer"
          width="337px"
          position="absolute"
          top="36.88%"
          bottom="58.99%"
          left="14.03%"
          right="10.91%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField35564797")}
        ></TextField>
        <TextField
          placeholder="Enter security question answer"
          width="337px"
          position="absolute"
          top="69.11%"
          bottom="26.76%"
          left="14.03%"
          right="10.91%"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField35564798")}
        ></TextField>
        <SelectField
          label="Security Question 1"
          placeholder="Select Security Question"
          width="337px"
          position="absolute"
          top="274px"
          left="63px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField35564799")}
        ></SelectField>
        <SelectField
          label="Security Question 2"
          placeholder="Select Security Question"
          width="337px"
          position="absolute"
          top="425px"
          left="63px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField35564800")}
        ></SelectField>
        <SelectField
          label="Security Question 3"
          placeholder="Select Security Question"
          width="337px"
          position="absolute"
          top="585px"
          left="63px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField35564801")}
        ></SelectField>
        <SelectField
          label="User Type"
          placeholder="Select User Type"
          width="337px"
          position="absolute"
          top="736px"
          left="63px"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField35564773")}
        ></SelectField>
        <Button
          width="152px"
          position="absolute"
          border="1px SOLID rgba(0,85,102,1)"
          top="88.33%"
          bottom="7.33%"
          left="10.91%"
          right="55.23%"
          size="default"
          isDisabled={false}
          variation="default"
          children="Cancel"
          {...getOverrideProps(overrides, "Button35564795")}
        ></Button>
      </View>
    </View>
  );
}
