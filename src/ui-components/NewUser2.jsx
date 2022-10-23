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
      height="901px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NewUser2")}
    >
      <View
        width="450px"
        height="884px"
        position="absolute"
        top="5.5px"
        left="10.5px"
        border="1px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NewUserForm2")}
      >
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="19.8%"
          bottom="72.04%"
          left="14.03%"
          right="10.91%"
          direction="column"
          width="337px"
          justifyContent="center"
          padding="0px 0px 0px 0px"
          label="Confirm Password"
          placeholder="Re-enter password"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField35564700")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="9.38%"
          bottom="82.46%"
          left="14.7%"
          right="10.24%"
          direction="column"
          width="337px"
          justifyContent="center"
          padding="0px 0px 0px 0px"
          label="Password"
          placeholder="Enter password"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField35564701")}
        ></TextField>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          width="33px"
          position="absolute"
          top="95.24%"
          bottom="2.04%"
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
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="1.25%"
          bottom="93.77%"
          left="22.27%"
          right="18.93%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Request New Account"
          {...getOverrideProps(overrides, "label35564703")}
        ></Text>
        <Flex
          gap="10px"
          position="absolute"
          top="85.39%"
          bottom="8.49%"
          left="54.12%"
          right="8.02%"
          direction="column"
          width="170px"
          padding="10px 45px 2px 10px"
          {...getOverrideProps(overrides, "Frame 420")}
        >
          <Button
            display="flex"
            gap="0"
            width="150px"
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
          position="absolute"
          top="86.64%"
          bottom="8.61%"
          left="10.91%"
          right="55.23%"
          width="152px"
          justifyContent="center"
          alignItems="center"
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
          position="absolute"
          top="57.76%"
          bottom="37.71%"
          left="14.03%"
          right="10.91%"
          direction="column"
          width="337px"
          justifyContent="center"
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
          position="absolute"
          top="40.43%"
          bottom="55.04%"
          left="14.03%"
          right="10.91%"
          direction="column"
          width="337px"
          justifyContent="center"
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
          position="absolute"
          top="75.76%"
          bottom="19.71%"
          left="14.03%"
          right="10.91%"
          direction="column"
          width="337px"
          justifyContent="center"
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
          position="absolute"
          top="274px"
          left="63px"
          direction="column"
          width="337px"
          justifyContent="center"
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
          position="absolute"
          top="425px"
          left="63px"
          direction="column"
          width="337px"
          justifyContent="center"
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
          position="absolute"
          top="585px"
          left="63px"
          direction="column"
          width="337px"
          justifyContent="center"
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
