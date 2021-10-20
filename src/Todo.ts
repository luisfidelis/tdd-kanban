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

}
