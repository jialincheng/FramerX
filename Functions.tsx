import { Override, Data } from "framer";

export const data = Data({
  brightness: 100,
  contrast: 100,
  hueRotate: 0,
  hueNumber: "0",
  contrastNumber: "0",
  brightnessNumber: "0"
});

export const Effects: Override = () => {
  return {
    brightness: data.brightness,
    contrast: data.contrast,
    hueRotate: data.hueRotate,
  };
};

export const brightnessSlider: Override = () => {
  return {
    onValueChange: (value: number) => {
      data.brightness = value;
      let roundedValue = Math.floor(value)
          data.brightnessNumber = roundedValue.toString()
    },
  };
};

export const ContrastSlider: Override = () => {
  return {
    onValueChange: (value: number) => {
      data.contrast = value;
      let roundedValue = Math.floor(value)
          data.contrastNumber = roundedValue.toString()
    },
  };
};

export const HueSlider: Override = () => {
  return {
    onValueChange: (value: number) => {
      data.hueRotate = value
      let roundedValue = Math.floor(value)
          data.hueNumber = roundedValue.toString()
         
    },
  };
};

export const hue: Override = props => {
  return {
      text: data.hueNumber
  }
}
export const con: Override = props => {
  return {
      text: data.contrastNumber
  }
}

export const exp: Override = props => {
  return {
      text: data.brightnessNumber
  }
}