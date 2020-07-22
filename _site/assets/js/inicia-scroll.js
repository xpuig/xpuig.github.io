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