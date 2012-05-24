Ext.application({
    name: 'MyApp',
    views: ['welcome'],
    launch: function() {
	  console.log("welcom lunched");
	  this.views.welcome = new this.views.welcome();
      Ext.create("MyApp.view.Welcome");
      
    }
});