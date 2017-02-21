(function(){
  var app = angular.module('store', [ ]);

  //controllers define app behaviour
  app.controller('StoreController', function(){
    this.products = gems; //sets property product of controller to gem
  });

  var gems = [
    {
      name: "Dodecahedron",
      price: 2.95,
      description: "I dont know how many sides this shape has!",
      canPurchase: true,
      soldOut: true,
    },
    {
      name: "Accelatetragon",
      price: 100.50,
      description: "This product is made up!",
      canPurchase: false
    }
  ]
})();
