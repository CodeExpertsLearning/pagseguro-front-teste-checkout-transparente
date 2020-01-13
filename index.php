<?php require 'bootstrap.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PagSeguro Teste</title>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
    <style>
    .loading {
        display: none;
    }
    </style>
</head>
<body>
    <div class="container">
        <div class="row">
            <h1>Tela de Testes PagSeguro...</h1>
            <hr>
        </div>
        <div class="msg"></div>
        <div class="row">
            <div class="payments">Carregando...</div>
        </div>

        <div class="row">
         <div class="col-md-12">
                <h3>Resultado...</h3>
                <div class="form-group">
                    <label>Token Cartão...</label>
                    <input type="text" name="card_token" class="form-control">
                </div>

                <div class="form-group">
                    <label>Hash Usuário...</label>
                    <input type="text" name="hash" class="form-control">
                </div>
            </div>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="https://stc.sandbox.pagseguro.uol.com.br/pagseguro/api/v2/checkout/pagseguro.directpayment.js">
    </script>
    <script type="text/javascript">
        const mainUrl = '<?=API_URL;?>/';
        const totalPurchase = '240.00';
        const sessionID = '<?=$sessionToken;?>';
        const tokenMin = '<?=$token;?>';

        PagSeguroDirectPayment.setSessionId(sessionID);
        
    </script>
    <script src="drawPaymentMethodsDisplay.js"></script>
    <script src="pagseguro.js"></script>
</body>
</html>