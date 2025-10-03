const toggleBtn = document.querySelector('.menu-toggle');
const sidebar = document.getElementById('sidebar');
const allMenus = document.querySelectorAll('.has-submenu');

// Expande/recolhe sidebar manualmente
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('expanded');
});

// Controle de submenus em todos os níveis
allMenus.forEach(item => {
  item.addEventListener('click', e => {
    e.stopPropagation(); // evita que clique no filho afete o pai
    const isActive = item.classList.contains('active');
    const submenu = item.nextElementSibling;

    // Fecha apenas os irmãos no mesmo nível
    const siblings = Array.from(item.parentElement.children)
      .filter(el => el !== item && el.classList.contains('has-submenu'));

    siblings.forEach(sib => {
      sib.classList.remove('active');
      const sibSubmenu = sib.nextElementSibling;
      if (sibSubmenu && sibSubmenu.classList.contains('submenu')) {
        sibSubmenu.style.maxHeight = null;
      }
    });

    if (!isActive) {
      // abre submenu
      item.classList.add('active');
      if (submenu && submenu.classList.contains('submenu')) {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
      }
      sidebar.classList.add('expanded');
    } else {
      // fecha submenu
      item.classList.remove('active');
      if (submenu && submenu.classList.contains('submenu')) {
        submenu.style.maxHeight = null;
      }
      sidebar.classList.remove('expanded');
    }
  });
});
