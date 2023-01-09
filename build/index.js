"use strict";
function helloTurna() {
    console.log("Boa tarde");
}
helloTurna();
const client = {
    id: "34fdaf",
    name: "caio",
    email: "coaksod@gmail.com",
    password: "o31231",
    role: "ADMIN"
};
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["NORMAL"] = "NORMAL";
})(Role || (Role = {}));
const novoCliente = {
    id: "jkvaoi3",
    name: "Pastor",
    email: "pastofa@gmail.com",
    password: "pastor3123",
    role: Role.ADMIN
};
console.table(novoCliente);
const normalAccountArray = [];
const userNormal = {
    id: "sa2314",
    name: "Cainho",
    email: "casod@contato.com",
    password: "31caio10",
    account: "CaioPakas",
    role: Role.NORMAL,
    permission: false
};
const userAdmin = {
    id: "casda3",
    name: "vascta",
    email: "dsda3vc@contato.com",
    password: "vastasd",
    account: "vavapapa",
    role: Role.ADMIN,
    permission: true
};
const pessoaCliente = {
    id: "casfa",
    name: "tar3asdd",
    email: "casbaca@contato.com",
    password: "casw1ca",
    role: Role.ADMIN,
};
normalAccountArray.push(userNormal);
console.table(normalAccountArray);
//# sourceMappingURL=index.js.map