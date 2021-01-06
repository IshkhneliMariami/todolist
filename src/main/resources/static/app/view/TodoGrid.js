Ext.define('MI.view.TodoGrid', {
    extend: 'Ext.grid.Panel',
    reference: 'todoGrid',

    controller: {
        xclass: 'MI.view.MainController'
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


    }, {
        xtype: 'booleancolumn',
        text: 'სტატუსი',
        flex: 1,
        trueText: '✓',
        falseText: '',
    }, {
        xtype: 'actioncolumn',
        width: 100,
        menuDisabled: true,
        sortable: false,
        items: [{
            iconCls: 'fa fa-trash-o',
            handler: 'delete',
            tooltip: 'წაშლა'
        },{
            iconCls: 'x-fa fa-cog',
            handler:'editItem',
            tooltip: 'რედაქტირება',
        }]
    }]
});
