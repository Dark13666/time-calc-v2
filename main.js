const version = 'Beta 2.1';

var input2 = document.getElementById('input2');
var input1 = document.getElementById('input1');

console.log('test');

var data1;
var data2;
var data1segundos;
var data2segundos;
var segundos = 0;
var minutos = 0;
var horas = 0;
var dias = 0;
var dia = 0;
var meses = 0;
var anos = 0;
var resultado;

botao.addEventListener('click', function (e) {
    data1 = new Date(input1.value);
    data2 = new Date(input2.value);

    data1segundos = data1.getTime();
    data2segundos = data2.getTime();

    segundos = (data2segundos - data1segundos) / 1000;
    if (isNaN(segundos + 0)) {
        resultado = 'EROR 404';
    } else resultado = segundos + ' segundos';

    if (segundos > 59) {
        minutos = Math.floor(segundos / 60);
        segundos = segundos % 60;
        resultado = minutos + ' minutos, ' + segundos + ' segundos';
    }
    if (minutos > 59) {
        horas = Math.floor(minutos / 60);
        minutos = minutos % 60;
        resultado = horas + ' horas, ' + minutos + ' minutos, ' + segundos + ' segundos';
    }
    if (horas > 23) {
        dias = Math.floor(horas / 24);
        dia = Math.floor(horas / 24);
        horas = horas % 24;
        resultado = dias + ' dias, ' + horas + ' horas, ' + minutos + ' minutos, ' + segundos + ' segundos';
    }
    if (dias > 30) {
        meses = Math.floor(dias / 30);
        dias = dias % 30;
        resultado = meses + ' meses, ' + dias + ' dias, ' + horas + ' horas, ' + minutos + ' minutos, ' + segundos + ' segundos';
    }
    if (dia > 364) {
        anos = Math.floor(dia / 365);
        meses = meses % 12;
        resultado =
            anos +
            ' anos, ' +
            meses +
            ' meses, ' +
            dias +
            ' dias, ' +
            horas +
            ' horas, ' +
            minutos +
            ' minutos, ' +
            segundos +
            ' segundos';
    }

    document.querySelector('#resultado').innerHTML = resultado;
});
