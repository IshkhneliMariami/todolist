Ext.define('MI.view.AddItemWindow', {
    extend: 'Ext.window.Window',
    title: 'დამატება',
    modal: true,
    layout: 'fit',
    width: 400,
    height: 300,
    config: {
        post: null
    },
    controller:{
      xclass: 'MI.view.MainController'
    },
    viewModel:{
        xclass:'MI.view.MainViewModel'
    },

    items: [{
        xtype: 'form',
        reference: 'form',
        bodyPadding: 10,
        fieldDefaults: {
            anchor: '100%',
            allowBlank: false
        },

        items: [
        //     {
        //     xtype: 'numberfield',
        //     name:'id',
        //     fieldLabel: 'ID'
        // },
            {
            xtype: 'textfield',
            name: 'title',
            fieldLabel: 'Title'
        }, {
            xtype: 'textarea',
            name: 'description',
            fieldLabel: 'Description'

        }],
        buttons: [{
            text: 'შენახვა',
            handler: 'saveItem'
        }],

    }]
})