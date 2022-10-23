/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Card, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function NewAcctForm(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="508px"
      height="806px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "NewAcctForm")}
    >
      <View
        position="absolute"
        top="0.25%"
        bottom="0%"
        left="0%"
        right="8.95%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NewAcctForm1")}
      >
        <View
          width="450px"
          height="789px"
          position="absolute"
          top="6.5px"
          left="6.5px"
          border="1px SOLID rgba(102,102,102,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Component1")}
        >
          <Card
            display="flex"
            gap="0"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            direction="column"
            width="449px"
            height="788px"
            justifyContent="center"
            padding="16px 16px 16px 16px"
            backgroundColor="rgba(255,255,255,1)"
            opacity="0.4699999988079071"
            variation="default"
            {...getOverrideProps(overrides, "Card")}
          ></Card>
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
            top="1.27%"
            bottom="93.15%"
            left="23.83%"
            right="19.15%"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create New Account"
            {...getOverrideProps(overrides, "label34533253")}
          ></Text>
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
            top="95.23%"
            bottom="1.7%"
            left="calc(50% - 16.5px - -10px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1/2"
            {...getOverrideProps(overrides, "label34533252")}
          ></Text>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="35.41%"
            bottom="55.46%"
            left="14.7%"
            right="10.24%"
            direction="column"
            width="337px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Account Description"
            placeholder="Enter account description"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34533245")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="47.97%"
            bottom="42.89%"
            left="14.7%"
            right="10.24%"
            direction="column"
            width="337px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Account Category"
            placeholder="Enter account category"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34533247")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="60.41%"
            bottom="30.46%"
            left="15.14%"
            right="9.8%"
            direction="column"
            width="337px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Account Subcategory"
            placeholder="Enter account subcategory"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34533248")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="73.22%"
            bottom="17.64%"
            left="14.7%"
            right="10.24%"
            direction="column"
            width="337px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="User ID"
            placeholder="enter user ID"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34692999")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="calc(50% - 36px - 178.07px)"
            left="14.7%"
            right="10.24%"
            direction="column"
            width="337px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Account Number"
            placeholder="Enter account number"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34533250")}
          ></TextField>
          <TextField
            display="flex"
            gap="8px"
            position="absolute"
            top="10.28%"
            bottom="80.58%"
            left="14.7%"
            right="10.24%"
            direction="column"
            width="337px"
            justifyContent="center"
            padding="0px 0px 0px 0px"
            label="Account Name"
            placeholder="Enter account name"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "TextField34533251")}
          ></TextField>
          <Flex
            gap="0"
            position="absolute"
            top="700px"
            left="255px"
            width="150px"
            justifyContent="center"
            alignItems="center"
            border="1px SOLID rgba(0,0,0,0)"
            borderRadius="4px"
            padding="7px 15px 7px 15px"
            backgroundColor="rgba(4,125,149,1)"
            {...getOverrideProps(overrides, "Button34533256")}
          >
            <Text
              fontFamily="Inter"
              fontSize="17px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="25.5px"
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="118px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Next"
              {...getOverrideProps(overrides, "label34533258")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            position="absolute"
            top="88.72%"
            bottom="5.95%"
            left="10.91%"
            right="55.23%"
            width="152px"
            justifyContent="center"
            alignItems="center"
            border="1px SOLID rgba(0,85,102,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            {...getOverrideProps(overrides, "Button34533260")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(0,85,102,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Cancel"
              {...getOverrideProps(overrides, "label34533262")}
            ></Text>
          </Flex>
        </View>
      </View>
    </View>
  );
}
