var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas")

//FUNCIONES

opcion = parseInt(opcion);

switch(opcion){
    case 1:
        var byp = parseInt(prompt("Seleccione una opción \n1.- Ver Boleta \n2.- Pagar cuenta"));
        switch(byp){
            case 1:
                alert("Haga click aquí para descargar su boleta")
                break;
            case 2:
                alert("Usted está siendo transferido. Espere por favor...")
                break;
            default:
                alert("La opción ingresada no es válida. Por favor, recargue la página e intente nuevamente.");
                break;    
        }
        break;
    case 2:
        var syl = parseInt(prompt("Seleccione una opción \n1.- Problemas con la señal \n2.- Problemas con las llamadas"));
            switch(syl){
                case 1:
                    var syl1 = prompt("A continuación escriba su solicitud");
                        alert("Estimado usuario, su solicitud: '"+syl1+"' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.")
                    break;
                case 2:
                    var syl2 = prompt("A continuación escriba su solicitud");
                    alert("Estimado usuario, su solicitud: '"+syl2+"' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.")
                    break;
                default:
                    alert("La opción ingresada no es válida. Por favor, recargue la página e intente nuevamente.");
                    break;    
            }
        break;
    case 3:
        var ec = prompt("¡Mentel tiene una oferta acorde a tus necesidades! \nPara conocer más información y ser asesorado personalmente por un ejecutivo escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'");
            function comparar(ec) {
                if (ec === "SI") {
                    alert("Un ejecutivo contactará con usted");
                } else if (ec === "NO") {
                    alert("Gracias por preferir nuestros servicios");
                } 
            }
            resultado = comparar(ec)
        break;
    case 4:
        var oc = prompt("A continuación escriba su consulta");
            alert("Estimado usuario, su consulta: '"+oc+"' Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos.")
        break;        
    default:
        alert("La opción ingresada no es válida. Gracias por preferir nuestros servicios");
        break;    
}