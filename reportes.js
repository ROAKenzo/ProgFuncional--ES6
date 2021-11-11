import { cars } from "./cars.js";

//retorna todos los ferrari
const ferraris=cars.filter(e => e.brand==="Ferrari")
/* console.log(ferraris) */

//retorna todos los carros entre 1980 y1990
const nineties=cars.filter(e=> e.model>=1980 && e.model<=1990)
/* console.log(nineties) */

//retorna un string por cada carro
const strings=cars.map(e => `This ${e.brand} from ${e.model} costs $${e.price}`)
/* console.log(strings) */

//retorna la suma de los precios de los bmw
const bmwSum=cars.filter(e => e.brand==="BMW")
/* console.log(bmwSum) */
const precios=bmwSum.map(e =>e.price)
/* console.log(precios) */
const bmwResul=precios.reduce((prev, curr) =>prev+curr )
/* console.log(bmwResul) */