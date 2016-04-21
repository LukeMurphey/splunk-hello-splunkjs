require.config({
    paths: {
        hello_splunk_js_view: '../app/hello-splunkjs/js/views/HelloSplunkJSView'
    }
});

require(['jquery','underscore','splunkjs/mvc', 'hello_splunk_js_view', 'splunkjs/mvc/simplexml/ready!'],
		function($, _, mvc, HelloSplunkJSView){
	
    // Render the view on the page
    var helloSplunkJSView = new HelloSplunkJSView({
        el: $('#placeholder_for_view')
    });
    
    // Render the view
    helloSplunkJSView.render();
	
});