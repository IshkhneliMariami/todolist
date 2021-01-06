Ext.define('MI.view.Main', {
    extend: 'Ext.panel.Panel',
    layout: {
        type: 'vbox',
        align: 'stretch',
    },
    controller: {
        xclass: 'MI.view.MainController',
    },

    items: [{
        xclass: 'MI.view.TodoGrid',
        flex: 1
    }]


});
