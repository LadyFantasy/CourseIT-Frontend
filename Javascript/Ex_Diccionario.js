const palabras = {

    "Almondiga": "albóndiga",
    "Murciegalo": "murciélago",
    "Setiembre": "Septiembre",
    "Dentrífico": "Dentífrico",
    "Pastaflora": "Pastafrola",
    "Tergopol": "Telgopor",
    "Estuatua": "Estatua",
    "Sambuche": "Sánguche",
    "Captus": "Cáctus",
    "Mondiola": "Bondiola",
    "Picapuerta": "Picaporte",
    "Zanagoria": "Zanahoria",
    "Picoparéntesis": "Nadie sabe cómo se dice",
    "Me relaja": "Me empalaga",
    "Alverja": "Arveja"
}

function escribiBien(obj) {

    const random = Math.floor(Math.random() * Object.keys(obj).length)
    const malEscrita = Object.keys(obj)[random];
    const bienEscrita = Object.values(obj)[random]
    
    return `La palabra ${malEscrita} no se escribe así. Se escribe ${bienEscrita}, BESTIA`
    
}

escribiBien(palabras)