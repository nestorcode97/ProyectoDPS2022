export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00AC76',
    red: '#C04345',
    blue: '#0043F9',
    backgroundLight: '#F0F0F3',
    backgroundMedium: '#B9B9B9',
    backgroundDark: '#777777',
  };

  export const Items = [
    {
        id: 1,
        category: 'Producto',
        productName: 'Lentes Artistik-324',
        productPrice: 50.00,
        description:
          `Aros de acero inoxidable`,
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/products/Artistik-324-Azul.jpg'),
        isAvailable: true,
        productImageList: [
          require('../database/images/products/Artistik-324-Azul.jpg'),
          require('../database/images/products/Artistik-324-Cafe.jpg'),
          require('../database/images/products/Artistik-324-Oro.jpg'),
        ],
    },
    {
        id: 2,
        category: 'Producto',
        productName: 'CONVERSE CV3015',
        productPrice: 175.00,
        description:
          `Lentes Unisex, su diseño posee patillas de metal enriquecidas con un detalle de relleno de esmalte. `,
        isOff: false,
        //offPercentage: 10,
        productImage: require('../database/images/products/CV3015-717.jpg'),
        isAvailable: true,
        productImageList: [
          require('../database/images/products/CV3015-717.jpg'),
          require('../database/images/products/CV3015-780.jpg'),
          require('../database/images/products/Estuche-Converse.jpg'),
        ],
    },
    {
        id: 3,
        category: 'Accesorio',
        productName: 'ESTUCHE PARA LENTES DE CONTACTO',
        productPrice: 1.50,
        description:
          `Hechos de material de plastico.`,
        isOff: true,
        offPercentage: 18,
        productImage: require('../database/images/accesorios/Estuche-de-lentes-de-contacto-Celeste.jpg'),
        isAvailable: true,
        productImageList: [
          require('../database/images/accesorios/Estuche-de-lentes-de-contacto-Celeste.jpg'),
          require('../database/images/accesorios/Estuche-de-lentes-de-contacto-Rosado.jpg'),
          require('../database/images/accesorios/Estuche-de-lentes-de-contacto-Verde.jpg'),
        ],
    },
    {
        id: 4,
        category: 'Accesorio',
        productName: 'ESTUCHE DE ZIPPER',
        productPrice: 5.00,
        description:
          `Estuche duro para lentes con cierre de zipper en diferentes colores, protege tus lentes de golpes.`,
        isOff: false,
        //offPercentage: 10,
        productImage: require('../database/images/accesorios/Estuche-para-lentes-de-zipper-normal-color-morado.jpg'),
        isAvailable: true,
        productImageList: [
          require('../database/images/accesorios/Estuche-para-lentes-de-zipper-normal-color-morado.jpg'),
          require('../database/images/accesorios/Estuche-para-lentes-de-zipper-normal-color-rojo.jpg'),
          require('../database/images/accesorios/Estuche-Sport-para-lentes-de-sol.jpg'),
        ],
    },
    {
        id: 5,
        category: 'Accesorio',
        productName: 'FRANELAS DE LIMPIEZA',
        productPrice: 2.50,
        description:
          `Medidas: 7.5 ancho x 5.5 alto cm`,
        isOff: false,
        //offPercentage: 10,
        productImage: require('../database/images/accesorios/Franela-Morada-1.jpg'),
        isAvailable: false,
        productImageList: [
          require('../database/images/accesorios/Franela-Morada-1.jpg'),
          require('../database/images/accesorios/Franela-Rosado.jpg'),
          require('../database/images/accesorios/Franela-Verde-1.jpg'),
        ],
    },
    {
        id: 6,
        category: 'Accesorio',
        productName: 'LENS CLEANER',
        productPrice: 5.00,
        description:
          `Liquido especial para el cuidado de los lentes. Contenido: 60 ml`,
        isOff: false,
        //offPercentage: 10,
        productImage: require('../database/images/accesorios/purity_2027208_lens_cleaning_kit_2_1396274.jpg'),
        isAvailable: true,
        productImageList: [
          require('../database/images/accesorios/purity_2027208_lens_cleaning_kit_2_1396274.jpg'),
          require('../database/images/accesorios/Purity_Amazon2.jpg'),
          require('../database/images/accesorios/301c625e-fb0b-4b7c-aada-df7623fb7d2f_1.5740b126b99b2bd9876c7258a6646178.jpeg'),
        ],
    },

  ]
  