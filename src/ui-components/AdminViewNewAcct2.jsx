/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Card, Flex, Text, TextField, View } from "@aws-amplify/ui-react";
export default function AdminViewNewAcct2(props) {
  const { overrides, ...rest } = props;
  const buttonThreeFiveOneNineOneTwoSixZeroZeroOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  return (
    <View
      width="472px"
      height="806px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "AdminViewNewAcct2")}
    >
      <View
        width="450px"
        height="790px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5.5px"
        left="10.5px"
        border="1px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component1")}
      >
        <Card
          display="flex"
          gap="0"
          direction="column"
          width="449px"
          height="788px"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="-0.76%"
          bottom="0.89%"
          left="-2.45%"
          right="2.45%"
          padding="16px 16px 16px 16px"
          backgroundColor="rgba(255,255,255,1)"
          opacity="0.4699999988079071"
          variation="default"
          {...getOverrideProps(overrides, "Card")}
        ></Card>
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
          width="32px"
          height="24.95px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="94.07%"
          bottom="2.77%"
          left="calc(50% - 16px - -1.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="2/2"
          {...getOverrideProps(overrides, "label351912591")}
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
          width="244px"
          height="45.74px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="1.32%"
          bottom="92.89%"
          left="25.17%"
          right="20.49%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Create New Account"
          {...getOverrideProps(overrides, "label351912592")}
        ></Text>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="337px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="10.98%"
          bottom="79.89%"
          left="13.14%"
          right="11.8%"
          padding="0px 0px 0px 0px"
          label="Order"
          placeholder="Enter order "
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912593")}
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
          top="71.19%"
          bottom="19.68%"
          left="13.14%"
          right="11.8%"
          padding="0px 0px 0px 0px"
          label="Comments"
          placeholder="Enter comments "
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912594")}
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
          top="58.81%"
          bottom="32.06%"
          left="13.14%"
          right="11.8%"
          padding="0px 0px 0px 0px"
          label="Account Creation"
          placeholder="MM/DD/YYY hh:mm:ss"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912595")}
        ></TextField>
        <View
          width="377px"
          height="210px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="167px"
          left="46px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "Listbox Component/Statement Dropdown"
          )}
        ></View>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="164px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="31.18%"
          bottom="59.7%"
          left="14.48%"
          right="49%"
          padding="0px 0px 0px 0px"
          label="Debit"
          placeholder="$0.00"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912596")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="164px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="31.18%"
          bottom="59.7%"
          left="53.01%"
          right="10.47%"
          padding="0px 0px 0px 0px"
          label="Credit"
          placeholder="$0.00"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912597")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="161px"
          height="72px"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="43.73%"
          bottom="47.15%"
          left="52.34%"
          right="11.8%"
          padding="0px 0px 0px 0px"
          label="Ending Balance"
          placeholder="$0.00"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912598")}
        ></TextField>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="164px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="43.73%"
          bottom="47.15%"
          left="13.36%"
          right="50.11%"
          padding="0px 0px 0px 0px"
          label="Beginning Balance"
          placeholder="$0.00"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField351912599")}
        ></TextField>
        <Flex
          gap="0"
          direction="row"
          width="150px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="694px"
          left="255px"
          border="1px SOLID rgba(0,0,0,0)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(4,125,149,1)"
          {...getOverrideProps(overrides, "Button351912604")}
        >
          <Text
            fontFamily="Inter"
            fontSize="17px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="25.5px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="118px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Submit"
            {...getOverrideProps(overrides, "label351912606")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="152px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="87.85%"
          bottom="6.83%"
          left="8.46%"
          right="57.68%"
          border="1px SOLID rgba(0,85,102,1)"
          borderRadius="5px"
          padding="8px 16px 8px 16px"
          onClick={() => {
            buttonThreeFiveOneNineOneTwoSixZeroZeroOnClick();
          }}
          {...getOverrideProps(overrides, "Button351912600")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(0,85,102,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Cancel"
            {...getOverrideProps(overrides, "label351912602")}
          ></Text>
        </Flex>
      </View>
    </View>
  );
}
