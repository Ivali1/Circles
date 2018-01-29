//Function to hide and show content only for mobile devices
var mq = window.matchMedia( "(max-width:1025px)" );
if (mq.matches) {
  function toggleCenterofCircle() {
      var x = document.getElementById('centerofCircle');

      if (x.style.display === 'block'&& mq.matches ) {
          x.style.display = 'none';
      } else {
          x.style.display = 'block';
      }
  }
  function toggleRadius() {
      var x = document.getElementById('radius');

      if (x.style.display === 'block'&& mq.matches ) {
          x.style.display = 'none';

      } else {
          x.style.display = 'block';

      }
  }
  function toggleDiameter() {
      var x = document.getElementById('diameter');
      if (x.style.display === 'block'&& mq.matches ) {
          x.style.display = 'none';

      } else {
          x.style.display = 'block';

      }
  }
  function toggleSector() {
      var x = document.getElementById('sector');
      if (x.style.display === 'block'&& mq.matches ) {
          x.style.display = 'none';

      } else {
          x.style.display = 'block';

        }
  }

    function toggleChorda() {
        var x = document.getElementById('chorda');

        if (x.style.display === 'block'&& mq.matches ) {
            x.style.display = 'none';
        } else {
            x.style.display = 'block';
        }
    }
    function toggleCurve() {
        var x = document.getElementById('curve');

        if (x.style.display === 'block'&& mq.matches ) {
            x.style.display = 'none';

        } else {
            x.style.display = 'block';

        }
    }
    function toggleSegment() {
        var x = document.getElementById('segment');
        if (x.style.display === 'block'&& mq.matches ) {
            x.style.display = 'none';

        } else {
            x.style.display = 'block';

        }
    }
    function toggleTangent() {
        var x = document.getElementById('tangent');
        if (x.style.display === 'block'&& mq.matches ) {
            x.style.display = 'none';

        } else {
            x.style.display = 'block';

          }
    }

    function toggleCentralAngle() {
        var x = document.getElementById('centralAngle');

        if (x.style.display === 'block'&& mq.matches ) {
            x.style.display = 'none';
        } else {
            x.style.display = 'block';
        }
    }
    function toggleInsertedAngle() {
        var x = document.getElementById('insertedAngle');

        if (x.style.display === 'block'&& mq.matches ) {
            x.style.display = 'none';

        } else {
            x.style.display = 'block';

        }
    }
    function toggleBisectri() {
        var x = document.getElementById('bisectri');
        if (x.style.display === 'block'&& mq.matches ) {
            x.style.display = 'none';

        } else {
            x.style.display = 'block';

        }
    }
    function toggleSimeter() {
        var x = document.getElementById('simeter');
        if (x.style.display === 'block'&& mq.matches ) {
            x.style.display = 'none';

        } else {
            x.style.display = 'block';

          }
    }
}
