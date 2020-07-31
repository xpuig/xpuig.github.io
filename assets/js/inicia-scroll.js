var logo = basicScroll.create({
  elem: document.querySelector('#logo'),
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

var showingGallery = basicScroll.create({
  elem: document.querySelector('#intro-gallery'),
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
});

cabecera.start();
showingGallery.start();
logo.start();