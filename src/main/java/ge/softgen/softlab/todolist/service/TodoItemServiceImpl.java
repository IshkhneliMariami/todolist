package ge.softgen.softlab.todolist.service;


import ge.softgen.softlab.todolist.exception.NotFoundException;
import ge.softgen.softlab.todolist.model.TodoItem;
import ge.softgen.softlab.todolist.repository.TodoItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class TodoItemServiceImpl implements TodoItemService {
    private final TodoItemRepository todoItemRepository;

    @Override
    public List<TodoItem> getAll() {
        return todoItemRepository.findAll();

    }

    @Override
    public TodoItem get(long id) {
        String msg = String.format("Todoitem with id: %d Not Found", id);
        return todoItemRepository.findById(id).orElseThrow(() -> new NotFoundException(msg));

    }

    @Override
    public TodoItem add(TodoItem todoitem) {
        todoitem.setId(null);
        return todoItemRepository.save(todoitem);
    }

    @Override
    public TodoItem update(TodoItem todoitem) {
        return todoItemRepository.save(todoitem);
    }

    @Override
    public void delete(long id) {
        get(id);
        todoItemRepository.deleteById(id);

    }
}
