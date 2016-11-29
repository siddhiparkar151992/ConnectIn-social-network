$(document).ready(function() { 
	
	//datetimepicker
    // $('.custom-input, .glyphicon-calendar').datepicker();  
    
    //DataTable
	var table = $('#myTable').DataTable( {
        "scrollY":        "500px",
        "scrollCollapse": true,
        "paging":         false,
        "searching": false        
    });
	
	 setTimeout(function () {
           table.draw();
        }, 1000);
 


	 
    
    //jScrollPane
    $('.dataTables_scrollBody').jScrollPane();
    
    //iCheck
    // $('input').iCheck({
    //     checkboxClass: 'icheckbox_square-blue',
    //     radioClass: 'iradio_square-blue',
    //     increaseArea: '20%' // optional
    // });
     

  
});


//Slick slider
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

//btn-toggle
$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');

    if ($(this).find('.btn-primary').size() > 0) {
        $(this).find('.btn').toggleClass('btn-primary');
    }
    if ($(this).find('.btn-danger').size() > 0) {
        $(this).find('.btn').toggleClass('btn-danger');
    }
    if ($(this).find('.btn-success').size() > 0) {
        $(this).find('.btn').toggleClass('btn-success');
    }
    if ($(this).find('.btn-info').size() > 0) {
        $(this).find('.btn').toggleClass('btn-info');
    }
    if ($(this).find('.btn-off').size() > 0) {
        $(this).find('.btn').toggleClass('btn-off');
    }

    $(this).find('.btn').toggleClass('btn-on');

});

/*$('form').submit(function() {
    alert($(this["options"]).val());
    return false;
});*/