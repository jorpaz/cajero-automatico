let cuentas = [
    {usuario: 'Mali', saldo: 200, password:'asdf123'},
    {usuario: 'Gera', saldo: 290, password: 'asdf123'},
    {usuario: 'Maui', saldo: 67, password: 'asdf123'}
];
let panelInicio, panelPrimerMenu, panelSegundoMenu;
let iniciarSesion, crearCuenta;
let panelConsultaSaldo, panelIngresarMonto, panelRetirarMonto;
let panelConsultaSaldoIngresado, panelConsultaSaldoRetirado;
let nuevasCuentas;
let usuario = {usuario: '', saldo: '', password: ''};
let nuevoMonto = 0;
let saldoInicial = 0;
let sumaMontoYSaldo = 0;
let valorRetirado = 0;
let restaSaldoYMonto = 0;
let saldoFinal = 0;

panelInicio = document.getElementById('inicio');
panelPrimerMenu = document.getElementById('primerMenu');
panelSegundoMenu = document.getElementById('segundoMenu');
iniciarSesion = document.getElementById('login');
crearCuenta = document.getElementById('crearCuenta');
panelConsultaSaldo = document.getElementById('consultaSaldo');
panelConsultaSaldoIngresado = document.getElementById('consultaSaldoIngresado');
panelConsultaSaldoRetirado = document.getElementById('consultaSaldoRetirado');
panelIngresarMonto = document.getElementById('ingresandoMonto');
panelRetirarMonto = document.getElementById('retirandoMonto');

function iniciar(){
    /* Aquí se reinicia todo cuando cierran sesión, vuelve al inicio (menú principal)*/
    panelPrimerMenu.classList.remove('invisible');
    panelPrimerMenu.classList.add('visible');
    panelSegundoMenu.classList.remove('visible');
    panelSegundoMenu.classList.add('invisible');
    document.getElementById('nombreUsuario').value = '';
    document.getElementById('laContra').value = '';
    document.getElementById('bienvenida').innerText ='';
    iniciarSesion.classList.remove('visible');
    iniciarSesion.classList.add('invisible');
    panelConsultaSaldo.classList.remove('visible');
    panelConsultaSaldo.classList.add('invisible');
    crearCuenta.classList.remove('visible');
    crearCuenta.classList.add('invisible');
    document.getElementById('usuarioNuevo').value = '';
    document.getElementById('contraNueva').value = '';
    document.getElementById('saldoNuevo').value = '';
    sumaMontoYSaldo = 0;
    panelRetirarMonto.classList.remove('visible');
    panelRetirarMonto.classList.add('invisible');
};

function login(){
    /* Entra aquí al darle en "iniciar sesión" */
    panelPrimerMenu.classList.remove('visible');
    panelPrimerMenu.classList.add('invisible');
    iniciarSesion.classList.remove('invisible');
    iniciarSesion.classList.add('visible');
};

function ingresar(){
    /* Validar los datos de usuario */ 
    // Cuando el loop acaba de iniciar o reinicia, pedir el nombre de usuario
    panelConsultaSaldo.classList.remove('visible');
    panelConsultaSaldo.classList.add('invisible');
    let nombreIngresado = document.getElementById('nombreUsuario').value;
    let contraIngresada = document.getElementById('laContra').value;
                /* let encontrarUsuario2 = x => x.usuario === nombreIngresado && x.password === contraIngresada  */
                
                //Aquí comprobamos que el usuario y contraseña sean ingresados correctamente
                if (nombreIngresado !== '' && contraIngresada !== ''){
                    //Use un function arrow, el elemento x busca en el array cuentas para ver si son iguales
                    usuario = cuentas.find(x => x.usuario === nombreIngresado && x.password === contraIngresada);
                    if (usuario != undefined){
                        iniciarSesion.classList.remove('visible');
                        iniciarSesion.classList.add('invisible');
                        panelSegundoMenu.classList.remove('invisible');
                        panelSegundoMenu.classList.add('visible');
                        document.getElementById('bienvenida').innerText = '¡Hola, '+nombreIngresado+'!, ¿Qué quieres hacer? Selecciona una opción:'
                    }else {
                        alert('Por favor ingresar usuario y contraseña correcta.');
                        iniciarSesion.classList.remove('invisible');
                        iniciarSesion.classList.add('visible');
                        document.getElementById('nombreUsuario').value = '';
                        document.getElementById('laContra').value = '';
                    }
                    }else{
                        alert('Por favor ingresar usuario y contraseña correcta.');
                        iniciarSesion.classList.remove('invisible');
                        iniciarSesion.classList.add('visible');
                        document.getElementById('nombreUsuario').value = '';
                        document.getElementById('laContra').value = '';
            }

    panelIngresarMonto.classList.remove('visible');
    panelIngresarMonto.classList.add('invisible');
    panelRetirarMonto.classList.remove('visible');
    panelRetirarMonto.classList.add('invisible');
    panelConsultaSaldoIngresado.classList.remove('visible');
    panelConsultaSaldoIngresado.classList.add('invisible');
    panelConsultaSaldoRetirado.classList.remove('visible');
    panelConsultaSaldoRetirado.classList.add('invisible');
};

//Hacer contultas de saldos, desde el boto de nuevo monto y retiro de monto.
function consultaSaldo(){

    //Aquí debería de ir el saldo
    panelSegundoMenu.classList.remove('visible');
    panelSegundoMenu.classList.add('invisible');
    panelIngresarMonto.classList.remove('visible');
    panelIngresarMonto.classList.add('invisible');
    panelConsultaSaldo.classList.remove('invisible');
    panelConsultaSaldo.classList.add('visible');

    
    saldoInicial = parseInt(usuario.saldo);
    document.getElementById('muestraSaldo').innerText = 'El saldo de la cuenta es: $'+ saldoInicial +'.';
    valorRetirado = 0;
};

function consultaSaldoDesdeIngreso(){

    //Aquí debería de ir el saldo visto desde el ingreso de un monto    
    panelSegundoMenu.classList.remove('visible');
    panelSegundoMenu.classList.add('invisible');
    panelIngresarMonto.classList.remove('visible');
    panelIngresarMonto.classList.add('invisible');
    panelConsultaSaldoIngresado.classList.remove('invisible');
    panelConsultaSaldoIngresado.classList.add('visible');

    saldoInicial = parseInt(usuario.saldo);
    document.getElementById('muestraSaldoNuevo').innerText = `Ingresaste $${nuevoMonto}. Ahora el saldo de tu cuenta es: $${saldoInicial}.`;
};

function consultaSaldoDesdeRetiro(){

    //Aquí debería de ir el saldo visto desde el ingreso de un monto    
    panelSegundoMenu.classList.remove('visible');
    panelSegundoMenu.classList.add('invisible');
    panelRetirarMonto.classList.remove('visible');
    panelRetirarMonto.classList.add('invisible');
    panelConsultaSaldoRetirado.classList.remove('invisible');
    panelConsultaSaldoRetirado.classList.add('visible');

    
    saldoInicial = parseInt(usuario.saldo);
    document.getElementById('muestraSaldoRetirado').innerText = `Ingresaste $${valorRetirado}. Ahora el saldo de tu cuenta es: $${saldoInicial}.`;
};

function ingresarMonto(){
    panelSegundoMenu.classList.remove('visible');
    panelSegundoMenu.classList.add('invisible');
    panelIngresarMonto.classList.remove('invisible');
    panelIngresarMonto.classList.add('visible');
    document.getElementById('montoNuevo').value = '';
};

function guardaMontoNuevo(){
    nuevoMonto = document.getElementById('montoNuevo').value;

    sumaMontoYSaldo = parseInt(saldoInicial) + parseInt(nuevoMonto);

    if(nuevoMonto !== ''){
    if(sumaMontoYSaldo > 990){
        let maxIngreso = 990 - saldoInicial;
        alert('El saldo total no debe sobrepasar a $990, debe ingresar máximo $' + maxIngreso + '.');
        document.getElementById('montoNuevo').value = '';

    } else{
        
        document.getElementById('montoNuevo').value = '';
        usuario.saldo = sumaMontoYSaldo;
        return consultaSaldoDesdeIngreso();
    }
    } else{
        alert('Ingrese un dato válido');
        if(nuevoMonto == ''){
            nuevoMonto = 0;
            sumaMontoYSaldo = 0;
        }
        return ingresarMonto();
    }
};

function retirandoMonto(){
    panelSegundoMenu.classList.remove('visible');
    panelSegundoMenu.classList.add('invisible');
    panelRetirarMonto.classList.remove('invisible');
    panelRetirarMonto.classList.add('visible');
    document.getElementById('montoRetirado').value = '';
};

function montoRetirado(){
    valorRetirado = document.getElementById('montoRetirado').value;

    restaSaldoYMonto = parseInt(saldoInicial) - parseInt(valorRetirado);

    if(valorRetirado !== ''){
        if(restaSaldoYMonto < 10){
            let maxRetiro = saldoInicial - 10;
            alert('El saldo total no debe ser menor a $10, debes retirar máximo $' + maxRetiro + '.');
            document.getElementById('montoRetirado').value = '';
        }else {
            document.getElementById('montoRetirado').value = '';
            usuario.saldo = restaSaldoYMonto;
            return consultaSaldoDesdeRetiro();
        }
    } else {
        alert('Ingrese un dato válido');
        if(valorRetirado == ''){
            valorRetirado = 0;
            restaSaldoYMonto = 0;
            return retirandoMonto();
        }
    }
};

function nuevaCuenta(){
    panelPrimerMenu.classList.remove('visible');
    panelPrimerMenu.classList.add('invisible');
    crearCuenta.classList.remove('invisible');
    crearCuenta.classList.add('visible');
};

function guardar(){
    let usuarioNuevo = document.getElementById('usuarioNuevo').value;
    let contraNueva = document.getElementById('contraNueva').value;
    let saldoNuevo = document.getElementById('saldoNuevo').value;

    if((saldoNuevo<10) || (saldoNuevo>990)){
        alert('El monto debe ser mayor a $10 y menor a $990, intenta de nuevo.')
        document.getElementById('usuarioNuevo').value = '';
        document.getElementById('contraNueva').value = '';
        document.getElementById('saldoNuevo').value = '';
    } else {
        alert('¡Se ha guardado tu cuenta exitosamente! Ya puedes iniciar sesión.');
        nuevasCuentas =
            {usuario: usuarioNuevo,
            saldo: saldoNuevo,
            password: contraNueva}
    cuentas.push(nuevasCuentas);

    crearCuenta.classList.remove('visible');
    crearCuenta.classList.add('invisible');
    iniciarSesion.classList.remove('invisible');
    iniciarSesion.classList.add('visible');
            }
};