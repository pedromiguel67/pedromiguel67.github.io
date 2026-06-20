document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('task-container');

    // Ordenar las tareas cronológicamente
    const tareasOrdenadas = tareasLiceo.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

    // Validar si hay tareas
    if (tareasOrdenadas.length === 0) {
        container.innerHTML = '<p id="empty-state">No hay tareas ni exámenes pendientes. ¡Todo al día!</p>';
        return;
    }

    // Generar el HTML para cada tarea
    tareasOrdenadas.forEach(item => {
        // Formatear la fecha para lectura amigable (ej: jueves, 25 de junio de 2026)
        const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        // Se añade T00:00:00 para forzar la zona horaria local correcta
        const fechaFormateada = new Date(item.fecha + 'T00:00:00').toLocaleDateString('es-UY', opcionesFecha);

        const card = document.createElement('div');
        // Asignar clase dinámica para cambiar el color según si es tarea o examen
        card.className = `card ${item.tipo.toLowerCase()}`;

        card.innerHTML = `
            <div class="card-header">
                <span class="materia">${item.materia}</span>
                <span class="fecha">${fechaFormateada}</span>
            </div>
            <span class="tipo">${item.tipo}</span>
            <p class="descripcion">${item.descripcion}</p>
        `;
        
        container.appendChild(card);
    });
});