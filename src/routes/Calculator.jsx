import React from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";

const Calculator = () => {
  return (
    <div id="calculator">
      <div id="slider_container">
        <div className="slider_div">
          <div>
            <h2>Yearly Investment</h2>
            <h2>1000</h2>
          </div>
          <Slider aria-label="slider-ex-1" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
        <div className="slider_div">
          <div>
            <h2>Time Period(in years)</h2>
            <h2>15yr</h2>
          </div>
          <Slider aria-label="slider-ex-1" defaultValue={30}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </div>
        <div className="slider_div">
          <div>
            <h2>Rate of Interest</h2>
            <h2 style={{ background: "grey", color: "black" }}>7.1</h2>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Calculator;
