define([
    "underscore",
    "backbone",
    "splunkjs/mvc",
    "jquery",
    "splunkjs/mvc/simplesplunkview",
    'text!../app/hello-splunkjs/js/templates/CHANGEMEView.html', // CHANGE_THIS: Modify the path to use a template
    "css!../app/hello-splunkjs/css/CHANGEMEView.css" // CHANGE_THIS: Modify the path to use a template
], function(
    _,
    Backbone,
    mvc,
    $,
    SimpleSplunkView,
    Template
){
    // Define the custom view class
    var CHANGEMEView = SimpleSplunkView.extend({ // CHANGE_THIS
        className: "CHANGEMEView", // CHANGE_THIS
        
        defaults: {
        	
        },
        
        initialize: function() {
        	this.options = _.extend({}, this.defaults, this.options);
        	
        	//this.some_option = this.options.some_option;
        },
        
        render: function () {
        	
        	this.$el.html(_.template(Template, {
        		//'some_option' : some_option
        	}));
        	
        }
    });
    
    return CHANGEMEView; // CHANGE_THIS
});