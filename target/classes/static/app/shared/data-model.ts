export interface LoanDetails{
	loanType: string;
	loanAcctNumber: string;
	loanAmount: number;
	loanEMI: number;
	loanStartDate: string;
	loanEndDate: string;
	loanTenureMonths: number;
}
export interface FundTransferList{

	transName: string;
    transAcctNumber: string;
    transLimt: number;

}
export interface AuthFundTrans{

  	transactionID: number;
	responseFlag: string;
    responseMessage : string;
	
}
export interface AuthOTPFundTransfer{
	
  	transactionID: number;
	responseFlag: string;
    responseMessage : string;
	
}
export interface AuthOTPlinkAcct{
  	transactionID: number;
	responseFlag: string;
    responseMessage : string;
	
}

export interface AccountList {
	accacctNumber: string;
	acctName: string;
	acctType: string;
	acctDesc: string;
	acctBalance: number;
	lastTransDate: string;
	lastTransDesc: string;
	lastTransType: string;
	lastTransAmt: number
}

export interface TransDetails {
	acctCloseMtYr: string;
	acctBalance: number;
	acctTotalCredit: number;
	acctTotalDebit: number;
}
export interface AccountSummary {
	acctNumber: string;
	acctName: string;
	acctType: string;
	acctDesc: string;
	transDetails: Array<TransDetails>
}

export interface Transaction {
	acctNumber:string;
	acctName: string;
	acctType: string;
	acctDesc: string;
	transactionDate: string;
	transactionId: number;
	transactionDesc: string;
	transactionType: string;
	transactionAmt: number;
	acctBalance: number;
	chqScanURL: string
}


export interface LinkedAccount{
	transactionID: number;
	responseFlag:string;
	responseMessage:string
}

