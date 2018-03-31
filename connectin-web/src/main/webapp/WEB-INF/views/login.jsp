<%@ page language="java" contentType="text/html; charset=utf-8"
         pageEncoding="utf-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
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
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="javascript" src="../../resources/js/vendor/moment.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.0/css/bootstrap-datepicker.css"/>
    <script type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.0/js/bootstrap-datepicker.min.js"></script>
</head>

<body>

<script type="text/javascript">
    $(".nav-tabs a").click(function () {
        $(this).tab('show');
    });

    $('.datepicker').datepicker();

    var updateCookies = function () {
        var id = document.getElementById("login-f").elements[0].value;
        var password = document.getElementById("login-f").elements[1].value;
        var ud = {id: id, password: password};
        localStorage.setItem("ud", JSON.stringify(ud));
    };
    var login = function () {

        var data = {};
        data.firstName = document.getElementById("login-form").elements[0].value;
        data.lastName = document.getElementById("login-form").elements[1].value;
        data.email = document.getElementById("login-form").elements[2].value;
        data.gender = document.getElementById("login-form").elements[3].value;
        data.birthDate = new Date();
        data.userName = document.getElementById("login-form").elements[5].value;
        data.password = document.getElementById("login-form").elements[6].value;

        data.cpassword = document.getElementById("login-form").elements[7].value;

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "http://localhost:9091/connectin/api/account/register",
            data: JSON.stringify({userRequest: data}),
            dataType: 'json',
            success: function (data) {
                alert("success")
            },
            error: function (e) {
                alert(e)
            }
        });
    }
</script>


<div class="login-area bg-image">


    <div class="row">
        <div class="col-sm-4 col-sm-offset-4 login-page-container">
            <ul class="nav nav-tabs form-header">
                <li class="tab-list item ">
                    <a class="tab-link login" href="#1a" data-toggle="tab">Register</a>
                </li>
                <li class="tab-list item active">
                    <a class="tab-link reg" href="#2a" data-toggle="tab">Login</a>
                </li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane" id="1a">
                    <form role="form" id="login-form">
                        <label class="form-group float-label-control">

                            <input name="firstName" type="text" class="input" placeholder="First Name">
                        </label>
                        <label class="form-group float-label-control">

                            <input name="lastName" type="text" class="input" placeholder="Last Name">
                        </label>
                        <label class="form-group float-label-control">

                            <input name="email" type="text" class="input" placeholder="Email">
                        </label>
                        <label class="form-group float-label-control">

                            <input name="gender" type="text" class="input" placeholder="Gender">
                        </label>
                        <label class="form-group float-label-control">

                            <input name="birthdate" type="text" class="input" placeholder="Birthdate">
                        </label>
                        <label class="form-group float-label-control">

                            <input name="username" type="text" class="input" placeholder="Username">
                        </label>
                        <label class="form-group float-label-control">

                            <input name="password" type="password" class="input" placeholder="Password">
                        </label>
                        <label class="form-group float-label-control">

                            <input name="cpassword" type="password" class="input" placeholder="Confirm Password">
                        </label>
                        <button type="button" onclick="login()" class="btn-form btn btn-primary btn-lg">Register
                        </button>
                    </form>

                </div>
                <c:url var="loginUrl" value="/login"/>
                <div class="tab-pane active" id="2a">
                    <c:if test="${error!=null}">
                        <div class="login-error alert alert-error"><strong>Error:
                        </strong>${error}</div>
                    </c:if>
                    <form role="form" action="/login" id="login-f" method="POST">
                        <label class="form-group float-label-control">

                            <input onchange="updateCookies()" name="username" type="text" class="input"
                                   placeholder="Username">
                        </label>
                        <label class="form-group float-label-control">

                            <input onchange="updateCookies()" name="password" type="password" class="input"
                                   placeholder="password">
                        </label>

                        <button type="submit" class="btn-form btn btn-primary btn-lg">Login</button>
                    </form>

                </div>
            </div>


        </div>
    </div>


</div>
</div>


</body>
</html>
