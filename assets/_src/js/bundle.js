
(function() {
  this.activeMenu = null;
  this.mouseX = 0;
  this.mouseY = 0;

  const menu = document.querySelector( 'menu.main' );

  document.body.addEventListener( 'mousemove', ( e ) => {
    const mouseTarget = e.target;
    const closestMenu = mouseTarget.closest('.mp');
    if ( closestMenu ) {
      const menuClass = closestMenu.dataset.menu;
      if ( menuClass ) {
        const menuItem = document.querySelector( `menu .${ menuClass }` );
        this.activeMenu = menuItem;
        [...menu.querySelectorAll( 'h2' )].map( ( el ) => {
          el.style.opacity = 0;
        });
        this.activeMenu.style.opacity = 1;
      }
    } else {
      this.activeMenu = null;
      [...menu.querySelectorAll( 'h2' )].map( ( el ) => {
        el.style.opacity = 0;
      });
    }
    lerp(e.clientX, e.clientY);
  });

  function lerp(tx, ty) {
    this.mouseX += (tx - this.mouseX)*0.5;
    this.mouseY += (ty - this.mouseY)*0.5;
  }

  function render() {
    menu.style.transform =
      `translate3d(${ this.mouseX }px, ${ this.mouseY }px, 0)`;
    window.requestAnimationFrame( render );
  }

  render();
}());
