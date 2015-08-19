var app = angular.module('firstApp', []);
app.controller('MyFirstController', function ($scope) {
  $scope.name = 'Severus Snape'
});

app.controller('ExercisesController', function ($scope) {
  $scope.FavColor = 'Blue';
  $scope.secondsInACentury = 3.15569e9;
  $scope.rightNow = Date.now();
});

app.controller('BuildInD', function ($scope) {
  $scope.names = ["Harry", "Ron", "Hermione", "Sirius", "Hedwig", "Tonks"];
  $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  $scope.numbers = [1,1,2,5,6,9,9,9];
  $scope.games = {
    'WoW': "RPG",
    'Zelda': 'RPG',
    'Mario': 'Platformer',
    'Golden Eye': 'Shooter'
  };
});

app.controller('CamShop', function ($scope) {
  $scope.cameras = [
  {
    title: "Nikon D3100 DSLR",
    image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
    rating: 3.4,
    price: 369.99,
    onSale: true
  },
  {
    title: "Canon EOS 70D",
    image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
    rating: 2.0,
    price: 1099.0,
    onSale: false
  },
  {
    title: "Nikon D810A",
    image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
    rating: 4.2,
    price: 3796.95,
    onSale: true
  }
]
});

app.controller('eventAction', function ($scope) {
  $scope.number = 5;
  $scope.pickRandomNumber = function () {
    $scope.number = Math.floor(Math.random() * 10) + 1;
  }
  $scope.reverseWord =function () {
    $scope.word = $scope.word.split('').reverse().join('');
  }
});

app.controller('pingPongBingBong', function ($scope) {
  $scope.scoreOne = 0;
  $scope.scoreTwo = 0;
  $scope.scoreTracker = function (input) {
    if (input === 'p1') {
      if ($scope.scoreTwo < 11) {
        if ($scope.scoreOne < 11) {
          $scope.scoreOne = $scope.scoreOne + 1
        }
      }
    }
    else {
      if ($scope.scoreOne < 11) {
        if ($scope.scoreTwo < 11) {
          $scope.scoreTwo = $scope.scoreTwo + 1
        }
      }
    }
  }
  $scope.resetBoard = function () {
    $scope.scoreTwo = 0;
    $scope.scoreOne = 0;
  }
});

app.controller('contactApp', function ($scope) {
  $scope.allContacts = [{
    name: 'Harry Potter',
    email: 'hp@hogwarts.com',
    phone: '123-wizards-rule'
  },
  {
    name: 'Ron Weasle',
    email: 'rw@hogwarts.com',
    phone: '321-wizards-rule'
  },
  {
    name: 'Haggrid',
    email: 'bigH@hogwarts.com',
    phone: '999-wizards-rule'
  }];
  // $scope.allContacts = [];
  $scope.addContact = function (name, email, phone) {
    $scope.allContacts.push({
      name: name,
      email: email,
      phone: phone
    });
  }
})
