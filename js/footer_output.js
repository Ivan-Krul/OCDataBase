import * as strmgr from "./string_managers.js";

let footerBody = [
	"<footer class=\"footer_classic\">",
	"<p>Author: Kiwii Devulopir</p>",
	"<p>Update time: <script src=\"js/current_date.js\"></script></p>",
	"<a href=\"https://github.com/Ivan-Krul/OCDataBase.git\" target=\"_blank\">Repository of the website</a>",
	"<ul>",
	"<li><a href=\"https://github.com/Ivan-Krul\" target=\"_blank\">in GitHub</a></li>",
	"<li><a href=\"https://twitter.com/Kiwii_Delumorin\" target=\"_blank\">in Twitter</a></li>",
	"<li><a href=\"https://www.reddit.com/user/KiwiiChunk\" target=\"_blank\">in Reddit</a></li>",
	"</ul>",
	"</footer>"];

let footerSingleString = strmgr.assembleArrayToString(footerBody);
const countToRoot = strmgr.getCountToRoot();

for(let index = 0; index < countToRoot; index++) {
	footerSingleString = footerSingleString.replace("js/", "../js/");
}

document.write(footerSingleString);



