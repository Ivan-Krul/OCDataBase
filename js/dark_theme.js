const timeout = 250;

function setNeutralTone() {
  document.body.style.color = "gray";
  document.body.style.backgroundColor = "gray";
}

function setThemeStyle(first = false) {
  let isDarkTheme = true;
  if (localStorage.length === 0) {
    localStorage.setItem("isDarkTheme", isDarkTheme);
  }
  else {
    let tagBody = document.body;
    if (localStorage.getItem("isDarkTheme") === "true") {
      if(!first)
      {
        setNeutralTone();
        setTimeout(() => {
          tagBody.style.backgroundColor = "black";
          tagBody.style.color = "white";
        }, timeout);
      }
      else{
        tagBody.style.backgroundColor = "black";
        tagBody.style.color = "white";
      }
    }
    else {
      if(!first)
      {
        setNeutralTone();
        setTimeout(() => {
          tagBody.style.backgroundColor = "white";
          tagBody.style.color = "black";
        }, timeout);
      }
      else{
        tagBody.style.backgroundColor = "white";
        tagBody.style.color = "black";
      }
    }
  }
}

function handleClick() {
  if (localStorage.getItem("isDarkTheme") === "true")
    localStorage.setItem("isDarkTheme", "false");
  else
    localStorage.setItem("isDarkTheme", "true");
  setThemeStyle();
}

function generateButtonToSwitch() {
  let tagDiv = document.querySelector(".text-classic");
  let tagButton = document.createElement("button");
  tagButton.onclick = handleClick;
  tagButton.innerText = "change light theme";
  document.body.append(tagButton);
}

setThemeStyle(true);
generateButtonToSwitch();


