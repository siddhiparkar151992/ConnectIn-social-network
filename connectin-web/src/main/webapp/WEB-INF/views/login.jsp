<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Sign in and Sign up - Single Form</title>


<link rel='stylesheet prefetch'
	href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300,600'>
<script type="text/javascript"
	src="/connectin/resources/js/vendor/jquery-1.11.1.min.js"></script>
<link rel="stylesheet" href="/connectin/resources/css/login.css">
<script type="text/javascript"
	src="/connectin/resources/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="/connectin/resources/css/bootstrap.min.css" />
</head>

<body>


	<div class="login-area">
		<div class="bg-image">
			<div class="login-signup">
				<div class="container">
					<div class="login-header">
						<div class="row">

							<div class="col-md-6 col-sm-6 col-xs-12">
								<div class="login-details">
									<ul class="nav nav-tabs navbar-right">
										<li><a data-toggle="tab" href="#register">Register</a></li>
										<li class="active"><a data-toggle="tab" href="#login">Login</a></li>
									</ul>
								</div>
							</div>
						</div>


					</div>

					<div class="tab-content">
						<div id="register" class="tab-pane">
							<div class="login-inner">
								<div class="title">
									<h3>
										Sign <span>up!</span>
									</h3>
								</div>
								<div class="login-form">
									<form>
										<div class="form-details">
											<label class="user"> <input type="text"
												name="username" placeholder="Full Name" id="username">
											</label> <label class="mail"> <input type="email" name="mail"
												placeholder="Email Address" id="mail">
											</label> <label class="pass"> <input type="password"
												name="passsword" placeholder="Password" id="password">
											</label> <label class="pass"> <input type="password"
												name="passsword" placeholder="Confirm Password"
												id="password">
											</label>
										</div>
										<button type="submit" class="form-btn" onsubmit="">Login</button>
									</form>
								</div>
							</div>
						</div>
								<c:url var="loginUrl" value="/login" />
							<c:if test="error">errorrrrrrrrrrrrrr</c:if>
						<div id="login" class="tab-pane fade in active">
							<div class="login-inner">
								<div class="title">
									<h3>
										Sign <span>in!</span>
									</h3>
								</div>
								<div class="login-form">
									<form action="${loginUrl}" method="post" >
										<div class="form-details">
											
											<label class="pass"> <input type="text"
												name="username" placeholder="User name" id="username">
											</label>
											<label class="pass"> <input type="password"
												name="password" placeholder="Password" id="password">
											</label>
										</div>
										<button type="submit" class="form-btn" >Register</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


	<script type="text/javascript">
		
	</script>

</body>
</html>
