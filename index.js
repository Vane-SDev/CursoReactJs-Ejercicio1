document.getElementById('estado').addEventListener('change', function () {
    var estadoSeleccionado = this.value.trim();
    var palabras = estadoSeleccionado.split(' ');
    for (var i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
    }
    estadoSeleccionado = palabras.join(' ');
    document.getElementById('estadoSeleccionado').textContent = estadoSeleccionado;
});