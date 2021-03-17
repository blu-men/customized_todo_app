<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <title></title>
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  
  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->
  
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
  
  <meta name="theme-color" content="#fafafa">
</head>

<body>
  
  <div class="container">
    
    <div class="jumbotron mt-5">
      <div class="d-flex justify-content-center">

        <!-- ここにtodo入れる -->
        <input type="text" id="js-question" class="alert alert-primary" role="alert"></input>
      </div>
      
      <div id="js-items" class="d-flex justify-content-center">
        <div class="m-2">
          <button type="button" id="js-btn-1" class="btn btn-primary">Primary</button>
        </div>
        <div class="m-2">
          <button type="button" id="js-btn-2" class="btn btn-primary">Primary</button>
        </div>
        <div class="m-2">
          <button type="button" id="js-btn-3" class="btn btn-primary">Primary</button>
        </div>
        <div class="m-2">
          <button type="button" id="js-btn-4" class="btn btn-primary">Primary</button>
        </div>
      </div>
    </div>
  </div>
  
  <script src="app.js"></script>
</body>

</html>