import { modalShow } from "./js/modal";
import { timer } from "./js/timer";
import { refs } from "./js/refs";

// modalShow();

refs.startBtn.addEventListener('click', timer.start.bind(timer));

refs.stopBtn.addEventListener('click', timer.stop.bind(timer));



