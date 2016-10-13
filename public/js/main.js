$(document).ready(function () {
  $('.play').on('click', function () {
    // call the object game's method called init
    game.init()
  })
  // Object game's definition with properties and methods in it
  var game = {
    clicks: 0,
    // declare variable cards as an array of images:
    x: 0,
    seconds: 0,
    // cards : [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6],
    cards: [
      'img/bulbasaur.jpg',
      'img/bulbasaur.jpg',
      'img/charizard.jpg',
      'img/charizard.jpg',
      'img/charmander.jpg',
      'img/charmander.jpg',
      'img/ivysaur.jpg',
      'img/ivysaur.jpg',
      'img/squirtle.jpg',
      'img/squirtle.jpg',
      'img/venusaur.jpg',
      'img/venusaur.jpg',
      'img/jirachi.jpg',
      'img/jirachi.jpg',
      'img/oddish.jpg',
      'img/oddish.jpg',
      'img/pikachu.jpg',
      'img/pikachu.jpg',
      'img/diancie.jpg',
      'img/diancie.jpg',
      'img/machoke.jpg',
      'img/machoke.jpg',
      'img/ninetales.jpg',
      'img/ninetales.jpg'
    ],
    // games's method init() definition
    init: function () {
      $('.play').addClass('hidden')
      $('.reset').removeClass('hidden')
      $('.timer').removeClass('hidden')
      $('.clicks').removeClass('hidden')
      this.x = setInterval(this.updateTime.bind(this), 1000)
      $('.reset').on('click', function () {
        // location object for reloading
        location.reload()
      })
      $('.container').removeClass('hidden')
      // mistake no 1: I used jquery.on'click'method which calls resetBoard() below which calls game.init() again
      this.shuffle()
    },

    updateTime: function () {
      this.seconds = this.seconds + 1
      // console.log(this.seconds )

      $('.timer').text('Time: ' + this.seconds.toString() + 's')
      $('.timer').id = 'timer'
      if (this.seconds === 600) {
        $('.result').html('<h1>You lost!</h1>')
        clearInterval(this.x)
        // location.reload()
      }
    },
    shuffle: function () {
      // Aim is to rearrange the numbers randomly in the game.cards array
      var random = 0
      var temp = 0
      for (var i = 0; i < this.cards.length; i++) {
        // generates a random between 0-11 which will be used as an index to retrieve the card value
        random = Math.floor(Math.random() * 11)
          // console.log(random)
          // store current card value = temp via its index number
        temp = this.cards[i]
          // and then set each random card value to current card
        this.cards[i] = this.cards[random]
          // and then get the current card value and store it to the random card.
        this.cards[random] = temp
      }
      // console.log(this.cards)
      // eg. [6, 2, 6, 5, 3, 4, 2, 5, 3, 1, 1, 4]
      // To make sure I shuffle cards before I assign JS values to HTML elements
      this.assignCards()
    },

    assignCards: function () {
      // Aim is to assign the shuffled card values to each card element using attrbutes: can use
      // for loop or .each meethod
      for (var i = 0; i < this.cards.length; i++) {
        // make sure to include jquery index no:.eq()
        $('.card').eq(i).attr('data-card-value', this.cards[i])
          // To make sure cards are assigned before they handle clicks: do not do clicks inside for loop
          // this.clickhandlers()
      }
        this.clickhandlers()
    },
    clickhandlers: function() {
      $('.card').on('click', function() {
        // console.log($(this))
        // $(this) refers to each jquery card element
        // console.log($(this).data('cardValue'))
        // Add jquery html element + data and class = selected to each clicked card
        // $(this).addClass('selected').html('<p>' + $(this).data('cardValue') +'</p>')
        // .addClass('selected')
        $(this).html('<img src= ' + $(this).data('cardValue') +'>').addClass('selected')
        game.clicks = game.clicks + 1
        // console.log(game.clicks)
        $('.clicks').text('Clicks: ' + game.clicks)
          // everythime, it is clicked, we need to check match
        game.checkMatch (game.clicks)
      })
    },
    checkMatch: function (clicks) {
      // console.log ($('.selected').length)
      if ( clicks % 2 === 0) {
        if ($('.selected').eq(0).data('cardValue') === $('.selected').eq(1).data('cardValue')) {
          // remove cards
          $('.selected').each(function() {
            $(this).animate({opacity: 0}).removeClass('unmatched')
          })
          $('.card').removeClass('selected')
          this.checkWin()
        } else {
          //  flip cards back over: using time function, and remove class .selected
          // setTimeout function: after time of 50, do the function
          setTimeout(function () {
              $('.selected').each(function() {
                $(this).html('').removeClass('selected')
              })
            }, 50 )
        }
      }
    },
      checkWin: function () {
        console.log('seconds are: ' + this.seconds);
        if ($('.unmatched').length === 0) {
          $('.result').html('<h1>You rock!</h1>')
          console.log(this.x);
          clearInterval(this.x)
        }
    },
  }
})
