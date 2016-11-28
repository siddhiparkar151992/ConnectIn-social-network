import {AccountList} from './shared/data-model';
export class InMemoryDataService {
	createDb() {
		let getAcctList = [{
			userId:'XXX',
			acctNumber: '965348569',
			acctName: 'My Account',
			acctType: 'Savings',
			acctDesc: 'Current savings account',
			acctBalance:19988457,
			lastTransDate:'10-04-2016 34:45:00',
			lastTransDesc: 'Your account debited the amount of ` 236 from HUM Pvt. Ltd. (CO 25698) TRAN ID : 2364789',
			lastTransType:'debit',
			lastTransAmt:236

		},
			{
				userId: 'XXX',
				acctNumber: ' 5963362365',
				acctName: 'Investment Account',
				acctType: 'Investment',
				acctDesc: 'Current Investment account',
				acctBalance: 45988457,
				lastTransDate: '1078,365.69-04-2016 34:45:00',
				lastTransDesc: ' your account has  benn credited for the fixed deposit amount 4500000 TRAN ID : 2364789',
				lastTransType: 'debit',
				lastTransAmt: 236

			},
			{
				userId: 'XXX',
				acctNumber: ' 59683623651',
				acctName: 'Swati Singh',
				acctType: 'Joint',
				acctDesc: 'Current savings account',
				acctBalance: 23988457,
				lastTransDate: '1078,365.69-04-2016 34:45:00',
				lastTransDesc: ' your account has  benn credited for the fixed deposit amount 4500000 TRAN ID : 2364789',
				lastTransType: 'debit',
				lastTransAmt: 236

			},
			{
				userId: 'XXX',
				acctNumber: ' 596836235',
				acctName: 'Fixed Deposit',
				acctType: 'Fixed Deposit',
				acctDesc: 'Current savings account',
				acctBalance: 10988457,
				lastTransDate: '1078,365.69-04-2016 34:45:00',
				lastTransDesc: ' your account has  benn credited for the fixed deposit amount 4500000 TRAN ID : 2364789',
				lastTransType: 'debit',
				lastTransAmt: 236

			}

		];
		
	    let getLoanDtls = [{
    		loanType: 'Home Loan',
      		loanAcctNumber: '965348569',
    		loanAmount: 3056000,
    		loanEMI: 42500,
    		loanStartDate: '01/01/2015',
    		loanEndDate: '01/01/2020',
    		loanTenureMonths: 60,
	    },
	    {
    		loanType: 'Personal Loan',
      		loanAcctNumber: '965348569',
    		loanAmount: 500000,
			loanEMI: 8500,
    		loanStartDate: '01/01/2015',
    		loanEndDate: '01/01/2017',
    		loanTenureMonths: 24,
		},
	    {
    		loanType: 'Car Loan',
      		loanAcctNumber: '965348569',
    		loanAmount: 200000,
			loanEMI: 10000,
    		loanStartDate: '01/01/2015',
    		loanEndDate: '01/01/2017',
    		loanTenureMonths: 24,
		}]
		
		let getAcctSummary ={
			acctNumber: '5968362365',
			acctName: 'My Account',
			acctType: 'Savings',
			acctDesc:'Current savings account',
			transDetails:[{
				acctCloseMtYr:'07-2016',
				acctBalance:823732,
				acctTotalCredit:85699,
				acctTotalDebit:858,

			},
				{
					acctCloseMtYr:'08-2016',
					acctBalance: 56775,
					acctTotalCredit: 567567,
					acctTotalDebit: 756,

				}
				]
		}

		let getAcctTransaction = [

 {
    "acctNumber": "965348569",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "27-06-2016",
    "transactionId": 23647450,
    "transactionDesc": "Your account has  been Been Debited for the fixed deposit amount 4500000 TRAN ID : 23647450",
    "transactionType": "Debit",
    "transactionAmt": 4500,
    "acctBalance": 5656777,
    "chqScanURL": ""
  },
  {
    "acctNumber": "965348569",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "01-05-2016",
    "transactionId": 2387459,
    "transactionDesc": "Your account has  been Credited for the amount 567567 TRAN ID : 2387459",
    "transactionType": "Credit",
    "transactionAmt": 4500,
    "acctBalance": 76867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "965348569",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "03-04-2016",
    "transactionId": 23347459,
    "transactionDesc": "Your account has  been Credited for the amount 10000 TRAN ID : 23347459",
    "transactionType": "Debit",
    "transactionAmt": 5600,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "965348569",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionId": 23378959,
    "transactionDate": "05-03-2016",
    "transactionDesc": "Your account has  been Debited for the amount 5000 TRAN ID : 23378959",
    "transactionType": "Credit",
    "transactionAmt": 1000,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  
			
  {
    "acctNumber": "59683623651",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "27-06-2016",
    "transactionId": 23647450,
    "transactionDesc": "Your account has  been Been Debited for the fixed deposit amount 4500000 TRAN ID : 23647450",
    "transactionType": "Debit",
    "transactionAmt": 4500,
    "acctBalance": 5656777,
    "chqScanURL": ""
  },
  {
    "acctNumber": "59683623651",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "01-05-2016",
    "transactionId": 2387459,
    "transactionDesc": "Your account has  been Credited for the amount 567567 TRAN ID : 2387459",
    "transactionType": "Credit",
    "transactionAmt": 4500,
    "acctBalance": 76867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "59683623651",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "03-04-2016",
    "transactionId": 23347459,
    "transactionDesc": "Your account has  been Credited for the amount 10000 TRAN ID : 23347459",
    "transactionType": "Debit",
    "transactionAmt": 5600,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "59683623651",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionId": 23378959,
    "transactionDate": "05-03-2016",
    "transactionDesc": "Your account has  been Debited for the amount 5000 TRAN ID : 23378959",
    "transactionType": "Credit",
    "transactionAmt": 1000,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "59683623651",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "10-02-2016",
    "transactionId": 234234,
    "transactionDesc": "Your account has  been Been Debited for the fixed deposit amount 4500000 TRAN ID : 234234",
    "transactionType": "Debit",
    "transactionAmt": 2300,
    "acctBalance": 5656777,
    "chqScanURL": ""
  },
  {
    "acctNumber": "59683623651",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "15-01-2016",
    "transactionId": 234234,
    "transactionDesc": "Your account has  been Credited for the amount 567567 TRAN ID : 234234",
    "transactionType": "Credit",
    "transactionAmt": 67,
    "acctBalance": 76867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "59683623651",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "08-06-2016",
    "transactionId": 567567,
    "transactionDesc": "Your account has  been Debited for the amount 10000 TRAN ID : 567567",
    "transactionType": "Debit",
    "transactionAmt": 10000,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "59683623651",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionId": 6678678,
    "transactionDate": "08-06-2016",
    "transactionDesc": "Your account has  been Debited for the amount 5000 TRAN ID : 6678678",
    "transactionType": "Credit",
    "transactionAmt": 5000,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "59683623651",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "27-05-2016",
    "transactionId": 23647450,
    "transactionDesc": "Your account has  been Been Debited for the fixed deposit amount 4500000 TRAN ID : 23647450",
    "transactionType": "Debit",
    "transactionAmt": 1200,
    "acctBalance": 5656777,
    "chqScanURL": ""
  },
  {
    "acctNumber": "59683623651",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "01-06-2016",
    "transactionId": 2387459,
    "transactionDesc": "Your account has  been Credited for the amount 567567 TRAN ID : 2387459",
    "transactionType": "Credit",
    "transactionAmt": 2300,
    "acctBalance": 76867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "59683623651",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "03-06-2016",
    "transactionId": 23347459,
    "transactionDesc": "Your account has  been Credited for the amount 10000 TRAN ID : 23347459",
    "transactionType": "Debit",
    "transactionAmt": 10000,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "5963362365",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionId": 23378959,
    "transactionDate": "05-06-2016",
    "transactionDesc": "Your account has  been Debited for the amount 5000 TRAN ID : 23378959",
    "transactionType": "Credit",
    "transactionAmt": 3400,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "5963362365",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "10-05-2016",
    "transactionId": 234234,
    "transactionDesc": "Your account has  been Been Debited for the fixed deposit amount 4500000 TRAN ID : 234234",
    "transactionType": "Debit",
    "transactionAmt": 4500,
    "acctBalance": 5656777,
    "chqScanURL": ""
  },
  {
    "acctNumber": "5963362365",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "15-04-2016",
    "transactionId": 234234,
    "transactionDesc": "Your account has  been Credited for the amount 567567 TRAN ID : 234234",
    "transactionType": "Credit",
    "transactionAmt": 7800,
    "acctBalance": 76867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "5963362365",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "08-03-2016",
    "transactionId": 567567,
    "transactionDesc": "Your account has  been Debited for the amount 10000 TRAN ID : 567567",
    "transactionType": "Debit",
    "transactionAmt": 10000,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "5963362365",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionId": 6678678,
    "transactionDate": "08-02-2016",
    "transactionDesc": "Your account has  been Debited for the amount 5000 TRAN ID : 6678678",
    "transactionType": "Credit",
    "transactionAmt": 4500,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "5963362365",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "27-01-2016",
    "transactionId": 23647450,
    "transactionDesc": "Your account has  been Been Debited for the fixed deposit amount 4500000 TRAN ID : 23647450",
    "transactionType": "Debit",
    "transactionAmt": 2300,
    "acctBalance": 5656777,
    "chqScanURL": ""
  },
  {
    "acctNumber": "5963362365",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "01-06-2016",
    "transactionId": 2387459,
    "transactionDesc": "Your account has  been Credited for the amount 567567 TRAN ID : 2387459",
    "transactionType": "Credit",
    "transactionAmt": 67,
    "acctBalance": 76867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "5963362365",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "03-06-2016",
    "transactionId": 23347459,
    "transactionDesc": "Your account has  been Credited for the amount 10000 TRAN ID : 23347459",
    "transactionType": "Debit",
    "transactionAmt": 6000,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "5963362365",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionId": 23378959,
    "transactionDate": "05-06-2016",
    "transactionDesc": "Your account has  been Debited for the amount 5000 TRAN ID : 23378959",
    "transactionType": "Credit",
    "transactionAmt": 5000,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "5963362365",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "10-06-2016",
    "transactionId": 234234,
    "transactionDesc": "Your account has  been Been Debited for the fixed deposit amount 4500000 TRAN ID : 234234",
    "transactionType": "Debit",
    "transactionAmt": 400,
    "acctBalance": 5656777,
    "chqScanURL": ""
  },
  {
    "acctNumber": "5963362365",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "15-06-2016",
    "transactionId": 234234,
    "transactionDesc": "Your account has  been Credited for the amount 567567 TRAN ID : 234234",
    "transactionType": "Credit",
    "transactionAmt": 3000,
    "acctBalance": 76867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "596836235",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "08-06-2016",
    "transactionId": 567567,
    "transactionDesc": "Your account has  been Debited for the amount 10000 TRAN ID : 567567",
    "transactionType": "Debit",
    "transactionAmt": 10000,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "596836235",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionId": 6678678,
    "transactionDate": "08-05-2016",
    "transactionDesc": "Your account has  been Debited for the amount 5000 TRAN ID : 6678678",
    "transactionType": "Credit",
    "transactionAmt": 5000,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "596836235",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "27-04-2016",
    "transactionId": 23647450,
    "transactionDesc": "Your account has  been Been Debited for the fixed deposit amount 4500000 TRAN ID : 23647450",
    "transactionType": "Debit",
    "transactionAmt": 3000,
    "acctBalance": 5656777,
    "chqScanURL": ""
  },
  {
    "acctNumber": "596836235",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "01-03-2016",
    "transactionId": 2387459,
    "transactionDesc": "Your account has  been Credited for the amount 567567 TRAN ID : 2387459",
    "transactionType": "Credit",
    "transactionAmt": 4000,
    "acctBalance": 76867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "596836235",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "03-02-2016",
    "transactionId": 23347459,
    "transactionDesc": "Your account has  been Credited for the amount 10000 TRAN ID : 23347459",
    "transactionType": "Debit",
    "transactionAmt": 10000,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "596836235",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionId": 23378959,
    "transactionDate": "05-01-2016",
    "transactionDesc": "Your account has  been Debited for the amount 5000 TRAN ID : 23378959",
    "transactionType": "Credit",
    "transactionAmt": 5000,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "596836235",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "10-06-2016",
    "transactionId": 234234,
    "transactionDesc": "Your account has  been Been Debited for the fixed deposit amount 4500000 TRAN ID : 234234",
    "transactionType": "Debit",
    "transactionAmt": 4390,
    "acctBalance": 5656777,
    "chqScanURL": ""
  },
  {
    "acctNumber": "5963362365",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "15-06-2016",
    "transactionId": 234234,
    "transactionDesc": "Your account has  been Credited for the amount 567567 TRAN ID : 234234",
    "transactionType": "Credit",
    "transactionAmt": 4678,
    "acctBalance": 76867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "59683623651",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionDate": "08-07-2016",
    "transactionId": 567567,
    "transactionDesc": "Your account has  been Debited for the amount 10000 TRAN ID : 567567",
    "transactionType": "Debit",
    "transactionAmt": 5400,
    "acctBalance": 86867867,
    "chqScanURL": ""
  },
  {
    "acctNumber": "59683623651",
    "acctName": "My Account",
    "acctType": "Savings",
    "acctDesc": "Current savings account",
    "transactionId": 1245,
    "transactionDate": "08-06-2016",
    "transactionDesc": "Your account has  been Debited for the amount 5000 TRAN ID : 6678678",
    "transactionType": "Credit",
    "transactionAmt": 5000,
    "acctBalance": 86867867,
    "chqScanURL": ""
  }
		]
		let linkAcct= [
			{
				transactionID: 6678678,
				responseFlag:'Success',
				responseMessage:'Account has been successfully linked with Primary Acount'

			},
			{
				transactionID: 567567,
				responseFlag: 'Success',
				responseMessage: 'Account has been successfully linked with Primary Acount'

			}
		]
		
      	let getFundTransferList = [
      	{
      		transName : 'Swati Singh',
          	transAcctNumber: '55230000001156',
      		transLimt : '200000',
      	},
  		{
  			transName : 'Santosh Singh',
  	    	transAcctNumber: '55230000009999',
  			transLimt : '500000',
  		},
		{
			transName : 'Rahul Singh',
	    	transAcctNumber: '55230000008989',
			transLimt : '200000',
		},
		{
			transName : 'Anita Singh',
	    	transAcctNumber: '55230000006666',
			transLimt : '800000',
		}
      	];
        let authFundTrans = [
        {
      		transactionID : 989564,
      		responseFlag: 'Success',
      		responseMessage : 'Account has been verified. Kindly enter the OPT sent to the registered no.',
      	},
      
		{
			transactionID : 124578,
			responseFlag: 'Failure',
			responseMessage : 'Incorrect Transaction Password',
		},

      	];
        let authOTPFundTransfer = [{
        	responseFlag : 'Success',
        	responseMessage: 'Transaction Successful!'
        },
       
        {
        	responseFlag : 'Failure',
        	responseMessage: 'Incorrect OTP.'
		}
        ];
        let authOTPlinkAcct = [{
        	responseFlag : 'Success',
        	responseMessage: 'A/C No.: 55230000001156 was successfully added to your account.'
        },
        {
        	responseFlag : 'Success',
        	responseMessage: 'A/C No.: 55230000009898 was successfully added to your account.'
		},
        {
        	responseFlag : 'Success',
        	responseMessage: 'A/C No.: 55230000001156 was successfully added to your account.'
		},
        {
        	responseFlag : 'Failure',
        	responseMessage: 'Incorrect OTP.'
		}
        
        ];
        return { getAcctList,getLoanDtls, getAcctSummary, getAcctTransaction, linkAcct,authOTPlinkAcct, getFundTransferList, authFundTrans, authOTPFundTransfer };
  }

}
// ,getLoanDtls,getAcctSummary,getAcctTransaction,linkAcct,getFundTransferList,authFundTrans,authOTPFundTransfer