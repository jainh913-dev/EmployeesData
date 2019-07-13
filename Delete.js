$(document).ready(function() {
	var t = $('#myTable').DataTable();

	$('#myTable tbody').on('click', 'tr', function() {
		$(this).toggleClass('selected');
	});

	$(".delete").click(function() {
		alert(t.rows('.selected').data().length + ' row(s) selected Are you sure you want to delete this item');
		 t.row('.selected').remove().draw( false );
		
	});
});

