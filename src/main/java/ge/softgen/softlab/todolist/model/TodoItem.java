package ge.softgen.softlab.todolist.model;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@NoArgsConstructor
@Table(name = "to_do_list")
public class TodoItem {
    @Id
    private long id;

    @Column(name = "text")
    private String text;

    @Column(name = "status")
    private String status;


}
