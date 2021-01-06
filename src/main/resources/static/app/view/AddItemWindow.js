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

    items: [{
        xtype: 'form',
        reference: 'form',
        bodyPadding: 10,
        fieldDefaults: {
            anchor: '100%',
            allowBlank: false
        },

        items: [{
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
            handler: 'savePost'
        }],

    }]
})