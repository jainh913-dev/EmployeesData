$(document).ready(function() {
	var t = $('#myTable').DataTable();
$("#new").click(function(){
	
	var ModelView = Backbone.View.extend({
	render : function() {
		this.$el.append('<label style="color: black;">First Name</label> <input type="text" class="form-control First-Name-input" placeholder="First Name" autofocus="autofocus"> <label style="color: black;">Last Name</label> <input type="text" class="form-control Last-Name-input" placeholder="Last Name" autofocus="autofocus"><label style="color: black;">Position</label><input type="text" class="form-control Position-Name-input" placeholder="Position" autofocus="autofocus"><label style="color: black;">Office</label><input type="text" class="form-control Office-input" placeholder="Office Name" autofocus="autofocus"><label style="color: black;">Salary</label><input type="number" class="form-control Salary-input" placeholder="Salary" autofocus="autofocus"><label style="color: black;">Status</label><select class="form-control Status-input"><option id="1" value="Enable">Enable</option> <option id="2" value="Disable">Disable</option> </select>');
		}
	});
	
	var modelview = new ModelView({el : $('#foradd')});
	modelview.render();
});
});
































//var ModelDefault = Backbone.Model.extend({
//defaults : {
//    "FirstName": "Himanshu",
//    "LastName": "Jain",
//    "Position": "Software developer",
//    "Office": "AIT Global Pvt ltd",
//    "Salary": "None",
//    "Status": "Active"
// }
//})
//
//var ModelView = Backbone.View.extend({
