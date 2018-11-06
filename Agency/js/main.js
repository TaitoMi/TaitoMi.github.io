jQuery(document).ready(function($) {
	//popup learn
	var overlay = $('.overlay'),
		link_l = $('#link_learn'),
		close = $('#close_l'),
		modal_l = $('.modal-w_learn');

		link_l.click(function(){
			modal_l.addClass('modal-w_learn_a');
			overlay.show();
		});
		close.click(function() {
			modal_l.removeClass('modal-w_learn_a');
			overlay.hide();
		});
		overlay.click(function() {
			modal_l.removeClass('modal-w_learn_a');
			overlay.hide();
		});
	// Gallery btn
	var all = $('.all'),
		allbtn = $('.forbtn'),
		printbtn = $('.printbtn'),
		webbtn = $('.webbtn'),
		interbtn = $('.interface'),
		mockupbtn = $('.mockupbtn'),
	// Gallery img
		interimg = $('.inter'),
		mockupimg = $('.mockup'),
		printimg = $('.print'),
		webimg = $('.web');
	all.click(function() {
		interimg.show();
		mockupimg.show();
		webimg.show();
		printimg.show();
		all.removeClass('glbtn');
		allbtn.removeClass('crntbtn');
	});
	printbtn.click(function() {
		interimg.hide();
		mockupimg.hide();
		webimg.hide();
		printimg.show();
		all.addClass('glbtn');
		allbtn.removeClass('crntbtn');
		printbtn.addClass('crntbtn');
	});
	webbtn.click(function() {
		interimg.hide();
		mockupimg.hide();
		printimg.hide();
		webimg.show();
		all.addClass('glbtn');
		allbtn.removeClass('crntbtn');
		webbtn.addClass('crntbtn');
	});
	interbtn.click(function() {
		printimg.hide();
		mockupimg.hide();
		webimg.hide();
		interimg.show();
		all.addClass('glbtn');
		allbtn.removeClass('crntbtn');
		interbtn.addClass('crntbtn');
	});
	mockupbtn.click(function() {
		interimg.hide();
		printimg.hide();
		webimg.hide();
		mockupimg.show();
		all.addClass('glbtn');
		allbtn.removeClass('crntbtn');
		mockupbtn.addClass('crntbtn');
	});
	// Our Team
	var mbtn1 = $('.pt1'),
		mbtn2 = $('.pt2'),
		mbtn3 = $('.pt3'),
		mbtn4 = $('.pt4'),
		mimg = $('.photom'),
		name = $('#descname'),
		descript = $('#description'),
		n1 = $('.name1'),
		n2 = $('.name2'),
		n3 = $('.name3'),
		n4 = $('.name4'),
		d1 = $('.desc1'),
		d2 = $('.desc2'),
		d3 = $('.desc3'),
		d4 = $('.desc4'),
		nh = $('.nhide'),
		dh = $('.dhide');
	
	mbtn1.click(function() {		
		nh.hide();
		dh.hide();
		n1.show();
		d1.show();		
		mimg.css('background', 'url(img/ourteam1.jpg) center center').css('background-size', 'cover');
		
	});
	mbtn2.click(function() {
		nh.hide();
		dh.hide();
		n2.show();
		d2.show();
		mimg.css('background', 'url(img/ourteam2.jpg) center center').css('background-size', 'cover');
	});
	mbtn3.click(function() {
		nh.hide();
		dh.hide();
		n3.show();
		d3.show();
		mimg.css('background', 'url(img/ourteam3.jpg) center center').css('background-size', 'cover');
	});
	mbtn4.click(function() {
		nh.hide();
		dh.hide();
		n4.show();
		d4.show();
		mimg.css('background', 'url(img/ourteam4.jpg) center center').css('background-size', 'cover');
	});
	// Gallery popup
	var imgclick = $('.img'),
		gloverlay = $('.gallery_overlay'),
		glwindow = $('.gallery_window'),
		glclose = $('#close'),
		int1 = $('.inter1'),
		int2 = $('.inter2'),
		mockup1 = $('.mockup1'),
		mockup2 = $('.mockup2'),
		print1 = $('.print1'),
		print2 = $('.print2'),
		web1 = $('.web1'),
		web2 = $('.web2');
//background: url(../img/mockup1.jpg) no-repeat center center
	int1.click(function() {
		glwindow.css('background', 'url(img/inter1.jpg) no-repeat center center');
		gloverlay.show(500);
		glwindow.show(500);

	});
	int2.click(function() {
		glwindow.css('background', 'url(img/inter2.jpg) no-repeat center center');
		gloverlay.show(500);
		glwindow.show(500);

	});
	mockup1.click(function() {
		glwindow.css('background', 'url(img/mockup1.jpg) no-repeat center center');
		gloverlay.show(500);
		glwindow.show(500);

	});
	mockup2.click(function() {
		glwindow.css('background', 'url(img/mockup2.jpg) no-repeat center center');
		gloverlay.show(500);
		glwindow.show(500);

	});
	print1.click(function() {
		glwindow.css('background', 'url(img/print1.jpg) no-repeat center center');
		gloverlay.show(500);
		glwindow.show(500);

	});
	print2.click(function() {
		glwindow.css('background', 'url(img/print2.jpg) no-repeat center center');
		gloverlay.show(500);
		glwindow.show(500);

	});
	web1.click(function() {
		glwindow.css('background', 'url(img/web1.jpg) no-repeat center center');
		gloverlay.show(500);
		glwindow.show(500);

	});
	web2.click(function() {
		glwindow.css('background', 'url(img/web2.jpg) no-repeat center center');
		gloverlay.show(500);
		glwindow.show(500);

	});
	gloverlay.click(function() {
		gloverlay.hide(500);
		glwindow.hide(500);

	});
	glclose.click(function() {
		gloverlay.hide(500);
		glwindow.hide(500);
	});
	// Modal Thanks \\
	var thanks_btn = $('.btn'),
		thanks_modal = $('.thanks');
	thanks_btn.click(function() {
		gloverlay.show(1000);
		thanks_modal.show(1000);
	});
	gloverlay.click(function() {
		gloverlay.hide(1000);
		thanks_modal.hide(1000);
	});
	// Menu Mobile \\
	$('.span-wrapper').click(function() {
		$('.btn-mobile').toggleClass('span-active');
		$('.mobile-menu').toggleClass('mobile-menu-a');
	});
	// $('.span-wrapper').click(function() {
	// 	$('span').addClass('span-active');	
	// 	$('.wrap').addClass('span-close');	
	// 	$('.mobile-menu').show();
	// 	console.log('tyknul');
	// });
	// $('.wrap').click(function() {
	// 	$('span').removeClass('span-active');	
	// 	$('.wrap').removeClass('span-close');	
	// 	$('.mobile-menu').hide();
	// 	console.log('ottyknul');
	// });
	
	

});