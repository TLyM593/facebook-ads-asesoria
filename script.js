// Mostrar secciones dinámicamente
function mostrarSeccion(seccion) {
    const contenido = document.getElementById('contenido');
    let html = '';

    if (seccion === 'calculadora') {
        html = `
            <section class="container">
                <h2>Calculadora de Presupuesto</h2>
                <form id="calculadoraForm">
                    <label for="presupuesto">Presupuesto Diario (USD):</label>
                    <input type="number" id="presupuesto" placeholder="Ej: 10" required>
                    <label for="duracion">Duración (días):</label>
                    <input type="number" id="duracion" placeholder="Ej: 7" required>
                    <button type="submit">Calcular</button>
                </form>
                <p id="resultado"></p>
            </section>
        `;
    } else if (seccion === 'consejos') {
        html = `
            <section class="container">
                <h2>Consejos para Optimizar tus Anuncios</h2>
                <ul>
                    <li>Analiza métricas clave como CTR y ROAS.</li>
                    <li>Prueba diferentes formatos de anuncios.</li>
                    <li>Ajusta tu segmentación de público.</li>
                    <li>Usa textos persuasivos.</li>
                    <li>Mantén una creatividad visual coherente con tu marca.</li>
                </ul>
            </section>
        `;
    } else if (seccion === 'contacto') {
        html = `
            <section class="container">
                <h2>Contacto</h2>
                <p>¿Necesitas asesoría personalizada? ¡Contáctanos!</p>
                <form id="contactoForm">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" placeholder="Tu nombre" required>
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Tu correo electrónico" required>
                    <label for="mensaje">Mensaje:</label>
                    <textarea id="mensaje" placeholder="Escribe tu mensaje" required></textarea>
                    <button type="submit">Enviar</button>
                </form>
                <div class="contact-links">
                    <p><a href="https://wa.me/c/593979192219" target="_blank">WhatsApp</a></p>
                    <p><a href="https://www.facebook.com/MarketingEnFacebook" target="_blank">Facebook</a></p>
                </div>
            </section>
        `;
    } else {
        html = document.getElementById('guia').outerHTML;
    }

    contenido.innerHTML = html;

    // Agregar funcionalidad a la calculadora
    if (seccion === 'calculadora') {
        document.getElementById('calculadoraForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const presupuesto = parseFloat(document.getElementById('presupuesto').value);
            const duracion = parseFloat(document.getElementById('duracion').value);
            const total = presupuesto * duracion;
            document.getElementById('resultado').innerText = `Presupuesto total: $${total.toFixed(2)} USD`;
        });
    }

    // Agregar funcionalidad al formulario de contacto
    if (seccion === 'contacto') {
        document.getElementById('contactoForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Mensaje enviado con éxito. ¡Gracias por contactarnos!');
        });
    }
}