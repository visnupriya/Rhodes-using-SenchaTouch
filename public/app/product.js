Ext.ns('product', 'Ext.ux');

// model field definition
Ext.regModel('Product', {
    fields: ['name','sku','brand','price']
});

product.DataStore = new Ext.data.JsonStore({
    autoDestroy: true,
    storeId: 'myStore',

   model: 'Product',
   sorters: 'name',
   getGroupString : function(record) {
       return record.get('name')[0];
   },
proxy: {
    type: 'ajax',
    url: '/app/Product/alljson',
    reader: {
        type: 'json',
    root: 'products',
        idProperty: 'id'
    }
},
  idProperty: 'id'
});
product.DataStore.load();



product.ProductList = new Ext.List({
    itemTpl: '<div class="product2"><strong>{name}</strong></div>',
    selModel: {
        mode: 'SINGLE',
        allowDeselect: false
    },
    grouped: true,
    indexBar: true,
	listeners: {
		itemtap: function(view, index, item, e  ){ 
				product.DetailForm.user = view.store.data.items[index];
				product.FormPanel.loadModel(product.DetailForm.user);
				
		 }
	},


    store: product.DataStore,
	width:225,
	height: '100%'
	

});



product.DetailForm = {
    scroll: false,
    url   : '/app/Product/update',
    standardSubmit : false,
    items: [
        {
            xtype: 'fieldset',
            title: 'product Details',
            instructions: 'Please enter the information above.',
            defaults: {
                required: true,
                labelAlign: 'left',
                labelWidth: '30%'
            },
            items: [
            {
                xtype: 'textfield',
                name : 'name',
                label: 'Name',
                useClearIcon: true,
                autoCapitalize : false
            }, {
	            xtype: 'textfield',
	            name : 'phone',
	            label: 'Phone',
	            useClearIcon: true,
	            autoCapitalize : false
	        }, {
                xtype: 'emailfield',
                name : 'email',
                label: 'Email',
                placeHolder: 'john@example.com',
                useClearIcon: true
            }, 	{
                xtype: 'hiddenfield',
                name : 'id',
                label: 'id'
	        }]
        }
    ],
    listeners : {
        submit : function(form, result){
            console.log('success', Ext.toArray(arguments));
        },
        exception : function(form, result){
            console.log('failure', Ext.toArray(arguments));
        }
    }

    
};

product.FormPanel = new Ext.form.FormPanel(Ext.apply(product.DetailForm,{
	width: 400
}));



product.SaveButton = new Ext.Button({
    text: 'Save changes',
	ui: 'confirm',
	margin: '0 0 0 100',
	width: 200,
    iconMask: true,
    handler: function() {
        if(product.DetailForm.user){
            product.FormPanel.updateRecord(product.DetailForm.user, true);
			setTimeout(function(){rho_sync();},250);
        }
        product.FormPanel.submit({
            waitMsg : {message:'Submitting', cls : 'demos-loading'}
        })
	}
});

product.DetailPanel = new Ext.Panel({
	id: 'productdetail',
	width: '100%',
	height: '100%',
	cls: 'detailpanel',
	items: [product.FormPanel, product.SaveButton]

});


product.Page = new Ext.Container({
	layout: {
		type: 'hbox',
		align: 'stretch'
	},
	items: [product.productList,product.DetailPanel]
});