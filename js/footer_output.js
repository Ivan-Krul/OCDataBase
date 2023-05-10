footer_body = [
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



var path = window.location.pathname;
const slashCount = (path.match(/\//g) || []).length;
console.log( slashCount );

    

let footer_single_string = "";

for (let index = 0; index < footer_body.length; index++) {
    const element = footer_body[index];
    footer_single_string += element;
}

document.write(footer_single_string);



