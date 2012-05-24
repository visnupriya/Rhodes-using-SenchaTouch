Ext.define("Sencha.view.Form", {
    extend: "Ext.form.Panel",
    requires: "Ext.form.FieldSet",
    alias: "widget.edit",
    config:{
        scrollable:'vertical'
    },
    initialize: function () {
        console.log("edit");
        this.callParent(arguments);
        var backButton = {
            xtype: "button",
            ui: "back",
            text: "Home"
        };
        var saveButton = {
            xtype: "button",
            ui: "action",
            text: "Update",
            handler: this.onSaveButtonTap,
            scope: this
        };
        var topToolbar = {
            xtype: "toolbar",
            docked: "top",
            title: "Edit Note",
            items: [
                backButton,
                { xtype: "spacer" },
                saveButton
            ]
        };
        var deleteButton = {
            xtype: "button",
            iconCls: "trash",
            iconMask: true,
            scope: this
        };
        var bottomToolbar = {
            xtype: "toolbar",
            docked: "bottom",
            items: [
                deleteButton
            ]
        };
        var name = {
            xtype: 'textfield',
            name: 'name',
            label: 'name',
            required: true
        };
        var email = {
            xtype: 'textfield',
            name: 'email',
            label: 'email'
        };
        var message = {
            xtype: 'textareafield',
            name: 'message',
            label: 'message'
        };
        this.add([
            topToolbar,
            { xtype: "fieldset",
                items: [name,email,message]
            },
            bottomToolbar
        ]);
    },
    onSaveButtonTap: function () {
        console.log("saveNoteCommand");
        this.fireEvent("saveNoteCommand", this);
    }
    
});