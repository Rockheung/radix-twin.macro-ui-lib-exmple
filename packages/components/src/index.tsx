export * from "./ui/accordion";
// export { default as AppDemo, Button, styles, TwinSvg, Logo, GlobalStyles } from './main'
// Inline twin 적용시 필수 import
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

// Just React Element
import styled from "@emotion/styled";
import React from "react";
import { css, Global } from "@emotion/react";

export const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
});

export const GlobalStyles = () => (
  <>
    <BaseStyles />
    {/* <Global styles={customStyles} /> */}
  </>
);

export const PureReactParagraph = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Not to use emotion jsx
  return React.createElement("p", { children });
};

export const EmotionParagraph = styled.p`
  color: #1e3fff;
`;

export const StyledParagraph = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <EmotionParagraph>{children}</EmotionParagraph>;
};

export const InlineTwinParagraph = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p tw="text-8xl">{children}</p>;
};

export const TwinEmotionParagraph = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <p css={tw`text-amber-600 bg-amber-200`}>{children}</p>;
};

// Not Working: twin.macro가 변환하지 않는 형식
// export const TwinInlineFuncParagraph = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   return <p css={tw("font-bold")}>{children}</p>;
// };
