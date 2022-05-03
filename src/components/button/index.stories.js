import React from "react";
import { storiesOf } from "@storybook/react";
import { ButtonPrimary, ButtonSecondary, ButtonBorderPrimary, ButtonBorderSecondary, ButtonBlank } from ".";

storiesOf("Buttons", module)
  .add("Primary", () => <ButtonPrimary>Anchor</ButtonPrimary>)
  .add("Secondary", () => <ButtonSecondary>Anchor</ButtonSecondary>)
  .add("Primary Border", () => <ButtonBorderPrimary>Anchor</ButtonBorderPrimary>)
  .add("Secondary Border", () => <ButtonBorderSecondary>Anchor</ButtonBorderSecondary>)
  .add("Secondary Blank", () => <ButtonBlank>Anchor</ButtonBlank>);
