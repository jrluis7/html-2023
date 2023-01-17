
class Pareja{
    p1;
    p2;
    childs
    constructor(p1,p2){
        this.p1 = p1;
        this.p2 = p2;
    }
    private factoryChild(name){
        return new Person(name, this.p1.apellido , this.p2.apellido)
    }

    public moreFamily(name){
        const child =  this.factoryChild(name);
        this.childs.push( child );
        return child;
    }
}

export class Person{
    public nombre;
    public apellido;
    constructor(nombre, apellido, apellido2){
        this.nombre = nombre;
    }
}

const ESTHER = new Person( 'Esther', '', '' );
const HECTOR = new Person( 'Héctor', '', '' );

const ESTHER_HECTOR = new Pareja( ESTHER, HECTOR );

setTimeout( ()=>{

    const MACARENA = ESTHER_HECTOR.moreFamily( 'Macarena' )

}, 10000000 );






