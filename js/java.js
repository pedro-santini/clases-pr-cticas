let nombre;
nombre = prompt("Ingrese su nombre");

let edad;
edad = parseInt(prompt("Ingrese su edad ")); 

let boolean;
if (edad>=18) {
    boolean=true
} else {
    boolean=false
    
};

console.log(nombre);
console.log(edad);
console.log(boolean);

let acceso = (edad>=18) && (edad=<60);
if(acceso=true){
    console.log("Tiene la edad permitida para navegar en la web.")
} else {
    alert("NO PUEDE NAVEGAR EN LA WEB");
};