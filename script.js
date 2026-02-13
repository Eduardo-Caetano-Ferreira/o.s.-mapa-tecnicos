// Dados separados pois as coberturas de carro são maiores
const rotasMoto = [
    { nome: "Alexsandro", bairros: ["peruibe"] },
    { nome: "Gabriel Batista", bairros: ["gaivota", "santa julia", "tupy", "praia dos sonhos", "belas artes", "cibratel"] },
    { nome: "Lucas Rodrigues", bairros: ["umuarama", "sabauna", "centro", "baixio", "ivoty"] },
    { nome: "Renan", bairros: ["oasis", "savoy", "nova itanhaem", "tropical", "suarao", "loty"] },
    { nome: "Clayton", bairros: ["florida mirim", "itaguai", "agenor de campos", "jussara"] },
    { nome: "Fabio", bairros: ["jardim praia grande", "oceanopolis", "seabra", "vila atlantica", "centro", "princesa", "real", "cidade das criancas"] },
    { nome: "Allan", bairros: ["praia grande"] },
    { nome: "Augusto", bairros: ["itanhaem", "mongagua"] }
];

const rotasCarro = [
    { nome: "Motorista Peruibe", bairros: ["peruibe"] }, // Nome não especificado na imagem, apenas a cidade
    { nome: "Mauro", bairros: ["gaivota", "santa julia", "tupy", "cibratel", "praia dos sonhos", "umuarama", "sabauna", "centro", "baixio", "ivoty", "oasis", "savoy"] },
    { nome: "Edmilson", bairros: ["nova itanhaem", "tropical", "suarao", "campos eliseos", "verde mar", "santa teresinha", "loty", "itaoca"] },
    { nome: "Felipe Arouche", bairros: ["jardim praia grande", "centro", "praia grande"] }
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
