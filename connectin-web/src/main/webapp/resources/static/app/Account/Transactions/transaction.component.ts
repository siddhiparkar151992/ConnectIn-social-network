import {Component, Input, OnInit, AfterViewChecked, Output, EventEmitter, OnChanges} from 'angular2/core'
import {Observable} from 'rxjs/Rx';
import {Transaction} from './transaction';
import {TransactionService} from './transaction.service';
import {AccountService} from '../account.service';
// import {DataTableDirectives} from 'angular2-datatable/datatable';
import {Config} from '../../app-conf'
import {DatePipe} from "angular2/common";
// import * as _ from 'lodash';
declare var userData:any;
declare var $:any;
@Component({
	inputs: ['transactionData'],
	selector: 'transaction-details',
	templateUrl: 'static/app/Account/Transactions/templates/transactions.component.html',
	// directives: [DataTableDirectives],
	pipes: [DatePipe]

})



export class TransactionComponent implements OnInit, AfterViewChecked{


	@Input() transactionData;
	@Output() onTransClose =new EventEmitter();
	private data;
	private transactionDeferAPI: Observable<Transaction[]>;
	private acctSummaryDeferAPI: Observable<Array<Object>>;
	private accountService;
	private transactionList:Transaction[];
	private timespanSelectors = ['1 Week', '1 Month', '3 Months', '1 Year']
	private timeSpanMapper ={
		0:0,
		1:1,
		2:3,
		4:12
	}
	private selectedTimespan=3;
	private selectedAccount;
	private startDate;
	private endDate;
	private acctSummary ={
		totalTrans:{
			'credits':0, 'debits':0 
		},
		transDetails:[]
	}
	private table;
	private headers = ['S.No','Date','Description','Debit','Credit','Balance']
	private headerConfig= {
		'transactionDate':1,
		'transactionDesc':2

	}

	private config;
	constructor(private transactionService: TransactionService, 
		accountService: AccountService,
		private conf:Config) {
		this.config = conf.getConfig()
		this.transactionService = transactionService;
		this.accountService = accountService;
		this.startDate = new Date().toLocaleDateString('en-GB', {  
						    day : 'numeric',
						    month : 'numeric',
						    year : 'numeric'
						}).split(' ').join('/');

		this.startDate = '01/01/2014';
		this.endDate ='31/04/2014'
	}
	ngAfterViewChecked() {
		// this.initializeComponent()
	}


	addMonths(date, m) {
	    var d = new Date(date);
	    var years = Math.floor(m / 12);
	    var months = m - (years * 12);
	    if (years) d.setFullYear(d.getFullYear() + years);
	    if (months) d.setMonth(d.getMonth() + months);
	    return d;
	}


	exportToCSV(){
		let session = userData.sessionId.slice(4 , userData.sessionId.length)
		let brCode = userData.acctNumber.slice(0,3);
		let activity = new logActivity();
		activity.addActivity(userData.userId,brCode,session,'Statement of A/C (CSV)' )

		var data =this.data

		var pom = document.createElement('a');
		


		// data.unshift(this.headers)
		var csvContent = "data:Application/octet-stream,";
		var that = this;
		var dataString = this.headers.join(",");
		csvContent =dataString+'\n';
		data.forEach(function(infoArray, index){
		   var arr = new Array(6)
		   
		   arr[0] = index
		   for(var i in infoArray){
		   		
		   		if(i=='transactionType' && infoArray[i]==that.config.TRANS_TYPE.CR){
		   			arr[4] = infoArray.transactionAmt
		   			arr[3]= '-'
		   		}
		   		else if(i=='transactionType' && infoArray[i]==that.config.TRANS_TYPE.DB){
		   			arr[3] = infoArray.transactionAmt
		   			arr[4]= '-'
		   		}
		   		else if(i == 'transactionDate'){
		   			var date= new Date(infoArray[i])
		   			arr[that.headerConfig[i]] = date.toLocaleDateString()+' '+date.toLocaleTimeString()
		   		}
		   		else{
		   			arr[that.headerConfig[i]] = infoArray[i]
		   		}
		   }
		   arr[5] = infoArray.transactionBalance;
		   var dataString = arr.join(",");
		   csvContent += index < data.length ? dataString+ "\n" : dataString;

		}); 

		//here we load our csv data 
		var blob = new Blob([csvContent],{type: 'text/csv;charset=utf-8;'});
		var url = URL.createObjectURL(blob);
		pom.href = url;
		pom.target= '_blank'
		var date = new Date();
		var filename = userData.userId + '_'+date.toLocaleDateString()+'.csv'
		pom.setAttribute('download', filename);
		pom.click();

	}
	pad_with_zeroes(number, length) {
	    var my_string = '' + number;
	    while (my_string.length < length) {
	        my_string = '0' + my_string;
	    }
	    return my_string;
	}
	formHeaderData(){

		let ifsc = this.pad_with_zeroes(userData.branchCode, 3);
		ifsc = 'SRCB0000'+ifsc;
		let cur_date = new Date();
		let date_str = cur_date.toDateString().split(' ');
		let finalDate =date_str[2]+'-'+date_str[1]+'-'+date_str[3]
		let currTimeStamp = finalDate+' '+cur_date.toLocaleTimeString();

		let header= {
			'startDate' : this.startDate,
			'endDate' : this.endDate,
			'ifsc' : ifsc,
			'userName' :  this.transactionData.currentAccount.acctName,
			'acctNo_15' : this.transactionData.currentAccount.acctNumber,
			'acctNo_32' : this.transactionData.currentAccount.acctNumber,
			'openingBal' : this.transactionData.currentAccount.acctBalance,
			'generatedOn' : currTimeStamp,
			'statementDate' : finalDate ,
			'micrCode' : '-',
			'pan':'-',
			'lienAmt':'-',

		}
		return header;
	}
	generatePDF(){
		let params = {}
		let that = this;

		let headers = this.formHeaderData()
		params['headers'] = headers
		params['data'] = this.transactionList
		params['type'] = 'pdf'
		this.transactionService.generatePDF(params).then(function(res){
			
			var pom = document.createElement('a')
			let encParams = btoa(userData.userId)
			pom.href = 'getPDFcopy/'+ encParams;
			pom.click();
			setTimeout(function(){
				let params_data = {'type' : 'pdf'}
				that.transactionService.deletePDF(params_data)
			},100)

		})
	}

	refreshTransactionData(params){
		var that = this;
		this.transactionDeferAPI = this.transactionService.getTransactionList(params)
		this.transactionList =[]
		Observable.forkJoin([this.transactionDeferAPI])
		.subscribe(data => {
				if(!data[0].accountList || data[0].accountList.length <0){
					that.transactionList = []
				}
				else{
					that.transactionList = data[0].accountList
					that.data = that.transactionList
					that.renderTransactionTable()
					that.calculateTotalDrCr()

				}
				
				
				
			})
	}
	onTimespanChange(id){
		this.selectedTimespan = id
		
		var that = this;
		var date = [this.startDate.split('/')[1],this.startDate.split('/')[0],this.startDate.split('/')[2]].join('/')
		var currentDate = new Date(date)
		var cDate = this.addMonths(currentDate,this.timeSpanMapper[id])


		var dateArr = cDate.toLocaleDateString('en-GB').split('/');
		var endDate = dateArr[2]+dateArr[1]+dateArr[0]
		

		//dummy dates since the data is not available 

		if(id ==0){
			endDate = '20150601'
		}
		else if(id==1){
			endDate = '20150901'	
		}else if(id==2){
			endDate = '20151201'	
		}
		else{
			endDate = '20160131'
		}

		var params = {
			'userID' : userData.userId,
			'acctNumber' : this.transactionData.currentAccount.acctNumber,
			'startDate' : "20140131",
			'endDate' : endDate
		}


		this.refreshTransactionData(params)


	}

	onClose(event){
		this.onTransClose.emit(true)
	}
	
	onAccountChange(event){
		var index = parseInt(event.target.value);
		this.transactionData.currentAccount =this.transactionData.accountList[index]

		this.initTransactionView()

	}

	calculateTotalCredits(transDetails){
		for(let i=0;i<transDetails.length;i++){ 
			if (transDetails[i].acctTotalCredit){

				this.acctSummary.totalTrans.credits += transDetails[i].acctTotalCredit
			}
			if(transDetails[i].acctTotalDebit){
				this.acctSummary.totalTrans.debits += transDetails[i].acctTotalDebit
				
			}
		}
	}


	renderTransactionTable(){
		 
	    	
		var that = this;
		// that.table.clear()
		// $.each(this.transactionList, function(i, data) {
		// 	if (data.transactionType==that.config.TRANS_TYPE.CR){
		// 		let credit = '<span class="text-red">'+data.transactionAmt+'</span>';	
		// 		let debit = '<span class="text-green">'+'-'+'</span>';
		// 	}else{
		// 		let debit = '<span class="text-green">'+ data.transactionAmt+'</span>';	
		// 		let credit ='<span class="text-red">'+'-'+'</span>';
		// 	}
		// 	let acctBal = data.transactionBalance ? data.transactionBalance : '-'; 
		//     that.table.row.add([i+1, data.transactionDate,data.transactionDesc,debit,credit,acctBal]);
		// });

		// this.table.draw();


	}

	changeDate(type){
		if(type=='end'){
			var startArr =$('#startDate').val().split('/')
			var endArr =$('#endDate').val().split('/')

			var startDate = startArr[2]+startArr[0]+startArr[1]
			var endDate = endArr[2]+endArr[0]+endArr[1]

			var params = {
			'userID' : "1369321",
			'acctNumber' : "006200100037475",
			'startDate' : startDate,
			'endDate' : endDate
			}


			this.refreshTransactionData(params)
		}
	}
	initializeComponent(){

	


		

		var that = this;

		$('.custom-input, .glyphicon-calendar').datepicker({
			 onSelect: function(dateText) {
		    	that.changeDate('end')
		  	}
		})
		

		$('.custom-input, .glyphicon-calendar').change(function(){
			that.changeDate('end')
		})
	   	this.table = $('#myTable').DataTable( {
	    	"aoColumnDefs": [{
		      "bSortable": false, 
		      "aTargets": [0, 1, 2, 3, 4, 5]
		    }]
	        "paging": false,
	        "searching": false        
	    });

		this.renderTransactionTable()
		
	}

	calculateTotalDrCr(){
		var totalCredits:number=0;
		var totalDebits:number=0;
		for(var i=0;i<this.transactionList.length;i++){
			var item = this.transactionList[i]
			item.transactionAmt = parseInt(item.transactionAmt.toString())
			if(item.transactionType == this.config.TRANS_TYPE.CR){
				totalCredits+=item.transactionAmt	
			}
			else{
				totalDebits+=item.transactionAmt
			}
		}

		this.acctSummary.totalTrans.credits = totalCredits
		this.acctSummary.totalTrans.debits = totalDebits
	}

	initTransactionView(){

		// var params ={
		// 	"userID" : "1006997",
		// 	"acctNos" : "149200100015361",
		// 	"noOfMonths" : "7"
		// }

// 		var trasnParams ={'userID': userData.userId,
// 		'acctNumber':this.transactionData.currentAccount.acctNumber,'startDate':"20140131", 'endDate': "20160131"
// }
		// var trasnParams = {
		// 	'userID' : "1369321",
		// 	'acctNumber' : "006200100037475",
		// 	'startDate' : "20140131",
		// 	'endDate' : "20160131"
		// }
		
		if(this.transactionData.currentAccount.acctNumber.trim() ==""){
			this.transactionList =[];
			return;
		}
		var params ={
			"userID" : userData.userId,
			"acctNos" : this.transactionData.currentAccount.acctNumber,
			"noOfMonths" : "9"
		}

		var trasnParams = {
			'userID' : userData.userId,
			'acctNumber' : this.transactionData.currentAccount.acctNumber,
			'startDate' : "20140131",
			'endDate' : "20160131"
		}

		this.transactionDeferAPI = this.transactionService.getTransactionList(trasnParams)
		this.acctSummaryDeferAPI = this.accountService.getAccountSummary(params)
		var that = this;
		this.transactionList =[]
		Observable.forkJoin([this.transactionDeferAPI, this.acctSummaryDeferAPI])
			.subscribe(data => {
				that.acctSummary = $.extend(true, data[1], that.acctSummary)
				that.calculateTotalCredits(that.acctSummary.transDetails)
				if(!data[0].accountList.length){
					that.transactionList = [data[0]]
				}
				else{
					that.transactionList = data[0].accountList
				}
				that.data = that.transactionList
				that.calculateTotalDrCr()
				that.initializeComponent()
			})
	}
	ngOnInit() {
		var that = this;
		this.initTransactionView()
	}
	ngAfterViewChecked(){
		var that = this;
		$('.radio-inputbox').iCheck({
	        checkboxClass: 'icheckbox_square-blue',
	        radioClass: 'iradio_square-blue',
	        increaseArea: '40%' // optional
	    }).on('ifClicked ifChecked', function(event){
	    	that.onTimespanChange(0)
	    });
	}
}