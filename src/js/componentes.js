import '../css/componentes.css'

export const saludar = ( nombre ) => {

    console.log('creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola ${ nombre }, ¿Como estás?`;

    document.body.append(h1);
}