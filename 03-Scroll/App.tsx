import { Data, Override } from "framer";

const data = Data({ currentSegment: null });
let segments = [];


export const Story: Override = props => {
 
  
  return {
    onChangePage(pageIndex) {
      data.currentSegment = segments[pageIndex].props.id;
    }
  };
};

export const StoryBar: Override = props => {
  segments = props.children;
};

export const StorySegment: Override = props => {
 
  let segmentOpacity = 0;
  if (data.currentSegment === props.id) segmentOpacity = 1;
  return {
    opacity: segmentOpacity
  };
};