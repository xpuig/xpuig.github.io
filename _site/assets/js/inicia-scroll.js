var logo = basicScroll.create({
  elem: document.querySelector('header, footer'),
  from: '0',
  to: '200',
  props: {
    '--opacidad-logo': {
      from: 1,
      to: 0
    }
  }
});

var cabecera = basicScroll.create({
    elem: document.querySelector('#work-experience'),
    from: '1050',
    to: '1350',
    props: {
      '--opacidad-nav': {
        from: 0,
        to: 1
      },
      '--translateY': {
        from: `${ 100 }px`,
        to: 0
      }
    }
});

var textAbout = basicScroll.create({
  elem: document.querySelector('.about-text'),
  from: '650',
  to: '750',
  props: {
    '--opacidad-about': {
      from: 0,
      to: 1
    },
    '--translateY': {
      from: `${ 100 }px`,
      to: 0
    }
  }
});

/* var showingGallery = basicScroll.create({
  elem: document.querySelectorAll('.image-gallery'),
  from: '300',
  to: '500',
  props: {
    '--opacidad-gal': {
      from: 0,
      to: 1
    },
    '--translateY': {
      from: `${ 100 }px`,
      to: 0
    }
    
  }
}); */

cabecera.start();
textAbout.start();
/* showingGallery.start(); */
logo.start();

document.querySelectorAll('.image-gallery').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 200,
		to: 500,
		direct: true,
		props: {
      '--opacidad-gal': {
        from: 0,
        to: 1
      },
			'--translateY': {
				from: `${ 14 * modifier }px`,
				to: `${ -5 * modifier }px`
			}
		}
	}).start()
		
})