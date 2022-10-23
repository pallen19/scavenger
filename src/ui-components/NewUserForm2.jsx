/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function NewUserForm2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="472px"
      height="943px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "NewUserForm2")}
    >
      <View
        width="450px"
        height="925px"
        position="absolute"
        top="5.5px"
        left="10.5px"
        border="1px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "NewUserForm234532846")}
      >
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="18.94%"
          bottom="73.27%"
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
          {...getOverrideProps(overrides, "TextField34532857")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="8.98%"
          bottom="83.23%"
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
          {...getOverrideProps(overrides, "TextField34532858")}
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
          top="95.35%"
          bottom="2.06%"
          left="calc(50% - 16.5px - -7px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="2/2"
          {...getOverrideProps(overrides, "label34532859")}
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
          top="1.3%"
          bottom="93.94%"
          left="25.39%"
          right="29.18%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Create New User"
          {...getOverrideProps(overrides, "label34532860")}
        ></Text>
        <Flex
          gap="10px"
          position="absolute"
          top="89.39%"
          bottom="4.76%"
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
            {...getOverrideProps(overrides, "Button34532863")}
          ></Button>
        </Flex>
        <Button
          display="flex"
          gap="0"
          position="absolute"
          top="90.58%"
          bottom="4.87%"
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
          {...getOverrideProps(overrides, "Button34532864")}
        ></Button>
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="51.41%"
          bottom="44.26%"
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
          {...getOverrideProps(overrides, "TextField34732991")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="37.34%"
          bottom="58.33%"
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
          {...getOverrideProps(overrides, "TextField34732984")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          position="absolute"
          top="65.91%"
          bottom="29.76%"
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
          {...getOverrideProps(overrides, "TextField34732998")}
        ></TextField>
      </View>
    </View>
  );
}
