/*$(document).ready(function(){
	var t = $('#myTable').DataTable();
	$('.FirstName').on('click', function(){
		 var data = t.row($(this).parents('td')).data();
		 var name =t.row(this).data();
		 alert(data);
	});*/
	
	
	$(document).ready(function() {
	    var table = $('#myTable').DataTable();
	     
	    $('#myTable tbody').on('click', 'tr', function () {
	        var data = table.row( this ).data();
	        alert( 'You clicked on '+data[1] );
	    });
	
	$(".update").click(function(){
	var detail = new Detail({
		FirstName :	$(".FirstName-input-update").val(),
		LastName : $(".LastName-input-update").val(),
		Position : $(".Position-input-update").val(),
		Office : $(".Office-input-update").val(),
		Salary : $(".Salary-input-update").val(),
		Status : $(".Status-input-update").val()
	});
	details.add(detail);
 });
	
});
