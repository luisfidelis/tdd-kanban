
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

  describe("metodo isValida", () => {

    it("Deve retornar falso caso o titulo não esteja preenchido", () => {
      const data = new Date();
      const todo = new Todo("", "Algum texto descritivo", false, data);
      expect(todo.isValida()).toBe(false);
    })

    it("Deve retornar falso caso a descrição não esteja preenchida", () => {
      const data = new Date();
      const todo = new Todo("Algum titulo", "", false, data);
      expect(todo.isValida()).toBe(false);
    })

    it("Deve retornar falso caso a data esteja preenchida, mas seja uma data invalida", () => {
      const data = new Date("string de erro");
      const todo = new Todo("Algum titulo", "Alguma descricao", false, data);
      expect(todo.isValida()).toBe(false);
    })

    it("Deve retornar verdadeiro caso os parâmetros estejam de acordo, mas a data não exista", () => {
      const todo = new Todo("Algum titulo", "Alguma descricao", false);
      expect(todo.isValida()).toBe(true);
    })

    it("Deve retornar verdadeiro caso os parâmetros estejam de acordo, mas a data não exista", () => {
      const data = new Date();
      const todo = new Todo("Algum titulo", "Alguma descricao", false, data);
      expect(todo.isValida()).toBe(true);
    })

  })

  describe("metodo toggleAtivo", () => {

    it("Deve ativar uma tarefa, caso o estado anterior dela seja inativo", () => {
      const todo = new Todo("Tarefa inicial", "Algum texto descritivo", false);
      todo.toggleAtivo();
      expect(todo.ativo).toBeTruthy();
    })

    it("Deve desativar uma tarefa, caso o estado anterior dela seja ativo", () => {
      const todo = new Todo("Tarefa inicial", "Algum texto descritivo", true);
      todo.toggleAtivo();
      expect(todo.ativo).toBeFalsy();
    })

  })

  describe("metodo alterarTitulo", () => {

    it("Deve alterar o titulo, caso o novo titulo passado por parametro seja uma string com tamanho", () => {
      const data = new Date();
      const todo = new Todo("tarefa inicial", "Algum texto descritivo", false, data);
      todo.alterarTitulo("novo titulo");
      expect(todo.titulo).toEqual("novo titulo");
    })

    it("Deve lançar uma exceção caso o novo titulo passado por parametro seja uma string vazia", () => {
      const data = new Date();
      const todo = new Todo("tarefa inicial", "Algum texto descritivo", false, data);
      const wrapperException = () => todo.alterarTitulo("");
      expect(wrapperException).toThrow(Error);
      expect(wrapperException).toThrow(new Error("titulo invalido"));
      //expect(wrapperException).toThrowErrorMatchingSnapshot("titulo invalido");
      // --- Nao é legal. Só para conhecimento
      try {
        todo.alterarTitulo("");
      } catch(error) {
        expect(error).toBeDefined();
        expect(error.message).toBe("titulo invalido");
        expect(error).toBeInstanceOf(Error);
      }
      // ---
    })

  })


})
