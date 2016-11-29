import { Component,Input, OnInit,Output,EventEmitter} from 'angular2/core';
import { Router } from 'angular2/router';
import { LoanService } from './loan.service';
declare var $: any;
@Component({
  selector: 'loan-statement',
  inputs:['loanInputData'],
  templateUrl: 'static/app/Account/Loans/templates/loan-statement.component.html'
})
export class LoanStatementComponent implements OnInit {
	private loanInputData;
	@Input() loanInputData;
	@Output() onLoanClose = new EventEmitter();
  	constructor(private loanService: LoanService){
			
  	}

	onClose(e){
		this.onLoanClose.emit()
    $('#loanStatementModal').css('display','none')
	}
  	ngOnInit(){
  		$('#loanStatementModal').css('display','block')
  	}
}