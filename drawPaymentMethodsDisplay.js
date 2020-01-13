
function drawPaymentsMethodsView(data)
{
    let draw = '<ul class="nav nav-tabs" role="tablist">';
    let int = 0;

    for (let key in data){
        let active = int == 0 ? 'active' : '';

        if (key == 'CREDIT_CARD' /*|| key == 'BOLETO'*/) {
            let name = key == 'CREDIT_CARD' ? 'CARTÃO DE CRÉDITO' : key;
            draw += '<li role="presentation" class="' + active + '"><a href="#' + data[key].name + '" aria-controls="home" role="tab" data-toggle="tab">' + name + '</a></li>';
        }

        int++;
    }

    draw += '</ul>';

    int = 0;

    draw += '<div class="tab-content">';
    for (let key in data){
        // if(key == 'BOLETO') {
        //     draw += drawBoletoArea(data, key, int);
        // }

        if(key == 'CREDIT_CARD') {
            draw += drawCreditCardArea(data, key, 0);
        }

        int++;
    }
    draw += '</div>';
 
    $("div.payments").empty().html(draw);
    getBrand();
}

function drawBoletoArea(data, key, i)
{
    const urlMainImgMethod = 'http://stc.pagseguro.uol.com.br';

    let active = i == 0 ? 'active' : '';
    let draw = '<div role="tabpanel" class="tab-pane ' + active + '" id="' + data[key].name + '">';

    for(let i in data[key].options ) {

        draw += '<div class="col-md-2">';

        if(data[key].options[i].images){
            draw += '<img src="' + urlMainImgMethod + data[key].options[i].images['MEDIUM'].path + '">';
            draw += '<p style="margin-top: 10px;" id="pay">';
            draw += '<a href="#BOLETO" class="btn btn-sm btn-success" id="pay">Pagar com boleto</a></p>';
        }
        draw += '<img src="' + mainUrl + 'assets/img/loading.gif" class="loading">';

        draw += '</div>';
    }

    draw += '</div>';

    return draw;
}

function drawCreditCardArea(data, key, i)
{
    const urlMainImgMethod = 'http://stc.pagseguro.uol.com.br';

    let active = i == 0 ? 'active' : '';
    let draw = '<div role="tabpanel" class="tab-pane ' + active + '" id="' + data[key].name + '" style="padding-top: 20px;">';
    draw += '<div class="col-md-12">';

    draw += '<div class="col-md-12">';

    for(let i in data[key].options ) {

        draw += '<div class="col-md-2">';

        if(data[key].options[i].images){
            draw += '<img src="' + urlMainImgMethod + data[key].options[i].images['MEDIUM'].path + '">';
        }
        draw += '</div>';
    }

    draw += '</div>';// col-md-6

    draw += '<div class="col-md-12">';

    draw += creditCardForm();

    draw += '</div>';// col-md-6

    draw += '</div>';// col-md-12

    draw += '</div>';

    return draw;
}

function creditCardForm()
{
    let form = '<form id="creditCardForm">';

    form += '<h3 style="padding-top:10px;">Digite os dados do seu cartão abaixo:</h3>';
    form += '<hr>';

    form += '<div class="row"><div class="col-md-12"><div id="brand"></div></div></div><hr>';

    form += '<div class="row">';

    form += '<div class="col-md-12">';
    form += '<div class="form-group">';
    form += '<label for="exampleInputEmail1">NÚMERO CARTÃO</label>';
    form += '<input type="text" class="form-control" placeholder="NÚMERO CARTÃO" id="cardNumber">';
    form += '</div>';

    form += '<div class="form-group">';
    form += '<label for="exampleInputPassword1">NOME CARTÃO</label>';
    form += '<input type="text" class="form-control" placeholder="NOME CARTÃO" id="cardName">';
    form += '</div>';

    form += '</div>';

    form += '</div>';

    form += '<div class="row">';

    form += '<div class="col-md-6">';
    form += '<div class="form-group">';
    form += '<label for="exampleInputPassword1">Mês Expiração</label>';
    form += '<input type="text" class="form-control" placeholder="Mês" id="cardMonth">';
    form += '</div>';
    form += '</div>';

    form += '<div class="col-md-6">';
    form += '<div class="form-group">';
    form += '<label for="exampleInputPassword1">Ano Expiração</label>';
    form += '<input type="text" class="form-control" placeholder="Ano" id="cardYear">';

    form += '</div>';

    form += '</div>';

    form += '</div>';

    form += '<div class="row">';
    
    form += '<div class="col-md-6">';
    form += '<div class="form-group">';
    form += '<label for="exampleInputPassword1">CVV</label>';
    form += '<input type="text" class="form-control" placeholder="CVV" id="cardCVV">';
    form += '<input type="hidden" class="form-control" id="cardBrand">';
    form += '</div>';
    form += '</div>';

    form += '</div>';

    form += '<div class="row">';
    form += '<div class="col-md-12 installments" id="installmentsArea">';
    form += '</div>';
    form += '</div>';

    form += '<a href="#CREDIT_CARD" class="btn btn-lg btn-success" type="submit" class="btn btn-default PaymentCreditCard" id="pay">Pagar</a>';
    form += '<img src="' + mainUrl + 'assets/img/loading.gif" class="loading">';
    form += '</form>';

    return form;
}

function drawInstallments(installments) {
    let select = '<h3>Parcelamento</h3>';

    select += '<div class="form-group">';
    select += '<select name="installments" id="installmentsSelect" class="form-control">';

    for(let b of installments) {
        select += '<option value="' + b.quantity + '|' + b.installmentAmount + '">' + b.quantity + 'x de ' +  b.installmentAmount + ' - Total ' + b.totalAmount + '</option>';
    }

    select += '</select>';
    select += '</div>';

    return select;
}