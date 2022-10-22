/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, View } from "@aws-amplify/ui-react";
export default function SecurityDropdown(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="308px"
      height="289px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "SecurityDropdown")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="93.08%"
        left="4.55%"
        right="4.55%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ListBox title")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        position="absolute"
        top="9.69%"
        bottom="69.55%"
        left="4.55%"
        right="4.55%"
        {...getOverrideProps(overrides, "ListBox Main")}
      >
        <View
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          boxShadow="0px 4px 14px rgba(0, 0, 0, 0.10000000149011612)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "ListBoxBG")}
        ></View>
        <Icon
          width="10px"
          height="5px"
          viewBox={{ minX: 0, minY: 0, width: 10, height: 5 }}
          paths={[
            {
              d: "M0.494975 -0.494975C0.221608 -0.768342 -0.221608 -0.768342 -0.494975 -0.494975C-0.768342 -0.221608 -0.768342 0.221608 -0.494975 0.494975L0.494975 -0.494975ZM5 5L4.50503 5.49498C4.77839 5.76834 5.22161 5.76834 5.49498 5.49498L5 5ZM10.495 0.494975C10.7683 0.221608 10.7683 -0.221608 10.495 -0.494975C10.2216 -0.768342 9.77839 -0.768342 9.50503 -0.494975L10.495 0.494975ZM-0.494975 0.494975L4.50503 5.49498L5.49498 4.50503L0.494975 -0.494975L-0.494975 0.494975ZM5.49498 5.49498L10.495 0.494975L9.50503 -0.494975L4.50503 4.50503L5.49498 5.49498Z",
              stroke: "rgba(0,0,0,0.8)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 1,
            },
          ]}
          position="absolute"
          top="46.67%"
          bottom="45%"
          left="88.57%"
          right="7.86%"
          transformOrigin="top left"
          transform="rotate(0deg)"
          {...getOverrideProps(overrides, "Chevron")}
        ></Icon>
        <View
          position="absolute"
          top="33.33%"
          bottom="33.33%"
          left="5.71%"
          right="28.57%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Placeholder Text")}
        ></View>
      </View>
      <View
        position="absolute"
        top="9.69%"
        bottom="66.44%"
        left="0%"
        right="0%"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Clip List")}
      >
        <Flex
          gap="10px"
          position="absolute"
          top="0px"
          left="4px"
          direction="column"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 1")}
        >
          <Flex
            gap="1px"
            direction="column"
            width="280px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            overflow="hidden"
            position="relative"
            borderRadius="8px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Dropdown List")}
          ></Flex>
        </Flex>
      </View>
    </View>
  );
}
