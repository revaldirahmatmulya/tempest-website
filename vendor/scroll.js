$('.scroll').on('click',function (e) {
	
	//ambil isi href
	var tujuan = $(this).attr('href');
	//tangkap element
	var elemenTujuan = $(tujuan);
	
	//pindahkan scroll
	$('html,body').animate({
		scrollTop: elemenTujuan.offset().top -50
	},300,'swing');

	e.preventDefault();
	
});
