(function(){
  var app = angular.module('store', [ ]);

  //controllers define app behaviour
  app.controller("PanelController", function(){
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

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
      images: [
        {
          full: 'assets/dodecahedron-01-full.jpg',
          thumb: 'dodecahedron-01-thumb.jpg'
        },
        {
          full: 'assets/dodecahedron-01-full.jpg',
          thumb: 'dodecahedron-02-thumb.jpg'
        }
      ]
    },
    {
      name: "Accelatetragon",
      price: 100.50,
      description: "This product is made up!",
      canPurchase: false,
      images: [
        {
          full: 'assets/dodecahedron-02-full.jpg',
        }
      ]
    }
  ]
})();
