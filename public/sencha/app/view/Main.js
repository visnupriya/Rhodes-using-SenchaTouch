Ext.define('Sencha.view.Main', {

	extend: "Ext.Container",
    alias: "widget.main",

    initialize: function () {

        this.callParent(arguments);

        var newButton = {
            xtype: "button",
            text: 'New',
            ui: 'action',
            handler: this.onNewButtonTap,
            scope: this
        };

        var topToolbar = {
            xtype: "toolbar",
            title: 'My Notes',
            docked: "top",
            items: [
                { xtype: 'spacer' },
                newButton
            ]
        };
        var list = {
            xtype: "list",
            store: Ext.getStore("Contacts")
            
           };
       

        this.add([topToolbar,list]);
    },
    onNewButtonTap: function () {
        console.log("newNoteCommand");
        this.fireEvent("newNoteCommand", this);
    },

    onNotesListDisclose: function (list, record, target, index, evt, options) {
        console.log("editNoteCommand");
        this.fireEvent('editNoteCommand', this, record);
    },
    config: {
        layout: {
            type: 'fit'
        }
    }

});