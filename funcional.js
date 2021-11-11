const arr = [1, 2, 3, 4, 5, 6];

  // utilizar el método map de los arreglos para duplicar cada elemento
  // [2, 4, 6, 8, 10, 12]
  /* const duplicados=arr.map=>{

  } */
  const dobles = arr.map(x=> x * 2);
  console.log(dobles)
  
  // utilizar el método filter para filtrar los números pares de arr
  // [2, 4, 6]
  const filtrar= arr.filter(x=> x%2===0 )
  console.log(filtrar)

  // utilizar el método reduce para sumar todos los elementos
  // 21
  const reducir=arr.reduce((prev,curr)=>{
    console.log(prev,curr)
    return prev+curr
    })
  
  console.log(reducir)