Ext.define("Sencha.view.List", {

    extend: "Ext.dataview.List",

    alias: "widget.list",

    config: {

        
        itemTpl: "<div class=\"list-item-title\">{name}</div><div class=\"list-item-narrative\">{narrative}</div>"       

    }

});