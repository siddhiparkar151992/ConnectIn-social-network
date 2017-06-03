<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ConnectIn</title>


<link rel='stylesheet prefetch'
	href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300,600'>
<script type="text/javascript"
	src="/resources/js/vendor/jquery-1.11.1.min.js"></script>
<link rel="stylesheet" href="/resources/styles/css/login.css">
<script type="text/javascript" src="/resources/js/vendor/bootstrap.min.js"></script>
<link rel="stylesheet" href="/resources/styles/vendor/bootstrap.min.css" />
</head>

<body>

	<script type="text/javascript">
		var login = function() {
			var data = {};
			$.ajax({
				type : "POST",
				contentType : "application/json",
				url : "/login",
				data : JSON.stringify(data),
				dataType : 'json',
				success : function(data) {
					alert("success")
				},
				error : function(e) {
					alert(e)
				}
			});
		}
	</script>
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
									<div onsubmit="login()">
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
										<button type="submit" class="form-btn">Login</button>
									</div>
								</div>
							</div>
						</div>
						<c:url var="loginUrl" value="/login" />

						<div id="login" class="tab-pane fade in active">

							<div class="login-inner">
								<c:if test="${error!=null}">
									<div class="login-error alert alert-error"><strong>Error:
										</strong>${error}</div>
								</c:if>
								<div class="title">
									<h3>
										Sign <span>in!</span>
									</h3>
								</div>
								<form action="/login" method="POST" class="login-form">
									<div>
										<div class="form-details">

											<label class="pass"> <input type="text"
												name="username" placeholder="User name" id="username">
											</label> <label class="pass"> <input type="password"
												name="password" placeholder="Password" id="password">
											</label>
										</div>
										<button type="submit" class="form-btn">Register</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>


</body>
</html>
