let propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      habitaciones: 2,
      metros: 100
    },



    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
        habitaciones: 2,
        metros: 150
    },



    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      habitaciones: 4,
      metros: 200
    },



    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        habitaciones: 4,
        metros: 350
    },



    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
        habitaciones: 5,
      metros: 400
    },



    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        habitaciones: 5,
        metros: 600
    },
  ];


  let inputs = Array.from(document.querySelectorAll("nav input"))

  let spam = document.getElementById("muestra_total")
  
  let div = document.getElementById("pintar-aqui")
  
  let button = document.querySelector("button")



  function muestra_productos(propiedadesJSON){
  
   spam.innerHTML= propiedadesJSON.length //
   div.innerHTML= "" //limpiar la lista antes de mostrar

  for (const item of propiedadesJSON ){

const nuevoitem = document.createElement("div")
nuevoitem.classList.add("item")

nuevoitem.innerHTML= `

<div class="item_img">
<img src="${item.src}" alt="${item.name}">
</div>

<div class="item_info">
<h2 class="item_name">${item.name} </h2>
<p>habitacioes ${item.habitaciones}</p>
 <p>metros ${item.metros}</p>
 <p>metros ${item.description}</p>
<button> ver mas </button>
</div>

`
div.appendChild(nuevoitem)
  }
 }
muestra_productos(propiedadesJSON)


const filtercasas = () => {

  const [{value:cuartos},{value:desde},{value:hasta}] = inputs
  if( !cuartos && !desde && !hasta){
    alert("Debes rellenar la infomacion")
    return false
  } 

  
  const filtro_casas = propiedadesJSON.filter((item) => 
  item.habitaciones  == cuartos );
  //&& item.metros >= desde && item.metros <= hasta
  //Si lo hacia asi como lo comente arriba ^ no me tomaba nada
   //muestra_productos(filtro_casas)
  
const filtroinputs = propiedadesJSON.filter((item) => 
  item.metros >= desde && item.metros <= hasta);
  // Y si lo hago asi me toma el primero (filtro_casas) mas no el segundo (filtroinputs) pero si comento el primero si me toma el segundo. lo revise revise mis variables y no consegui el error o lo que me podria estar faltando :(
  muestra_productos(filtro_casas, filtroinputs )
  
}
button.addEventListener("click" , filtercasas )


