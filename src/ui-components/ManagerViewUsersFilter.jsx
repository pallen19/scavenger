/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, SwitchField, Text, View } from "@aws-amplify/ui-react";
import Navbar from "./Navbar";
export default function ManagerViewUsersFilter(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1165px"
      height="988px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(241,245,249,1)"
      {...rest}
      {...getOverrideProps(overrides, "ManagerViewUsersFilter")}
    >
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="400"
        color="rgba(33,33,33,1)"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="195px"
        left="30px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Home >   Users"
        {...getOverrideProps(overrides, "Home > Users")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="24px"
        fontWeight="600"
        color="rgba(33,33,33,1)"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="195px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="164px"
        left="30px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Users"
        {...getOverrideProps(overrides, "Users35489235")}
      ></Text>
      <View
        width="751px"
        height="782px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="249px"
        left="30px"
        boxShadow="0px 4px 3px rgba(0, 0, 0, 0.05999999865889549)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "table_body_bg35489236")}
      ></View>
      <View
        width="324px"
        height="705px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="249px"
        left="811px"
        boxShadow="0px 4px 3px rgba(0, 0, 0, 0.05999999865889549)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "table_body_bg35489237")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="200px"
        height="42px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="166px"
        left="808px"
        {...getOverrideProps(overrides, "Group 754")}
      >
        <View
          width="201px"
          height="43px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-0.5px"
          left="-0.5px"
          border="1px SOLID rgba(214,214,214,1)"
          borderRadius="5.5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Input Style35489239")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="88px"
          height="21px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="11px"
          left="12px"
          {...getOverrideProps(overrides, "Search35489240")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="13px"
            fontWeight="500"
            color="rgba(150,155,160,1)"
            lineHeight="19.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="60px"
            height="21px"
            gap="unset"
            alignItems="unset"
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
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="2px"
            left="0px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "24 / basic / search")}
          >
            <Icon
              width="13.14px"
              height="13.14px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 13.13818359375,
                height: 13.1380615234375,
              }}
              paths={[
                {
                  d: "M5.33333 10.6667C2.38781 10.6667 0 8.27885 0 5.33333C0 2.38781 2.38781 0 5.33333 0C8.27885 0 10.6667 2.38781 10.6667 5.33333C10.6667 6.56581 10.2486 7.70064 9.54657 8.60377L13.1381 12.1953L12.1952 13.1381L8.60376 9.54658C7.70064 10.2486 6.56581 10.6667 5.33333 10.6667ZM9.33335 5.33327C9.33335 7.54241 7.54249 9.33327 5.33335 9.33327C3.12421 9.33327 1.33335 7.54241 1.33335 5.33327C1.33335 3.12413 3.12421 1.33327 5.33335 1.33327C7.54249 1.33327 9.33335 3.12413 9.33335 5.33327Z",
                  fill: "rgba(150,155,160,1)",
                  fillRule: "evenodd",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
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
                  width: 13.137939453125,
                  height: 13.1380615234375,
                }}
                paths={[
                  {
                    d: "M0 5.33333C0 8.27885 2.38781 10.6667 5.33333 10.6667C6.56581 10.6667 7.70064 10.2486 8.60376 9.54658L12.1952 13.1381L13.1381 12.1953L9.54657 8.60377C10.2486 7.70064 10.6667 6.56581 10.6667 5.33333C10.6667 2.38781 8.27885 0 5.33333 0C2.38781 0 0 2.38781 0 5.33333Z",
                    fill: "rgba(218,218,218,1)",
                    fillRule: "evenodd",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(overrides, "Union")}
              >
                <Icon
                  width="10.67px"
                  height="10.67px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 10.666748046875,
                    height: 10.6666259765625,
                  }}
                  paths={[]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="33.33%"
                  left="0%"
                  right="33.33%"
                  {...getOverrideProps(overrides, "Path35489245")}
                ></Icon>
                <Icon
                  width="4.94px"
                  height="4.94px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 4.94287109375,
                    height: 4.9427490234375,
                  }}
                  paths={[]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="51.22%"
                  bottom="17.89%"
                  left="51.22%"
                  right="17.89%"
                  {...getOverrideProps(overrides, "Path35489246")}
                ></Icon>
              </Icon>
              <Icon
                width="8px"
                height="8px"
                viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
                paths={[]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="8.33%"
                bottom="41.67%"
                left="8.33%"
                right="41.67%"
                {...getOverrideProps(overrides, "Path35489247")}
              ></Icon>
            </Icon>
          </View>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="112px"
        height="42px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="166px"
        left="1020px"
        {...getOverrideProps(overrides, "Group 1004")}
      >
        <View
          width="113px"
          height="43px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="-0.5px"
          left="-0.5px"
          border="1px SOLID rgba(214,214,214,1)"
          borderRadius="5.5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Input Style35489249")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="88px"
          height="21px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="11px"
          left="9px"
          {...getOverrideProps(overrides, "Search35489250")}
        >
          <Text
            fontFamily="Poppins"
            fontSize="13px"
            fontWeight="400"
            color="rgba(33,33,33,1)"
            lineHeight="19.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="60px"
            height="21px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="28px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="New first"
            {...getOverrideProps(overrides, "New first")}
          ></Text>
          <View
            width="19px"
            height="19px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="1px"
            left="19px"
            transformOrigin="top left"
            transform="rotate(90deg)"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "chevron_right_24px")}
          >
            <Icon
              width="7px"
              height="13px"
              viewBox={{ minX: 0, minY: 0, width: 13, height: 7 }}
              paths={[
                {
                  d: "M0.636364 0.110169L0.083004 0.668362C-0.027668 0.815254 -0.027668 1.05028 0.083004 1.1678L5.09091 6.48531L0.083004 11.8322C-0.027668 11.9497 -0.027668 12.1847 0.083004 12.3316L0.636364 12.8898C0.774704 13.0367 0.96838 13.0367 1.10672 12.8898L6.917 6.74972C7.02767 6.60283 7.02767 6.39718 6.917 6.25028L1.10672 0.110169C0.96838 -0.0367232 0.774704 -0.0367232 0.636364 0.110169Z",
                  fill: "rgba(150,155,160,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="21.05%"
              bottom="10.53%"
              left="31.58%"
              right="31.58%"
              {...getOverrideProps(overrides, "chevron-right")}
            ></Icon>
          </View>
        </View>
      </View>
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="600"
        color="rgba(88,80,236,1)"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="267px"
        left="85px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Users"
        {...getOverrideProps(overrides, "Users35489257")}
      ></Text>
      <Icon
        width="700px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 700, height: 1 }}
        paths={[
          {
            d: "M0 0L700 0L700 -1L0 -1L0 0Z",
            stroke: "rgba(230,231,233,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="296px"
        left="55px"
        {...getOverrideProps(overrides, "Line 9")}
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
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="296px"
        left="55px"
        {...getOverrideProps(overrides, "Line 10")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="700px"
        height="333px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="648px"
        left="57px"
        {...getOverrideProps(overrides, "Group 100635489261")}
      >
        <View
          width="700px"
          height="162px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(230,231,233,1)"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "table_body_bg35489262")}
        ></View>
        <Text
          fontFamily="Poppins"
          fontSize="16px"
          fontWeight="600"
          color="rgba(33,33,33,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="12px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Brad Jones"
          {...getOverrideProps(overrides, "Brad Jones")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="rgba(33,33,33,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="65px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="User ID : 09898732884"
          {...getOverrideProps(overrides, "User ID : 09898732884")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="rgba(33,33,33,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="336px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="91px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="1275 Powers Ferry Road&#xA;Marietta, GA 30067"
          {...getOverrideProps(
            overrides,
            "1275 Powers Ferry Road Marietta, GA 3006735489268"
          )}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="600"
          color="rgba(33,33,33,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="101px"
          left="497px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Phone no : (770) 555-5555"
          {...getOverrideProps(overrides, "Phone no : (770) 555-555535489269")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="81px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="13px"
          left="127px"
          {...getOverrideProps(overrides, "Group 100535489270")}
        >
          <View
            width="81px"
            height="22px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="7px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(88,80,236,0.3)"
            {...getOverrideProps(overrides, "Rectangle 47735489271")}
          ></View>
          <Text
            fontFamily="Poppins"
            fontSize="11px"
            fontWeight="500"
            color="rgba(88,80,236,1)"
            lineHeight="16.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="3px"
            left="8px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Accountant"
            {...getOverrideProps(overrides, "Accountant35489272")}
          ></Text>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="700px"
          height="162px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="171px"
          left="0px"
          {...getOverrideProps(overrides, "Group 100635489273")}
        >
          <View
            width="700px"
            height="162px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(230,231,233,1)"
            borderRadius="5px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "table_body_bg35489274")}
          ></View>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="600"
            color="rgba(33,33,33,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="16px"
            left="20px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Caleb Black"
            {...getOverrideProps(overrides, "Caleb Black")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="14px"
            fontWeight="400"
            color="rgba(33,33,33,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="69px"
            left="20px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="User ID : 09898829038"
            {...getOverrideProps(overrides, "User ID : 09898829038")}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="14px"
            fontWeight="400"
            color="rgba(33,33,33,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="336px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="95px"
            left="20px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1275 Powers Ferry Road&#xA;Marietta, GA 30067"
            {...getOverrideProps(
              overrides,
              "1275 Powers Ferry Road Marietta, GA 3006735489280"
            )}
          ></Text>
          <Text
            fontFamily="Poppins"
            fontSize="14px"
            fontWeight="600"
            color="rgba(33,33,33,1)"
            lineHeight="21px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="105px"
            left="497px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Phone no : (770) 555-5555"
            {...getOverrideProps(
              overrides,
              "Phone no : (770) 555-555535489281"
            )}
          ></Text>
          <View
            padding="0px 0px 0px 0px"
            width="81px"
            height="22px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="17px"
            left="127px"
            {...getOverrideProps(overrides, "Group 100535489282")}
          >
            <View
              width="81px"
              height="22px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0px"
              left="0px"
              borderRadius="7px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(88,80,236,0.3)"
              {...getOverrideProps(overrides, "Rectangle 47735489283")}
            ></View>
            <Text
              fontFamily="Poppins"
              fontSize="11px"
              fontWeight="500"
              color="rgba(88,80,236,1)"
              lineHeight="16.5px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              position="absolute"
              top="3px"
              left="8px"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Accountant"
              {...getOverrideProps(overrides, "Accountant35489284")}
            ></Text>
          </View>
        </View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="1361px"
        height="834px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-189px"
        left="-98px"
        {...getOverrideProps(overrides, "Group 1010")}
      >
        <View
          width="700px"
          height="162px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="672px"
          left="153px"
          border="1px SOLID rgba(230,231,233,1)"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "table_body_bg35489286")}
        ></View>
        <Text
          fontFamily="Poppins"
          fontSize="16px"
          fontWeight="600"
          color="rgba(33,33,33,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="688px"
          left="173px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sarah Wells"
          {...getOverrideProps(overrides, "Sarah Wells")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="rgba(33,33,33,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="741px"
          left="173px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="User ID : 09898989820"
          {...getOverrideProps(overrides, "User ID : 09898989820")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="rgba(33,33,33,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="336px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="767px"
          left="173px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="1275 Powers Ferry Road&#xA;Marietta, GA 30067"
          {...getOverrideProps(
            overrides,
            "1275 Powers Ferry Road Marietta, GA 3006735489292"
          )}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="600"
          color="rgba(33,33,33,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="777px"
          left="650px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Phone no : (770) 555-5555"
          {...getOverrideProps(overrides, "Phone no : (770) 555-555535489293")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="81px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="689px"
          left="280px"
          {...getOverrideProps(overrides, "Group 100535489294")}
        >
          <View
            width="81px"
            height="22px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="7px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(88,80,236,0.3)"
            {...getOverrideProps(overrides, "Rectangle 47735489295")}
          ></View>
          <Text
            fontFamily="Poppins"
            fontSize="11px"
            fontWeight="500"
            color="rgba(88,80,236,1)"
            lineHeight="16.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="3px"
            left="15px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Manager"
            {...getOverrideProps(overrides, "Manager")}
          ></Text>
        </View>
        <Navbar
          width="1360px"
          height="373px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="2px"
          left="0px"
          padding="0px 0px 0px 0px"
          property1="Default"
          {...getOverrideProps(overrides, "Navbar35489297")}
        ></Navbar>
        <Navbar
          width="1360px"
          height="373px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="1px"
          padding="0px 0px 0px 0px"
          property1="ManagerViewUserBar"
          {...getOverrideProps(overrides, "Navbar35489298")}
        ></Navbar>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="700px"
        height="162px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="312px"
        left="55px"
        {...getOverrideProps(overrides, "Group 100635489299")}
      >
        <View
          width="700px"
          height="162px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="1px SOLID rgba(230,231,233,1)"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "table_body_bg35489300")}
        ></View>
        <Text
          fontFamily="Poppins"
          fontSize="16px"
          fontWeight="600"
          color="rgba(33,33,33,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="16px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="John Smith"
          {...getOverrideProps(overrides, "John Smith")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="rgba(33,33,33,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="66px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="User ID : 09898989898"
          {...getOverrideProps(overrides, "User ID : 09898989898")}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="rgba(33,33,33,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="336px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="92px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="1275 Powers Ferry Road&#xA;Marietta, GA 30067"
          {...getOverrideProps(
            overrides,
            "1275 Powers Ferry Road Marietta, GA 3006735489306"
          )}
        ></Text>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="600"
          color="rgba(33,33,33,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="105px"
          left="497px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Phone no : (770) 555-5555"
          {...getOverrideProps(overrides, "Phone no : (770) 555-555535489307")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="93.75px"
          height="22px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="17px"
          left="127px"
          {...getOverrideProps(overrides, "Group 100535489308")}
        >
          <View
            width="91px"
            height="22px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            borderRadius="7px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(88,80,236,0.3)"
            {...getOverrideProps(overrides, "Rectangle 47735489309")}
          ></View>
          <Text
            fontFamily="Poppins"
            fontSize="11px"
            fontWeight="500"
            color="rgba(88,80,236,1)"
            lineHeight="16.5px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="86.51px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="3px"
            left="7.25px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Administrator"
            {...getOverrideProps(overrides, "Administrator")}
          ></Text>
        </View>
      </View>
      <SwitchField
        display="flex"
        gap="8px"
        direction="row"
        width="96px"
        height="29px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="328px"
        left="566px"
        padding="8px 8px 8px 8px"
        label="Active"
        size="default"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "SwitchField35489311")}
      ></SwitchField>
      <SwitchField
        display="flex"
        gap="8px"
        direction="row"
        width="96px"
        height="29px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="496px"
        left="566px"
        padding="8px 8px 8px 8px"
        label="Active"
        size="default"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "SwitchField35489312")}
      ></SwitchField>
      <SwitchField
        display="flex"
        gap="8px"
        direction="row"
        width="96px"
        height="29px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="658px"
        left="570px"
        padding="8px 8px 8px 8px"
        label="Active"
        size="default"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "SwitchField35489313")}
      ></SwitchField>
      <SwitchField
        display="flex"
        gap="8px"
        direction="row"
        width="96px"
        height="29px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="833px"
        left="568px"
        padding="8px 8px 8px 8px"
        label="Active"
        size="default"
        defaultChecked={true}
        isDisabled={false}
        labelPosition="start"
        {...getOverrideProps(overrides, "SwitchField35489314")}
      ></SwitchField>
      <Text
        fontFamily="Poppins"
        fontSize="20px"
        fontWeight="600"
        color="rgba(33,33,33,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="195px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="267px"
        left="834px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Filters"
        {...getOverrideProps(overrides, "Filters")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="16px"
        fontWeight="600"
        color="rgba(33,33,33,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="195px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="316px"
        left="834px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="User Type"
        {...getOverrideProps(overrides, "User Type")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="191px"
        height="20.04px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="36.94%"
        bottom="61.03%"
        left="71.93%"
        right="11.67%"
        {...getOverrideProps(overrides, "unchecked35489317")}
      >
        <View
          width="18px"
          height="18.03px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="2px SOLID rgba(200,200,200,1)"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "box35489318")}
        ></View>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="rgba(33,33,33,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="161px"
          height="20.04px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="30px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Accountant"
          {...getOverrideProps(overrides, "unchecked35489319")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="191px"
        height="20.04px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="41.4%"
        bottom="56.57%"
        left="71.93%"
        right="11.67%"
        {...getOverrideProps(overrides, "unchecked35489320")}
      >
        <View
          width="18px"
          height="18.03px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="2px SOLID rgba(200,200,200,1)"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "box35489321")}
        ></View>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="rgba(33,33,33,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="161px"
          height="20.04px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="30px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Manager"
          {...getOverrideProps(overrides, "unchecked35489322")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="191px"
        height="20.04px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="45.86%"
        bottom="52.11%"
        left="71.93%"
        right="11.67%"
        {...getOverrideProps(overrides, "unchecked35489323")}
      >
        <View
          width="18px"
          height="18.03px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="2px SOLID rgba(200,200,200,1)"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "box35489324")}
        ></View>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="rgba(33,33,33,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="161px"
          height="20.04px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="30px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Administrator"
          {...getOverrideProps(overrides, "unchecked35489325")}
        ></Text>
      </View>
      <Text
        fontFamily="Poppins"
        fontSize="16px"
        fontWeight="600"
        color="rgba(33,33,33,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="195px"
        height="25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="497.11px"
        left="834px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Account Status"
        {...getOverrideProps(overrides, "Account Status")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="191px"
        height="20.04px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="55.27%"
        bottom="42.7%"
        left="71.93%"
        right="11.67%"
        {...getOverrideProps(overrides, "Checked")}
      >
        <View
          padding="0px 0px 0px 0px"
          width="18px"
          height="18.03px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="1px"
          left="0px"
          {...getOverrideProps(overrides, "checked")}
        >
          <View
            width="18px"
            height="18.03px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0px"
            border="0px SOLID rgba(3,80,141,1)"
            borderRadius="4px"
            padding="0px 0px 0px 0px"
            backgroundColor="rgba(43,172,226,1)"
            {...getOverrideProps(overrides, "box35489329")}
          ></View>
          <Icon
            width="10px"
            height="8px"
            viewBox={{ minX: 0, minY: 0, width: 10, height: 8 }}
            paths={[
              {
                d: "M3.96448 6.01984L8.50441 0.314407C8.78379 -0.0366979 9.30676 -0.103901 9.67249 0.164304C10.0382 0.432509 10.1082 0.934559 9.82885 1.28566L4.73628 7.68561C4.43929 8.05885 3.87283 8.10732 3.51175 7.7904L0.27103 4.94598C-0.0686372 4.64785 -0.092239 4.14183 0.218313 3.81575C0.528866 3.48967 1.05597 3.46701 1.39564 3.76514L3.96448 6.01984Z",
                fill: "rgba(255,255,255,1)",
                fillRule: "evenodd",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="4.88px"
            left="4px"
            {...getOverrideProps(overrides, "Check")}
          ></Icon>
        </View>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="rgba(33,33,33,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="161px"
          height="20.04px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="30px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Active"
          {...getOverrideProps(overrides, "unchecked35489331")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="191px"
        height="20.04px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="59.73%"
        bottom="38.24%"
        left="71.93%"
        right="11.67%"
        {...getOverrideProps(overrides, "unchecked35489332")}
      >
        <View
          width="18px"
          height="18.03px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          border="2px SOLID rgba(200,200,200,1)"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "box35489333")}
        ></View>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="400"
          color="rgba(33,33,33,1)"
          lineHeight="20px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="161px"
          height="20.04px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0px"
          left="30px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Suspended"
          {...getOverrideProps(overrides, "unchecked35489334")}
        ></Text>
      </View>
    </View>
  );
}
