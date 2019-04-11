import { Data, animate, Override, Animatable } from "framer"
import {
  scrollOverrides,
  sticky
} from "@framer/lintonye.parallax/code/Parallax";

const titleHeight = 71;


const overrides = scrollOverrides(
  [381, 800 - titleHeight],
  [{ id: "problem", op: sticky() }],
  [800, 1129 - titleHeight],
  [{ id: "solution", op: sticky() }],
  [1129, 2025 - titleHeight],
  [{ id: "process", op: sticky() }]
);


export const Scroll: Override = props => overrides.scroll(props);

export const problem: Override = props => overrides.problem(props);

export const solution: Override = props => overrides.solution(props);

export const process: Override = props => overrides.process(props);
