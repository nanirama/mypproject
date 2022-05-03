import React from "react";
import Slider from "rc-slider";
import { StyledSlider } from "./styled";

function prettyInt(x) {
  return Math.round(x)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const convertToNumber = (value) => {
  value = value.replace(/,/g, "");
  return Number(value);
};

// const convertValue = value => {
//   if (value <= 15) return (value * 200) / 15;
//   if (value <= 30) return (value * 500) / 30;
//   if (value <= 45) return (value * 2000) / 45;
//   if (value <= 65) return (value * 5000) / 65;
//   if (value <= 75) return (value * 10000) / 80;
//   if (value <= 90) return (value * 20000) / 90;
//   if (value <= 100) return (value * 50000) / 100;
// };

const convertValue = (value) => {
  if (value <= 20) return (value * 200) / 20;
  if (value <= 40) return (value * 500) / 40;
  if (value <= 60) return (value * 1000) / 60;
  if (value <= 80) return (value * 1500) / 80;
  if (value <= 90) return (value * 5000) / 90;
  if (value <= 95) return (value * 10000) / 95;
  if (value <= 100) return (value * 50000) / 100;
};

const convertValueInverted = (value) => {
  if (value <= 200) return value / (200 / 20);
  if (value <= 500) return value / (500 / 40);
  if (value <= 1000) return value / (1000 / 60);
  if (value <= 1500) return value / (1500 / 80);
  if (value <= 5000) return value / (5000 / 90);
  if (value <= 10000) return value / (10000 / 95);
  if (value <= 50000) return value / (50000 / 100);
  // if (value > 25000) return 100;
};

// const convertValueInverted = value => {
//   if (value <= 200) return value / (200 / 15);
//   if (value <= 500) return value / (500 / 30);
//   if (value <= 2000) return value / (2000 / 45);
//   if (value <= 5000) return value / (5000 / 65);
//   if (value <= 10000) return value / (10000 / 80);
//   if (value <= 20000) return value / (20000 / 90);
//   if (value <= 50000) return value / (50000 / 100);
//   // if (value > 25000) return 100;
// };

// const wrapperStyle = { width: 470 };
// export default ({ setSliderValue, currentAttendeesVolume }) => (
//   <StyledSlider>
//     <Slider
//       min={0}
//       defaultValue={convertValueInverted(currentAttendeesVolume)}
//       marks={{ 0: 0, 15: 200, 30: 500, 45: "2k", 65: "5k", 80: "10k", 90: "20k", 100: "+50k" }}
//       step={1}
//       value={convertValueInverted(currentAttendeesVolume)}
//       onChange={value => setSliderValue(convertToNumber(prettyInt(convertValue(value))))}
//     />
//   </StyledSlider>
// );

export default ({ setSliderValue, currentAttendeesVolume }) => (
  <StyledSlider>
    <Slider
      min={0}
      defaultValue={convertValueInverted(currentAttendeesVolume)}
      marks={{ 0: 0, 20: 200, 40: 500, 60: "1k", 80: "1.5k", 90: "5k+", 100: "50k+" }}
      step={1}
      value={convertValueInverted(currentAttendeesVolume)}
      onChange={(value) => setSliderValue(convertToNumber(prettyInt(convertValue(value))))}
    />
  </StyledSlider>
);
