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
        productName: 'Lentes MAXIMA 2241A-2',
        productPrice: 95.00,
        description:
          `Aros de acero inoxidable, Aros para hombres y para mujeres`,
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/products/MX2241A-2-.png'),
        isAvailable: true,
        productImageList: [
          require('../database/images/products/MX2241A-2-.png'),
          require('../database/images/products/MX2241A-2.2-.png'),
          require('../database/images/products/MX2243A-2-.png'),
        ],
    },
    {
      id: 2,
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
        id: 3,
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
        id: 4,
        category: 'Accesorio',
        productName: 'ESTUCHE PARA LENTES DE CONTACTO',
        productPrice: 15,
        description:
          `Hechos de material de plastico.`,
        isOff: true,
        offPercentage: 10,
        productImage: require('../database/images/accesorios/Estuche-de-lentes-de-contacto-Celeste.jpg'),
        isAvailable: true,
        productImageList: [
          require('../database/images/accesorios/Estuche-de-lentes-de-contacto-Celeste.jpg'),
          require('../database/images/accesorios/Estuche-de-lentes-de-contacto-Rosado.jpg'),
          require('../database/images/accesorios/Estuche-de-lentes-de-contacto-Verde.jpg'),
        ],
    },
    {
        id: 5,
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
        id: 6,
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
        id: 7,
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
    {
      id: 8,
      category: 'Producto',
      productName: 'Lentes CAROLINA HERRERA 0074',
      productPrice: 350.00,
      description:
        `Aros de la mejor calidad para mujeres exitosas`,
      isOff: false,
      //offPercentage: 10,
      productImage: require('../database/images/products/CAROLINA-HERRERA-0074-YEP.jpg'),
      isAvailable: true,
      productImageList: [
        require('../database/images/products/CAROLINA-HERRERA-0074-YEP.jpg'),
        require('../database/images/products/6849817_a.webp'),
        require('../database/images/products/6849817_b.webp'),
      ],
  },
  {
    id: 9,
    category: 'Producto',
    productName: 'Lentes CONVERSE Q014',
    productPrice: 54.00,
    description:
      `Aros resistentes para niños`,
    isOff: false,
    //offPercentage: 10,
    productImage: require('../database/images/products/Converse-Q014-Tortoise-Celeste.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/Converse-Q014-Tortoise-Celeste.jpg'),
      require('../database/images/products/Converse-Q014-Tortoise-Celeste-2.jpg'),
      require('../database/images/products/Converse-Q014-Tortoise-Celeste-3.jpg'),
    ],
  },
  {
    id: 10,
    category: 'Producto',
    productName: 'Lentes GILDI KIDS CAIMAN',
    productPrice: 95.00,
    description:
      `Aros resistentes para niños fabricados en material de Acetato`,
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/products/Gildi-Kids-Caiman-130452-Verde.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/Gildi-Kids-Caiman-130452-Verde.jpg'),
      require('../database/images/products/Gildi-Kids-Caiman-130452-Verde-2.jpg'),
      require('../database/images/products/Gildi-Kids-Caiman-130452-Verde-2.jpg'),
    ],
  },
  {
    id: 11,
    category: 'Producto',
    productName: 'Lentes de sol CALVIN KLEIN',
    productPrice: 225.00,
    description:
      `Aros resistentes de metal, tipo de aro al aire.`,
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/products/Calvin-Klein-de-sol-20102S-Oro-Cristal.png'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/Calvin-Klein-de-sol-20102S-Oro-Cristal.png'),
      require('../database/images/products/Calvin-Klein-de-sol-20102S-Oro-Negro.png'),
      require('../database/images/products/Calvin-Klein-de-sol-20102S-Oro-Negro.png'),
    ],
  },
  /*{
    id: 12,
    category: 'Producto',
    productName: 'Lentes de sol CONVERSE',
    productPrice: 175.00,
    description:
      `Un estilo para tus lentes, ideal para estilizar tu rostro y estar a la moda.`,
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/products/Converse-SCO223-Azul.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/Converse-SCO223-Azul.jpg'),
      require('../database/images/products/Converse-SCO223-Plata.jpg'),
      require('../database/images/products/Converse-SCO223-Verde.jpg'),
    ],
  },
  {
    id: 13,
    category: 'Producto',
    productName: 'LENTES DE CONTACTO ACUVUE OASYS PARA ASTIGMATISMO',
    productPrice: 68.00,
    description:
      `6 lentes en cada caja, tiempo de uso para 15 dias 0 15 puestas, correcion para astigmatismo.`,
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/products/Acuvue-Oasys-Astigmatism.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/Acuvue-Oasys-Astigmatism.jpg'),
      require('../database/images/products/Freshlook-Colorblends-Green.jpg'),
      require('../database/images/products/Freshlook-Colorblends-Honey.jpeg'),
    ],
  },
  {
    id: 14,
    category: 'Producto',
    productName: 'LENTES DE CONTACTO AIR OPTIX ASTIGMATISMO',
    productPrice: 85.00,
    description:
      `6 lentes en cada caja, tiempo de uso para 30 dias 0 30 puestas, correcion para astigmatismo.`,
    isOff: true,
    offPercentage: 10,
    productImage: require('../database/images/products/Air-Optix-Astigmatism.jpg'),
    isAvailable: true,
    productImageList: [
      require('../database/images/products/Air-Optix-Astigmatism.jpg'),
      require('../database/images/products/Sky.jpg'),
      require('../database/images/products/Verde.jpg'),
    ],
  },*/

  ]
  