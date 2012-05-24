Ext.Loader.setPath({
    'Sencha': '/public/sencha/app'	
});
Ext.application({
    name: 'Sencha',
    stores: ["Contacts"],
    models: ["Contact"],
    
    controllers: ["Contacts"],
    views: ['Main','Form','List'],
    launch: function() {
        //Ext.create('Sencha.view.Main');
      var main = {
            xtype: "main"
        };
      var form = {
            xtype: "form"
        };
     

        Ext.Viewport.add([main,form]);
    }

});