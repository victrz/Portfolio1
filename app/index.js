require('./main.scss');

let indexer = require('file-loader?name=../dist/index.html!./index.html');
let cycle2 = require('./cycle2.js');

$(document).ready(function(){
  $('.stretch').each(function () {
      $(this).stretch_text();
  });

  $( '.mySlideshows' ).cycle();

  // document.getElementById('pro1').addEventListener("click", function(){
  //   alert("click");
  // })
  $('#desc1click').click(function() {
    $('#desc2').fadeOut('slow', function() {
      $('#desc3').fadeOut('slow', function() {
        $('#desc4').fadeOut('slow', function() {
          $('#desc5').fadeOut('slow', function() {
            $('#desc6').fadeOut('slow', function() {
              $('#desc1').fadeIn('slow', function() {});
            });
          });
        });
      });
    });
  });
  $('#desc2click').click(function() {
    $('#desc1').fadeOut('slow', function() {
      $('#desc3').fadeOut('slow', function() {
        $('#desc4').fadeOut('slow', function() {
          $('#desc5').fadeOut('slow', function() {
            $('#desc6').fadeOut('slow', function() {
              $('#desc2').fadeIn('slow', function() {});
            });
          });
        });
      });
    });
  });
  $('#desc3click').click(function() {
    $('#desc1').fadeOut('slow', function() {
      $('#desc2').fadeOut('slow', function() {
        $('#desc4').fadeOut('slow', function() {
          $('#desc5').fadeOut('slow', function() {
            $('#desc6').fadeOut('slow', function() {
              $('#desc3').fadeIn('slow', function() {});
            });
          });
        });
      });
    });
  });
  $('#desc4click').click(function() {
    $('#desc1').fadeOut('slow', function() {
      $('#desc2').fadeOut('slow', function() {
        $('#desc3').fadeOut('slow', function() {
          $('#desc5').fadeOut('slow', function() {
            $('#desc6').fadeOut('slow', function() {
              $('#desc4').fadeIn('slow', function() {});
            });
          });
        });
      });
    });
  });
  $('#desc5click').click(function() {
    $('#desc1').fadeOut('slow', function() {
      $('#desc2').fadeOut('slow', function() {
        $('#desc3').fadeOut('slow', function() {
          $('#desc4').fadeOut('slow', function() {
            $('#desc6').fadeOut('slow', function() {
              $('#desc5').fadeIn('slow', function() {});
            });
          });
        });
      });
    });
  });
  $('#desc6click').click(function() {
    $('#desc1').fadeOut('slow', function() {
      $('#desc2').fadeOut('slow', function() {
        $('#desc3').fadeOut('slow', function() {
          $('#desc4').fadeOut('slow', function() {
            $('#desc5').fadeOut('slow', function() {
              $('#desc6').fadeIn('slow', function() {});
            });
          });
        });
      });
    });
  });
  let currentYear = new Date().getFullYear();     // Get the four digit year (yyyy)
  document.getElementById('copyright').innerHTML = "copyright " + currentYear;
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

$.fn.stretch_text = function () {
    var elmt = $(this),
        cont_width = elmt.width(),
        txt = elmt.html(),
        one_line = $('<span class="stretch_it">' + txt + '</span>'),
        nb_char = elmt.text().length,
        spacing = cont_width / nb_char,
        txt_width;

    elmt.html(one_line);
    txt_width = one_line.width();

    if (txt_width < cont_width) {
        var char_width = txt_width / nb_char,
            ltr_spacing = spacing - char_width + (spacing - char_width) / nb_char;

        one_line.css({
            'letter-spacing': ltr_spacing
        });
    } else {
        one_line.contents().unwrap();
        elmt.addClass('justify');
    }
};

// $('#pro1').click(function() {
//   alert('clicked');
//   // $('#project1').hide('slow', function() {
//
//     // Animation complete.
//   // });
// });
//
// let dot1 = document.getElementById("pro1").addEventListener("click", function(){
//     document.getElementById("project1").style.display = "block";
//     document.getElementById("project2").style.display = "none";
//     document.getElementById("project3").style.display = "none";
//     document.getElementById("project4").style.display = "none";
//     document.getElementById("project5").style.display = "none";
//     document.getElementById("project6").style.display = "none";
// });
// let dot2 = document.getElementById("pro2").addEventListener("click", function(){
//     document.getElementById("project2").style.display = "block";
//     document.getElementById("project1").style.display = "none";
//     document.getElementById("project3").style.display = "none";
//     document.getElementById("project4").style.display = "none";
//     document.getElementById("project5").style.display = "none";
//     document.getElementById("project6").style.display = "none";
// });
// let dot3 = document.getElementById("pro3").addEventListener("click", function(){
//     document.getElementById("project3").style.display = "block";
//     document.getElementById("project2").style.display = "none";
//     document.getElementById("project1").style.display = "none";
//     document.getElementById("project4").style.display = "none";
//     document.getElementById("project5").style.display = "none";
//     document.getElementById("project6").style.display = "none";
// });
// let dot4 = document.getElementById("pro4").addEventListener("click", function(){
//     document.getElementById("project4").style.display = "block";
//     document.getElementById("project2").style.display = "none";
//     document.getElementById("project3").style.display = "none";
//     document.getElementById("project1").style.display = "none";
//     document.getElementById("project5").style.display = "none";
//     document.getElementById("project6").style.display = "none";
// });
// let dot5 = document.getElementById("pro5").addEventListener("click", function(){
//     document.getElementById("project5").style.display = "block";
//     document.getElementById("project2").style.display = "none";
//     document.getElementById("project3").style.display = "none";
//     document.getElementById("project4").style.display = "none";
//     document.getElementById("project1").style.display = "none";
//     document.getElementById("project6").style.display = "none";
// });
// let dot6 = document.getElementById("pro6").addEventListener("click", function(){
//     document.getElementById("project6").style.display = "block";
//     document.getElementById("project2").style.display = "none";
//     document.getElementById("project3").style.display = "none";
//     document.getElementById("project4").style.display = "none";
//     document.getElementById("project5").style.display = "none";
//     document.getElementById("project1").style.display = "none";
// });
