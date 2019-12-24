// JavaScript Document

function inicioDOS () {
	alert ('Funciones Genericas en Raiz');
};

function ejecutoNprogres(){
	$('.version').text(NProgress.version);
    NProgress.start();
    setTimeout(function() { NProgress.done(); }, 1000);
}

var alturaMaxima = 0; //Defino la altura maxima de la ventana
var $idModalMosando='';


function contarCaracteres($texto){ 
	var $largo = $texto.length;  
 	return $largo; 
};

function comprueboSiExiste($itemElegido/*Que objeto elegido*/){ 
	var $existencia=false;
	if ( $($itemElegido).length ) {//Comruebo si existe el item elegido
		$existencia=true;
	}//if
 	return $existencia; 
};

function hacerAlgo ($itemElegido/*Que objeto elegido*/){
	var existe = comprueboSiExiste($itemElegido);
	//alert (vaca);
	if (existe){ //esto es lo mismo que if (existe==true)
		alert ("esto es lo nuevo");
	}//if
};


function centrarVertical (options){
	
	var defaults = {
		  objeto: this,
		  tipo: "margen",
		  arriba: "si",
		  abajo:  "si",
		  ajuste: 0
		};
	
	//alert(options.objeto);
	var options = $.extend(defaults, options);
	var existe = comprueboSiExiste(options.objeto);
	if (existe){ //esto es lo mismo que if (existe==true)
		//alert ("esto es lo nuevo");
		
		alturaMaximaTEMP = $(window).height();
		var alturaElemento = $(options.objeto).height();
		var difAltura = (alturaMaximaTEMP-alturaElemento);
		var margen = (difAltura/2);
		var ventana_ancho = $(window).width();
		var ventana_alto = $(window).height();
		margen = (margen+options.ajuste);
		//alert(ventana_ancho);
		//alert(ventana_alto);
		//alert(alturaElemento);
		//alert(difAltura);
		//alert(margen);
		//alert(options.objeto);
		if (options.tipo=="margen"){
			if (options.arriba=="si"){
				$(options.objeto).css({"margin-top":margen});
			}// if arriba
			
			if (options.abajo=="si"){
				$(options.objeto).css({"margin-bottom":margen});
			}//if abajo
			
		}//if margen
		
		if (options.tipo=="padding"){
			if (options.arriba=="si"){
				$(options.objeto).css({"padding-top":margen});
			}// if arriba
			
			if (options.abajo=="si"){
				$(options.objeto).css({"padding-bottom":margen});
			}//if abajo
			
		}//if margen
		
	}//if exsite
};//function centrarVertical

function tooltipDos($itemElegido/*Que objeto quiero cambiar*/,$tipoCambioVisual/*Si es Correcto o Error*/,$mensaje/*Mensaje que quiero enviar*/){ 
	//alert('El objeto que quiero cambiar '+$itemElegido);
	//alert('Que cambio quiero hacer '+$tipoCambioVisual);
	if ($tipoCambioVisual=="error"){
		//alert ('tiene que tener 3 caracteres');
		$($itemElegido).attr('data-toggle',"tooltip");
		$($itemElegido).attr('data-placement',"right");
		$($itemElegido).attr('data-original-title',$mensaje);
		$($itemElegido).tooltip('show');
		$('.tooltip').css({"min-width":"200px"});
		$('.tooltip-inner').css({"background-color":"#d9534f"}); 
		$('.tooltip.right .tooltip-arrow').css({"border-right-color":"#d9534f"});
		$('.tooltip.left .tooltip-arrow').css({"border-left-color":"#d9534f"});
	}//if
	else if ($tipoCambioVisual=="correcto"){
		$($itemElegido).attr('data-toggle',"tooltip");
		$($itemElegido).attr('data-placement',"right");
		$($itemElegido).attr('data-original-title',$mensaje);
		$($itemElegido).tooltip('show');
		//$('.tooltip').css({"min-width":"200px"});
		$('.tooltip-inner').css({"background-color":"#5cb85c"}); 
		$('.tooltip.right .tooltip-arrow').css({"border-right-color":"#5cb85c"});
		$('.tooltip.left .tooltip-arrow').css({"border-left-color":"#5cb85c"});
	}//else if
	
	else if ($tipoCambioVisual=="eliminar"){
		$($itemElegido).removeAttr('data-toggle');
		$($itemElegido).removeAttr('data-placement');
		$($itemElegido).removeAttr('data-original-title');
		$($itemElegido).tooltip('destroy');
		//$($itemElegido).tooltip('show');
		}//else if
};//function

function tooltip (options){
	
	var defaults = {
		  objeto: this,
		  lugar: "top",
		  tipo:"ok",
		  msj: "Mensaje generico"
		};
	
	//alert(options.objeto);
	var options = $.extend(defaults, options);
	var existe = comprueboSiExiste(options.objeto);
	if (existe){ //esto es lo mismo que if (existe==true)
		//alert ("esto es lo nuevo");
		
		if (options.accion=="esconder"){ // defino si es 0 o el ancho en negativo
			var llegada = -ancho;
		}
		else {
			var llegada = 0;
		}
		
		var tipo = options.tipo; // es igual que poner "css" o "animate"
		switch(options.lugar){ // Chequeo que lugar quiero el movimiento
			
			case "izq":
				//alert("Estamos en IZQ");
				$(options.objeto)[tipo]({"left":llegada});
			break;
			
			case "der":
				alert("Estamos en DER");
			break;
			
			case "arriba":
				alert("Estamos Arriba");
			break;
			
			case "abajo":
				alert("Estamos Abajo");
				$(options.objeto)[tipo]({"down":llegada});
			break;
			
			break;
		}//switch
		
	}//if exsite
};//function tooltip

function asignarAlturaMaxima ($itemElegido/*Que objeto elegido*/){
	var existe = comprueboSiExiste($itemElegido);
	if (existe){ //esto es lo mismo que if (existe==true)
		$($itemElegido).css({"min-height":alturaMaxima});
	}//if
};

function esconderIzq ($itemElegido/*Que objeto elegido*/){
	var existe = comprueboSiExiste($itemElegido);
	if (existe){ //esto es lo mismo que if (existe==true)
		var ancho = $($itemElegido).width();
		$($itemElegido).css({"left":-ancho});
	}//if
};

function mover (options){
	
	var defaults = {
		  objeto: this,
		  accion: "esconder",
		  tipo: "animate",
		  lugar: "izq",
		  ajuste: 0
		};
	
	//alert(options.objeto);
	var options = $.extend(defaults, options);
	var existe = comprueboSiExiste(options.objeto);
	if (existe){ //esto es lo mismo que if (existe==true)
		//alert ("esto es lo nuevo");
		var alto = $(options.objeto).height();
		var ancho = $(options.objeto).width();
		//alert(options.objeto);
		//alert(objetoAlto);
		//alert(objetoAncho);
		if (options.accion=="esconder"){ // defino si es 0 o el ancho en negativo
			var llegada = -ancho+(options.ajuste);
		}
		else {
			var llegada = 0;
		}
		
		var tipo = options.tipo; // es igual que poner "css" o "animate"
		switch(options.lugar){ // Chequeo que lugar quiero el movimiento
			
			case "izq":
				//alert("Estamos en IZQ");
				$(options.objeto)[tipo]({"left":llegada});
			break;
			
			case "der":
				alert("Estamos en DER");
			break;
			
			case "arriba":
				alert("Estamos Arriba");
			break;
			
			case "abajo":
				alert("Estamos Abajo");
				$(options.objeto)[tipo]({"down":llegada});
			break;
			
			break;
		}
		//alert(alturaElemento);
		//alert(difAltura);
		//alert(margen);
		//alert(options.objeto);
		/*if (options.tipo=="margen"){
			if (options.arriba=="si"){
				$(options.objeto).css({"margin-top":margen});
			}// if arriba
			
			if (options.abajo=="si"){
				$(options.objeto).css({"margin-bottom":margen});
			}//if abajo
			
		}//if margen
		
		if (options.tipo=="padding"){
			if (options.arriba=="si"){
				$(options.objeto).css({"padding-top":margen});
			}// if arriba
			
			if (options.abajo=="si"){
				$(options.objeto).css({"padding-bottom":margen});
			}//if abajo
			
		}//if margen*/
		
	}//if exsite
};//function centrarVertical

function centrarVerticalModal (){
	var $idModal =$(this).attr('href');
	//alert ($idModal);
	$idModalMosando=$idModal;
	//$($idModal+" .modal-content").addClass("animado");
	$($idModal+" .modal-content").css({"margin-top":100});
	$($idModal+" .modal-content").css({"opacity":0});
	$($idModal).on('shown.bs.modal', function () {
 		var alturaElemento=$($idModal+" .modal-content").height();
		//alert(alturaElemento);
		var margen = ((alturaMaxima-alturaElemento)/2);
		$(".modal-content").animate({"margin-top":margen,"opacity":1},350, 'easeOutBack');
		//$($idModal+" .modal-content").css({"margin-top":margen});
		
	})
}

//Ojo que tiene que existir el Div "#resultado"
function validarRegistro($valUsuario/*Valor de Usuario*/,$valBase/*Base en la que Chequear*/){
    //hace la búsqueda
	//alert("Estamo Aca!!");
    $.ajax({
		type: "POST",
        url: "funciones/validarRegistro.php",
        data: "valor="+$valUsuario+"&base="+$valBase,
        dataType: "html",
        error: function(){
        	alert("error petición ajax");
        },
    	success: function(data){
			$("#resultado").html(data);
        	n()
        }                                           
	});
};

function centrarHorizontalPaginacion (options){
	
	var defaults = {
		  objetoLeoAncho: this,
		  objetoAplico: this,
		  ajuste: 0
		};
	
	//alert(options.objeto);
	var options = $.extend(defaults, options);
	var existe = comprueboSiExiste(options.objetoLeoAncho);
	if (existe){ //esto es lo mismo que if (existe==true)
		//alert ("esto es lo nuevo");
		var anchoTMP = $(options.objetoLeoAncho).width();
		var ancho = (anchoTMP+options.ajuste)
		//alert(ancho);
		$(options.objetoAplico).css({"width":ancho});
		//$(options.objeto).removeProp("display")
		$(options.objetoAplico).css({"margin":"0 auto"});
	}//if exsite
};//function centrarHorizontal

function centrarHorizontal (options){
	
	var defaults = {
		  objeto: this,
		  ajuste: 0
		};
	
	//alert(options.objeto);
	var options = $.extend(defaults, options);
	var existe = comprueboSiExiste(options.objeto);
	if (existe){ //esto es lo mismo que if (existe==true)
		//alert ("esto es lo nuevo");
		var anchoTMP = $(options.objeto).width();
		var ancho = (anchoTMP+options.ajuste)
		//alert(ancho);
		$(options.objeto).css({"width":ancho});
		$(options.objeto).css({"margin":"0 auto"});
	}//if exsite
};//function centrarHorizontal

function alertaPrueba (){
	alert ("Estoy en otra Funcion!!");
}

function pruebaPasoParametros(event){
    alert(event.data.param1);
    alert(event.data.param2);
}

function enviarFormulario($itemElegido/*Que objeto elegido*/){
	$($itemElegido).submit();
}