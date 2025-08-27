import Meta from './Metas';

const listaMock = [{
    "id":"1",
    "detalles": "Correr por 30 minutos",
    "periodo": "dia",
    "eventos": 1,
    "icono": "🏃",
    "meta": 365,
    "plazo": "2030-01-01",
    "completado": 5
},
{
    "id":"2",
    "detalles": "Leer libros",
    "periodo": "año",
    "eventos": 6,
    "icono": "📚",
    "meta": 12,
    "plazo": "2030-01-01",
    "completado": 0
},
{
    "id":"3",
    "detalles": "Viajar a parques nacionales",
    "periodo": "mes",
    "eventos": 1,
    "icono": "✈️",
    "meta": 365,
    "plazo": "2030-01-01",
    "completado": 5
}
];

function Lista() {
    return (
        listaMock.map(meta => <Meta key={meta.id} {...meta}></Meta>)
    );
}

export default Lista;