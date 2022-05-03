import * as React from "react";
import {
  Block,
  CenterColumn,
  CheckboxBlock,
  Description,
  LeftColumn,
  RightColumn,
  Subtitle,
  StyledRow,
  Title,
  TopRow,
} from "./styled";
import { InputWithButtons } from "../input_with_buttons";
import CheckboxGreen from "../checkbox_green";

const CheckboxWithImage = ({
  title,
  subtitle,
  description,
  image,
  alt,
  hasTextInput,
  key,
  checked,
  onChange,
  exhibitorsValue,
  mandatory,
  valueDays,
  setValueDays,
  days,
  suffix,
  t,
}) => {
  return (
    <Block className={checked ? "active" : ""}>
      <StyledRow>
        <LeftColumn xs={11} sm={3}>
          <img src={image} alt={alt} style={{ maxWidth: "100%", height: "auto" }} />
        </LeftColumn>
        <CenterColumn xs={11} sm={8}>
          <TopRow onClick={onChange}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Title>{title}</Title>&nbsp;{mandatory !== "none" && <span>{mandatory}</span>}
            </div>
            {subtitle !== "none" && (
              <>
                {exhibitorsValue < 250 || !exhibitorsValue ? (
                  <Subtitle>{subtitle}</Subtitle>
                ) : (
                  <Subtitle>{t.get_in_touch}</Subtitle>
                )}
              </>
            )}
          </TopRow>
          {subtitle === "none" && <div style={{ height: "10px" }}></div>}
          <>
            <Description onClick={onChange}>{description}</Description>
          </>
          {days && (
            <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
              <InputWithButtons suffix={suffix} value={valueDays} setValue={setValueDays} name={key} min={0} />
            </div>
          )}
        </CenterColumn>

        <RightColumn xs={1}>
          <CheckboxBlock>
            {/* <ThemeProvider> */}
            <CheckboxGreen checked={checked} onChange={onChange} key={key} style={{ webkitAppearance: "checkbox" }} />
            {/* </ThemeProvider>   */}
          </CheckboxBlock>
        </RightColumn>
      </StyledRow>
    </Block>
  );
};

export default CheckboxWithImage;
