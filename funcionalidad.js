/** Defino una función llamada "generador" quien se encargará de recorrer el archivo json
 * obtenido de la url sugerida y va a ir asignando los distintos valores a los elementos
 * del archivo HTML.
*/
function generador(datos) {
    // Construyo el nombre
    let nombres1 = datos.results[0].name.first; 
    let nombres2 = datos.results[0].name.last;
    let nombreCompleto = nombres1 + ' ' + nombres2;
    // Construyo la url de la fotografía
    let foto = datos.results[0].picture.large;
    // Obtengo el email
    let correo = datos.results[0].email
    /** Con los siguientes se presentan problemas en los valores devueltos en la consulta.
     * Como se obtienen letras y números además de una cantidad inadecuada de valores, uso
     * los métodos replace() y slice() para resolverlo. */
    let dni = datos.results[0].id.value.replace(/[^0-9]+/g, "").slice(0,8);
    let tel = datos.results[0].phone.replace(/[^0-9]+/g, "").slice(0,8);
    let fnac = datos.results[0].dob.date.slice(0,10);
    let age = datos.results[0].dob.age
    // Incorporo los valores en el documento HTML marcado con ids.
    document.getElementById("CV").innerHTML = "Curriculum Vitae " + nombreCompleto;
    document.getElementById("foto").src = foto;
    document.getElementById("nombre").innerHTML = "Nombre y apellido: " + nombreCompleto;
    document.getElementById("mail").innerHTML = "Correo electrónico: " + correo;
    document.getElementById("dni").innerHTML = "D.N.I. N°: " + dni;
    document.getElementById("tel").innerHTML = "Teléfono: " + tel;
    document.getElementById("lnk").innerHTML = 
            "Linkedin: http://ca.linkedin.com/in/linkedin" + nombres2;
    document.getElementById("nac").innerHTML = "Fecha de nacimiento: " + fnac;
    document.getElementById("edad").innerHTML = "Edad: " + age + " años";
  }
//Definida la función, realizo el fetch
  fetch('https://randomuser.me/api/?seed=28274')
    .then((resp) => resp.json())
    .then(generador);

