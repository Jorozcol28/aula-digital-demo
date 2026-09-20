const formulario = document.querySelector('#formulario');
const interes = document.querySelector('#interes');
const resultado = document.querySelector('#resultado');
document.querySelectorAll('[data-curso]').forEach(enlace => {
    enlace.addEventListener('click', () => {
        interes.value = enlace.dataset.curso;
        resultado.textContent = '';
    });
});
formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    resultado.textContent = 'Prueba completada. Los campos son válidos. No se ha enviado ni guardado información; en la versión final se conectará el formulario al equipo de la academia.';
});
formulario.addEventListener('input', () => { resultado.textContent = ''; });
