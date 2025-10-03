function toggleMenu() {
document.getElementById("menu").classList.toggle("active");
}


function toggleSubmenu(id) {
const submenu = document.getElementById("submenu-" + id);
submenu.classList.toggle("active");
}


function carregarConteudo(pagina) {
document.getElementById("conteudo").innerHTML = `<h3>${pagina}</h3><p>Conteúdo de ${pagina} carregado aqui...</p>`;
}