const ligne1 = {
    label: "Ligne 1",
    code: "1",
    directions: [
        { label: "Mosson", code: "mosson" },
        { label: "Odysseum", code: "odysseum" },
    ],
    stations: [
        { label: "Antigone", code: "antigone", isFavorite: false },
        { label: "Boutonnet", code: "boutonnet", isFavorite: false },
        { label: "Château d'O", code: "chateau d'o", isFavorite: false },
        { label: "Comédie", code: "comedie", isFavorite: true },
        { label: "Corum", code: "corum", isFavorite: true },
        { label: "Du Guesclin", code: "du guesclin", isFavorite: false },
        { label: "Euromédecine", code: "euromedecine", isFavorite: false },
        { label: "Gare Saint-Roch", code: "gare st-roch t1", isFavorite: false },
        { label: "Halles Paillade", code: "halles paillad", isFavorite: false },
        { label: "Hauts de Massane", code: "hauts de massane", isFavorite: false },
        { label: "Hôpital Lapeyronie", code: "hop. lapeyronie", isFavorite: false },
        { label: "Léon Blum", code: "leon blum", isFavorite: false },
        { label: "Louis Blanc", code: "louis blanc", isFavorite: true },
        { label: "Malbosc", code: "malbosc", isFavorite: false },
        { label: "Millénaire", code: "millenaire", isFavorite: false },
        { label: "Mondial 98", code: "mondial 98", isFavorite: false },

        { label: "Moulares", code: "moulares", isFavorite: false },
        { label: "Occitanie", code: "occitanie", isFavorite: false },
        { label: "Philippides", code: "philippides", isFavorite: false },
        { label: "Place de l'Europe", code: "pl. de l'europe", isFavorite: false },
        { label: "Place Albert 1er", code: "place albert 1er", isFavorite: false },
        { label: "Place de France", code: "place de france", isFavorite: false },
        { label: "Port Marianne", code: "port marianne", isFavorite: false },
        { label: "Rives du Lez", code: "rive du lez", isFavorite: false },
        { label: "Saint-Eloi", code: "saint-Eloi", isFavorite: true },
        { label: "Saint-Paul", code: "saint-paul", isFavorite: false },
        { label: "Stade Mosson", code: "stade mosson", isFavorite: false },
        { label: "Université des Sciences", code: "universites", isFavorite: true }
    ]
}

const ligne2 = {
    label: "Ligne 2",
    code: "2",
    directions: [
        { label: "Jacou", code: "jacou" },
        { label: "Sabines", code: "sabines" },
        { label: "Saint-Jean-de-Védas", code: "st-jean de vedas" },
    ],
    stations: [
        { label: "Aiguelongue", code: "aiguelongue", isFavorite: false },
        { label: "Aube Rouge", code: "aube rouge", isFavorite: false },
        { label: "Beaux-Arts", code: "beaux-arts", isFavorite: false },
        { label: "Centurions", code: "centurions", isFavorite: false },
        { label: "Charles de Gaulle", code: "ch. de gaulle", isFavorite: false },
        { label: "Clairval", code: "clairval", isFavorite: false },
        { label: "Comédie", code: "comedie", isFavorite: false }
    ]
}

const data = [ligne1, ligne2]

export default {
    data
}