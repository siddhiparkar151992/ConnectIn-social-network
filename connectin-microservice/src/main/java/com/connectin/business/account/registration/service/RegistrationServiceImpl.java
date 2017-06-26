package com.connectin.business.account.registration.service;
import com.connectin.security.encypt.Encryptor;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.connectin.business.account.registration.dao.IRegistrationDao;
import com.connectin.business.user.dao.IUserDao;
import com.connectin.business.user.entity.User;
import com.connectin.constants.Gender;
import com.connectin.constants.Message;
import com.connectin.domain.user.UserRequest;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import com.connectin.utils.ResponseGenerator;
import com.connectin.utils.validation.EmailValidation;
import com.connectin.utils.validation.PasswordValidator;
import com.connectin.utils.validation.ValidationResult;

@Service
public class RegistrationServiceImpl implements RegistrationService {

	@Autowired
	private IRegistrationDao registrationDao;
	
	
	@Autowired
	Encryptor encryptor;
	
	@Autowired
	private IUserDao userDao;
	
	@Autowired
	private ResponseGenerator<Object> responseGenerator;

	@Autowired
	private PasswordValidator passwordValidator;

	private ValidationResult validateUser(UserRequest user) {
		ValidationResult result = new ValidationResult();
		result.setValid(true);
		if (user.getPassword() == null || user.getUserName() == null || user.getEmail() == null
				|| user.getFirstName() == null || user.getLastName() == null || user.getUserName() == null) {
			result.setError("Please specify all fields!");
			result.setValid(false);
		}
		if (!EmailValidation.validateEmail(user.getEmail())) {
			result.setError("Email adrress is invalid!");
		}
		if (!passwordValidator.validate(user.getPassword())) {
			result.setError("Invalid password!");
		}
		return result;

	}

	@Override
	public Response<Object> registerUser(UserRequest user) {

		ValidationResult result = validateUser(user);
		if (!result.isValid()) {
			return responseGenerator.generateErrorResponse("Invalid user details ", Message.ERROR_CODE, null);
		}
		User usertoInsert = new User();
		SimpleDateFormat dt = new SimpleDateFormat("yyyyy-mm-dd");
		try {
			usertoInsert.setCreatedDate(dt.parse(user.getBirthDate()));
		} catch (ParseException e1) {
			return responseGenerator.generateErrorResponse("Invalid birthdate", Message.ERROR_CODE, null);
		}
		usertoInsert.setEmail(user.getEmail());
		usertoInsert.setFirstName(user.getFirstName());
		usertoInsert.setLastName(user.getLastName());
		usertoInsert.setGender(user.getGender()=="f" ? Gender.f: Gender.m);
		usertoInsert.setUserName(user.getUserName());
		try {

			User userCreated = registrationDao.registerUser(usertoInsert);
			if (userCreated!=null) {
				userDao.insertUserAuthenticationDetails(userCreated.getUserName(),
						user.getCassword(), lastLoggedIn, userId);
				return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE,
						"User account created succesfully!");
			}
		} catch (ConnectinBaseException e) {
			return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, null);
		}
		return responseGenerator.generateErrorResponse("Could not register user!", Message.ERROR_CODE, null);

	}

}
