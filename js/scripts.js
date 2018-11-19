// Por Alejandro Marín Gómez

$(window).scroll(function() {
	
	let Ventana = $(this);
	let Cabecera = $('body > header');
	if(Ventana.scrollTop() > Cabecera.height()) {
		Cabecera.css({'position': 'fixed'});
	} else {
		Cabecera.css({'position': 'relative'});
	}
	
});

$(document).ready(function() {
	
	$('a#AbrirMenuPrincipal').click(function(e) {
		e.preventDefault();
		let Menu = $('body > nav');
		let Body = $('body');
		Menu.addClass('active');
		Menu.fadeToggle('fast', 'linear');
		Body.prepend('<a href="#" id="nav_overlay" class="overlay CerrarMenuPrincipal" style="display: none;"></a>');
		$('a#nav_overlay').fadeIn(600);
	});
	
	$(document).on('click', '.CerrarMenuPrincipal', function(e) {
		e.preventDefault();
		let Menu = $('body > nav');
		let Overlay = $('body > a#nav_overlay');
		Menu.removeClass('active');
		Menu.fadeToggle('fast', 'linear');
		Overlay.fadeOut(600, function() {
			$(this).remove();
		});
	});
	
});