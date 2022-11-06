/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, SwitchField, Text, View } from "@aws-amplify/ui-react";
import Navbar from "./Navbar";
export default function AdminViewUsersFilter(props) {
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
      {...getOverrideProps(overrides, "AdminViewUsersFilter")}
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
        {...getOverrideProps(overrides, "Users34804291")}
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
        {...getOverrideProps(overrides, "table_body_bg34804293")}
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
        {...getOverrideProps(overrides, "table_body_bg34804294")}
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
        left="655px"
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
          {...getOverrideProps(overrides, "Input Style34804324")}
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
          {...getOverrideProps(overrides, "Search34804325")}
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
                height: 13.138076782226562,
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
                    height: 10.666671752929688,
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
                  {...getOverrideProps(overrides, "Path34804330")}
                ></Icon>
                <Icon
                  width="4.94px"
                  height="4.94px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 4.94287109375,
                    height: 4.94281005859375,
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
                  {...getOverrideProps(overrides, "Path34804331")}
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
                {...getOverrideProps(overrides, "Path34804332")}
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
        left="867px"
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
          {...getOverrideProps(overrides, "Input Style34804334")}
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
          {...getOverrideProps(overrides, "Search34804335")}
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
      <Flex
        gap="10px"
        direction="row"
        width="144px"
        height="42px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="166px"
        left="991px"
        border="0px SOLID rgba(43,172,226,1)"
        borderRadius="5px"
        padding="19px 22px 19px 22px"
        backgroundColor="rgba(88,80,236,1)"
        {...getOverrideProps(overrides, "upload")}
      >
        <Icon
          width="12.25px"
          height="12.25px"
          viewBox={{ minX: 0, minY: 0, width: 12.25, height: 12.25 }}
          paths={[
            {
              d: "M11.375 4.8125L7.4375 4.8125L7.4375 0.875C7.4375 0.410156 7.02734 0 6.5625 0L5.6875 0C5.19531 0 4.8125 0.410156 4.8125 0.875L4.8125 4.8125L0.875 4.8125C0.382812 4.8125 0 5.22266 0 5.6875L0 6.5625C0 7.05469 0.382812 7.4375 0.875 7.4375L4.8125 7.4375L4.8125 11.375C4.8125 11.8672 5.19531 12.25 5.6875 12.25L6.5625 12.25C7.02734 12.25 7.4375 11.8672 7.4375 11.375L7.4375 7.4375L11.375 7.4375C11.8398 7.4375 12.25 7.05469 12.25 6.5625L12.25 5.6875C12.25 5.22266 11.8398 4.8125 11.375 4.8125Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "plus")}
        ></Icon>
        <Text
          fontFamily="Poppins"
          fontSize="14px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="16px"
          textAlign="center"
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
          children="Add User"
          {...getOverrideProps(overrides, "Add User")}
        ></Text>
      </Flex>
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
        {...getOverrideProps(overrides, "Users34804342")}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="13px"
        fontWeight="500"
        color="rgba(130,134,143,1)"
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
        left="212px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Expired Passwords Report"
        {...getOverrideProps(overrides, "Expired Passwords Report")}
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
        {...getOverrideProps(overrides, "Group 100634804431")}
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
          {...getOverrideProps(overrides, "table_body_bg34804432")}
        ></View>
        <Icon
          width="21.19px"
          height="17.97px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 21.190185546875,
            height: 17.9736328125,
          }}
          paths={[
            {
              d: "M14.8082 12.1025C14.7345 12.1729 14.7345 12.2432 14.7345 12.3135L14.7345 16.2861L1.76814 16.2861L1.76814 3.91113L10.6457 3.91113C10.7194 3.91113 10.793 3.91113 10.8667 3.84082L12.0455 2.71582C12.2296 2.54004 12.0823 2.22363 11.8244 2.22363L1.76814 2.22363C0.773562 2.22363 0 2.99707 0 3.91113L0 16.2861C0 17.2354 0.773562 17.9736 1.76814 17.9736L14.7345 17.9736C15.6923 17.9736 16.5027 17.2354 16.5027 16.2861L16.5027 11.1885C16.5027 10.9424 16.1711 10.8018 15.9869 10.9775L14.8082 12.1025ZM20.5546 5.03613C21.4019 4.22754 21.4019 2.92676 20.5546 2.11816L18.9707 0.606445C18.1234 -0.202148 16.7605 -0.202148 15.9133 0.606445L6.26217 9.81738L5.89381 13.0166C5.7833 13.9307 6.59369 14.7041 7.55144 14.5986L10.9035 14.2471L20.5546 5.03613ZM16.9447 6.09082L10.0931 12.6299L7.66195 12.9111L7.95664 10.5908L14.8082 4.05176L16.9447 6.09082ZM19.3022 3.31348C19.4864 3.4541 19.4864 3.66504 19.339 3.84082L18.1971 4.93066L16.0606 2.85645L17.1657 1.80176C17.3131 1.62598 17.5709 1.62598 17.7183 1.80176L19.3022 3.31348Z",
              fill: "rgba(130,136,148,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="16.03px"
          left="624px"
          {...getOverrideProps(overrides, "ic_edit34804433")}
        ></Icon>
        <Icon
          width="16.5px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 16.502685546875, height: 18 }}
          paths={[
            {
              d: "M9.87212 14.625L10.7562 14.625C10.9772 14.625 11.1982 14.4492 11.1982 14.2031L11.1982 6.60938C11.1982 6.39844 10.9772 6.1875 10.7562 6.1875L9.87212 6.1875C9.61427 6.1875 9.43009 6.39844 9.43009 6.60938L9.43009 14.2031C9.43009 14.4492 9.61427 14.625 9.87212 14.625ZM15.9133 2.8125L12.8559 2.8125L11.6034 0.84375C11.3087 0.386719 10.6457 0 10.0931 0L6.37268 0C5.82013 0 5.15708 0.386719 4.86239 0.84375L3.60996 2.8125L0.589381 2.8125C0.257854 2.8125 0 3.09375 0 3.375L0 3.9375C0 4.25391 0.257854 4.5 0.589381 4.5L1.17876 4.5L1.17876 16.3125C1.17876 17.2617 1.95232 18 2.9469 18L13.5558 18C14.5135 18 15.3239 17.2617 15.3239 16.3125L15.3239 4.5L15.9133 4.5C16.208 4.5 16.5027 4.25391 16.5027 3.9375L16.5027 3.375C16.5027 3.09375 16.208 2.8125 15.9133 2.8125ZM6.299 1.79297C6.33584 1.75781 6.44635 1.6875 6.48319 1.6875L6.52002 1.6875L9.98263 1.6875C10.0195 1.6875 10.13 1.75781 10.1668 1.79297L10.793 2.8125L5.67279 2.8125L6.299 1.79297ZM13.5558 16.3125L2.9469 16.3125L2.9469 4.5L13.5558 4.5L13.5558 16.3125ZM5.74646 14.625L6.63053 14.625C6.85155 14.625 7.07257 14.4492 7.07257 14.2031L7.07257 6.60938C7.07257 6.39844 6.85155 6.1875 6.63053 6.1875L5.74646 6.1875C5.48861 6.1875 5.30443 6.39844 5.30443 6.60938L5.30443 14.2031C5.30443 14.4492 5.48861 14.625 5.74646 14.625Z",
              fill: "rgba(130,136,148,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="16px"
          left="665.82px"
          {...getOverrideProps(overrides, "ic_delete34804434")}
        ></Icon>
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
          fontWeight="700"
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
          top="49px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Password Expiration:  10/31/2022"
          {...getOverrideProps(
            overrides,
            "Password Expiration: 10/31/202234804436"
          )}
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
          top="75px"
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
          top="101px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="1275 Powers Ferry Road&#xA;Marietta, GA 30067"
          {...getOverrideProps(
            overrides,
            "1275 Powers Ferry Road Marietta, GA 3006734804438"
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
          {...getOverrideProps(overrides, "Phone no : (770) 555-555534804439")}
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
          {...getOverrideProps(overrides, "Group 100534804440")}
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
            {...getOverrideProps(overrides, "Rectangle 47734804441")}
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
            {...getOverrideProps(overrides, "Accountant34804442")}
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
          {...getOverrideProps(overrides, "Group 100634804455")}
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
            {...getOverrideProps(overrides, "table_body_bg34804456")}
          ></View>
          <Icon
            width="21.19px"
            height="17.97px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 21.190185546875,
              height: 17.9736328125,
            }}
            paths={[
              {
                d: "M14.8082 12.1025C14.7345 12.1729 14.7345 12.2432 14.7345 12.3135L14.7345 16.2861L1.76814 16.2861L1.76814 3.91113L10.6457 3.91113C10.7194 3.91113 10.793 3.91113 10.8667 3.84082L12.0455 2.71582C12.2296 2.54004 12.0823 2.22363 11.8244 2.22363L1.76814 2.22363C0.773562 2.22363 0 2.99707 0 3.91113L0 16.2861C0 17.2354 0.773562 17.9736 1.76814 17.9736L14.7345 17.9736C15.6923 17.9736 16.5027 17.2354 16.5027 16.2861L16.5027 11.1885C16.5027 10.9424 16.1711 10.8018 15.9869 10.9775L14.8082 12.1025ZM20.5546 5.03613C21.4019 4.22754 21.4019 2.92676 20.5546 2.11816L18.9707 0.606445C18.1234 -0.202148 16.7605 -0.202148 15.9133 0.606445L6.26217 9.81738L5.89381 13.0166C5.7833 13.9307 6.59369 14.7041 7.55144 14.5986L10.9035 14.2471L20.5546 5.03613ZM16.9447 6.09082L10.0931 12.6299L7.66195 12.9111L7.95664 10.5908L14.8082 4.05176L16.9447 6.09082ZM19.3022 3.31348C19.4864 3.4541 19.4864 3.66504 19.339 3.84082L18.1971 4.93066L16.0606 2.85645L17.1657 1.80176C17.3131 1.62598 17.5709 1.62598 17.7183 1.80176L19.3022 3.31348Z",
                fill: "rgba(130,136,148,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="20.03px"
            left="624px"
            {...getOverrideProps(overrides, "ic_edit34804457")}
          ></Icon>
          <Icon
            width="16.5px"
            height="18px"
            viewBox={{ minX: 0, minY: 0, width: 16.502685546875, height: 18 }}
            paths={[
              {
                d: "M9.87212 14.625L10.7562 14.625C10.9772 14.625 11.1982 14.4492 11.1982 14.2031L11.1982 6.60938C11.1982 6.39844 10.9772 6.1875 10.7562 6.1875L9.87212 6.1875C9.61427 6.1875 9.43009 6.39844 9.43009 6.60938L9.43009 14.2031C9.43009 14.4492 9.61427 14.625 9.87212 14.625ZM15.9133 2.8125L12.8559 2.8125L11.6034 0.84375C11.3087 0.386719 10.6457 0 10.0931 0L6.37268 0C5.82013 0 5.15708 0.386719 4.86239 0.84375L3.60996 2.8125L0.589381 2.8125C0.257854 2.8125 0 3.09375 0 3.375L0 3.9375C0 4.25391 0.257854 4.5 0.589381 4.5L1.17876 4.5L1.17876 16.3125C1.17876 17.2617 1.95232 18 2.9469 18L13.5558 18C14.5135 18 15.3239 17.2617 15.3239 16.3125L15.3239 4.5L15.9133 4.5C16.208 4.5 16.5027 4.25391 16.5027 3.9375L16.5027 3.375C16.5027 3.09375 16.208 2.8125 15.9133 2.8125ZM6.299 1.79297C6.33584 1.75781 6.44635 1.6875 6.48319 1.6875L6.52002 1.6875L9.98263 1.6875C10.0195 1.6875 10.13 1.75781 10.1668 1.79297L10.793 2.8125L5.67279 2.8125L6.299 1.79297ZM13.5558 16.3125L2.9469 16.3125L2.9469 4.5L13.5558 4.5L13.5558 16.3125ZM5.74646 14.625L6.63053 14.625C6.85155 14.625 7.07257 14.4492 7.07257 14.2031L7.07257 6.60938C7.07257 6.39844 6.85155 6.1875 6.63053 6.1875L5.74646 6.1875C5.48861 6.1875 5.30443 6.39844 5.30443 6.60938L5.30443 14.2031C5.30443 14.4492 5.48861 14.625 5.74646 14.625Z",
                fill: "rgba(130,136,148,1)",
                fillRule: "nonzero",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="20px"
            left="665.82px"
            {...getOverrideProps(overrides, "ic_delete34804458")}
          ></Icon>
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
            fontWeight="700"
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
            top="53px"
            left="20px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Password Expiration:  10/31/2022"
            {...getOverrideProps(
              overrides,
              "Password Expiration: 10/31/202234804460"
            )}
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
            top="79px"
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
            top="105px"
            left="20px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="1275 Powers Ferry Road&#xA;Marietta, GA 30067"
            {...getOverrideProps(
              overrides,
              "1275 Powers Ferry Road Marietta, GA 3006734804462"
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
              "Phone no : (770) 555-555534804463"
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
            {...getOverrideProps(overrides, "Group 100534804464")}
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
              {...getOverrideProps(overrides, "Rectangle 47734804465")}
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
              {...getOverrideProps(overrides, "Accountant34804466")}
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
          {...getOverrideProps(overrides, "table_body_bg34804420")}
        ></View>
        <Icon
          width="21.19px"
          height="17.97px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 21.190185546875,
            height: 17.9736328125,
          }}
          paths={[
            {
              d: "M14.8082 12.1025C14.7345 12.1729 14.7345 12.2432 14.7345 12.3135L14.7345 16.2861L1.76814 16.2861L1.76814 3.91113L10.6457 3.91113C10.7194 3.91113 10.793 3.91113 10.8667 3.84082L12.0455 2.71582C12.2296 2.54004 12.0823 2.22363 11.8244 2.22363L1.76814 2.22363C0.773562 2.22363 0 2.99707 0 3.91113L0 16.2861C0 17.2354 0.773562 17.9736 1.76814 17.9736L14.7345 17.9736C15.6923 17.9736 16.5027 17.2354 16.5027 16.2861L16.5027 11.1885C16.5027 10.9424 16.1711 10.8018 15.9869 10.9775L14.8082 12.1025ZM20.5546 5.03613C21.4019 4.22754 21.4019 2.92676 20.5546 2.11816L18.9707 0.606445C18.1234 -0.202148 16.7605 -0.202148 15.9133 0.606445L6.26217 9.81738L5.89381 13.0166C5.7833 13.9307 6.59369 14.7041 7.55144 14.5986L10.9035 14.2471L20.5546 5.03613ZM16.9447 6.09082L10.0931 12.6299L7.66195 12.9111L7.95664 10.5908L14.8082 4.05176L16.9447 6.09082ZM19.3022 3.31348C19.4864 3.4541 19.4864 3.66504 19.339 3.84082L18.1971 4.93066L16.0606 2.85645L17.1657 1.80176C17.3131 1.62598 17.5709 1.62598 17.7183 1.80176L19.3022 3.31348Z",
              fill: "rgba(130,136,148,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="692.03px"
          left="777px"
          {...getOverrideProps(overrides, "ic_edit34804421")}
        ></Icon>
        <Icon
          width="16.5px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 16.502685546875, height: 18 }}
          paths={[
            {
              d: "M9.87212 14.625L10.7562 14.625C10.9772 14.625 11.1982 14.4492 11.1982 14.2031L11.1982 6.60938C11.1982 6.39844 10.9772 6.1875 10.7562 6.1875L9.87212 6.1875C9.61427 6.1875 9.43009 6.39844 9.43009 6.60938L9.43009 14.2031C9.43009 14.4492 9.61427 14.625 9.87212 14.625ZM15.9133 2.8125L12.8559 2.8125L11.6034 0.84375C11.3087 0.386719 10.6457 0 10.0931 0L6.37268 0C5.82013 0 5.15708 0.386719 4.86239 0.84375L3.60996 2.8125L0.589381 2.8125C0.257854 2.8125 0 3.09375 0 3.375L0 3.9375C0 4.25391 0.257854 4.5 0.589381 4.5L1.17876 4.5L1.17876 16.3125C1.17876 17.2617 1.95232 18 2.9469 18L13.5558 18C14.5135 18 15.3239 17.2617 15.3239 16.3125L15.3239 4.5L15.9133 4.5C16.208 4.5 16.5027 4.25391 16.5027 3.9375L16.5027 3.375C16.5027 3.09375 16.208 2.8125 15.9133 2.8125ZM6.299 1.79297C6.33584 1.75781 6.44635 1.6875 6.48319 1.6875L6.52002 1.6875L9.98263 1.6875C10.0195 1.6875 10.13 1.75781 10.1668 1.79297L10.793 2.8125L5.67279 2.8125L6.299 1.79297ZM13.5558 16.3125L2.9469 16.3125L2.9469 4.5L13.5558 4.5L13.5558 16.3125ZM5.74646 14.625L6.63053 14.625C6.85155 14.625 7.07257 14.4492 7.07257 14.2031L7.07257 6.60938C7.07257 6.39844 6.85155 6.1875 6.63053 6.1875L5.74646 6.1875C5.48861 6.1875 5.30443 6.39844 5.30443 6.60938L5.30443 14.2031C5.30443 14.4492 5.48861 14.625 5.74646 14.625Z",
              fill: "rgba(130,136,148,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="692px"
          left="818.82px"
          {...getOverrideProps(overrides, "ic_delete34804422")}
        ></Icon>
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
          fontWeight="700"
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
          top="725px"
          left="173px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Password Expiration:  11/11/2022"
          {...getOverrideProps(overrides, "Password Expiration: 11/11/2022")}
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
          top="751px"
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
          top="777px"
          left="173px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="1275 Powers Ferry Road&#xA;Marietta, GA 30067"
          {...getOverrideProps(
            overrides,
            "1275 Powers Ferry Road Marietta, GA 3006734804426"
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
          {...getOverrideProps(overrides, "Phone no : (770) 555-555534804427")}
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
          {...getOverrideProps(overrides, "Group 100534804428")}
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
            {...getOverrideProps(overrides, "Rectangle 47734804429")}
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
          {...getOverrideProps(overrides, "Navbar34854317")}
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
          property1="AdminViewUser"
          {...getOverrideProps(overrides, "Navbar35486820")}
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
        {...getOverrideProps(overrides, "Group 100634804346")}
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
          {...getOverrideProps(overrides, "table_body_bg34804347")}
        ></View>
        <Icon
          width="21.19px"
          height="17.97px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 21.190185546875,
            height: 17.9736328125,
          }}
          paths={[
            {
              d: "M14.8082 12.1025C14.7345 12.1729 14.7345 12.2432 14.7345 12.3135L14.7345 16.2861L1.76814 16.2861L1.76814 3.91113L10.6457 3.91113C10.7194 3.91113 10.793 3.91113 10.8667 3.84082L12.0455 2.71582C12.2296 2.54004 12.0823 2.22363 11.8244 2.22363L1.76814 2.22363C0.773562 2.22363 0 2.99707 0 3.91113L0 16.2861C0 17.2354 0.773562 17.9736 1.76814 17.9736L14.7345 17.9736C15.6923 17.9736 16.5027 17.2354 16.5027 16.2861L16.5027 11.1885C16.5027 10.9424 16.1711 10.8018 15.9869 10.9775L14.8082 12.1025ZM20.5546 5.03613C21.4019 4.22754 21.4019 2.92676 20.5546 2.11816L18.9707 0.606445C18.1234 -0.202148 16.7605 -0.202148 15.9133 0.606445L6.26217 9.81738L5.89381 13.0166C5.7833 13.9307 6.59369 14.7041 7.55144 14.5986L10.9035 14.2471L20.5546 5.03613ZM16.9447 6.09082L10.0931 12.6299L7.66195 12.9111L7.95664 10.5908L14.8082 4.05176L16.9447 6.09082ZM19.3022 3.31348C19.4864 3.4541 19.4864 3.66504 19.339 3.84082L18.1971 4.93066L16.0606 2.85645L17.1657 1.80176C17.3131 1.62598 17.5709 1.62598 17.7183 1.80176L19.3022 3.31348Z",
              fill: "rgba(130,136,148,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="20.03px"
          left="624px"
          {...getOverrideProps(overrides, "ic_edit34804348")}
        ></Icon>
        <Icon
          width="16.5px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 16.502685546875, height: 18 }}
          paths={[
            {
              d: "M9.87212 14.625L10.7562 14.625C10.9772 14.625 11.1982 14.4492 11.1982 14.2031L11.1982 6.60938C11.1982 6.39844 10.9772 6.1875 10.7562 6.1875L9.87212 6.1875C9.61427 6.1875 9.43009 6.39844 9.43009 6.60938L9.43009 14.2031C9.43009 14.4492 9.61427 14.625 9.87212 14.625ZM15.9133 2.8125L12.8559 2.8125L11.6034 0.84375C11.3087 0.386719 10.6457 0 10.0931 0L6.37268 0C5.82013 0 5.15708 0.386719 4.86239 0.84375L3.60996 2.8125L0.589381 2.8125C0.257854 2.8125 0 3.09375 0 3.375L0 3.9375C0 4.25391 0.257854 4.5 0.589381 4.5L1.17876 4.5L1.17876 16.3125C1.17876 17.2617 1.95232 18 2.9469 18L13.5558 18C14.5135 18 15.3239 17.2617 15.3239 16.3125L15.3239 4.5L15.9133 4.5C16.208 4.5 16.5027 4.25391 16.5027 3.9375L16.5027 3.375C16.5027 3.09375 16.208 2.8125 15.9133 2.8125ZM6.299 1.79297C6.33584 1.75781 6.44635 1.6875 6.48319 1.6875L6.52002 1.6875L9.98263 1.6875C10.0195 1.6875 10.13 1.75781 10.1668 1.79297L10.793 2.8125L5.67279 2.8125L6.299 1.79297ZM13.5558 16.3125L2.9469 16.3125L2.9469 4.5L13.5558 4.5L13.5558 16.3125ZM5.74646 14.625L6.63053 14.625C6.85155 14.625 7.07257 14.4492 7.07257 14.2031L7.07257 6.60938C7.07257 6.39844 6.85155 6.1875 6.63053 6.1875L5.74646 6.1875C5.48861 6.1875 5.30443 6.39844 5.30443 6.60938L5.30443 14.2031C5.30443 14.4492 5.48861 14.625 5.74646 14.625Z",
              fill: "rgba(130,136,148,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="20px"
          left="665.82px"
          {...getOverrideProps(overrides, "ic_delete34804349")}
        ></Icon>
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
          fontWeight="700"
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
          top="53px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Password Expiration:  10/31/2022"
          {...getOverrideProps(
            overrides,
            "Password Expiration: 10/31/202234804351"
          )}
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
          top="79px"
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
          top="105px"
          left="20px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="1275 Powers Ferry Road&#xA;Marietta, GA 30067"
          {...getOverrideProps(
            overrides,
            "1275 Powers Ferry Road Marietta, GA 3006734804353"
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
          {...getOverrideProps(overrides, "Phone no : (770) 555-555534804354")}
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
          {...getOverrideProps(overrides, "Group 100534804355")}
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
            {...getOverrideProps(overrides, "Rectangle 47734804356")}
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
        {...getOverrideProps(overrides, "SwitchField34804467")}
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
        {...getOverrideProps(overrides, "SwitchField34804533")}
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
        {...getOverrideProps(overrides, "SwitchField34804545")}
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
        {...getOverrideProps(overrides, "SwitchField34804551")}
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
        {...getOverrideProps(overrides, "unchecked34804308")}
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
          {...getOverrideProps(overrides, "box34804309")}
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
          {...getOverrideProps(overrides, "unchecked34804310")}
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
        {...getOverrideProps(overrides, "unchecked34804305")}
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
          {...getOverrideProps(overrides, "box34804306")}
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
          {...getOverrideProps(overrides, "unchecked34804307")}
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
        {...getOverrideProps(overrides, "unchecked34804302")}
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
          {...getOverrideProps(overrides, "box34804303")}
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
          {...getOverrideProps(overrides, "unchecked34804304")}
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
        {...getOverrideProps(overrides, "Checked34804311")}
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
          {...getOverrideProps(overrides, "checked34804312")}
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
            {...getOverrideProps(overrides, "box34804313")}
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
            {...getOverrideProps(overrides, "Check34804314")}
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
          {...getOverrideProps(overrides, "unchecked34804315")}
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
        {...getOverrideProps(overrides, "unchecked34804296")}
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
          {...getOverrideProps(overrides, "box34804297")}
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
          {...getOverrideProps(overrides, "unchecked34804298")}
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
        top="634px"
        left="834px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Password Status"
        {...getOverrideProps(overrides, "Password Status")}
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
        top="69.13%"
        bottom="28.84%"
        left="71.93%"
        right="11.67%"
        {...getOverrideProps(overrides, "Checked34813087")}
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
          {...getOverrideProps(overrides, "checked34813088")}
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
            {...getOverrideProps(overrides, "box34813089")}
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
            {...getOverrideProps(overrides, "Check34813090")}
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
          {...getOverrideProps(overrides, "unchecked34813091")}
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
        top="73.28%"
        bottom="24.69%"
        left="71.93%"
        right="11.67%"
        {...getOverrideProps(overrides, "unchecked34834686")}
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
          {...getOverrideProps(overrides, "box34834687")}
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
          children="Expired"
          {...getOverrideProps(overrides, "unchecked34834688")}
        ></Text>
      </View>
      <Flex
        gap="22px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-end"
        position="absolute"
        top="764px"
        left="868px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 426")}
      >
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
          width="195px"
          height="25px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Expires within"
          {...getOverrideProps(overrides, "Expires within")}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          width="191px"
          height="20.04px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Checked34834700")}
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
            {...getOverrideProps(overrides, "checked34834701")}
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
              {...getOverrideProps(overrides, "box34834702")}
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
              {...getOverrideProps(overrides, "Check34834703")}
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
            children="1 week"
            {...getOverrideProps(overrides, "unchecked34834704")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="191px"
          height="20.04px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "unchecked34834705")}
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
            {...getOverrideProps(overrides, "box34834706")}
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
            children="2 weeks"
            {...getOverrideProps(overrides, "unchecked34834707")}
          ></Text>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="191px"
          height="20.04px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "unchecked34834708")}
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
            {...getOverrideProps(overrides, "box34834709")}
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
            children="1 month"
            {...getOverrideProps(overrides, "unchecked34834710")}
          ></Text>
        </Flex>
      </Flex>
    </View>
  );
}
