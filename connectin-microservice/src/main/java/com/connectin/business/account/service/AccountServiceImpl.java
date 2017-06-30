package com.connectin.business.account.service;

import com.connectin.business.account.dao.IAccountDao;
import com.connectin.business.account.entity.Account;
import com.connectin.constants.Message;
import com.connectin.exceptions.ConnectinBaseException;
import com.connectin.utils.Response;
import com.connectin.utils.ResponseGenerator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    IAccountDao accountDao;

    @Autowired
    ResponseGenerator<Account> responseGenerator;

    public void createAccount(Account account) {
        // TODO Auto-generated method stub

    }

    public void updateAccount(Account account) {
        // TODO Auto-generated method stub

    }

    public void exists(String accountId) {
        // TODO Auto-generated method stub

    }

    @Override
    public Response<Account> getAccount(int userId, String hashToken) {
        Account account = null;
        try {
            account = accountDao.getAccountById(userId);

            if (!account.equals(null)) {

                return responseGenerator.generateSuccessResponse(Message.SUCCESS, Message.SUCCESS_CODE, account);
            }
        } catch (ConnectinBaseException e) {
            return responseGenerator.generateErrorResponse(e.getMessage(), Message.ERROR_CODE, account);
        }
        return null;

    }

}
