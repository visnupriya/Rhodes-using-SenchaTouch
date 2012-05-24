Ext.define("Sencha.controller.Contacts", {
     extend: "Ext.app.Controller",
    config: {
        refs: {
            // We're going to lookup our views by xtype.
            main: "main",
            form:"form",
            edit: "edit"
        },
        control: {
            main: {
                // The commands fired by the notes list container.
                newNoteCommand: "onNewNoteCommand"
                //editNoteCommand: "onEditNoteCommand"
            },
            form:{
            	  saveNoteCommand:"formSave"
            	  
            }
        }
    },
     slideLeftTransition: { type: 'slide', direction: 'left' },

    slideRightTransition: { type: 'slide', direction: 'right' },
    activateForm: function () {
    	console.log("-----ddddddd----------------")
    	//var form = this.getForm();
        //Ext.Viewport.animateActiveItem(form, this.slideLeftTransition);
        var form = this.getForm();
        //noteEditor.setRecord(record); // load() is deprecated.
        Ext.Viewport.animateActiveItem(form, this.slideLeftTransition);
    },
    // Commands.
    onNewNoteCommand: function () {

        console.log("onNew-------------NoteCommand");
        this.activateForm();
    },
    onEditNoteCommand: function (list, record) {

        console.log("onEditNoteCommand");
    },
    formSave:function(){
    	console.log("---------------saved-----------")
    	var form =this.getForm();
    	form.submit({
				url: '/app/Contact/create',
				method: 'POST',
				
				success: function() 	{
				alert('form posted successfully.');
			}
			})
    },
    // Base Class functions.
    launch: function () {
        this.callParent(arguments);
        var s=Ext.getStore("Contacts").load();
        console.log(s);
    },
    init: function () {
        this.callParent(arguments);
        console.log("init");
    }
});