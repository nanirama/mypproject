import React from "react";
import { Slider, Rail, Handles, Tracks, Ticks } from "react-compound-slider";

const sliderStyle = {
  // Give the slider some width
  position: "relative",
  width: "98%",
  margin: "0 5px",
  height: "40px"
};

const railOuterStyle = {
  position: "absolute",
  width: "100%",
  // height: "10px",
  transform: "translate(0%, -50%)",
  // borderRadius: 7,
  cursor: "pointer"
};

const railInnerStyle = {
  position: "absolute",
  width: "100%",
  height: "10px",
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  pointerEvents: "none",
  backgroundColor: "#cfd6e4",
  backgroundSize: "10px 10px"
};

export const PricingSlider = ({ sliderValue, setSliderValue, domain, setStepValue }) => {
  return (
    <>
      <Slider
        rootStyle={sliderStyle} // inline styles for the outer div. Can also use className prop.
        onChange={setSliderValue}
        onUpdate={setSliderValue}
        step={1}
        domain={domain}
        values={sliderValue}
      >
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle key={handle.id} handle={handle} domain={domain} getHandleProps={getHandleProps} />
              ))}
            </div>
          )}
        </Handles>
        <Rail>{({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}</Rail>
        <Tracks right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track key={id} source={source} target={target} getTrackProps={getTrackProps} />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks count={6}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map(tick => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
    </>
  );
};

function SliderRail({ getRailProps }) {
  return (
    <>
      <div style={railOuterStyle} {...getRailProps()} />
      <div style={railInnerStyle} />
    </>
  );
}

function Tick({ tick, count, format }) {
  const tickConversion = new Map();
  tickConversion.set(0, "0");
  tickConversion.set(50, "500");
  tickConversion.set(100, "100");
  tickConversion.set(150, "150");
  tickConversion.set(200, "200");
  tickConversion.set(250, "250");
  tickConversion.set(300, "+300");
  tickConversion.set(1000, "1k");
  tickConversion.set(2000, "4k");
  tickConversion.set(3000, "3k");
  tickConversion.set(4000, "4k");
  tickConversion.set(5000, "5k");
  tickConversion.set(6000, "6k");
  tickConversion.set(7000, "7k");
  tickConversion.set(8000, "8k");
  tickConversion.set(10000, "10k+");
  tickConversion.set(15000, "15k");
  tickConversion.set(20000, "+20k");

  return (
    <div>
      <div
        style={{
          position: "absolute",
          marginTop: 14,
          width: 1,
          height: 5,
          backgroundColor: "rgb(200,200,200)",
          left: `${tick.percent}%`
        }}
      />
      <div
        style={{
          position: "absolute",
          marginTop: 22,
          fontSize: "14px",
          textAlign: "center",
          marginLeft: `${-(100 / count) / 2}%`,
          width: `${100 / count}%`,
          left: `${tick.percent}%`
        }}
      >
        {/*{tick.value}*/}
        {tickConversion.get(tick.value)}
      </div>
    </div>
  );
}

function Track({ source, target, getTrackProps }) {
  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(0%, -50%)",
        height: "10px",
        zIndex: 1,
        backgroundColor: "#00cc88",
        borderRadius: 7,
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`
      }}
      {...getTrackProps()}
    />
  );
}

function Handle({ domain: [min, max], handle: { id, value, percent }, getHandleProps }) {
  return (
    <>
      <div
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          WebkitTapHighlightColor: "rgba(0,0,0,0)",
          zIndex: 5,
          width: 28,
          height: 42,
          cursor: "pointer",
          // border: '1px solid white',
          backgroundColor: "none"
        }}
        {...getHandleProps(id)}
      />
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          width: 25,
          height: 25,
          backgroundColor: "#fff",
          borderRadius: "50%",
          border: "2px solid  #00cc88",
          overflow: "none"
        }}
      />
    </>
  );
}

export default PricingSlider;
