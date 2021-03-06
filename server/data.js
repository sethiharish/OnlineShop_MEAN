const banners = [
  {
    id: 1,
    name: "Carousel1",
    description: "We sell the best pies in the town!",
    imageUrl: "/assets/images/carousel1.jpg",
  },
  {
    id: 2,
    name: "Carousel2",
    description: "We sell the best pies in the town!",
    imageUrl: "/assets/images/carousel2.jpg",
  },
  {
    id: 3,
    name: "Carousel3",
    description: "We sell the best pies in the town!",
    imageUrl: "/assets/images/carousel3.jpg",
  },
];

const categories = [
  {
    id: 1,
    name: "Fruit pies",
    description: "Fruit pies",
  },
  {
    id: 2,
    name: "Cheese cakes",
    description: "Cheese cakes",
  },
  {
    id: 3,
    name: "Seasonal pies",
    description: "Seasonal pies",
  },
];

const pies = [
  {
    id: 1,
    name: "Apple Pie",
    price: 12.95,
    shortDescription: "Our famous apple pies!",
    longDescription:
      "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.",
    inStock: true,
    isPieOfTheWeek: true,
    imageUrl: "/assets/images/pies/applepie.jpg",
    thumbnailImageUrl: "/assets/images/pies/thumbnails/applepiesmall.jpg",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Pumpkin Pie",
    price: 12.95,
    shortDescription: "Our Halloween favorite",
    longDescription:
      "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.",
    inStock: true,
    isPieOfTheWeek: true,
    imageUrl: "/assets/images/pies/pumpkinpie.jpg",
    thumbnailImageUrl: "/assets/images/pies/thumbnails/pumpkinpiesmall.jpg",
    categoryId: 3,
  },
  {
    id: 3,
    name: "Christmas Apple Pie",
    price: 13.95,
    shortDescription: "Happy holidays with this pie!",
    longDescription:
      "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.",
    inStock: true,
    isPieOfTheWeek: false,
    imageUrl: "/assets/images/pies/christmasapplepie.jpg",
    thumbnailImageUrl:
      "/assets/images/pies/thumbnails/christmasapplepiesmall.jpg",
    categoryId: 3,
  },
  {
    id: 4,
    name: "Strawberry Cheese Cake",
    price: 18.95,
    shortDescription: "You'll love it!",
    longDescription:
      "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.",
    inStock: false,
    isPieOfTheWeek: false,
    imageUrl: "/assets/images/pies/strawberrycheesecake.jpg",
    thumbnailImageUrl:
      "/assets/images/pies/thumbnails/strawberrycheesecakesmall.jpg",
    categoryId: 2,
  },
  {
    id: 5,
    name: "Cheese Cake",
    price: 18.95,
    shortDescription: "Plain cheese cake. Plain pleasure.",
    longDescription:
      "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.",
    inStock: true,
    isPieOfTheWeek: false,
    imageUrl: "/assets/images/pies/cheesecake.jpg",
    thumbnailImageUrl: "/assets/images/pies/thumbnails/cheesecakesmall.jpg",
    categoryId: 2,
  },
  {
    id: 6,
    name: "Cranberry Pie",
    price: 17.95,
    shortDescription: "A Christmas favorite",
    longDescription:
      "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.",
    inStock: true,
    isPieOfTheWeek: false,
    imageUrl: "/assets/images/pies/cranberrypie.jpg",
    thumbnailImageUrl: "/assets/images/pies/thumbnails/cranberrypiesmall.jpg",
    categoryId: 3,
  },
  {
    id: 7,
    name: "Strawberry Pie",
    price: 15.95,
    shortDescription: "Our delicious strawberry pie!",
    longDescription:
      "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.",
    inStock: true,
    isPieOfTheWeek: false,
    imageUrl: "/assets/images/pies/strawberrypie.jpg",
    thumbnailImageUrl: "/assets/images/pies/thumbnails/strawberrypiesmall.jpg",
    categoryId: 1,
  },
  {
    id: 8,
    name: "Rhubarb Pie",
    price: 15.95,
    shortDescription: "My God, so sweet!",
    longDescription:
      "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.",
    inStock: true,
    isPieOfTheWeek: true,
    imageUrl: "/assets/images/pies/rhubarbpie.jpg",
    thumbnailImageUrl: "/assets/images/pies/thumbnails/rhubarbpiesmall.jpg",
    categoryId: 1,
  },
  {
    id: 9,
    name: "Peach Pie",
    price: 15.95,
    shortDescription: "Sweet as peach",
    longDescription:
      "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.",
    inStock: false,
    isPieOfTheWeek: false,
    imageUrl: "/assets/images/pies/peachpie.jpg",
    thumbnailImageUrl: "/assets/images/pies/thumbnails/peachpiesmall.jpg",
    categoryId: 1,
  },
  {
    id: 10,
    name: "Cherry Pie",
    price: 15.95,
    shortDescription: "A summer classic!",
    longDescription:
      "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.",
    inStock: true,
    isPieOfTheWeek: false,
    imageUrl: "/assets/images/pies/cherrypie.jpg",
    thumbnailImageUrl: "/assets/images/pies/thumbnails/cherrypiesmall.jpg",
    categoryId: 1,
  },
  {
    id: 11,
    name: "Blueberry Cheese Cake",
    price: 18.95,
    shortDescription: "You'll love it!",
    longDescription:
      "Icing carrot cake jelly-o cheesecake. Sweet roll marzipan marshmallow toffee brownie brownie candy tootsie roll. Chocolate cake gingerbread tootsie roll oat cake pie chocolate bar cookie dragée brownie. Lollipop cotton candy cake bear claw oat cake. Dragée candy canes dessert tart. Marzipan dragée gummies lollipop jujubes chocolate bar candy canes. Icing gingerbread chupa chups cotton candy cookie sweet icing bonbon gummies. Gummies lollipop brownie biscuit danish chocolate cake. Danish powder cookie macaroon chocolate donut tart. Carrot cake dragée croissant lemon drops liquorice lemon drops cookie lollipop toffee. Carrot cake carrot cake liquorice sugar plum topping bonbon pie muffin jujubes. Jelly pastry wafer tart caramels bear claw. Tiramisu tart pie cake danish lemon drops. Brownie cupcake dragée gummies.",
    inStock: true,
    isPieOfTheWeek: false,
    imageUrl: "/assets/images/pies/blueberrycheesecake.jpg",
    thumbnailImageUrl:
      "/assets/images/pies/thumbnails/blueberrycheesecakesmall.jpg",
    categoryId: 2,
  },
];

module.exports = {
  banners,
  categories,
  pies,
};
