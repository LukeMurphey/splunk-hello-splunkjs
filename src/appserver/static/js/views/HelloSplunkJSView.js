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
    "splunkjs/mvc/searchmanager",
    'text!../app/hello-splunkjs/js/templates/HelloSplunkJSView.html',
    "css!../app/hello-splunkjs/css/HelloSplunkJSView.css"
], function(
    _,
    Backbone,
    mvc,
    $,
    SimpleSplunkView,
    SearchManager,
    Template
){
    // Define the custom view class
    var HelloSplunkJSView = SimpleSplunkView.extend({
        className: "HelloSplunkJSView",
        
        events: {
        	"click .get-most-recent-event" : "doGetMostRecentEvent"
        },
        
        defaults: {
        	
        },
        
        initialize: function() {
        	this.options = _.extend({}, this.defaults, this.options);
        	
        	//this.some_option = this.options.some_option;
        },
        
        doGetMostRecentEvent: function(){ 
        	
        },
        
        render: function () {
        	
        	this.$el.html(_.template(Template, {
        		//'some_option' : some_option
        	}));
        	
        }
    });
    
    return HelloSplunkJSView;
});