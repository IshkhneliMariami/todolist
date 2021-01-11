Ext.define('MI.model.TodoModel', {
    extend: 'Ext.data.Model',
    fields: ['id', 'title', 'description',
        // {
        //     name: 'status',
        //     type: 'boolean'
        // }
    ],
    proxy: {
        url: '/todolist',
        type: 'rest',
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }

})