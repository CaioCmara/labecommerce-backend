function helloTurna(){
    console.log("Boa tarde")

}

helloTurna()

//criar um sistema de cadastro

 

type Person ={
    id: string
    name: string
    email: string
    password: string
    role: "ADMIN" | "NORMAL"
}

const client: Person={
    id: "34fdaf",
    name: "caio",
    email: "coaksod@gmail.com",
    password: "o31231",
    role: "ADMIN"
}

//type Aliases de conta, com as propriedade account e permission:

type AdminAccount = { 
	account: string 
	permission: boolean
 }
 
type NormalAccount = { 
	account: string 
	permission: boolean
 }

 //enum com valores ADMIN e NORMAL

 enum Role {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
 }

 const novoCliente: Person ={
    id: "jkvaoi3",
    name: "Pastor",
    email: "pastofa@gmail.com",
    password: "pastor3123",
    role: Role.ADMIN
 }

 console.table(novoCliente)

 //intersection unindo pessoa (person) + permissão (role)
 // utilizar o AdminAccount e NormalAccount agora
 
 type NormalUser = Person & NormalAccount
 type AdminUser = Person & AdminAccount

 //um arrry de usuarios que permite guardar apenas os usuarios do tipo person + role

 const normalAccountArray: NormalUser[] = []

 // criar duas pessoas com permissao normal e outra admin

 const userNormal: NormalUser={
    id: "sa2314",
    name: "Cainho",
    email: "casod@contato.com",
    password: "31caio10",
    account: "CaioPakas",
    role: Role.NORMAL,
    permission: false
 }

 const userAdmin: AdminUser={
    id: "casda3",
    name: "vascta",
    email: "dsda3vc@contato.com",
    password: "vastasd",
    account: "vavapapa",
    role: Role.ADMIN,
    permission: true
 }

 const pessoaCliente: Person ={
    id: "casfa",
    name: "tar3asdd",
    email: "casbaca@contato.com",
    password: "casw1ca",
    role: Role.ADMIN,
    
 }

 //adicionar pessoas ao array 

 normalAccountArray.push(userNormal)

  

 console.table(normalAccountArray)