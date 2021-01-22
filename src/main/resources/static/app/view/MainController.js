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
        me.getView().close();
    },

    deleteItem: function (grid, rowIndex, colIndex) {
        const me = this;
        Ext.Msg.confirm('წაშლა', 'ნამდვილად გსურთ ჩანაწერის წაშლა?', function (ans) {
            if (ans === 'yes') {
                const store = me.getViewModel().getStore('todolist');
                store.removeAt(rowIndex)
            }
        }, this)
    },


});