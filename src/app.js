/**
 * Horoscope Companion
 * Alexander Ou, Miggy Calleja, Kenneth Yoo, Karson Kwan
 * HackingEDU Pebble API Price List
 * 25 Oct. 2015
 */




var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Window({ fullscreen: true });
var image = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  image: 'images/EmblemF2.png'
});
main.add(image);
main.show();


main.on('click', 'up', function(e) {
   var window = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),     //Question 1
    font: 'gothic-24-bold',
    text: 'Go back to menu and press select to play!',
    textAlign: 'center'
  });
  window.add(textfield);
  window.show();
});

var q1 = 'Homeless man. Give change?';
var q2 = 'Friend needs moral support? Help?';  
var q3 = 'Are you an artist?';
var q4 = 'Do you have chronic worrying?';
var q5 = 'Do you think the glass as half full?';
var q6 = 'Do you encourage friends?';

var q7 = 'Do you like a good pun';
var q8 = 'Are you full of energy?';
var q9 = 'Could you survive in the wild?';
var q10 = 'Are you patient?';
var q11 = 'Do you take sides?';

var pisces = 'pisces';
var taurus = 'taurus';
var cancer = 'cancer';
var aries = 'aries';
var leo = 'leo';
var virgo = 'virgo';
var aquarius = 'aquarius';
var gemini = 'gemini';
var capricorn = 'capricorn';
var scorpio = 'scorpio';
var sagittarius = 'sagittarius';
var libra = 'libra';


var textfield2 = new UI.Text();
var textfield3 = new UI.Text();
var textfield4 = new UI.Text();


function askQ(wind, a, textfield2){
    textfield2 = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: a,
    textAlign: 'center'
    });
    wind.add(textfield2);      //Question 2 (Y)
}

function answer(wind, textfield3, textfield4) {
      
    textfield3 = new UI.Text({
    position: new Vector2(0, 0),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'yes',
    textAlign: 'right'    
  });
    textfield4 = new UI.Text({
    position: new Vector2(0, 130),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'no',
    textAlign: 'right'    
  }); 
    wind.add(textfield3);
    wind.add(textfield4);    
}


main.on('click', 'select', function(e) {
  var wind = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),     //Question 1
    font: 'gothic-24-bold',
    text: q1,
    textAlign: 'center'
  });
  var textfield5 = new UI.Text({
    position: new Vector2(0, 0),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'yes',
    textAlign: 'right'    
  });
  var textfield6 = new UI.Text({
    position: new Vector2(0, 130),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'no',
    textAlign: 'right'    
  });
  wind.add(textfield);
  wind.add(textfield5);
  wind.add(textfield6);
  wind.show();
  
  wind.on('click','up', function(e) { 
    
      var wind2 = new UI.Window({
        fullscreen: true,
      });
      askQ(wind2, q2, textfield2);
      answer(wind2, textfield3, textfield4);
    wind2.show();
  
      wind2.on('click','up', function(e) { //we are going by win2.on --> win2 bracket
        var wind3 = new UI.Window({
          fullscreen: true,
        });
        askQ(wind3, q3, textfield2);
        answer(wind3, textfield3, textfield4);
        wind3.show();
        
          wind3.on('click','up', function(e) {
            var wind4 = new UI.Window({
              fullscreen: true,
            });
            askQ(wind4, 'Press select to get your partner!', textfield2);
            wind4.show();
            
            wind4.on('click','select',function (e) {
              var wind5 = new UI.Window({
              fullscreen: true,
            });
            
            askQ(wind5, pisces, textfield2);
                                                                      //Answer 4 (YYY)
            var image = new UI.Image({
            position: new Vector2(0, 0),
            size: new Vector2(144, 168),
            image: 'images/Pisces.png'
            });
            wind5.add(image);                                         //Pisces
            wind5.show();
            }); 
            });
            

            wind3.on('click','down', function(e) {
              var wind4 = new UI.Window({
                fullscreen: true,
              });
              askQ(wind4, q4, textfield2);
              answer(wind4, textfield3, textfield4);                 //Question 4 (YYN)
              wind4.show();

                wind4.on('click', 'up', function (e) {
                  var wind5 = new UI.Window({
                    fullscreen: true,
                  });
                  askQ(wind5, 'Press select to get your partner!', textfield2);
                  wind5.show();
                  wind5.on('click','select', function(e) {
                    var wind6 = new UI.Window({
                      fullscreen: true,
                    });
                  
                  askQ(wind6, taurus, textfield2);
                   
                  var image = new UI.Image({
                  position: new Vector2(0, 0),
                  size: new Vector2(144, 168),
                  image: 'images/Taurus.png'
                  });
                  wind6.add(image); 
                  wind6.show();
                });
                });

                wind4.on('click', 'down', function(e) {
                  var wind5 = new UI.Window({
                    fullscreen: true,
                  });
                  askQ(wind5, 'Press select to get your partner!', textfield2);
                  wind5.show();
                  wind5.on('click','select', function(e) {
                    var wind6 = new UI.Window({
                      fullscreen: true,
                    });
                  
                  askQ(wind6, cancer, textfield2);
                  
                  var image = new UI.Image({
                  position: new Vector2(0, 0),
                  size: new Vector2(144, 168),
                  image: 'images/Cancer.png'
                  });
                  wind6.add(image);                                         //Answer 5 (YYNN)
                  wind6.show();
                }); //wind5
              });   //wind4
            });//wind3
      });
      
      wind2.on('click', 'down', function(e) {
        var wind3 = new UI.Window({
          fullscreen: true,
        });
        askQ(wind3, q5, textfield2);
        answer(wind3, textfield3, textfield4);
        wind3.show();

          wind3.on('click', 'up', function(e) {
            var wind4 = new UI.Window({
              fullscreen: true,
            });
            askQ(wind4, 'Press select to get your partner!', textfield2);
            wind4.show();
            wind4.on('click', 'select', function (e) {
              var wind5 = new UI.Window({
                fullscreen: true,
              });
            
            askQ(wind5, aries, textfield2);    
              
              var image = new UI.Image({
                position: new Vector2(0, 0),
                size: new Vector2(144, 168),
                image: 'images/Aries.png'
              });
              wind5.add(image);
            wind5.show();
          });   //wind3 close bracket
          });
        
          wind3.on('click','down', function(e) {
            var wind4 = new UI.Window({
              fullscreen: true,
            });
            askQ(wind4, q6, textfield2);
            answer(wind4, textfield3, textfield4);
            wind4.show();

              wind4.on('click', 'up', function(e) {
                var wind5 = new UI.Window({
                  fullscreen: true,
                });
                askQ(wind5, 'Press select to get your partner!', textfield2);
                wind5.show();
                wind5.on('click','select', function(e) {
                  var wind6 = new UI.Window({
                    fullscreen: true,
                  });
                
                askQ(wind6, leo, textfield2);                //Answer Leo (YNNY)
                var image = new UI.Image({
                  position: new Vector2(0, 0),
                  size: new Vector2(144, 168),
                  image: 'images/Leo.png'
                  });
                  wind6.add(image); 
                wind6.show();
              }); //wind4 close bracket
              });

              wind4.on('click','down',function(e) {
                var wind5 = new UI.Window({
                  fullscreen: true,
                });
                askQ(wind5, 'Press select to get partner!', textfield2);
                wind5.show();
                wind5.on('click','select', function(e) {
                  var wind6 = new UI.Window({
                    fullscreen: true,
                  });
                
                askQ(wind6, virgo, textfield2);              //Answer Virgo (YNNN)
                var image = new UI.Image({
                  position: new Vector2(0, 0),
                  size: new Vector2(144, 168),
                  image: 'images/Virgo.png'
                  });
                  wind6.add(image); 
                wind6.show();
              });  //wind4 close bracket
          }); //wind3 close bracket
      }); //wind2 close bracket
      });  
        
        
      
    });
  wind.on('click', 'down', function(e) {
        var wind2 = new UI.Window({
          fullscreen: true,
        });
        askQ(wind2, q7, textfield2);
        answer(wind2, textfield3, textfield4);
        wind2.show();

          wind2.on('click', 'up', function(e) {
            var wind3 = new UI.Window({
              fullscreen: true,
            });
            askQ(wind3, q8, textfield2);
            answer(wind3, textfield3, textfield4);
            wind3.show();

              wind3.on('click', 'up', function (e) {
                var wind4 = new UI.Window({
                  fullscreen: true,
                });
                askQ(wind4, 'Press select to get your partner!', textfield2);
                wind4.show();
                wind4.on('click','select', function(e) {
                  var wind5 = new UI.Window({
                    fullscreen: true,
                  });
                
                askQ(wind5, aquarius, textfield2);   // Answer Aquarius (NYY)
                var image = new UI.Image({
                  position: new Vector2(0, 0),
                  size: new Vector2(144, 168),
                  image: 'images/Aquarius.png'
                  });
                  wind5.add(image); 
                wind5.show();
              });
              });

              wind3.on('click','down', function(e) {
                var wind4 = new UI.Window({
                  fullscreen: true,
                });
                askQ(wind4, 'Press select to get your partner!', textfield2);
                wind4.show();
                wind4.on('click','select', function(e) {
                  var wind5 = new UI.Window({
                    fullscreen: true,
                  });
                
                askQ(wind5, gemini, textfield2);
                var image = new UI.Image({
                  position: new Vector2(0, 0),
                  size: new Vector2(144, 168),
                  image: 'images/Gemini.png'
                  });
                  wind5.add(image);                         // Answer Gemini (NYN)
                wind5.show();
              });
            });
          });
            
            wind2.on('click','down',function(e) {
              var wind3 = new UI.Window({
                fullscreen: true,
              });
              askQ(wind3, q9, textfield2);
              answer(wind3, textfield3, textfield4);
              wind3.show();

                wind3.on('click','up', function(e) {
                  var wind4 = new UI.Window({
                    fullscreen: true,
                  });
                  askQ(wind4, q10, textfield2);
                  answer(wind4, textfield3, textfield4);
                  wind4.show();

                    wind4.on('click','up', function(e) {
                      var wind5 = new UI.Window({
                        fullscreen: true,
                      });
                      askQ(wind5, 'Press select to get your partner!', textfield2);
                      wind5.show();
                      wind5.on('click','select',function(e) {
                        var wind6 = new UI.Window({
                          fullscreen: true,
                        });
                      
                      askQ(wind6, capricorn, textfield2);
                      var image = new UI.Image({
                  position: new Vector2(0, 0),
                  size: new Vector2(144, 168),
                  image: 'images/Capricorn.png'
                  });
                  wind6.add(image);                                     // Answer Capricorn (NNYY)
                      wind6.show();
                    });
                    });
                  
                  
                    wind4.on('click','down',function(e) {
                      var wind5 = new UI.Window({
                        fullscreen: true,
                      });
                      askQ(wind5, 'Press select to get your partner!', textfield2);
                      wind5.show();
                      wind5.on('click','select',function(e) {
                        var wind6 = new UI.Window({
                          fullscreen: true,
                        });
                      
                      askQ(wind6, scorpio, textfield2);
                      var image = new UI.Image({
                  position: new Vector2(0, 0),
                  size: new Vector2(144, 168),
                  image: 'images/Scorpio.png'
                  });
                  wind6.add(image);                             // Answer Scorpio (NNYN)
                      wind6.show();
                    }); // win4 close
                  });
                });
              
              
                wind3.on('click', 'down', function(e) {
                  var wind4 = new UI.Window({
                    fullscreen: true,
                  });
                  askQ(wind4, q11, textfield2);
                  answer(wind4, textfield3, textfield4);
                  wind4.show();

                    wind4.on('click','up',function(e) {
                      var wind5 = new UI.Window({
                        fullscreen: true,
                      });
                      askQ(wind5, 'Press select to get your partner!', textfield2);
                      wind5.show();
                      wind5.on('click', 'select', function(e) {
                        var wind6 = new UI.Window({
                          fullscreen: true,
                        });
                      
                      askQ(wind6, sagittarius, textfield2);
                      var image = new UI.Image({
                  position: new Vector2(0, 0),
                  size: new Vector2(144, 168),
                  image: 'images/Sagittarius.png'
                  });
                  wind6.add(image);                // Answer Sagittarius (NNNY)
                      wind6.show();
                    });
                    });

                    wind4.on('click','down',function(e) {
                      var wind5 = new UI.Window({
                        fullscreen: true,
                      });
                      askQ(wind5, 'Press select to get your partner!', textfield2);
                      wind5.show();
                      wind5.on('click', 'select', function(e) {
                        var wind6 = new UI.Window({
                          fullscreen: true,
                        });
                      
                      askQ(wind6, libra, textfield2);
                      var image = new UI.Image({
                  position: new Vector2(0, 0),
                  size: new Vector2(144, 168),
                  image: 'images/Libra.png'
                  });
                  wind6.add(image);                   // Answer Libra (NNNN)
                      wind6.show();
                    }); // closes win4
                }); // closes win3
            }); // closes win2
        }); // close win
    });

       

main.on('click', 'down', function(e) {
  var window = new UI.Window({
    fullscreen: true,
  });
  var textfield = new UI.Text({
    position: new Vector2(0, 65),
    size: new Vector2(144, 30),     //Question 1
    font: 'gothic-24-bold',
    text: 'Go back to menu and press select to play!',
    textAlign: 'center'
  });
  window.add(textfield);
  window.show();
});
}); 