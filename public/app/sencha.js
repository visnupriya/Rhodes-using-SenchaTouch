Ext.application({
    name: 'Contact',

    launch: function() {
    Ext.define('Contact', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['name', 'email', 'message'],
        proxy: {
            type: 'rest',
            url : '/contacts'
        }
            
    }
    
});

var ed = Ext.create('Contact', {
    name: 'Ed',
    email: 'ed@sencha.com',
    message: 'secret message'
});
ed.save();

	  
}
})
