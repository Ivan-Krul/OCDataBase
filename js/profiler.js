import * as strmgr from "./string_managers.js";

profileTemplate = [ 
"<p>Biological class: Sheep & Humanoid</p>",
"<p>Age: 19</p>",
"<p>Sex: Male</p>",
"<p>Date of created: 03.05.2023(30.02.16M)</p>",
"<p>Traits: Confidence (in teams), Risky (in tricky situations), Sane (in teaching courses)</p>",
"<p>Country where born: Fur</p>",
"<p>Work: Not working</p>",
"<p>Parents:</p>",
"<dir>",
"	<p>Mother: Ruby</p>",
"	<p>Father: Myles</p>",
"</dir>",
"<p>Currency plan: 3nd <a href=\"../def/plan.html\">plan</a>(~6400<a href=\"../def/currency S.html\">S</a>) from 3nd <a href=\"../def/plan.html\">plan</a>(~5900<a href=\"../def/currency S.html\">S</a>)</p>",
"<p>Intrestings: teaching, team up leader, conducting business</p>",
];

console.log(strmgr.getCountToRoot());

document.write(profileTemplate);