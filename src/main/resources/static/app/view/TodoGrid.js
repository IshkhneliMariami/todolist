Ext.define('MI.view.TodoGrid', {
    extend: 'Ext.grid.Panel',
    reference: 'todoGrid',

    controller: {
        xclass: 'MI.view.MainController'
    },
    viewModel: {
        xclass: 'MI.view.MainViewModel'
    },
    bind: '{todolist}',
    tbar: [{
        text: 'დამატება',
        handler: 'addItem',
        scale: 'medium'
    }],


    columns: [{
        text: 'ID',
        dataIndex: 'id'

    }, {
        text: 'სათაური',
        flex: 1,
        dataIndex: 'title'

    }, {
        text: 'აღწერა',
        flex: 2,
        dataIndex: 'description'


    },
        //     {
        //     xtype: 'booleancolumn',
        //     text: 'სტატუსი',
        //     flex: 1,
        //     trueText: '✓',
        //     falseText: '',
        // },
        {
            xtype: 'actioncolumn',
            width: 150,
            menuDisabled: true,
            sortable: false,
            text: 'წაშლა/რედაქტირება',
            items: [{
                iconCls: 'fa fa-trash',
                handler: 'deleteItem',
                tooltip: 'წაშლა'
            }, {
                iconCls: 'fa fa-edit',
                handler: 'editItem',
                tooltip: 'რედაქტირება',
            }]
        }]
});
