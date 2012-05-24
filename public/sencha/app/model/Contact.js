Ext.define("Sencha.model.Contact", {
    extend: "Ext.data.Model",
    config: {
        idProperty: 'id',
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'message', type: 'string' }
        ]
    }
});