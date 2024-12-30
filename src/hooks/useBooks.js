import {useEffect, useState} from "react";

export const useBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setBooks([
                {
                    id: "1",
                    title: "El amor en los tiempos del cólera",
                    author: "Gabriel García Márquez",
                    genre: "Romance",
                    price: 23.65,
                    synopsis: "«Era inevitable: el olor de las almendras amargas le recordaba siempre el destino de los amores contrariados.» Así empieza una de las historias de amor más maravillosas de la literatura universal.",
                    cover: "/images/elamorenlostiemposdelcolera.jpg"
                }, {
                    id: "2",
                    title: "La casa de los espíritus",
                    author: "Isabel Allende",
                    genre: "Realismo mágico",
                    price: 14.95,
                    synopsis: "La casa de los espíritus, primera novela de Isabel Allende, narra las vivencias de cuatro generaciones de una familia y la forma en la que esta se ve afectada por las transformaciones que vive Chile, el país donde se desarrolla la obra.",
                    cover: "/images/lacasadelosespiritus.jpg"
                }, {
                    id: "3",
                    title: "La caza del Octubre Rojo",
                    author: "Tom Clancy",
                    genre: "Acción",
                    price: 25.10,
                    synopsis: "En algún lugar bajo el gélido Atlántico, un comandante de un submarino soviético acaba de tomar una fatídica decisión. El Octubre Rojo se dirige al oeste. Los americanos lo quieren. Los rusos quieren recuperarlo. La persecución del avanzado submarino nuclear ha comenzado y sólo hay un hombre que puede encontrarlo...",
                    cover: "/images/lacazadeloctubrerojo.jpg"
                }, {
                    id: "4",
                    title: "Cien años de soledad",
                    author: "Gabriel García Márquez",
                    genre: "Realismo mágico",
                    price: 14.20,
                    synopsis: "‘Cien años de soledad’ se centra en la familia Buendía y la maldición que llevan con ellos, por involucrarse entre parientes. Tal es el caso de José Arcadio Buendía y Úrsula Iguarán, quienes son primos y viven con el temor de engendrar un hijo con cola de cerdo.",
                    cover: "/images/cienanosdesoledad.jpg"
                }, {
                    id: "5",
                    title: "Don Quijote de la Mancha",
                    author: "Miguel de Cervantes Saavedra",
                    genre: "Aventuras",
                    price: 18.95,
                    synopsis: "‘Don Quijote de la Mancha’ narra las aventuras de Alonso Quijano, un hidalgo pobre que de tanto leer novelas de caballería acaba enloqueciendo y creyendo ser un caballero andante, nombrándose a sí mismo como don Quijote de la Mancha.",
                    cover: "/images/donquijote.jpg"
                }, {
                    id: "6",
                    title: "Dracula",
                    author: "Bram Stoker",
                    genre: "Ficción Gótica",
                    price: 9.99,
                    synopsis: "Antes de convertirse en un vampiro, el conde Drácula era el príncipe Vlad que, al enterarse de la muerte de su amada, vendió su alma al diablo. Cuatro siglos más tarde, Jonathan Harker, un joven abogado que viaja a un castillo perdido en el este de Europa, acaba siendo capturado por el conde Drácula.",
                    cover: "/images/dracula.jpg"
                }, {
                    id: "7",
                    title: "El Hobbit",
                    author: "J. R. R. Tolkien",
                    genre: "Fantasía y Aventuras",
                    price: 15.20,
                    synopsis: "Sacado de su cómodo agujero hobbit por Gandalf y una banda de enanos, Bilbo se encuentra de pronto en medio de una conspiración que pretende apoderarse del tesoro de Smaug el Magnífico, un enorme y muy peligroso dragón...",
                    cover: "/images/elhobbit.jpg"
                }, {
                    id: "8",
                    title: "El Señor de los Anillos",
                    author: "J. R. R. Tolkien",
                    genre: "Fantasía y Aventuras",
                    price: 66.45,
                    synopsis: "Narra el viaje del protagonista principal, Frodo Bolsón, hobbit de la Comarca, para destruir el Anillo Único y la consiguiente guerra que provocará el enemigo para recuperarlo, ya que es la principal fuente de poder de su creador, el señor oscuro Sauron.",
                    cover: "/images/elsenordelosanillos.jpg"
                }, {
                    id: "9",
                    title: "Tormenta Roja",
                    author: "Tom Clancy",
                    genre: "Suspense",
                    price: 34.93,
                    synopsis: "Un grupo de muhaiddines infiltrados en una de las mayores refinerías de la Unión Soviética comete un atentado. La situación es dramática, el pueblo no debe saber qué ocurre o las consecuencias serán imprevisibles.",
                    cover: "/images/tormentaroja.jpg"
                }
            ]);
        }, 2000);
    }, []);

    return books;
}