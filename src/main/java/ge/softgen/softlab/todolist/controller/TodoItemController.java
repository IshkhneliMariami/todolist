package ge.softgen.softlab.todolist.controller;

import ge.softgen.softlab.todolist.model.TodoItem;
import ge.softgen.softlab.todolist.service.TodoItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todolist")
@RequiredArgsConstructor

public class TodoItemController {

    private final TodoItemService todoItemService;

    @GetMapping
    public List<TodoItem> getTodoItems() {
        return todoItemService.getAll();
    }


    @GetMapping("{id}")
    public TodoItem gettodoItem(@PathVariable long id) {
        return todoItemService.get(id);
    }

    @PostMapping
    public ResponseEntity<TodoItem> addTodoitem(@RequestBody TodoItem todoitem) {
        return ResponseEntity.status(HttpStatus.CREATED).body(todoItemService.add(todoitem));
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodoitem(@PathVariable long id) {
        todoItemService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("{id}")
    public TodoItem updateTodoItem(@PathVariable long id,
                                   @RequestBody TodoItem unsafeTodoItem) {
        TodoItem todoitem = todoItemService.get(id);
        todoitem.setTitle(unsafeTodoItem.getTitle());
        todoitem.setDescription(unsafeTodoItem.getDescription());
//        todoitem.setStatus(unsafeTodoItem.getStatus());
        return todoItemService.update(todoitem);
    }

}
