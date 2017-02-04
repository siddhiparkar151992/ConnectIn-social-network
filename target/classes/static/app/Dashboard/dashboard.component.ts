import { Component, OnInit, Output, EventEmitter, AfterViewInit, ViewChild} from 'angular2/core';
import { Route, Router} from 'angular2/router';
import {ChartComponent} from '../Account/Charts/charts.component';
import {AccountComponent} from '../Account/account.component';
import {SubAccounts} from '../Account/SubAccounts/sub-account.component';
import {LoanComponent} from '../Account/Loans/loan.component';
import {CardsComponent} from '../Account/Cards/cards.component';
import {TransactionComponent} from '../Account/Transactions/transaction.component'
import {TransactionService} from '../Account/Transactions/transaction.service'
import {AddPayeeComponent} from '../Account/Payee/add-payee.component'
import {Utility} from '../Util/util.service'
import {Config} from '../app-conf'
import {AccountService} from '../Account/account.service'
import {Observable} from 'rxjs/Rx';
// import {LoanStatementComponent} from './Account/Loans/loan-statment.component'
import {SessionManager} from '../session-manager/session-manager.service'
declare var $: any;

@Component({
	selector: 'dashboard',
	templateUrl: '/resources/static/app/Dashboard/dashboard.component.html',
	})



export class DashboardComponent implements OnInit{
	
	/*private showCards= false;
	private subAccount;
	private showTransactions = false;
	private transactionData= {}
	private utility;
	private config;
	private router;
	private routeData;
	private userData= userData
	private chartData ={
		accountList:[],
		barchart:[],
		linechart:[],
		splinechart:[],
		donutchart:[],
		pointschart:[],
		innerPiechart:[]
	}
	private loanInputData;
	private accountService;
	private transactions;
	private dashboardData = {
		netWorth :0,
		subAccounts: [],
		subAccountsArray: [3, 2, 1]
	};
	private sessionManager;
	private charts={}
	private acctList = {}
	

	constructor(private route:Router, 
		private transactionService:TransactionService, 
		private utilService:Utility, 
		private conf:Config,
		private acc:AccountService,
		private session:SessionManager) {
		this.transactionService = transactionService
		this.utility = utilService
		this.dashboardData.subAccounts = [];
		this.config = conf.getConfig()
		this.accountService = acc;
		this.router = route
		this.sessionManager = session
		 
	}

	
	

	changePassword(){
		this.router.navigate(['ChangePassword'])
	}
	prepareDonutData(data){
		var chartArr =[]
		data.forEach(function(d){

			// if(d.acctType == 'SAVING' || d.acctType=='CURRENT' || d.acctType == 'TD' ){

			chartArr.push(d.acctBalance)
			// }
		})
		this.chartData.donutchart = chartArr
	}


	showTrans(event){
		this.showTransactions = true
		this.viewTransactionDetails(event)
	}
	onLoansLoad(event){
		var loans = event.loanData
		var chartData =[]
		loans.forEach(function(d,i){
			chartData.push({'accNum':d.loanAccountNo , value:d.loanAmount})
		})

		this.chartData.innerPiechart = chartData
		// console.log(chartData)
	}
	

	prepareBarChartChartData(data){
		//var accountsArray ={
			//'965348569':0,
			//'596836235':1,
			//'59683623651':2,
			//'5963362365':3
		//}
		var accountsArray= {}
		data.forEach(function(d,i){
			accountsArray[d.acctNumber] =i
		})
		var chartData =[]
		var addedDates = {

		}
		data.forEach(function(d){
			var dateArray = d.transactionDate.split('-')
			var date = dateArray[2]+'-'+dateArray[1]
			var index = 0
			var chartItem ={total:[], date:''}
			if(date in addedDates){
				index = addedDates[date];
				chartItem = chartData[index]

			}
			else{

				addedDates[date] =chartData.length
				index = chartData.length
				chartItem ={
					'total':[{credits:0,debits:0}, {credits:0,debits:0},{credits:0,debits:0},{credits:0,debits:0}],
					'date' :date 
				}

				chartData.push({})


			}
			if(d.transactionType=='Credit'){
				chartItem.total[accountsArray[d.acctNumber.trim()]].credits+=d.transactionAmt
			}
			else{
				chartItem.total[accountsArray[d.acctNumber.trim()]].debits+=d.transactionAmt	
			}

			chartData[index] =chartItem


		})

		this.chartData.barchart = chartData
	}

	parsebarChartdata(d1){

		var indexKeys ={}
		var parseData = []
		var accIndex = {}
		var data = []
		var that = this;
		
		var deferAPI =[]
		
		var that = this
		var request= {
			'userID':userData.userId,
			'acctNos': userData.acctNumber,//'149200100015361',//userData.acctNumber,
			'noOfMonths':"9"
		}
		deferAPI.push(that.accountService.getAccountSummary(request))
		
		Observable.forkJoin(deferAPI).subscribe(res=>{
			var filteredArr= []
			if(!res[0].summList.length){
				filteredArr= [res[0].summList];
			}
			else{
				filteredArr =res[0].summList.filter(function(d){ return d.acctType=="SAVING" && d.acctList}) 
			}
				
				for(var i=0;i<filteredArr.length;i++){
					if(!$.isArray(filteredArr[i].acctList)){
						filteredArr[i].acctList = [filteredArr[i].acctList]
					}
						for(var j=0;j<filteredArr[i].acctList.length;j++){
							filteredArr[i].acctList[j].acctNumber = filteredArr[i].acctNumber
							data.push(filteredArr[i].acctList[j])	
						}
						
						accIndex[filteredArr[i].acctNumber] =i
					}

					data.forEach(function(d){
						if(d.month in indexKeys){
							parseData[indexKeys[d.month]].total[accIndex[d.acctNumber]] =d
						}
						else{

							var key = parseData.length
							var jsonData = {}
							indexKeys[d.month] = key
							// jsonData[d.Month]= new Array(3)
							jsonData ={ date:d.month, total:new Array(deferAPI.length)}
							jsonData['total'][accIndex[d.acctNumber]] = d 
							var arr= jsonData['total']
							arr.forEach(function(d,i){
								if(d== undefined){
									jsonData['total'].splice(i,1)
								}
							})
							parseData.push(jsonData)
						}

					})


					that.chartData.barchart = parseData
					// console.log(parseData)
		})

	
	
	
	}


	newtWorth(){
		this.dashboardData.netWorth =0
		for(var i=0;i<this.dashboardData.subAccounts.length;i++){
			this.dashboardData.netWorth+= parseFloat(this.dashboardData.subAccounts[i].acctBalance)
		}
	}

	
	preparePointsChartsData(transactions){
		var that = this;
		this.dashboardData.subAccounts.forEach(function(i,d){
			var acNum= i.acctNumber;
			that.acctList[acNum.trim()] = d
		})
		var arr =new Array(this.dashboardData.subAccounts.length);
		transactions.forEach(function(d){
			var accData = arr[that.acctList[d.acctNumber.trim()]]
			if(accData && accData.data && accData.acctNumber){
				
			}
			else{
				arr[that.acctList[d.acctNumber.trim()]]={
					'acctNumber':d.acctNumber,
					'data':[]
				}
			}
			
			
			arr[that.acctList[d.acctNumber.trim()]].data.push(d)
			that.charts[d.acctNumber.trim()]= arr[that.acctList[d.acctNumber.trim()]].data
		})
		that.chartData.pointschart= arr

	}
	loadTransactions(){
		var that = this;
		var accountNumbers = [];
		this.dashboardData.subAccounts .forEach(function(d){ 
			accountNumbers.push(d.acctNumber)
		})

		var startDate = this.utility.formatDate(this.utility.substractMonths(new Date(),6),'/')
		var endDate = this.utility.formatDate(new Date(),'/')
		var acctParams ={
			acctNumber: accountNumbers[2],
			startDate:'20140101',
			endDate: '20150131'

		}
	}
	ngOnInit(){
		this.loadAcc()

		
	}


	viewTransactionDetails(event){
		this.transactionData = {'currentAccount': event.transactionData}; 
		if(this.dashboardData.subAccounts.length>0){
		this.transactionData = $.extend({},this.transactionData,
			{"accountList":this.dashboardData.subAccounts.filter(function(i){
				return i.acctType=='SAVING'||  i.acctType=='CURRENT'
			})
		})
		}
		this.showTransactions = true
	}
	
	closeTransModal(event){
		this.showTransactions = false
	}

	
	
	
	loadAcc() {
		data = this.accountService.accountRepository
		this.dashboardData.subAccounts = []
		for(var i in  data){
			var type,chartData;
			if (data[i].acctType == 'Fixed Deposit') {
				type = 'linear';
				chartData ={}
			}
			else if (data[i].acctType == this.config.accTypes['TD']) {
				type = 'spline-inv';
				chartData = {};
			}

			else if (data[i].acctType == this.config.accTypes['TD']) {
				type = 'spline-join';
				chartData = {}
			}

			data[i].charts = {
				'type': type,
				'data': chartData
			}
			if(data[i].acctType == 'SAVING' 
				|| data[i].acctType == 'CURRENT'
				|| (data[i].acctType == 'TD' && parseInt(data[i].acctBalance)>0)){
				this.dashboardData.subAccounts.push(data[i])
			}
		}
		this.loadTransactions()
		this.chartData.accountList =this.dashboardData.subAccounts 
		this.prepareDonutData(this.dashboardData.subAccounts)
		this.newtWorth()
		this.parsebarChartdata({})


	}

	
	onlinkAcc(event){
		this.dashboardData.subAccounts.push({
			userId:'XXX',
			acctNumber: '123000445',
			acctName: 'Dipti Singh',
			acctType: 'Joint',
			acctDesc: 'Current Savings account',
			acctBalance:108457,
			lastTransDate:'10-04-2016 14:45:00',
			lastTransDesc: 'Your account debited the amount of 500 from HUM Pvt. Ltd. (CO 25698) TRAN ID : 2364789',
			lastTransType:'debit',
			lastTransAmt: 500,
			charts: {
				'type': 'spline-join',
				'data': ''
			}
		});

		this.chartData.accountList.push({
			userId:'XXX',
			acctNumber: '123000445',
			acctName: 'Dipti Singh',
			acctType: 'Joint',
			acctDesc: 'Current Savings account',
			acctBalance:108457,
			lastTransDate:'10-04-2016 14:45:00',
			lastTransDesc: 'Your account debited the amount of 500 from HUM Pvt. Ltd. (CO 25698) TRAN ID : 2364789',
			lastTransType:'debit',
			lastTransAmt: 500,
			charts: {
				'type': 'spline-join',
				'data': ''
			}
		});
		
	}*/

}