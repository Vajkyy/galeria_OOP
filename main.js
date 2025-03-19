import Kepek from "./Kepek.js";
import LeptetoKezelo from "./LeptetesKezelo.js";
import { OBJLISTA } from "./tomb.js";

let szuloElem = document.getElementsByClassName("galeria")[0];

/* let k1 = new Kep(obj[0].cim, obj[0].src, szuloElem); */

//const n1 = new Kep(obj[0].cim, obj[0].src,obj[0].leiras, nkep)

const KEPEK = new Kepek(OBJLISTA, szuloElem);

/* jobbra gombra kattitva léptessük a képeket */

/* 
1. meg kell fogni a jobb gombot
2. kell egy eseménykezelő
2,5. létre kell hozni egy aktIndex változót 
3. indexet kell növelni. - OBJLISTA-nak hányadik eleménél tartok
*/

let nkep = document.getElementsByClassName("kiemelt")[0];
new LeptetoKezelo(OBJLISTA, nkep)

