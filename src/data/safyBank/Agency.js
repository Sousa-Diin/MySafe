//let agencyList = {};
agencyList = [
  {
    id: "1",
    name: "Carteira",
    value: 2.15,
    icon: "https://cdn.vectorstock.com/i/preview-lt/72/57/wallet-icon-vector-20147257.webp",
    status: "ACTIVE",
  },
  {
    id: "102",
    name: "Caixa",
    value: 0.66,
    icon: "https://www.freepnglogos.com/uploads/logo-caixa-png/caixa-download-png-5.png",
    status: "ACTIVE",
  },
  {
    id: "0260",
    name: "Nu Bank",
    value: 5.09,
    icon: "https://static.poder360.com.br/2021/10/nubank-1-649x649.png",
    status: "ACTIVE",
  },
  {
    id: "103",
    name: "Bradesco",
    value: 0.11,
    icon: "https://play-lh.googleusercontent.com/GR30ZJxpKBfTJi5PM_GQvkKoRk3zWnsWuUbS04-RIvtuTQjozD5i4ka40LnsdGvcIbg",
    status: "ACTIVE",
  },
  {
    id: "280",
    name: "Will Bank",
    value: 141.06,
    icon: "https://www.willbank.com.br/images/logo/logo-will-bank.svg",
    status: "ACTIVE",
  },
  {
    id: "047",
    name: "Xp Investimentos",
    value: 279.52,
    icon: " https://files.sunoresearch.com.br/n/uploads/2019/09/6ea86ad5-xp.jpg",
    status: "ACTIVE",
  },
];

setLocalStorage("AgencyList", agencyList);

const type = {
  BROKER: 1,
  BANK: 2,
  DIGITAL: 3,
};

class Agency {
  constructor(name, origin) {
    // origin: BROKER, BANK, DIGITAL
    this.#setAgency(name, origin);
    this.agenciesList = [];
  }

  #setAgency(name, origin) {
    switch (origin) {
      case type.BROKER:
        createBrokerAccount(name);
        break;
      case type.BANK:
        createBankAccount(name);
        break;
      case type.DIGITAL:
        createDigitalBankAccount(name);
        break;
      default:
        console.log("Agencia não encontrada");
      //console.Warning('Agencia não encontrada');
    }
    this.amountAgency++;
  }

  readData(nivel) {
    /*  var alt = document.getElementById("autocomplete-alerta").value;
    const filial = document.getElementById("autocomplete-filial").value;
    const plate = takeOutSpace(document.getElementById("placa").value); */

    var agency = {}; // recebe obj vazio in start

    agency.id = this.id;
    agency.name = document.getElementById("autocomplete-alerta").value;
    agency.value = value;
    agency.status = nivel;
    agency.icon = icon;

    return agency;
  }

  equals(obj1) {
    let count = 0; // very important
    try {
      if (obj1) {
        const arrayObjAux = getLocalStorage("AgencyList").filter((obj2) => {
          return obj2.id === obj1.id;
        });
      }

      const arrayAgencyNameAux = arrayObjAux.filter((obj) => {
        console.log("Teste de iguadade");
        count++;
        return obj.name === obj1.name;
      });
    } catch (e) {
      console.log("Erro ao comparar agencia");
    }
    salvarLocalStorage("currentAgencyCount", arrayAgencyNameAux.length + 1);
  }

  addAgency(myAgency) {
    this.agenciesList.push(myAgency);
    myAgency.id = this.agenciesList.length; //id
    try {
      if (this.agenciesList.length > 1) {
        this.equals(myAgency);
      } else {
        throw new Error("Não há itens suficientes para realizar a operação");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  saveLocalStorage(nivel) {
    let myagency = this.readData(nivel);
    try {
      if (localStorage.AgencyList) {
        this.agenciesList = getLocalStorage("AgencyList");
      } else {
        throw new Error("Não há dados no LocalStorage");
      }

      if (this.checkField(myagency)) {
        let newItem = myagency;
        this.addAgency(newItem);
      }

      localStorage.myArray = JSON.stringify(this.arrayAlerts);
      return myagency;
    } catch (error) {}
  }

  renderAgencies(origin) {
    //try {
    const objAG = getLocalStorage("AgencyList");
    if (objAG !== null) {
      renderList(origin, objAG);
    } else {
      throw new Error(
        "Não foi possivel renderizar a lista de agencias, por favor verifique se já existe alguma agencia cadastrada"
      );
    }
  }
  //catch () { /* //'Erro ao renderizar a lista de agencias'
  //showAlert('THERE IS NOT AGENCY. ' + error.message, 3, 5, 'bottom');
  //alert(error.message);
  // console.error(error.message); */
  //}
  //}
}

function createBankAccount(name) {
  console.log(`Criando conta bancária ${name}`);
}
function createBrokerAccount(name) {
  console.log(`Criando conta corretora ${name}`);
}
function createDigitalBankAccount(name) {
  console.log(`Criando conta digital ${name}`);
}

function renderList(origin, lista) {
  const scena = document.getElementById(origin); //#0
  const divContainer = document.createElement("div"); //#1
  const divTitle = document.createElement("label"); //#title
  const sectionContainer = document.createElement("section"); //#2
  const groupSectionAgency = document.createElement("section"); //#4
  const btnAddAgency = document.createElement("section"); //#4

  var totValueAgency = 0;

  sectionContainer.id = "cart-";
  divTitle.classList.add("title");
  divTitle.innerHTML = "Contas";

  divContainer.appendChild(divTitle);

  sectionContainer.style.dislay = "flex";
  divContainer.style.height = "98dvh";
  divContainer.style.dislay = "flex";

  divContainer.appendChild(divTitle);
  divContainer.appendChild(sectionContainer);

  console.info("Lista: ", lista);
  if (lista) {
    lista.forEach((item) => {
      const sectionAgency = document.createElement("section"); //#3
      const agencyContent = `
          <div class="div-pai-name-price">
            <img src="${item.icon}" alt="logo ${item.name}" class="icon">
            <div id="name-price">
              <pre>${item.name}</pre>
              <p>R$ ${item.value}</p>
            </div>
          </div>
        `;
      totValueAgency += item.value;
      const h2 = document.createElement("h2");
      const elementI = document.createElement("i");
      h2.classList.add("add");
      h2.setAttribute("onclick", "addNewAgency(" + Number(item.id) + ")");
      /* elementI.classList.add('bi'); */
      elementI.classList.add("bi-plus-circle");
      h2.appendChild(elementI);

      groupSectionAgency.id = "groupBank";
      sectionAgency.id = "bank";
      sectionAgency.innerHTML += agencyContent;
      sectionAgency.appendChild(h2);
      groupSectionAgency.appendChild(sectionAgency);

      sectionContainer.appendChild(groupSectionAgency);
      //divContainer.innerHTML += agencyContainer;
      divContainer.appendChild(sectionContainer);
    });
    btnAddAgency.classList.add("footer-bill");
    let totBills = totValueAgency.toFixed(2);
    btnAddAgency.innerHTML = `
        <aside class="tot-bills"><label>Total</label><p>R$ ${totBills}</p></aside>
        <div class="btn-add-bill btn">
          <h3 id="btnAddAgency"class="btn"><i class=" btn bi bi-plus-lg"></i></h3><label class="btn">Adicionar Conta</label>
        </div>`;
    sectionContainer.appendChild(btnAddAgency);
    scena.appendChild(divContainer);
  } else {
    showAlert("Não há agencias cadastradas", 2, 5, "top");
    throw new Error("Não há agencias cadastradas");
  }
}
