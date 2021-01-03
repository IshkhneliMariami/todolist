package ge.softgen.softlab.todolist.service;

import ge.softgen.softlab.todolist.model.TodoItem;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public interface TodoItemService {


    List<TodoItem> getAll();

    TodoItem get(long id);

    TodoItem add(TodoItem todoitem);

    TodoItem update(TodoItem todoitem);

    void delete(long id);


}
