
export type UserConstrutor = {
    id?: number;
    name: string;
    email: string;
    password: string;
    cpf: string;
    phone: string;
}


export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    cpf: string;
    phone: string;

    constructor({id, name, email, password, cpf, phone}: UserConstrutor) { // informações que o usuario precisa passar
        this.id = id || 0;
        this.name = name;
        this.email = email;
        this.password = password;
        this.cpf = cpf;
        this.phone = phone;
    }

    get publicInfo(){
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            cpf: this.cpf,
            phone: this.phone
        }
    }

    get data(){// atraves do get eu consigo acessar o metodo como se fosse uma propriedade
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            password: this.password,
            cpf: this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
            phone: this.phone
        }
    }

    static filter(){
        return ['id', 'name', 'email', 'cpf', 'phone'];
    }
}