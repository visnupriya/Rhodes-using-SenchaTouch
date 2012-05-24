Ext.define('Contact', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'name',  type: 'string'},
            {name: 'email',   type: 'int'},
            {name: 'messaage', type: 'string'},
            
        ]
}
 });
var ed = Ext.create('Contact.model.Contact', {
    name: 'Ed',
    email: 'ed@sencha.com',
    message: 'secret message'
});
console.logs(ed);
