import {OnChanges, Component, OnInit, Input,EventEmitter,Output, Injector, Injectable, Inject, AfterViewChecked} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import { Router } from 'angular2/router';
import {ActivityService} from './activity.service';
import {Config} from '../app-conf'
declare var $: any;

@Component({
    selector: 'activity-log',
    templateUrl: 'static/app/ActivityLog/templates/activity-log.component.html',
    directives:[FORM_DIRECTIVES]
   	
})

export class ActivityComponent implements OnInit{
	private table;
	private custId = userData.userId
	private act_Validator: ControlGroup;
	private act_type: Control;
	private act_Name : Control;
	private act_strtDt = '';
	private act_endDt = '';
	private select_type : Control;
	private act_selected = false;
	private screenDisplay = true; //false --> pdf download 
	private activityList = ['All']

	initialiseFormControl(builder){
			this.select_type = new Control('All', Validators.required)
			this.act_type = new Control('', Validators.required)
			this.act_Name = new Control('', Validators.required)
			this.act_Validator= builder.group({
				select_type : this.select_type,
				act_type:this.act_type,
				act_Name:this.act_Name,
			})
	}
	constructor(private builder : FormBuilder, private activityService: ActivityService){
		this.initialiseFormControl(builder)
	}
	clear(){
		$('#act_strtDt').val('')
		$('#act_endDt').val('')
		this.select_type.updateValue('All')
		this.act_selected = false;
		this.screenDisplay = true;
	}
	onClose(){
		this.table.clear().draw()
		
	}
	onSelectType($event){
		if(this.select_type.value === 'Selected'){
			this.act_selected = true;

		}else{
			this.act_selected = false;
		}
	}
	generatePDF(data){
		let params = {}
		let that = this;

		let headers = {
			'userId' : userData.userId,
			'from_date' : this.act_strtDt,
			'to_date': this.act_endDt
		}
		params['headers'] = headers
		params['data'] = data
		params['type'] = 'activity'
		this.activityService.generatePDF(params).then(function(res){
			
			var pom = document.createElement('a')
			let encParams = btoa(userData.userId)
			pom.href = 'getActivityPDF/'+ encParams;
			pom.click();
			setTimeout(function(){
				let params_data = {'type' : 'activity'}
				that.activityService.deletePDF(params_data)
			},100)

		})
	}
	onSubmit(){
		this.act_strtDt = $('#act_strtDt').val()
		this.act_endDt = $('#act_endDt').val()
		var params = {
			'activityName' : '' || (this.select_type.value === 'All' ? '' : this.select_type.value),
			'strtDate' : this.act_strtDt,
			'endDate' :  this.act_endDt
		}
		var that = this;
		this.activityService.listActivity(params).then(function(res){
			if(res.status === 'Success'){
				var lists = res.list;
				if (that.screenDisplay){ 
					if(lists){
						lists.map(function(val, ind){
							that.table.row.add([ind+1, val[1], val[2]]);
						});
						that.table.draw()
					}
					$("#actModal").modal()
				}
				else{
					if(lists){
						that.generatePDF(lists)
					}
					else{
						alert('No data')
					}
				}
			}else{
				alert('No Logs')
			}
		})
		
	}
	onChangeTrans(){}
	ngOnInit(){
		var that = this;
		$('.radio-inline')
			.on('ifCreated ifClicked ifChanged ifChecked ifUnchecked ifDisabled ifEnabled ifDestroyed check ', function(event){                
	            if(event.type ==="ifChecked"){
	                $('input').iCheck('update');
	                that.screenDisplay = event.target.value === 'option1' ? true : false; 
	           	}})
			.iCheck({
		        checkboxClass: 'icheckbox_square-blue',
		        radioClass: 'iradio_square-blue',
		        increaseArea: '20%' // optional
    	});
		$('.custom-input').datepicker({
			format: 'dd-M-yyyy',
		});
		this.table = $('#actTable').DataTable( {
	    	"aoColumnDefs": [{
		      "bSortable": false, 
		      "aTargets": [0, 1, 2]
		    }],
	        "paging": false,
	        "searching": false        
		});
		var that = this;
		this.activityService.getActivityTypes().then(function(res){
			if (res.status === 'Success'){
				that.activityList = that.activityList.concat(res.list)
			}else{
				// console.log(res)
			}
		})
	}

}