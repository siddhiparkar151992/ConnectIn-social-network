import {Injectable,Component}  from 'angular2/core'
declare var $: any;

@Injectable()
export class Utility{

	constructor(){
		
	}
	substractMonths(date, count){
		if (date && count) {
		    var m, d = date.getDate()

		    date.setMonth(date.getMonth() - count, 1)
		    m = date.getMonth()
		    date.setDate(d)
		    if (date.getMonth() !== m) date.setDate(0)
		  }
		  return date
	}

	parseXMLToJSON(xmlData){
		if(!$.isXMLDoc(xmlData)){
			return  false;
		}
		var rootElement = xmlData.children
		var jsonData = {};
		for(var i =0;i<rootElement.length;i++){
			var child = rootElement[i];
			var key =  child.tagName;
			var value;
			if(child.children && child.children.length>0){
				value = this.parseXMLToJSON(child)
			}
			else{
				value =child.textContent
			}
			jsonData[key] = value;
		}
		return jsonData
	}
	parseJSONToXml(jsonData){
		var xmlStr= ''
		for(var i in jsonData){
			var startTag= '<'+i+'>';
			var endTag= '</'+i+'>';
			var completeTag;
			if(typeof(jsonData[i]) == 'object'){
				completeTag = startTag+this.parseJSONToXml(jsonData[i])+endTag;
				

			}
			else{
				completeTag = startTag+jsonData[i]+endTag;
				
			}
			xmlStr+=completeTag 
			
		}
		// var domParser = new DOMParser();
		// var xml  = parser.parseFromString(xmlStr, "text/xml");
		return xmlStr;
	}
	formatDate(date,seperator){
		return (date.getMonth() + 1) + seperator + (date.getDate()) + seperator + (date.getFullYear())
	}
}
