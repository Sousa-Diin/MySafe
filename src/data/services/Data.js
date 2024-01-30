/* Classe responsavél para gerar register date & payment     date  
 - Parameter: day, month, year
*/
class Data {
  #currentDate = new Date();
  constructor() {
    this.day = this.#currentDate.getDate();
    this.month = this.#currentDate.getMonth() + 1;
    this.year = this.#currentDate.getFullYear();
  }
  setData(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }
  getData() {
    let date = [];
    date[0] = this.day;
    date[1] = this.month;
    date[2] = this.year;
    return date;
  }
}

/* ENUM responsavél para gerar register date & payment     date
 */
const month = {
  JAN: 1,
  FEV: 2,
  MAR: 3,
  ABR: 4,
  MAI: 5,
  JUN: 6,
  JUL: 7,
  AGO: 8,
  SET: 9,
  OUT: 10,
  NOV: 11,
  DEZ: 12,
};

const status = {
  PAIDOUT: 2,
  UNPAID: 1,
  PENDING: 0,
  DELAYED: -1,
  CANCELLED: -2,
};

const typePayment = {
  CREDIT: 1,
  DEBIT: 2,
  CASH: 3,
  CHECK: 4,
  CASHBACK: 5,
  PIX: 6,
};

const rule = {
  ACTIVE: 0,
  ESSENTIAL: 1,
  PRIORITY_FINANCE: 2,
  LIFE_STYLE: 3,
};
