export class Todo {

  public titulo: string;
  public descricao: string;
  public ativo: boolean;
  public data?: Date;

  constructor(titulo: string, descricao: string, ativo?: boolean, data?: Date){
    this.titulo = titulo;
    this.descricao = descricao;
    if(ativo === null || ativo === undefined) {
      this.ativo = true;
    } else {
      this.ativo = ativo;
    }
    if(data) {
      this.data = data;
    }
  }

  isValida() {
    const isDatePresent = !!this.data;
    const isValidDate = this.data && !isNaN(this.data.getTime());
    return !!this.titulo && !!this.descricao && (!isDatePresent || isValidDate);
  }

  toggleAtivo() {
    this.ativo = !this.ativo;
  }

  alterarTitulo(novoTitulo: string) {
    if(novoTitulo.length) {
      this.titulo = novoTitulo;
      return this.titulo;
    }
    throw new Error("titulo invalido");
  }

  alterarDescricao(novoDescricao: string) {
    if(novoDescricao.length) {
      this.descricao = novoDescricao;
      return this.descricao;
    }
    throw new Error("Descricao invalida");
  }

}
