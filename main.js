var temp;
const openSideBar = () => {
  //temp = document.getElementById('sidebar').style.width;
  alert("Opening Side Bar");
};

const hideAllValue = () => {
  const hideSaldo = document.getElementById("saldo");
  const hideActive = document.getElementById("price-active");
  const hidePassive = document.getElementById("price-passive");
  const labelSaldo = document.getElementById("label-saldo");
  const iconSaldo = document.getElementById("icon-saldo");

  iconSaldo.classList.remove("bi-eye-slash");
  iconSaldo.classList.add("bi-eye");

  hideSaldo.classList.remove("tot_money");
  labelSaldo.innerText = "Visualizar saldo geral";

  hideSaldo.classList.add("hideSaldo");
  hideActive.classList.add("hideSaldo");
  hidePassive.classList.add("hideSaldo");
};

const toggleSaldo = () => {
  var hideAllSaldo = document.querySelectorByTagName(".saldo");
  let stateSaldo = true;

  hideAllSaldo.forEach((saldo) => {
    if (stateSaldo) {
      saldo.classList.add("hideSaldo");
    } else {
      saldo.classList.remove("hideSaldo");
    }
  });
  stateSaldo = !stateSaldo;
};

const openMainMenu = () => {
  const billContent = document.getElementById("cart-bills");

  const idBackGround = document.getElementById("iDBackground");

  idBackGround.classList.remove("hidden");
  idBackGround.classList.add("classBackground");

  //alert("Open main button!"); // Test
  billContent.innerHTML = temp;
};

const closeMainMenu = () => {
  const idBackGround = document.getElementById("iDBackground");

  idBackGround.classList.remove("classBackground");
  idBackGround.classList.add("hidden");
};

const handleButtonsClick = () => {
  document.getElementById("openMenu").addEventListener("click", () => {
    notie.alert({ text: "Going to Menu Bar", type: 5, time: 2 });
  });

  document.getElementById("openTransations").addEventListener("click", () => {
    notie.alert({ text: "Going to Transation", type: 5, time: 2 });
  });

  document.getElementById("openPlanning").addEventListener("click", () => {
    notie.alert({ text: "Going to Planning", type: 5, time: 2 });
  });

  document.getElementById("openMore").addEventListener("click", () => {
    notie.alert({ text: "Going to Menu Config", type: 5, time: 2 });
    showCalculator();
  });

  document.getElementById("goToCreditCard").addEventListener("click", () => {
    notie.alert({ text: "Going to Credit Card", type: "info", time: 2 });
  });

  document.getElementById("goToRevenue").addEventListener("click", () => {
    notie.alert({ text: "Going to Revenue", type: "success", time: 2 });
    window.location.pathname = "src/pages/revenue.html";
  });
  document.getElementById("goToBank").addEventListener("click", () => {
    notie.alert({ text: "Going to Bank", type: "warning", time: 2 });
    //document.body.classList.add('activeMainSection');
  });
  document
    .getElementById("goToSpending")
    .addEventListener("click", async () => {
      await notie.alert({ text: "Going to Spending", type: 3, time: 2 });
      window.location.pathname = "src/pages/spend.html";
      window.location.href = "";
    });

  document
    .getElementById("exitMainMenu")
    .addEventListener("click", closeMainMenu);

  document.getElementById("btn-plus").addEventListener("click", openMainMenu);

  document
    .getElementById("hide-saldo")
    .addEventListener("click", hideAllValue /*toggleSaldo*/);

  document
    .getElementById("btnCancel")
    .addEventListener("click", hiddenCalculator);
};

function showSplashScreen() {
  // Create splash screen elements
  const splashScreen = document.createElement("div");
  splashScreen.id = "splashScreen";

  const loadingText = document.createElement("p");
  const arrowReload = document.createElement("h1");
  arrowReload.id = "arrowReload";
  loadingText.id = "loadingText";
  arrowReload.innerHTML = '<i class="bi bi-arrow-clockwise arrowReload"></i>';
  loadingText.textContent = "Loading...";

  splashScreen.appendChild(arrowReload);
  splashScreen.appendChild(loadingText); /* 
  document.header = 'none';
  document.main.style.display = 'none'; */
  document.body.appendChild(splashScreen);

  // Simulate a delay (you can replace this with your actual loading logic)
  setTimeout(() => {
    hideSplashScreen();
  }, 1000); // 3000 milliseconds (3 seconds) for demo purposes
  return "finish";
}

function hideSplashScreen() {
  const splashScreen = document.getElementById("splashScreen");
  if (splashScreen) {
    splashScreen.remove();
  }
}

const showRevenuePage = () => document.body.appendChild(revenuePage);

const showSpendPage = () => document.body.appendChild(spendPage);

const rederPatge = pg => pg === 'spend' ? showSpendPage() : showRevenuePage();


function deploy(run) {
  if (run) {
    handleButtonsClick();

    /* TESTE DAS FUNÇÕES E ENUM - 09/01/2024  */
    const toDay = new Data();
    console.log(toDay.getData());
    toDay.setData(21, 11, 2024);
    console.log(toDay.getData());

    console.log(month["FEV"]);
    console.log(month.JUN);

    const agency = new Agency("XP Investimentos", 1);
    agency.renderAgencies("scena-all-info"); // Param: local onde vai ser renderizado

    const objBill = {
      describe: "Shopping Veiculos - Carro", // string - Descrição da conta
      price: {
        payUpTo: 459.9,
        paidOutAt: undefined,
      }, // number - Valor da conta
      dataRegister: new Data(), // Data - Data de registro de vencimento da conta
      dataPayment: null, // Data - Data do pagamento
      status: status.PENDING, // number - Situação da conta
      typePayment: typePayment.PIX, // number - forma de pagamento
      category: "IMOVEL", // number - categoria da conta
      codRule: rule.ESSENTIAL, // number - Código da regra da conta
      installment: "12", // string - quantidade de parcelas
    };
    const bill = new Bill(101, objBill);
    console.log("Teste criando despesa \n\n");
    temp = bill.displayAllInfo();
    return "in_production";
  }
  return "not_in_production";
}

function showCalculator() {
  document.getElementById("mainSection").classList.add("activeMainSection");
  document.getElementById("mainSection").classList.remove("disableMainSection");
}

function hiddenCalculator() {
  document.getElementById("mainSection").classList.remove("activeMainSection");
  document.getElementById("mainSection").classList.add("disableMainSection");
}

window.onload = function () {
  // Invoking the function to show the splash screen
  //const whenReady = showSplashScreen();

  if (true) {
    console.warn(deploy(true));
  }
};
