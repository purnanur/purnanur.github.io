// JavaScript Document

$(document).ready(inicio); // Cuando el documento esta cargado ejecuto la función INICIO


var menuLateralVisible = false;
var alturaNavegador = window.innerHeight;
var anchoNavegador = 0;
// Obtenemos la URL
var url = document.location.href;
// Nos quedamos con los parámetros
var nombreModal = url.substring(url.lastIndexOf('#'));
//var vaca = contarCaracteres(nombreModal);
//alert (vaca);
posicionNumero = nombreModal.indexOf("#"), //Obtengo la posición del espacio en la cadena
console.log(posicionNumero);
if (posicionNumero!=-1){ //esto es lo mismo que if (existe==true)
		//alert ("Existe");
		console.log("vino un Numeral!!");
}//if
else{
	nombreModal="nada";
}
console.log(nombreModal);




function muestroMenuLateral(){
	if (!menuLateralVisible){ //esto es lo mismo que if (menuLateralVisible==false)
		//alert ("llegue aca");
		mover({objeto:".menuEscondido", accion: "mostrar", lugar: "izq"});
		//mover({objeto:".negroMenuEscondido", accion: "mostrar", tipo: "css", lugar: "izq"});
		//$('.menuEscondido').css('left',0);
		menuLateralVisible = true;
	}//if
	
}// function

function escondoMenuLateral(){
	if (menuLateralVisible){ //esto es lo mismo que if (menuLateralVisible==false)
		//alert ("llegue aca");
		mover({objeto:".menuEscondido", accion: "esconder", lugar: "izq", ajuste: -14});
		//mover({objeto:".negroMenuEscondido", accion: "esconder", tipo: "css", lugar: "izq"});
		menuLateralVisible = false;
	}//if
}// function

function scrollWeb(){
		desde  = $(this).attr('href');
		/*var elemento = $(desde);
		var posicion = elemento.position();*
		alert( "left: " + posicion.left + ", top: " + posicion.top );*/
		$('html, body, .capa0').animate({scrollTop: $(desde).offset().top - 120}, 1000);//Los -120 es el Alto del menu
}// function

function muestroModalSiExiste ($itemElegido/*Que objeto elegido*/){
	var existe = comprueboSiExiste($itemElegido);
	//alert (vaca);
	if (existe){ //esto es lo mismo que if (existe==true)
		if ($($itemElegido).hasClass('modal')){
        	//alert('Si');
			console.log("es modal");
			$($itemElegido).modal();
		}//if
		else{
			//alert('No');
			console.log("no es modal");
		}//if
	}//if
};

function actualizarAnchoNavegador(){// LAs cosas que hay que cambiar cuando cambia el tamaño de una ventana
	anchoNavegador = window.innerWidth; //Actualizo el ancho del navegador
	//console.log(anchoNavegador);
	cambiosSegunAncho();
}

function cambiosSegunAncho(){
	if (anchoNavegador>667){
		//console.log("Es compu");
		$('.animadoAbajoCompu').addClass('-slide-bottom');
		$('.animadoAbajoCompu').addClass('-opacity');
		
		$('.animadoIzqCompu').addClass('-slide-right');
		$('.animadoIzqCompu').addClass('-opacity');
		
		$('.animadDerCompu').addClass('-slide-left');
		$('.animadoDerCompu').addClass('-opacity');
		
		$('.animadoApareceCompu').addClass('-pop');
		$('.animadoApareceCompu').addClass('-opacity');
	}
	else{
		//console.log("Es celu");
		$('.animadoAbajoCompu').removeClass('-slide-bottom');
		$('.animadoAbajoCompu').removeClass('-opacity');
		
		$('.animadoIzqCompu').removeClass('-slide-right');
		$('.animadoIzqCompu').removeClass('-opacity');
		
		$('.animadDerCompu').removeClass('-slide-left');
		$('.animadoDerCompu').removeClass('-opacity');
		
		$('.animadoApareceCompu').removeClass('-pop');
		$('.animadoApareceCompu').removeClass('-opacity');
	}
	
}

function muestroBuscar (){
	$('#buscador').css('width','300px');
	$('#buscador').css('padding','0 15px');
	$('#buscador').focus();
};

function escondoBuscar (){
	$('#buscador').css('width','0');
	$('#buscador').css('padding','0');
};

function mustroEscondoBuscarCel(){
	//alert ("Tamo ACa");
	 $(".divBuscarCelVerdaderoXD").toggle(400);
}

function iniciarSlider($itemElegido/*Que objeto elegido*/){
	$($itemElegido).layerSlider({
		pauseOnHover: false,
		responsive: true,
		responsiveUnder: 1920,
		layersContainer: 1920,
		navPrevNext: false,
		navStartStop: false,
		navButtons: false,
		skin: 'borderlessdark3d',
		hoverBottomNav: false,
		skinsPath: 'layerslider/skins/'
	});
}

function inicioFancyboxSiExiste ($itemElegido/*Que objeto elegido*/){
	var existe = comprueboSiExiste($itemElegido);
	//alert (vaca);
	if (existe){ //esto es lo mismo que if (existe==true)
		//alert ("Existe Pop UP");
		$($itemElegido).fancybox({
			openEffect: "none",
			closeEffect: "none",
			padding: 0,
			helpers     : {
				title: {
					type: 'inside'
				},//title
				overlay: {
				  locked: false
				}//overlay
			}//helpers
		}); //fancybox
	}//if
};//function

function inicioCarouselSiExiste ($itemElegido/*Que objeto elegido*/){
	var existe = comprueboSiExiste($itemElegido);
	//alert (vaca);
	if (existe){ //esto es lo mismo que if (existe==true)
		//alert ("Existe Pop UP");
		/*$($itemElegido).owlCarousel({
			autoPlay: 8000,
			lazyLoad : true,
			scrollPerPage: true,
			navigation : true,
			items : 4,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]
		});//owlCarousel*/
		
		var owl = $($itemElegido);
 
		owl.owlCarousel({
			autoPlay: 8000,
			lazyLoad : true,
			scrollPerPage: true,
			navigation:false,
			/*navigationText: [
			  "<img class='pull-right icon-chevron-left' src='img/slider/galeria/flechaIzqADR2.png' alt=''/>",
			  "<img class='pull-left icon-chevron-right' src='img/slider/galeria/flechaDerADR2.png' alt=''/>"
			  ],*/
			items : 4,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]
		});
		 
		  // Custom Navigation Events
		  $(".owl-next").click(function(){
			owl.trigger('owl.next');
		  })
		  $(".owl-prev").click(function(){
			owl.trigger('owl.prev');
		  })
}//if
};//function

function inicio () {
	//alert ("Cagamos JQuery!!");
	//console.log(url);
	//$("#modal-tr1-ECEV").modal();
	//$(nombreModal).modal();
	actualizarAnchoNavegador();
	$(window).resize(actualizarAnchoNavegador);
	muestroModalSiExiste(nombreModal);
	$(".muestroMenu").click(muestroMenuLateral);
	$(".lupita").click(muestroBuscar);
	$(".lupitaCel").click(mustroEscondoBuscarCel);
	$('a.go').click(scrollWeb);
	//inicioDOS ();
	$(".esconderMenuLateral").not(".menuEscondido").click(escondoMenuLateral); // Al apretar cualquier cosa menos .menuEscondido
	$(".esconderMenuLateral").click(escondoBuscar); // Al apretar cualquier cosa menos #buscador
	//$("#menuTop").not('.contBuscador').click(escondoBuscar); // Al apretar cualquier cosa menos #buscador
	inicioFancyboxSiExiste (".fancybox");
	/* Initializing the slider */
	iniciarSlider("#layerslider");
	/* Initializing the slider */
	iniciarSlider("#layerslider2");
	/* Inicio Carousel */
	inicioCarouselSiExiste ("#owl-demo");
}


/* SCROLL */

$(window).scroll(function() {

	var scrollTop = $(window).scrollTop();
	//alert ("Hiciste Scroll");
	  	if (scrollTop > 48) {
		
		} 
		else {
			//alert ("Tamo aca");
			//$('.verde').removeClass('navbar-fixed-top');

		}
		
	  
	  var parallaxElements = $('.parallaxJquery'),
    	parallaxQuantity = parallaxElements.length;
		
		window.requestAnimationFrame(function () {

			for (var i = 0; i < parallaxQuantity; i++) {
			  var currentElement =  parallaxElements.eq(i);
			  var scrolled = $(window).scrollTop();
				  
				currentElement.css({
				  'transform': 'translate3d(0,' + scrolled * -0.2 + 'px, 0)'
				});
		
		}
		
		
			
		});
		  
		


});