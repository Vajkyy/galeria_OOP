import NagyKep from "./NagyKep.js";

export default class LeptetoKezelo {
  #aktIndex;
  #lista = [];
  constructor(lista, szuloElem) {
    this.#aktIndex = 0;
    this.szuloElem = szuloElem;
    this.jobbGombElem = document.getElementsByClassName("jobb")[0];
    this.#lista = lista;
    this.peldanyosit();
    this.esemenykezelo();
    this.kisKepKezeles();
  }

  peldanyosit() {
    const NAGYKEP = new NagyKep(
      this.#lista[this.#aktIndex].cim,
      this.#lista[this.#aktIndex].src,
      this.#lista[this.#aktIndex].leiras,
      this.szuloElem
    );
  }

  kisKepKezeles() {
    window.addEventListener("kivalaszt", () => {
      console.log(event.detail);
      this.#aktIndex = event.detail;
      this.peldanyosit();
    });
  }
  esemenykezelo() {
    this.jobbGombElem.addEventListener("click", () => {
      this.#aktIndex++;
      this.#aktIndex = this.#aktIndex % this.#lista.length;
      this.peldanyosit();
    });
  }
}
