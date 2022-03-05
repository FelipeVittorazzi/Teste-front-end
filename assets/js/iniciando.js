function calcular() {

    var txtv = window.document.querySelector('input#txtvel');
    var res = window.document.querySelector('div#res');
    var vel = Number(txtv.value);

    res.innerHTML = `
        <p>
            <strong>
                Sua velocidade atual é de ${vel} Km/h
            </strong>
        </p>`;

    res.innerHTML += `
        <p>
            <strong>
                Dirija sempre com cinto de segurança
            </strong>
        </p>`;

    if (vel > 60) {
        res.innerHTML += `<p>Você está <strong>MULTADO</strong></p>`
    };

};