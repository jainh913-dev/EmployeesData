$(document).ready(function(){
	
	var DetailView = Backbone.View.extend({
	model : new Detail(),
	tagName : 'tr',
	
	initialize : function() {
		this.template = _.template($('.blogs-list-template').html());
		},		
	        render : function() {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
			}
		});



var DetailsView = Backbone.View.extend({

	initialize: function() {
		var self = this;
		this.model.on('add', this.render, this);
		this.model.on('change', function() {
			setTimeout(function() {
				self.render();
			}, 30);
		},this);
		this.model.on('remove', this.render, this);
	},
	

	
	render : function() {
		var self = this;
		this.$el.html('');
		this.model.each(function(detail) {
			self.$el.append((new DetailView({model: detail})).render().$el);
			});
		return this;
		}
});

	
var detailsview = new DetailsView({
		el : $('#body'),
		model : details
	});
detailsview.render();

});

























//events: {
//	'click .update': 'edit',
//},
//
//edit: function() {
//
//	var FirstName = this.$('.FirstName').html();
//	var LastName = this.$('.LastName').html();
//	var Position = this.$('.Position').html();
//	var Office = this.$('.Office').html();
//	var Salary = this.$('.Salary').html();
//	var Status = this.$('.Status').html();
//
//	this.$('.FirstName').html('<input type="text" class="form-control FirstName-update" value="' + FirstName + '">');
//	this.$('.LastName').html('<input type="text" class="form-control LastName-update" value="' + LastName + '">');
//	this.$('.Position').html('<input type="date" class="form-control Position-update" value="' + Position + '">');
//	this.$('.Office').html('<input type="date" class="form-control Office-update" value="' + Office + '">');
//	this.$('.Salary').html('<input type="date" class="form-control Salary-update" value="' + Salary + '">');
//	this.$('.Status').html('<select name="status" class="form-control Status-update" value="' + Status + '"> <option value="Enable">Enable</option> <option value="Disable">Disable</option> </select>');
//	
//	  var textFN1 = $(".FirstName-update").val();
//	  var textLN1 = $(".LastName-update").val();
//	  var textP1 = $(".Position-update").val();
//	  var textS1 = $(".Salary-update").val();
//	  var textO1 = $(".Office-update").val();
//	  var textS1 = $(".Status-update").val();
//	  if(textFN1 == "" || textLN1 == "" || textDa1 == "" || textS1 == "") {
//	  alert('All field are required please fill the field');
//	  return false;
//	  }
//	  
//	  
//	this.model.set('FirstName', $('.FirstName-update').val());
//	this.model.set('LastName', $('.LastName-update').val());
//	this.model.set('Position', $('.Position-update').val());
//	this.model.set('Office', $('.Office-update').val());
//	this.model.set('Salary', $('.Salary-update').val());
//	this.model.set('Status', $('.Status-update').val());
//},
//














//initialize: function() {
//var self = this;
//this.model.on('add', this.render, this);
//this.model.on('change', function() {
//	setTimeout(function() {
//		self.render();
//	}, 30);
//},this);
//this.model.on('remove', this.render, this);
//},
//
