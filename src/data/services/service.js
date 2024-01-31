var listEntrace;

function setLocalStorage(key, obj) {
  if (key === "") {
    throw new Error(
      "Não foi possivel setar o local storage, por favor verifique se já existe alguma chave e tente novamente"
    );
    return;
  }
  if (obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  } else {
    throw new Error("Não foi possivel setar o localStorage, objeto vazio");
  }
}

function getLocalStorage(key) {
  // catch some key at localStorage
  try {
    if (key !== "") {
      return JSON.parse(localStorage.getItem(key));
    } else {
      throw new Error("Key is empty");
    }
  } catch (error) {
    showAlert("DATABASE: " + error.message, 3, 5, "bottom");
    consol.error(error);
    return null;
  }
}

function removeLocalStorage(key) {
  // Remove um item do localStorage
  try {
    if (key !== "") {
      localStorage.removeItem(key);
    } else {
      throw new Error("Key is empty");
    }
  } catch (error) {
    showAlert("DATABASE: " + error.message, 3, 5, "top");
    console.error(error);
  }
}
function clearLocalStorage() {
  // clear all localStorage
  localStorage.clear();
}
function showAlert(message, kind, duration, _position) {
  notie.alert({
    text: message,
    type: kind,
    time: duration,
    position: _position,
  });
}

function salvarListInput ( list, array, auth ) {
  setLocalStorage(list, array);
  if ( auth ) {
    showAlert("Dados inseridos com sucesso", 1, 1, 'top');
  }
}

function renderCalculatorOnScreen(cb) {
  const headerCalcutlator = document.createElement("header");
  const sectionContent = document.createElement("section");
  const footerCalcutlator = document.createElement("footer");

  const keyBoardCalculator = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  headerCalcutlator.id = "headerCalcutlator";
  headerCalcutlator.innerHTML = `<p>R$</p><input id="resultCalculator" placeholder= "0.0" /input>`;
  headerCalcutlator.innerHTML += `<i id="backspace-fill" onclick="eraseInputField()" class="bi bi-backspace-fill"></i>`;

  sectionContent.id = "sectionContent";
  sectionContent.classList.add("sectionContent");
  for (let i = 0; i < keyBoardCalculator.length; ++i) {
    const button = document.createElement("button");
    button.innerText = keyBoardCalculator[i];
    button.id = "calcBtn";
    button.setAttribute(
      "onclick",
      "getClickPushbutton(" + button.innerText + ")"
    );
    button.classList.add("calcBtn");
    sectionContent.appendChild(button);
  }

  footerCalcutlator.id = "footerCalcutlator";
  footerCalcutlator.style.height = "10%";
  footerCalcutlator.style.width = "98%";
  footerCalcutlator.style.background = "transparent";

  const btnConfirm = document.createElement("button");
  const btnCancel = document.createElement("button");
  btnConfirm.innerText = "CONCUIDO";
  btnConfirm.id = "btnConfirm";
  btnConfirm.style.zIndex = "0";
  btnCancel.innerText = "CANCELAR";
  btnCancel.id = "btnCancel";
  footerCalcutlator.appendChild(btnCancel);
  footerCalcutlator.appendChild(btnConfirm);

  return cb(headerCalcutlator, sectionContent, footerCalcutlator);
}

/* CAPTURA OS CLIQUE DOS BOTÕES DA CALCULADORA */
function getClickPushbutton(btn) {
  let input = document.getElementById("resultCalculator");
  
  listEntrace = getLocalStorage('listInput');
  listEntrace = insertDataCalculator (btn);

  input.value = listEntrace.toString().split(',').join('');
  console.log(typeof listEntrace);
 
  console.log("click do button => ", listEntrace);
  //alert("Calc click", btn);
  salvarListInput('listInput', listEntrace, false);
}
const listenButtons = () => {
  document
    .getElementById("backspace-fill")
    .addEventListener("click", eraseInputField);
};

function eraseInputField() {
  const recevelistInput = getLocalStorage('listInput');

  if (recevelistInput) {
    recevelistInput.pop();
    document.getElementById("resultCalculator").value = recevelistInput.toString().split(',').join('');
  }else{
    document.getElementById("resultCalculator").value = "0.0";
  }
  
  salvarListInput('listInput', recevelistInput, false);
}

function insertDataCalculator (char) {

  if ( char === "") {
    showAlert("Insira um dado válido", 3, 2, 'top');
    return;
  }
  
  if ( localStorage.listInput !== null ) {
    listEntrace = getLocalStorage('listInput') ?? [];
    listEntrace.push(char);
    return listEntrace;
  }else {
    setLocalStorage('listInput', listEntrace);
  }

  salvarListInput('listInput', listInput, false);

}


listenButtons();
