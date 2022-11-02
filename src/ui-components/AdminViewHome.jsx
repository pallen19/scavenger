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
import { Button, Divider, Icon, Text, View } from "@aws-amplify/ui-react";
import Navbar from "./Navbar";
export default function AdminViewHome(props) {
  const { overrides, ...rest } = props;
  const buttonThreeFiveTwoTwoOneSixFiveTwoSixOnClick = useNavigateAction({
    type: "url",
    url: "",
  });
  return (
    <View
      width="1391px"
      height="1215px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AdminViewHome")}
    >
      <View
        padding="0px 0px 0px 0px"
        width="1350px"
        height="1152px"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Group 1037")}
      >
        <View
          width="1160px"
          height="965px"
          position="absolute"
          top="187px"
          left="95px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(241,245,249,1)"
          {...getOverrideProps(overrides, "Rectangle 479")}
        ></View>
        <Navbar
          width="1350px"
          height="373px"
          position="absolute"
          top="0px"
          left="0px"
          padding="0px 0px 0px 0px"
          property1="AdminViewHomeBar"
          {...getOverrideProps(overrides, "Navbar")}
        ></Navbar>
        <View
          width="1105px"
          height="695px"
          position="absolute"
          top="457px"
          left="122px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 480")}
        ></View>
        <Text
          fontFamily="Poppins"
          fontSize="13px"
          fontWeight="600"
          color="rgba(88,80,236,1)"
          lineHeight="14px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="478px"
          left="151px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Quick Actions"
          {...getOverrideProps(overrides, "Quick Actions")}
        ></Text>
        <Icon
          width="1055px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 1055, height: 1 }}
          paths={[
            {
              d: "M0 0L1055 0L1055 -1L0 -1L0 0Z",
              stroke: "rgba(230,231,233,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          position="absolute"
          top="507px"
          left="135px"
          {...getOverrideProps(overrides, "Line 11")}
        ></Icon>
        <Icon
          width="125px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 125, height: 1 }}
          paths={[
            {
              d: "M0 0L125 0L125 -2L0 -2L0 0Z",
              stroke: "rgba(88,80,236,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
            },
          ]}
          position="absolute"
          top="507px"
          left="135px"
          {...getOverrideProps(overrides, "Line 12")}
        ></Icon>
      </View>
      <Text
        fontFamily="Poppins"
        fontSize="24px"
        fontWeight="600"
        color="rgba(33,33,33,1)"
        lineHeight="14px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="195px"
        height="25px"
        position="absolute"
        top="348px"
        left="129px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Home"
        {...getOverrideProps(overrides, "Home")}
      ></Text>
      <View
        width="394px"
        height="212px"
        position="absolute"
        top="552px"
        left="124px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 493")}
      ></View>
      <View
        width="327px"
        height="212px"
        position="absolute"
        top="552px"
        left="519px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 495")}
      ></View>
      <View
        width="374px"
        height="212px"
        position="absolute"
        top="552px"
        left="847px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 496")}
      ></View>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="710px"
        left="157px"
        width="300px"
        height="36px"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(0,64,77,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Create New User"
        onClick={() => {
          buttonThreeFiveTwoTwoOneSixFiveTwoSixOnClick();
        }}
        {...getOverrideProps(overrides, "Button352216526")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="710px"
        left="517px"
        width="300px"
        height="36px"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(0,64,77,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Create New Account"
        {...getOverrideProps(overrides, "Button352216544")}
      ></Button>
      <Button
        display="flex"
        gap="0"
        position="absolute"
        top="710px"
        left="897px"
        width="300px"
        height="36px"
        justifyContent="center"
        alignItems="center"
        backgroundColor="rgba(0,64,77,1)"
        size="default"
        isDisabled={false}
        variation="primary"
        children="View Expired Passwords"
        {...getOverrideProps(overrides, "Button352216553")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.01px"
        width="250px"
        position="absolute"
        top="595px"
        left="185px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Register new Administrator, Manager, or Accountant"
        {...getOverrideProps(
          overrides,
          "Register new Administrator, Manager, or Accountant"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.01px"
        width="250px"
        position="absolute"
        top="592px"
        left="543px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create new asset, liability, equity, revenue, or expense account"
        {...getOverrideProps(
          overrides,
          "Create new asset, liability, equity, revenue, or expense account"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        letterSpacing="0.01px"
        width="250px"
        position="absolute"
        top="601px"
        left="922px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="View auto-generated report on users’ expired passwords"
        {...getOverrideProps(
          overrides,
          "View auto-generated report on users\u2019 expired passwords"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="30px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="196px"
        height="14px"
        position="absolute"
        top="549px"
        left="204px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create New User"
        {...getOverrideProps(overrides, "Create New User")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="30px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="220px"
        height="14px"
        position="absolute"
        top="549px"
        left="566px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Create New Account"
        {...getOverrideProps(overrides, "Create New Account")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="30px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="300px"
        height="14px"
        position="absolute"
        top="549px"
        left="897px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Expired Passwords Report"
        {...getOverrideProps(overrides, "Expired Passwords Report")}
      ></Text>
      <Divider
        width="300px"
        height="2px"
        position="absolute"
        top="682px"
        left="154px"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider352216529")}
      ></Divider>
      <Divider
        width="300px"
        height="2px"
        position="absolute"
        top="680px"
        left="518px"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider352216547")}
      ></Divider>
      <Divider
        width="300px"
        height="2px"
        position="absolute"
        top="680px"
        left="897px"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider352216556")}
      ></Divider>
      <Divider
        width="250px"
        height="2px"
        position="absolute"
        top="756px"
        left="857px"
        transformOrigin="top left"
        transform="rotate(-90deg)"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider35484438")}
      ></Divider>
      <Divider
        width="250px"
        height="2px"
        position="absolute"
        top="756px"
        left="486px"
        transformOrigin="top left"
        transform="rotate(-90deg)"
        padding="0px 0px 0px 0px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider35484448")}
      ></Divider>
      <View
        padding="0px 0px 0px 0px"
        width="200px"
        height="42px"
        position="absolute"
        top="352px"
        left="1027px"
        {...getOverrideProps(overrides, "Group 754")}
      >
        <View
          width="201px"
          height="43px"
          position="absolute"
          top="-0.5px"
          left="-0.5px"
          border="1px SOLID rgba(214,214,214,1)"
          borderRadius="5.5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Input Style")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="88px"
          height="21px"
          position="absolute"
          top="11px"
          left="12px"
          {...getOverrideProps(overrides, "Search")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="13px"
            fontWeight="500"
            color="rgba(150,155,160,1)"
            lineHeight="15.234375px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="60px"
            height="21px"
            position="absolute"
            top="0px"
            left="28px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Search..."
            {...getOverrideProps(overrides, "Search...")}
          ></Text>
          <View
            width="16px"
            height="16px"
            position="absolute"
            top="2px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "24 / basic / search")}
          >
            <Icon
              width="13.138076782226562px"
              height="13.138076782226562px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 13.138076782226562,
                height: 13.138076782226562,
              }}
              paths={[
                {
                  d: "M5.33333 10.6667C2.38781 10.6667 0 8.27885 0 5.33333C0 2.38781 2.38781 0 5.33333 0C8.27885 0 10.6667 2.38781 10.6667 5.33333C10.6667 6.56581 10.2486 7.70064 9.54657 8.60377L13.1381 12.1953L12.1952 13.1381L8.60376 9.54658C7.70064 10.2486 6.56581 10.6667 5.33333 10.6667ZM9.33335 5.33327C9.33335 7.54241 7.54249 9.33327 5.33335 9.33327C3.12421 9.33327 1.33335 7.54241 1.33335 5.33327C1.33335 3.12413 3.12421 1.33327 5.33335 1.33327C7.54249 1.33327 9.33335 3.12413 9.33335 5.33327Z",
                  fill: "rgba(150,155,160,1)",
                  fillRule: "evenodd",
                },
              ]}
              position="absolute"
              top="8.33%"
              bottom="9.55%"
              left="8.33%"
              right="9.55%"
              {...getOverrideProps(overrides, "icon")}
            >
              <Icon
                width="13.14px"
                height="13.14px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 13.138046264648438,
                  height: 13.1380615234375,
                }}
                paths={[
                  {
                    d: "M0 5.33333C0 8.27885 2.38781 10.6667 5.33333 10.6667C6.56581 10.6667 7.70064 10.2486 8.60376 9.54658L12.1952 13.1381L13.1381 12.1953L9.54657 8.60377C10.2486 7.70064 10.6667 6.56581 10.6667 5.33333C10.6667 2.38781 8.27885 0 5.33333 0C2.38781 0 0 2.38781 0 5.33333Z",
                    fill: "rgba(218,218,218,1)",
                    fillRule: "evenodd",
                  },
                ]}
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(overrides, "Union")}
              >
                <Icon
                  width="10.666671752929688px"
                  height="10.666671752929688px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 10.666671752929688,
                    height: 10.666671752929688,
                  }}
                  paths={[]}
                  position="absolute"
                  top="0%"
                  bottom="33.33%"
                  left="0%"
                  right="33.33%"
                  {...getOverrideProps(overrides, "Path35484459")}
                ></Icon>
                <Icon
                  width="4.94281005859375px"
                  height="4.94281005859375px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 4.94281005859375,
                    height: 4.94281005859375,
                  }}
                  paths={[]}
                  position="absolute"
                  top="51.22%"
                  bottom="17.89%"
                  left="51.22%"
                  right="17.89%"
                  {...getOverrideProps(overrides, "Path35484460")}
                ></Icon>
              </Icon>
              <Icon
                width="8px"
                height="8px"
                viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
                paths={[]}
                position="absolute"
                top="8.33%"
                bottom="41.67%"
                left="8.33%"
                right="41.67%"
                {...getOverrideProps(overrides, "Path35484461")}
              ></Icon>
            </Icon>
          </View>
        </View>
      </View>
    </View>
  );
}
