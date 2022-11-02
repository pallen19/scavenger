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
import {
  Button,
  Card,
  Flex,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function AdminViewNewUser(props) {
  const { phoneNumber, createNewUser2, overrides, ...rest } = props;
  const buttonThreeFiveFourEightFiveEightFourThreeOnClick = useNavigateAction({
    type: "url",
    url: "createNewUser2",
  });
  const buttonThreeFiveFourEightFiveEightFourFourOnClick = useNavigateAction({
    type: "url",
    url: "/",
  });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="8px 7px 8px 7px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "AdminViewNewUser")}
    >
      <View
        width="450px"
        height="909px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(102,102,102,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 1")}
      >
        <Card
          display="flex"
          gap="0"
          direction="column"
          width="449px"
          height="907.74px"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="0%"
          bottom="0.03%"
          left="0%"
          right="0%"
          padding="16px 16px 16px 16px"
          backgroundColor="rgba(255,255,255,1)"
          opacity="0.4699999988079071"
          variation="default"
          {...getOverrideProps(overrides, "Card")}
        ></Card>
        <TextField
          display="flex"
          gap="8px"
          direction="column"
          width="337px"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          position="absolute"
          top="29.52%"
          bottom="62.56%"
          left="12.47%"
          right="12.47%"
          padding="0px 0px 0px 0px"
          label="Phone Number"
          placeholder="(___) ___ - _____"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField34523742")}
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
          top="39.65%"
          bottom="52.42%"
          left="12.47%"
          right="12.47%"
          padding="0px 0px 0px 0px"
          label="Street Address"
          placeholder="Enter street address"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField34523743")}
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
          top="49.78%"
          bottom="42.29%"
          left="12.47%"
          right="12.47%"
          padding="0px 0px 0px 0px"
          label="City"
          placeholder="Enter city"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField34523744")}
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
          top="59.91%"
          bottom="32.16%"
          left="12.47%"
          right="12.47%"
          padding="0px 0px 0px 0px"
          label="State"
          placeholder="Enter state"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField34523745")}
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
          top="70.04%"
          bottom="22.03%"
          left="12.47%"
          right="12.47%"
          padding="0px 0px 0px 0px"
          label="Country"
          placeholder="Enter country"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField34523746")}
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
          top="19.49%"
          bottom="72.58%"
          left="12.47%"
          right="12.47%"
          padding="0px 0px 0px 0px"
          label="Email Address"
          placeholder="Enter email address"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField34523747")}
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
          top="9.25%"
          bottom="82.82%"
          left="12.47%"
          right="12.47%"
          padding="0px 0px 0px 0px"
          label="Full Name"
          placeholder="Enter full name"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField34523748")}
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
          height="24.21px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="95.31%"
          bottom="2.03%"
          left="calc(50% - 16.5px - -10px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="1/2"
          {...getOverrideProps(overrides, "label34523749")}
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
          width="208px"
          height="44px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="2.09%"
          bottom="93.06%"
          left="28.51%"
          right="25.17%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Create New User"
          {...getOverrideProps(overrides, "label34523750")}
        ></Text>
        <Flex
          gap="10px"
          direction="column"
          width="170px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="85.9%"
          bottom="8.15%"
          left="52.34%"
          right="9.8%"
          padding="10px 45px 2px 10px"
          {...getOverrideProps(overrides, "Frame 421")}
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
            children="Next"
            onClick={() => {
              buttonThreeFiveFourEightFiveEightFourThreeOnClick();
            }}
            {...getOverrideProps(overrides, "Button35485843")}
          ></Button>
        </Flex>
        <Flex
          gap="43px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-end"
          position="absolute"
          top="791px"
          left="53px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 429")}
        >
          <Button
            display="flex"
            gap="0"
            direction="row"
            width="152px"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(0,85,102,1)"
            borderRadius="5px"
            padding="8px 16px 8px 16px"
            size="default"
            isDisabled={false}
            variation="default"
            children="Cancel"
            onClick={() => {
              buttonThreeFiveFourEightFiveEightFourFourOnClick();
            }}
            {...getOverrideProps(overrides, "Button35485844")}
          ></Button>
        </Flex>
      </View>
    </Flex>
  );
}
