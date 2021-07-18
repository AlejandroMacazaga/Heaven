class Cuenta {
    Nombre = "Test";
    Id = 1;

    Cuenta() {
        this.Nombre = "test2";
        this.Id = -1;
    };
    Cuenta(NombreAInsertar, IdAInsertar) {
        this.Nombre = NombreAInsertar;
        this.Id = IdAInsertar;
    };

    ToStringJSON() {
        return JSON.stringify(this);
    };
}

export default Cuenta;