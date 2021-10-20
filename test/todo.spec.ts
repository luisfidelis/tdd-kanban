
import { Todo } from "../src/Todo";

describe("class Todo", () => {

  it("Deve instanciar a tarefa como ativa, caso não seja informado um status 'ativa'", () => {
    const todo = new Todo("Tarefa inicial", "Algum texto descritivo");
    expect(todo.ativo).toBeTruthy();
  })

  it("Deve instanciar a tarefa com o status ativo = true, caso seja passado o parametro com valor 'true'", () => {
    const todo = new Todo("Tarefa inicial", "Algum texto descritivo", true);
    expect(todo.ativo).toBeTruthy();
  })

  it("Deve instanciar a tarefa com o status ativo = false, caso seja passado o parametro com valor 'false'", () => {
    const todo = new Todo("Tarefa inicial", "Algum texto descritivo", false);
    expect(todo.ativo).toBe(false);
  })

  it("Deve instanciar a tarefa com a data informada por parametro", () => {
    const data = new Date();
    const todo = new Todo("Tarefa inicial", "Algum texto descritivo", false, data);
    expect(todo.data).toEqual(data);
  })

})
