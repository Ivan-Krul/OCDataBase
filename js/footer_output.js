function getCountToRoot() {
	let path = window.location.pathname;

	const slashCount = (path.match(/\//g) || []).length;
	const splitedStr = path.split("OCDataBase")[0];
	const slashCountDomain = (splitedStr.match(/\//g) || []).length;
	const resCount = slashCount - slashCountDomain - 1;

	return resCount;
}

function assembleArrayToString(stringArray) {
	let str = "";

	for (let index = 0; index < stringArray.length; index++)
		str += stringArray[index];

	return str;
}

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

let footerSingleString = assembleArrayToString(footerBody);
const countToRoot = getCountToRoot();

for(let index = 0; index < countToRoot; index++) {
	footerSingleString = footerSingleString.replace("js/", "../js/");
}

document.write(footerSingleString);



