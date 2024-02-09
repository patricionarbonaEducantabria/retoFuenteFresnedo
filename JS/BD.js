class BD {

    constructor() {
        this._id = id || "NOID";
        this._modelo = modelo || "NOMOD";
        this._consumo = consumo || 1;
    }

    consultaEmail(email) {
        let validaInicio = id.startsWith('ELEC - ');
        let validaLongitud = (id.length >= 10 && id.length <=20);
        return validaInicio && validaLongitud;
    }

    consultaContrasenia(email,contrasenia) {
        let resultado = -1;
        let validarValor = (horas >= 0);
        if(validarValor) {
            resultado = this._consumo * horas;
        }
        return resultado;
    }

    consultaNuevaContrasenia(email,contrasenia) {

    }
}