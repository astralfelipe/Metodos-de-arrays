var radiologia = [ 
    {hora: "11:00", especialista: "Ignacio Schulz", paciente: "Francisca Rojas", RUT: "9878782-1", prevision: "Fonasa"},
    {hora: "11:30", especialista: "Federico Subercaseux", paciente: "Pamela Estrada", RUT: "15345241-3", prevision: "Isapre"},
    {hora: "15:00", especialista: "Fernando Wurtz", paciente: "Armando Luna", RUT: "16445345-9", prevision: "Isapre"},
    {hora: "15:30", especialista: "Ana Maria Godoy", paciente: "Manuel Godoy", RUT: "17666419-0", prevision: "Fonasa"},
    {hora: "16:00", especialista: "Patricia Suazo", paciente: "Ramon Ulloa", RUT: "14989389-K", prevision: "Fonasa"},    
]
 // Acá me faltaba poner luego de la posición del array el objeto luego del índice del array
document.write(`<p class="font-weight-bold">Primera Atención:${radiologia[0].paciente} - ${radiologia[0].prevision} | Última Atención:${radiologia[4].paciente} - ${radiologia[4].prevision}</p>`);


// Acá me faltaba declarar la variable para que se desplegara la lista
var tabla = document.getElementById("tabla_radiolagia");
for(var i=0; i< radiologia.length; i++){
    tabla.innerHTML += `
    <tr>
        <td>${radiologia[i].hora}</td>
        <td>${radiologia[i].especialista}</td>
        <td>${radiologia[i].paciente}</td>
        <td>${radiologia[i].RUT} </td>
        <td>${radiologia[i].prevision}</td>
    </tr>
    `;
}

var traumatologia = [
    {hora: "8:00", especialista: "Maria Paz Altuzarra", paciente: "Paula Sanchez", RUT: "15554774-5", prevision: "Fonasa"},
    {hora: "10:00", especialista: "Raul Araya", paciente: "Angélica Navas", RUT: "15444147-9", prevision: "Isapre"},
    {hora: "10:30", especialista: "Maria Arriagada", paciente: "Ana Klapp", RUT: "17879423-9", prevision: "Isapre"},
    {hora: "11:00", especialista: "Alejandro Badilla", paciente: "Felipe Mardones", RUT: "1547423-6", prevision: "Isapre"},
    {hora: "11:30", especialista: "Cecilia Budnik", paciente: "Diego Marre", RUT: "16554741-K", prevision: "Fonasa"},
    {hora: "12:00", especialista: "Arturo Cavagnaro", paciente: "Cecilia Mendez", RUT: "9747535-8", prevision: "Isapre"},
    {hora: "12:30", especialista: "Andres Kanacri", paciente: "Marcial Suazo", RUT: "11254785-5", prevision: "Isapre"},
]


document.write(`<p class="font-weight-bold">Primera Atención:${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última Atención:${traumatologia[6].paciente} - ${traumatologia[6].prevision}</p>`);

var tabla = document.getElementById("tabla_traumatologia");
for(var i=0; i< traumatologia.length; i++){
    tabla.innerHTML += `
    <tr>
        <td>${traumatologia[i].hora}</td>
        <td>${traumatologia[i].especialista}</td>
        <td>${traumatologia[i].paciente}</td>
        <td>${traumatologia[i].RUT} </td>
        <td>${traumatologia[i].prevision}</td>
    </tr>
    `;
}

var dental = [
    {hora: "8:30", especialista: "Andrea Zuñiga", paciente: "Marcela Retamal", RUT: "11123425-6", prevision: "Isapre"},
    {hora: "11:00", especialista: "María Pía Zañartu", paciente: "Angel Muñoz", RUT: "9878789-2", prevision: "Isapre"},
    {hora: "11:30", especialista: "Scarlett Witting", paciente: "Mario Kast", RUT: "7998789-5", prevision: "Fonasa"},
    {hora: "13:00", especialista: "Francisco Von Teuber", paciente: "Karin Fernandez", RUT: "18887662-K", prevision: "Fonasa"},
    {hora: "13:30", especialista: "Eduardo Viñuela", paciente: "Hugo Sanchez", RUT: "17665461-4", prevision: "Fonasa"},
    {hora: "14:00", especialista: "Raquel Villaseca", paciente: "Ana Sepúlveda", RUT: "14441281-0", prevision: "Isapre"},
]

document.write(`<p class="font-weight-bold">Primera Atención:${dental[0].paciente} - ${dental[0].prevision} | Última Atención:${dental[5].paciente} - ${dental[5].prevision}</p>`);

var tabla = document.getElementById("tabla_dental");
for(var i=0; i< dental.length; i++){
    tabla.innerHTML += `
    <tr>
        <td>${dental[i].hora}</td>
        <td>${dental[i].especialista}</td>
        <td>${dental[i].paciente}</td>
        <td>${dental[i].RUT} </td>
        <td>${dental[i].prevision}</td>
    </tr>
    `;
}


