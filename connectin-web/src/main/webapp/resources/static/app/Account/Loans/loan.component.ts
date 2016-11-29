import { Component, OnInit,Output,EventEmitter} from 'angular2/core';
import { Router } from 'angular2/router';
import { LoanService } from './loan.service';
import {LoanStatementComponent} from './loan-statement.component'
declare var $: any;
@Component({
  selector: 'loan-details',
	directives: [LoanStatementComponent]

  templateUrl: 'static/app/Account/Loans/templates/loan.component.html'
})
export class LoanComponent implements OnInit {
	private loanDetails; loanDetail;
	private loan;
	private table;
	@Output() onLoansLoad = new EventEmitter();
	private currentAmount = '';
	private currentAcctNo = '';
	private start_Date = '';
	private end_Date=''
	private showLoanStatement= false;
	private loanInputData;


  	constructor(private loanService: LoanService){
			this.loanDetails = [];
			this.loanDetail = []
		// this.loan = {}
  	}

  	closeLoanModal(event){
		this.showLoanStatement = false;
	}



	private setLoanDetails(data){
		if(data && data.length ==0 ){
			return
		}
		data = $.isArray(data) ? data : [data];
		data.sort(function(d){ return parseInt(d.loanAmount)})
		// data =[data[0],data[1],data[2],data[3]]
		this.onLoansLoad.emit({'loanData':data})
		this.loanDetails = data;
		
		for (let i = 0; i < this.loanDetails.length;i++){
			let startDate = this.loanDetails[i].loanStartDate.split('/');
			let endDate = this.loanDetails[i].loanEndDate.split('/');
			this.loanDetails[i].monthsPaid = this.monthDiff(
				new Date(parseInt(startDate[2]), parseInt(startDate[1]) - 1, parseInt(startDate[0])), 
				new Date()  
			);
			this.loanDetails[i].amountPaid = this.loanDetails[i].monthsPaid * this.loanDetails[i].loanEMI;
			this.loanDetails[i].amountDue = this.loanDetails[i].loanAmount - this.loanDetails[i].amountPaid;
		}
		// console.log(this.loanDetails)
		this.loanDetail = this.loanDetails
		setTimeout(function(){
			$('.custom-slider').slick({
			    dots: true,
			    arrows: false,
			    infinite: false,
			    speed: 300,
			    slidesToShow: 1,
			    slidesToScroll: 1,
			    responsive: [{
			            breakpoint: 1024,
			            settings: {
			                slidesToShow: 1,
			                slidesToScroll: 1,
			                infinite: true,
			                dots: true
			            }
			        }, {
			            breakpoint: 600,
			            settings: {
			                slidesToShow: 2,
			                slidesToScroll: 1
			            }
			        }, {
			            breakpoint: 480,
			            settings: {
			                slidesToShow: 1,
			                slidesToScroll: 1
			            }
			        }
			        // You can unslick at a given breakpoint now by adding:
			        // settings: "unslick"
			        // instead of a settings object
			    ]
			});
		},0)
	}

	futureloanDetails(e,loan){

		this.currentAmount = loan.loanAmount;
		this.currentAcctNo = loan.loanAccountNo; 
		this.start_Date = loan.loanStartDate;
		this.end_Date = loan.loanEndDate;
		console.log(loan)
		var params = { 'acctNo': loan.loanAccountNo}
		var that = this;
		this.loanService.getFutureDetails(params).then(function(res){
			console.log(res);
			// that.table.clear();
			if(res.status === 'Success' && res.errorMessage !== '-1' ){
				let lists = res.loanList
				if(lists){
					lists.map(function(val, ind){
						that.table.row.add([ind+1, val['ideaBalDate'], val['idealBalance']]);
					});
					that.table.draw()
				}
				
			}else{
				
			}
			$("#loanModal").modal()
		})
	}
	onClose(){
		this.table.clear().draw()
		
	}
	getloanStatement(event, loan){
		let st_date = loan.loanStartDate.split('/')
		let e_date = loan.loanEndDate.split('/')
		let fromDate = st_date[2]+st_date[1]+st_date[0];
		let toDate = e_date[2]+e_date[1]+e_date[0]
		var params = {
			lbrCode: '', 
			accountNo: loan.loanAccountNo, 
			fromDate: loan.loanStartDate, 
			toDate: loan.loanEndDate
		}

		// var params ={
		// 	"lbrCode": "043",
		// 	"accountNo": "043700100009521",
		// 	"fromDate": "01/01/2016",
		// 	"toDate": "15/07/2016",
		// 	}
			var that = this;
		// console.log(params)
		this.loanService.getLoanStatement(params).then(function(res){
			if (res.status!= 'Failed'){
				that.showLoanStatement = true;
				// $("#loanModal").modal()
				that.loanInputData = {
					'statementList':res.ibLoanAcctStatementResponse,
					'disbursedAmt':res.disbursedAmt,
					'prdAcctId':res.prdAcctId,
					'runningBal':res.runningBal,
					'totSancLimit':res.totSancLimit
				}
			}else{
				if(res.hasOwnProperty('errorMessage'))
					alert(res['errorMessage'])
				else{
					alert('Failed')
				}
			}
		})
	}
	getInterestCertificate(event, loan){
		let st_date = loan.loanStartDate.split('/')
		let e_date = loan.loanEndDate.split('/')
		let fromDate = st_date[2]+st_date[1]+st_date[0];
		let toDate = e_date[2]+e_date[1]+e_date[0]
		var params = {
			accountNo: loan.loanAccountNo, 
			fromDate: fromDate, 
			toDate: toDate
		}
		this.loanService.getLoanCertificate(params).then(function(res){
			if (res['status'] === 'Success'){
				alert('Success')
			}else{
				alert('Failed')
			}

		})
	}
  	ngOnInit() {
  		// let a = {'lbrCode': '027', 'toDate': '19/06/2015', 'fromDate': '26/03/2014', 'accountNo': '027700100009732'}
  		// console.log(a)
		this.loanService.getLoanDeets().then(
			response => { 

				if(response && response.loanList){
					
				this.setLoanDetails(response.loanList);
				}
			}
		)
		this.table = $('#loanTable').DataTable( {
	    	"aoColumnDefs": [{
		      "bSortable": false, 
		      "aTargets": [0, 1, 2]
		    }],
	        "paging": false,
	        "searching": false        
		});

	}
	monthDiff(start, end) {
        var tempDate = new Date(start);
        var monthCount = 0;
        while((tempDate.getMonth()+''+tempDate.getFullYear()) != (end.getMonth()+''+end.getFullYear())) {
            monthCount++;
            tempDate.setMonth(tempDate.getMonth()+1);
        }
        return monthCount+1;
	}
	/*monthDiff(d1, d2) {
	    var months;
	    months = (d2.getFullYear() - d1.getFullYear()) * 12;
	    months -= d1.getMonth() + 1;
	    months += d2.getMonth();
	    return months <= 0 ? 0 : months;
	}*/

	

}