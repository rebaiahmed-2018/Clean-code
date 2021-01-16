export class Books {
  b: any;

  getBbyNbP(nbP) {
    return this.b.filter(b => b.nbP === nbP).length;
  }
}
