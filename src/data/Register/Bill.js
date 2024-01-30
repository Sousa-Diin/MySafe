class Bill {
  id = undefined;
  constructor(id, value) {
    this.id = id;
    this.describe = value.describe; // string - Descrição da conta
    this.price = {
      payUpTo: value.price.payUpTo,
      paidOutAt: value.price.paidOutAt,
    }; // number - Valor da conta
    this.dataRegister = value.dataRegister; // Data - Data de registro de vencimento da conta
    this.dataPayment = null; // Data - Data do pagamento
    this.status = value.status; // number - Situação da conta
    this.typePayment = value.typePayment; // number - forma de pagamento
    this.category = value.category; // number - categoria da conta
    this.codRule = value.codRule; // number - Código da regra da conta
    this.installment = value.installment; // string - quantidade pe pretação
  }
  setDataPayment(newDataPayment) {
    this.dataPayment = newDataPayment;
  }
  setStatus(newStatus) {
    this.status = newStatus;
  }
  setTypePayment(newTypePayment) {
    this.typePayment = newTypePayment;
  }
  setCategory(newCategory) {
    this.category = newCategory;
  }
  setCodRule(newCodRule) {
    this.codRule = newCodRule;
  }
  setDescribe(newDescribe) {
    this.describe = newDescribe;
  }
  setNewValueToPayUp(newValue) {
    this.price.payUpTo = newValue;
  }
  setNewValuePaidOut(newValue) {
    this.price.paidOutAt = newValue;
  }
  setNewDataRegister(newDate) {
    this.dataRegister = newDate;
  }

  getID() {
    return this.id;
  }
  getValueToPayUp() {
    return this.price.payUpTo;
  }
  getStatus() {
    return this.status;
  }
  getTypePayment() {
    return this.typePayment;
  }
  getCategory() {
    return this.category;
  }
  getCodRule() {
    return this.codRule;
  }
  getDescribe() {
    return this.describe;
  }
  getValuePaidOutp() {
    return this.price.payOutTo;
  }
  getDataRegister() {
    return this.dataRegister;
  }

  /* 
    Return 'string' with all inforamtion of the bill
  */
  displayAllInfo() {
    // for test: check it all info
    const info = `<h3>Descrição: ${this.describe}</h3>
    <h2>ID - ${this.getID()}</h2>
    <pre>Valor a pagar: ${this.getValueToPayUp()}</pre><pre>Valor quitado:${this.getValuePaidOutp()}</pre>
    <p>Data de registro: ${this.dataRegister.getData()[0]}/${
      this.dataRegister.getData()[1]
    }/${this.dataRegister.getData()[2]}</p>
    <p>Data do pagamento: ${this.dataPayment}</p>
    <p>Situação: ${this.status}</p>
    <p>Forma de pagamento: ${this.typePayment}</p>
    <p>Categoria: ${this.category}</p>
    <p>Código da regra: ${this.codRule}</p>
    <p>Quantidade de parcelas: 1/${this.installment}</p>`;
    return info;
  }
}
