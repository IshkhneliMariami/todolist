Ext.define('MI.view.MainController', {
    extend: 'Ext.app.ViewController',

    addItem: function () {
        Ext.create('MI.view.AddItemWindow', {
            autoShow: true

        })
    },

    saveItem: function () {
        const me = this;
        const form = me.lookup('form');
        const values = form.getForm().getValues();
        const store = me.getViewModel().getStore('todolist');
        const todoitem = Ext.create('MI.model.TodoModel', values);
        store.add(todoitem);
    }


});