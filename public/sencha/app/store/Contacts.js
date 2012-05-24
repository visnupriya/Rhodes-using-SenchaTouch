Ext.define("Sencha.store.Contacts", {

    extend: "Ext.data.Store",
    //storeId: 'contactStore',

    config: {
         fields: ['name', 'email', 'message'],
					proxy: {
						type: 'ajax',
						url: '/app/Contact/index',
						reader: {
							type: 'json',
							rootProperty: 'data'
						}
					},
					autoLoad: true
    }

});