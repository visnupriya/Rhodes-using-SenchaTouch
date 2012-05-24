Ext.application({
    name: 'MyApp'
});
Ext.define('MyApp.view.Welcome', {
    extend: 'Ext.Panel',

    config: {
        html: 'Welcome to my app',
        fullscreen: true
    }
});