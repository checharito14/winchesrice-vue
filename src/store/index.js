import { defineStore } from "pinia";
import { getEspecUrl, generateImagesUrls } from "../utils/imageHelper";

export const useStore = defineStore("productos", {
    state: () => ({
        categoriaActual: "malacates",
        categoriaInfo: [
            {
                id: "malacates",
                titulo: "Malacates",
                descripcion:
                    "Fuerte robusto, para muchos años de trabajo y fácil de manejar",
                caracteristicas: [
                    {
                        id: 1,
                        titulo: "Engranajes maquinados",
                        icono: "fa-cogs",
                        descripcion: "Fabricados de acero especial",
                    },
                    {
                        id: 2,
                        titulo: "Carretes estructurales",
                        icono: "fa-circle-notch",
                        descripcion: "Acero con lubricacion permanente",
                    },
                    {
                        id: 3,
                        titulo: "Sistema de embrague",
                        icono: "fa-hand-paper",
                        descripcion: "Friccion de acción positiva",
                    },
                ],
                imagenes: generateImagesUrls("malacate", 9),
                especificaciones: getEspecUrl("especificaciones_malacates"),
            },
            {
                id: "bombas",
                titulo: "Bombas",
                descripcion:
                    "Fuerte robusto, para muchos años de trabajo y fácil de manejar",
                caracteristicas: [
                    {
                        id: 1,
                        titulo: "Sistema de enfriamiento",
                        icono: "fa-snowflake",
                        descripcion:
                            "Se utilizan con excelentes resultados en el sistema de enfriamiento de la máquina",
                    },
                    {
                        id: 2,
                        titulo: "Circulación de agua",
                        icono: "fa-water",
                        descripcion:
                            "Para circular agua en los condensadores de refrigeración",
                    },
                    {
                        id: 3,
                        titulo: "Agitación de salmuera",
                        icono: "fa-blender",
                        descripcion:
                            "Para agitar la salmuera en las tinas de precongelación",
                    },
                ],
                imagenes: generateImagesUrls("bomba", 3),
                especificaciones: getEspecUrl("especificaciones_bombas"),
            },
            {
                id: "poleas",
                titulo: "Poleas",
                descripcion:
                    "Fuerte robusto, para muchos años de trabajo y fácil de manejar",
                caracteristicas: [
                    {
                        id: 1,
                        titulo: "Construcción de acero fundido",
                        icono: "fa-industry",
                        descripcion:
                            "Construidas totalmente en acero fundido, con baleros de rodillos cónicos",
                    },
                    {
                        id: 2,
                        titulo: "Cáncamo de acero fundido",
                        icono: "fa-anchor",
                        descripcion:
                            "Diseñado para proporcionar máxima resistencia y durabilidad",
                    },
                    {
                        id: 3,
                        titulo: "Tornillería de alta resistencia",
                        icono: "fa-bolt",
                        descripcion:
                            "Tornillería de acero de alta resistencia, sumamente fuerte y robusta",
                    },
                    {
                        id: 4,
                        titulo: "Eficiencia económica",
                        icono: "fa-money-bill-wave",
                        descripcion:
                            "Económica y eficiente, ideal para diversas aplicaciones",
                    },
                ],
                imagenes: generateImagesUrls("polea", 3),
                especificaciones: getEspecUrl("especificaciones_poleas"),
            },
        ],
    }),
    getters: {
        getCategoriaInfo(state) {
            return state.categoriaInfo.find(
                (categoria) => categoria.id === state.categoriaActual
            );
        },
    },
    actions: {
        cambiarCategoria(categoria) {
            this.categoriaActual = categoria;
        },
    },
});
