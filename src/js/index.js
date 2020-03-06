import { startGroupingProcess } from "./groupLetters";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const wordArray = [
  `Tuesdays schedule I am so cool and awesome
  sss this is awesome. sdksd;lkdsl;kdsdkl;sdlk;sd
  sdml;msd;mdssd;lm sdml;smldsdml;`, `Tuesdays schedule I am so cool and awesome
  sss this is awesome. sdksd;lkdsl;kdsdkl;sdlk;sd
  sdml;msd;mdssd;lm sdml;smldsdml;`, `Tuesdays schedule I am so cool and awesome
  sss this is awesome. sdksd;lkdsl;kdsdkl;sdlk;sd
  sdml;msd;mdssd;lm sdml;smldsdml;`,"Helllo njankjsannjk nasjknkjsna bkjasbkbjd",
  'hi ajdksbjkbdsakjbsdbjksdbkasjb'
]

startGroupingProcess(wordArray);
