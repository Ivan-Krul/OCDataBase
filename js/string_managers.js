export function getCountToRoot() {
	let path = window.location.pathname;

	const slashCount = (path.match(/\//g) || []).length;
	const splitedStr = path.split("OCDataBase")[0];
	const slashCountDomain = (splitedStr.match(/\//g) || []).length;
	const resCount = slashCount - slashCountDomain - 1;

	return resCount;
}

export function assembleArrayToString(stringArray) {
	let str = "";

	for (let index = 0; index < stringArray.length; index++)
		str += stringArray[index];

	return str;
}