import { Currency } from "pastry-ui";

const cakeboards = [
  {
    flavors: [
      "Brigadeiro",
      "Brigadeiro com Ninho",
      "Prestígio",
      "Brigadeiro com Prestígio",
      "Mousse de Limão com Brigadeiro",
      "Mousse de Ninho com Brigadeiro",
      "Beijinho",
      "Brigadeiro",
      "Doce de Leite",
      "Doce de Leite com Coco",
      "Mousse de Limão",
      "Mousse de Maracujá",
      "Mousse de Leite Ninho",
      "Brigadeiro de Leite Ninho",
      "Mousse de Maracujá com Brigadeiro",
      "Brigadeiro Tradicional com Brigadeiro de Ninho"
    ],
    roundFormats: [
      { size: "PP", price: { value: 115, currency: Currency.BRL } },
      { size: "P", price: { value: 140, currency: Currency.BRL } },
      { size: "M", price: { value: 200, currency: Currency.BRL } },
      { size: "G", price: { value: 275, currency: Currency.BRL } }
    ],
    squareFormats: [
      { size: "40 fatias", price: { value: 375, currency: Currency.BRL } },
      { size: "50 fatias", price: { value: 450, currency: Currency.BRL } },
      { size: "60 fatias", price: { value: 525, currency: Currency.BRL } },
      { size: "70 fatias", price: { value: 600, currency: Currency.BRL } }
    ]
  },
  {
    flavors: [
      "Doce de Leite com Abacaxi",
      "Doce de Leite com Ameixa",
      "Prestígio Trufado (prestígio com trufa de chocolate)",
      "Olho de Sogra (beijinho com ameixa)",
      "Ninho Trufado (mousse de leite ninho com trufa de chocolate)",
      "Creme com Pêssego",
      "Creme com Abacaxi",
      "Doce de Leite com Paçoca"
    ],
    roundFormats: [
      { size: "PP", price: { value: 125, currency: Currency.BRL } },
      { size: "P", price: { value: 155, currency: Currency.BRL } },
      { size: "M", price: { value: 215, currency: Currency.BRL } },
      { size: "G", price: { value: 300, currency: Currency.BRL } }
    ],
    squareFormats: [
      { size: "40 fatias", price: { value: 400, currency: Currency.BRL } },
      { size: "50 fatias", price: { value: 480, currency: Currency.BRL } },
      { size: "60 fatias", price: { value: 560, currency: Currency.BRL } },
      { size: "70 fatias", price: { value: 640, currency: Currency.BRL } }
    ]
  },
  {
    flavors: [
      "Mousse de Chocolate com Cereja",
      "Trufado de Chocolate",
      "Trufado de Chocolate Branco",
      "Doce de Leite com Nozes",
      "Brigadeiro de Nozes",
      "Salada de Frutas (creme com morango, pêssego e abacaxi)",
      "Creme com 2 frutas a escolher (morango, abacaxi e/ou pêssego)",
      "Doce de Leite com Morango",
      "Creme com Morango",
      "Mousse de Ninho com Morango",
      "Brigadeiro com Morango",
      "Brigadeiro de Ninho com Morango"
    ],
    roundFormats: [
      { size: "PP", price: { value: 135, currency: Currency.BRL } },
      { size: "P", price: { value: 165, currency: Currency.BRL } },
      { size: "M", price: { value: 225, currency: Currency.BRL } },
      { size: "G", price: { value: 315, currency: Currency.BRL } }
    ],
    squareFormats: [
      { size: "40 fatias", price: { value: 425, currency: Currency.BRL } },
      { size: "50 fatias", price: { value: 510, currency: Currency.BRL } },
      { size: "60 fatias", price: { value: 595, currency: Currency.BRL } },
      { size: "70 fatias", price: { value: 680, currency: Currency.BRL } }
    ]
  },
  {
    name: "Bolo Supreme Bombom de Morango",
    roundFormats: [
      { size: "PP", price: { value: 130, currency: Currency.BRL } },
      { size: "P", price: { value: 160, currency: Currency.BRL } },
      { size: "M", price: { value: 230, currency: Currency.BRL } },
      { size: "G", price: { value: 330, currency: Currency.BRL } }
    ],
  },
  {
    name: "Bolo Morango Folhado",
    roundFormats: [
      { size: "PP", price: { value: 145, currency: Currency.BRL } },
      { size: "P", price: { value: 190, currency: Currency.BRL } },
      { size: "M", price: { value: 240, currency: Currency.BRL } },
      { size: "G", price: { value: 335, currency: Currency.BRL } }
    ],
  },
  {
    name: "Bolo Brigadeiro de Ninho com Nutella",
    roundFormats: [
      { size: "PP", price: { value: 145, currency: Currency.BRL } },
      { size: "P", price: { value: 175, currency: Currency.BRL } },
      { size: "M", price: { value: 235, currency: Currency.BRL } },
      { size: "G", price: { value: 330, currency: Currency.BRL } }
    ],
  },
  {
    name: "Bolo com KitKat",
    roundFormats: [
      { size: "PP", price: { value: 150, currency: Currency.BRL } },
      { size: "P", price: { value: 190, currency: Currency.BRL } },
      { size: "M", price: { value: 290, currency: Currency.BRL } },
      { size: "G", price: { value: 390, currency: Currency.BRL } }
    ],
  }
];

export default cakeboards;
