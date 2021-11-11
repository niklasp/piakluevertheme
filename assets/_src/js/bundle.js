
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
      }
    } else {
      this.activeMenu = null;
      [...menu.querySelectorAll( 'h2' )].map( ( el ) => {
        el.style.opacity = 0;
      });
    }
    window.requestAnimationFrame( updateMouse( e.clientX, e.clientY ) );
  });

  const updateMouse = ( tx, ty ) => {
    menu.style.transform = `translate3d(${ tx }px, ${ ty }px, 0)`;
    if ( this.activeMenu ) {
      [...menu.querySelectorAll( 'h2' )].map( ( el ) => {
        el.style.opacity = 0;
      });
      this.activeMenu.style.opacity = 1;
    }
  };
}());
