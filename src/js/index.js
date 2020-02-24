import { startGroupingProcess } from "./groupLetters";
import smoothscroll from "smoothscroll-polyfill";

smoothscroll.polyfill();

const wordArray = ["erer","driven","bee","believed","its","ground","strike",
"although","although","glad","eager","forgot","product",
"type","home","instance","far","rabbit","hour",
"thus","scientific","yesterday","simply","card","shut",
"stream","familiar","excitement","himself","struggle","lady",
"think","felt","minute","single","ring","stems",
"dot","bus","unit","skin","attack","wolf"

]

startGroupingProcess(wordArray);
