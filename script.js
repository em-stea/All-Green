/*cerrar menu al clickear elemento a*/
$('.scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });
  
/*scrollspy*/ 
$('body').scrollspy({ 
    target: '#headerNav',
});

/*Smooth scroll*/
var scroll = new SmoothScroll('.scroll-trigger[href*="#"]', {
	speed: 900,
	
});

/*carga asincrónica de imágenes de productos*/
let img_prod1 = document.querySelector(".img_prod1");
let img_prod2 = document.querySelector(".img_prod2");
let img_prod3 = document.querySelector(".img_prod3");
let img_prod4 = document.querySelector(".img_prod4");
let img_prod5 = document.querySelector(".img_prod5");
let img_prod6 = document.querySelector(".img_prod6");

fetch("img/producto1.jpg")
.then(respuesta => respuesta.blob())
.then(resp =>{
      let url = URL.createObjectURL(resp)
      img_prod1.src = url
})
.catch(error=> console.log(error))

fetch("img/producto2.jpg")
.then(respuesta => respuesta.blob())
.then(resp =>{
      let url2 = URL.createObjectURL(resp)
      img_prod2.src = url2
})
.catch(error=> console.log(error))

fetch("img/producto3.jpg")
.then(respuesta => respuesta.blob())
.then(resp =>{
      let url3 = URL.createObjectURL(resp)
      img_prod3.src = url3
})
.catch(error=> console.log(error))

fetch("img/producto4.jpg")
.then(respuesta => respuesta.blob())
.then(resp =>{
      let url4 = URL.createObjectURL(resp)
      img_prod4.src = url4
})
.catch(error=> console.log(error))

fetch("img/producto5.jpg")
.then(respuesta => respuesta.blob())
.then(resp =>{
      let url5 = URL.createObjectURL(resp)
      img_prod5.src = url5
})
.catch(error=> console.log(error))

fetch("img/producto6.jpg")
.then(respuesta => respuesta.blob())
.then(resp =>{
      let url6 = URL.createObjectURL(resp)
      img_prod6.src = url6
})
.catch(error=> console.log(error))

/*carga asincrónica de imágenes de rolls*/
let roll_1 = document.querySelector(".roll_1");
let roll_2 = document.querySelector(".roll_2");
let roll_3 = document.querySelector(".roll_3");
let roll_4 = document.querySelector(".roll_4");


fetch("img/roll.jpg")
.then(respuesta => respuesta.blob())
.then(resp =>{
      let url_roll1 = URL.createObjectURL(resp)
      roll_1.src = url_roll1
})
.catch(error=> console.log(error))

fetch("img/roll2.jpg")
.then(respuesta => respuesta.blob())
.then(resp =>{
      let url_roll2 = URL.createObjectURL(resp)
      roll_2.src = url_roll2
})
.catch(error=> console.log(error))

fetch("img/roll3.jpg")
.then(respuesta => respuesta.blob())
.then(resp =>{
      let url_roll3 = URL.createObjectURL(resp)
      roll_3.src = url_roll3
})
.catch(error=> console.log(error))

fetch("img/roll4.jpg")
.then(respuesta => respuesta.blob())
.then(resp =>{
      let url_roll4 = URL.createObjectURL(resp)
     roll_4.src = url_roll4
})

.catch(error=> console.log(error))
