/* var colorFondo = basicScroll.create({
    elem: document.querySelector('body'),
    from: '0',
    to: '500',
    props: {
      '--color': {
        from: 'white',
        to: 'yellow'
      }
    }
}); */

var cabecera = basicScroll.create({
    elem: document.querySelector('#work-experience'),
    from: '550',
    to: '950',
    props: {
      '--opacidad-nav': {
        from: 0,
        to: 1
      }
    }
});

cabecera.start();
