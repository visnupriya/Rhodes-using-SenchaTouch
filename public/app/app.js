Ext.Loader.setPath({
	'Ext':'/public/sencha/sdk',
	'Sencha':'/public/sencha/app'});
Ext.application({
	 name:'Myapp',
	 views:['Main'],
	 lunch:function(){
	  Ext.create('Myapp.view.Main');
}
});
