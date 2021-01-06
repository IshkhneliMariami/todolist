Ext.define('MI.view.MainController',{
    extend: 'Ext.app.ViewController',

    addItem: function(){
        Ext.create('MI.view.AddItemWindow',{
            autoShow: true,

        })
    },
    savePost: function () {

    }

});