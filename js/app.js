$(document).ready(function() {

	/* ADD ITEM */

	$('.add').on('click', 'button', function(){
		showItem();
		clearInput();
	}).keyup(function (e) {
		if (e.keyCode == 13) { 
			showItem();
			clearInput();
		}
	});

	/* ERASE ITEM */

	$('#item-list').on('click', '.del-btn', function(){
		$(this).closest('li').slideUp('fast', function(){
			$(this).remove();
		});
	});

	/* CHECK ITEM */

	$('#item-list').on('click', '.check-btn', function(){
		$(this).closest('li').toggleClass('check');
	});

	/* CLEAR LIST */

	$('.list').on('click', '.clr-btn', function(){
		$('li').fadeOut(function(){
			$(this).empty();
		});
	});

});

/* FUNCTIONS */

function showItem () {
	var item = $('#val').val();

	if ( item != "")
	{
		$('#item-list').append('<li><h3>'+ item +'</h3><button class="check-btn"></button><button class="del-btn"></button></li>');
	}
}

function clearInput () {
	$('#val').val('');
}