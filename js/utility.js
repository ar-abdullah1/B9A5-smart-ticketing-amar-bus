function getElementsById(elementId) {
  const element = document.getElementById(elementId);
  return element;
}
function getElementsByClassName(className) {
  const element = document.querySelectorAll(className);
  return element;
}

function getElementsInnerTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function setElementsInnerTextById(elementId, text) {
  const element = document.getElementById(elementId);
  element.innerText = text;
}

function getInputValueById(elementId) {
  const element = document.getElementById(elementId);
  const value = element.value;
  return value;
}

function setElementsColorById(elementId) {
  const element = document.getElementById(elementId);
  element.style.backgroundColor = "#1DD100";
  element.style.color = "white";
}

function setElementsAttributeById(elementId, attributeName) {
  const element = document.getElementById(elementId);
  element.setAttribute(attributeName, true);
}

function removeElementsAttributeById(elementId, attributeName) {
  const element = document.getElementById(elementId);
  element.removeAttribute(attributeName);
}

function appendTableDataById(elementId, td1, td2, td3) {
  const element = document.getElementById(elementId);
  const newRow = document.createElement("tr");
  const newData1 = document.createElement("td");
  const newData2 = document.createElement("td");
  const newData3 = document.createElement("td");
  newData3.classList.add("text-end");
  newData1.appendChild(document.createTextNode(td1));
  newData2.appendChild(document.createTextNode(td2));
  newData3.appendChild(document.createTextNode(td3));
  newRow.appendChild(newData1);
  newRow.appendChild(newData2);
  newRow.appendChild(newData3);
  element.appendChild(newRow);
}
