require.config({
    paths: {
    	text: "../app/hello-splunkjs/contrib/text"
    }
});


define([
    "underscore",
    "backbone",
    "splunkjs/mvc",
    "jquery",
    "splunkjs/mvc/simplesplunkview",
    'text!../app/hello-splunkjs/js/templates/HelloSplunkJSView.html',
    "css!../app/hello-splunkjs/css/HelloSplunkJSView.css"
], function(
    _,
    Backbone,
    mvc,
    $,
    SimpleSplunkView,
    Template
){
    // Define the custom view class
    var HelloSplunkJSView = SimpleSplunkView.extend({
        className: "HelloSplunkJSView",
        
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
    
    return HelloSplunkJSView;
});