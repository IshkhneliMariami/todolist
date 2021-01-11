Ext.define('MI.view.MainViewModel',{
  extend:'Ext.app.ViewModel',
  requires:['MI.model.TodoModel'],


  stores:{
    todolist:{
      model: 'MI.model.TodoModel',
      autoLoad:true,
      autoSync: true,
    }
  }
})