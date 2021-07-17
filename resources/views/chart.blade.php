<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/index.css">
    
    <title>Gráficos</title>
</head>
<body>
    <div id="Chart" data-token="{{ csrf_token() }}"></div>

    <script src="{{ url('/js/components/Chart/index.js') }}"></script>
</body>
</html>