<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Spring MVC Serve HTML</title>

<script type="text/javascript"
	src="/resources/js/vendor/jquery-1.11.1.min.js"></script>
<link rel="stylesheet" href="../../resources/styles/css/storyline.css">
<!-- main jQuery -->
	<script src="/resources/js/vendor/jquery-1.11.1.min.js"></script>
	<!-- Bootstrap -->
	<script src="/resources/js/vendor/bootstrap.min.js"></script>
<link rel="stylesheet"
	href="/resources/styles/vendor/font-awesome.min.css">
<!-- Bootstrap -->
<link rel="stylesheet" href="/resources/styles/vendor/bootstrap.min.css">
<link
	href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700"
	rel="stylesheet" type="text/css">
<link rel="stylesheet" href="/resources/styles/vendor/bootstrap.min.css" />
<!-- Modernizer Script for old Browsers -->
<script src="/resources/js/angular2/angular2-polyfills.js"></script>
<script src="/resources/js/angular2/system.js"></script>
<script src="/resources/js/angular2/typescript.js"></script>
<script src="/resources/js/angular2/Rx.js"></script>
<script src="/resources/js/angular2/angular2.dev.js"></script>
<script src="/resources/js/angular2/http.dev.js"></script>
<script src="/resources/js/angular2/router.dev.js"></script>
<script src="/resources/js/angular2/router.dev.js"></script>
</head>
<body>

	<script>
  System.config({
      
      transpiler: 'typescript', 
      typescriptOptions: { emitDecoratorMetadata: true }, 
      packages: {
        '/resources/static/app': {defaultExtension: 'ts'}
    }

  });
  System.import('/resources/static/app/app-main')
  .then(null, console.error.bind(console));


</script>
	<div class="container">
            <h1 class="brand brand_"><a href="index.html"><img alt="" src="img/logo.gif"> </a></h1>
            <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse_">Menu <span class="icon-bar"></span> </a>
            <div class="nav-collapse nav-collapse_  collapse">
              <ul class="nav sf-menu sf-js-enabled">
                <li><a href="index.html">Home</a></li>
                <li class="sub-menu active"><a href="services.html" class="sf-with-ul">Services<b class="sf-sub-indicator"></b></a>
                  <ul style="display: none;">
                    <li><a href="#">Dolore </a></li>
                    <li><a href="#">Consecte</a></li>
                    <li><a href="#">Conseq</a></li>
                  </ul>
                </li>
                <li><a href="folio.html">Folio</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>
          </div>

	<home></home>
	<footer>
	<h4>Thank You</h4>
	<p>
		Made <a href="https://twitter.com/roswellparian" target="_blank">@siddhi_parkar</a>
		By Connectin
	</p>
</footer>
</body>
</html>