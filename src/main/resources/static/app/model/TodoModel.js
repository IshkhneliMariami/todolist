Ext.define('MI.model.TodoModel', {
    extend: 'Ext.data.Model',
    fields: ['id', 'title', 'description',
        {
            name: 'status',
            type: 'boolean'
        }],

    proxy: {
        url: 'http://localhost:8080/todolist',
        type: 'rest',
        writer: {
            writeRecordId: false,
            writeAllFields: true
        }
    }

})