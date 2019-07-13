$(document).ready(function() {

	 $('#myTable #head1 th').each(function(i){
			var title = $(this).text();
			if(title == "Status")
				{
				$(this).html('<select class="form-control" id="filter"><option id="0" value="">Select</option><option id="1" value="Enable">Enable</option> <option id="2" value="Disable">Disable</option> </select>');
				$('#filter').on('change',function(){
		           var selectedValue = $("#filter").val();
		           var selectedId = $(this).find('option:selected').attr('id');
		            if ($(this).find('option:selected').attr('id') !== 1) {
			            t.column(5).search(this.value).draw();
			            }
		            if ($(this).find('option:selected').attr('id') !== 2) {
			            t.column(5).search(this.value).draw();
			            }
		            
		            
			        if(selectedId == 2)
		            {
		            	
		            $("#body").css('color', 'red');
		            }
		            if(selectedId == 1)
		            {
	            	
	            	$("#body").css('color', 'green');
	            	}
		            if(selectedId == 0)
	            	{
	            	
	            	$("#body").css('color', 'black');
	            	}
				});
			}
				
			else
				{
				$(this).html('<input type="text" class="form-control" placeholder="Search '+title+'" autofocus="autofocus">');
				$('input',this).on('keyup',function(){
			        if ( t.column(i).search() !== $(this).val() ) {
			            t.column(i).search(this.value).draw();
			        }
			    });
				}
			console.log(title);
		});
	 
	var data1 = details.toJSON();
	var t = $('#myTable').DataTable({
	    
		"columnDefs": [{
			"targets": 0,
			"orderable": false, 
			"data": "data1",
		    "render": function ( data, type, row, meta ) {
		      return '<a href="#editEmployeeModal">'+data+'</a>';
		    }
			
		}]
			
	});
	
	
 
    $('.add').on('click',function(){
        t.row.add([
        	$(".First-Name-input").val(),
        	$(".Last-Name-input").val(),
        	$(".Position-Name-input").val(),
        	$(".Office-input").val(),
        	$(".Salary-input").val(),
        	$(".Status-input").val()
        	]).draw(false);
 
    });
    $('.add').click();
	
	$('.add').click(function() {
		var textF = $(".First-Name-input").val();
		var textL = $(".Last-Name-input").val();
		var textP = $(".Position-Name-input").val();
		var textO = $(".Office-input").val();
		var textS = $(".Salary-input").val();
		var textSt = $(".Status-input").val();
		
		if (textF == "" || textL == ""|| textP == "" || textO == ""|| textS == ""|| textSt == "") {
			alert('All field are required please fill the field');
			return false;
			}
		
		var detail = new Detail({
				FirstName : $('.First-Name-input').val(),
				LastName : $('.Last-Name-input').val(),
				Position : $('.Position-Name-input').val(),
			    Office : $('.Office-input').val(),
				Salary : $('.Salary-input').val(),
				Status : $('.Status-input').val(),
				});
		
		$('.First-Name-input').val('');
		$('.Last-Name-input').val('');
	    $('.Position-Name-input').val('');
	    $('.Office-input').val('');
		$('.Salary-input').val('');
		$('.Status-input').val('');
		details.add(detail);
		
	});
});


		




























































//			var data = details.toJSON();
//			var t = $('#myTable').DataTable({
//				retrieve: true,
//				}).draw(false);

	
	
//					$(document).ready(function() {
//						    
//						});
					
					
					
					
					
					/*	$('.add').click(function() {
							var data = details.toJSON();
							var t = $('#myTable').DataTable({
							}).draw();
						});*/


