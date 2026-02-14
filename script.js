// Dados separados pois as coberturas de carro são maiores
const rotasMoto = [
    { nome: "Alexsandro", bairros: ["peruibe", "gaivota", "luiza mar", "jamaica", "jardim regina", "bopiranga", "santa julia"] },
    { nome: "Gabriel Batista", bairros: ["sao fernando", "tupy", "cibratel 2", "coronel", "umuarama", "sabauna", "guapiranga", "corumba", "belas artes", "praia dos sonhos"] },
    { nome: "Lucas Rodrigues", bairros: ["centro", "cidade anchieta", "satelite", "vila sao paulo", "laranjeiras", "oasis", "savoy", "guapura", "tropical", "nova itanhaem", "magalhaes", "sion", "suarao"] },
    { nome: "Renan", bairros: ["campos eliseos", "verde mar", "santa terezinha", "loty", "florida mirim", "itaguai", "agenor de campos", "regina maria", "santana"] },
    { nome: "Clayton", bairros: ["jardim leonor", "vila seabra", "nossa senhora de fatima", "vila atlantica", "umuarama", "vera cruz", "mongagua", "pedreira", "centro", "vila sao paulo", "vila nova"] },
    { nome: "Augusto", bairros: ["itanhaem", "mongagua"] },
    { nome: "Allan", bairros: ["praia grande"] }
];

const rotasCarro = [
    { nome: "Falar com a torre", bairros: ["peruibe"] },
    { nome: "Douglas Daniel", bairros: ["gaivota", "luiza mar", "jamaica", "jardim regina", "bopiranga", "santa julia", "sao fernando", "tupy", "cibratel"] },
    { nome: "Mauro", bairros: ["coronel", "umuarama", "sabauna", "guapiranga", "corumba", "belas artes", "praia dos sonhos", "cidade anchieta", "centro", "satelite", "vila sao paulo", "laranjeiras", "oasis", "savoy", "guapura"] },
    { nome: "Marcos", bairros: ["tropical", "nova itanhaem", "magalhaes", "sion", "suarao", "campos eliseos", "verde mar", "santa terezinha", "loty", "florida mirim", "itaguai", "agenor de campos", "regina maria", "santana", "jardim leonor", "jussara", "itaoca"] },
    { nome: "Edmilson", bairros: ["jardim praia grande", "oceanopolis", "vila seabra", "nossa senhora de fatima", "vila atlantica", "umuarama", "vera cruz", "mongagua", "pedreira", "centro", "vila sao paulo", "vila nova", "praia grande"] }
];

function consultar() {
    const busca = document.getElementById('busca').value.toLowerCase();
    const boxM = document.getElementById('resMoto');
    const boxC = document.getElementById('resCarro');

    if (busca.length < 2) { 
        boxM.style.display = 'none'; 
        boxC.style.display = 'none'; 
        return; 
    }

    // Busca independente para Moto
    const m = rotasMoto.find(r => r.bairros.some(b => b.includes(busca)));
    if (m) {
        document.getElementById('tecM').innerText = m.nome;
        document.getElementById('listaM').innerText = "Área Moto: " + m.bairros.join(", ");
        boxM.style.display = 'block';
    } else { boxM.style.display = 'none'; }

    // Busca independente para Carro
    const c = rotasCarro.find(r => r.bairros.some(b => b.includes(busca)));
    if (c) {
        document.getElementById('tecC').innerText = c.nome;
        document.getElementById('listaC').innerText = "Área Carro: " + c.bairros.join(", ");
        boxC.style.display = 'block';
    } else { boxC.style.display = 'none'; }

}



