class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usando magia';
                break;
            case 'guerreiro':
                ataque = 'usando espada';
                break;
            case 'monge':
                ataque = 'usando artes marciais';
                break;
            case 'ninja':
                ataque = 'usando shuriken';
                break;
            default:
                ataque = 'usando um ataque indefinido';
        }

        console.log(`O ${this.tipo} atacou  ${ataque}`);
    }
}
const heroi1 = new Heroi('Gandalf', 1000, 'mago');
heroi1.atacar();

const heroi2 = new Heroi('Aragorn', 35, 'guerreiro');
heroi2.atacar();