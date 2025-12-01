// Un objeto para guardar los contadores
let contadores = {
    feliz: 0,
    bien: 0,
    regular: 0,
    triste: 0,
    enojado: 0
};

// Función que se llama al hacer clic en un botón
function contar(estado) {
    contadores[estado] += 1; // Suma 1 al contador
    mostrarResultados(); // Actualiza la pantalla
}

// Función para mostrar los contadores en la página
function mostrarResultados() {
    const divResultados = document.getElementById('resultados');
    let html = '<h2>Tus Estados de Hoy:</h2>';
    
    for (let estado in contadores) {
        let emoji = '';
        if (estado === 'feliz') emoji = '😊';
        if (estado === 'bien') emoji = '👍';
        if (estado === 'regular') emoji = '😐';
        if (estado === 'triste') emoji = '😢';
        if (estado === 'enojado') emoji = '😡';
        
        html += `<p>${emoji} Te sentiste <strong>${estado}</strong>: ${contadores[estado]} veces</p>`;
    }
    
    divResultados.innerHTML = html;
}

// Mostrar resultados al cargar la página
mostrarResultados();
// FUNCIÓN PARA CAMBIAR TEMAS
function cambiarTema(tema) {
    const body = document.body;
    
    if (tema === 'verano') {
        body.style.background = "linear-gradient(135deg, #FF9A9E 0%, #FAD0C4 100%)";
    } else if (tema === 'noche') {
        body.style.background = "linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%)";
    } else if (tema === 'bosque') {
        body.style.background = "linear-gradient(135deg, #56AB2F 0%, #A8E6CF 100%)";
    }
}
