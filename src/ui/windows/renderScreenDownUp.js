/* 26/01/2024 at 23:28 at work
1 - Create a function to render the window at the main screen
*/
// function renderWindowScreenDownUp()
/* const main = document.getElementById('scena-all-info'); */
const renderdScreenDownUp = () => {
  /* notie.alert({text: 'Renderizando a tela de DownUp', type: 3, time: 5}); */
  const mainSection = document.createElement("section");
  mainSection.id = "mainSection";

  mainSection.classList.add("mainSection");

  renderCalculatorOnScreen((param1, param2, param3) => {
    const listParams = [param1, param2, param3];
    for (let i = 0; i < listParams.length; i++) {
      mainSection.appendChild(listParams[i]);
    }
  });

  document.body.appendChild(mainSection);
  /* alert("Renderizando a tela de DownUp"); */
};

//CHAMADA DE FUNÇÃO PARA RENDERIZAR CALCULADORA
renderdScreenDownUp();
