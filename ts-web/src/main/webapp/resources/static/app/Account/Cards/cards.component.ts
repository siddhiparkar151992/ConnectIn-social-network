import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
declare var $:any;
@Component({
  selector: 'cards-details',
  templateUrl: 'static/app/Account/Cards/templates/cards.html'
})

export class CardsComponent implements OnInit{
	
	ngOnInit(){
		setTimeout(function(){
			$('.cards-slider').slick({
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
}