

      $(function() {

        $('#css-example-a').click(function(e) {
          e.preventDefault();
          $(this).parent().addClass('active');
          $('#css-example').stalactite({
            fluid: false,
            cssPrep: false
          });
          updateLoader(function() {
            $('#css-example').fadeIn();
          });
        });

        $('#fluid-example-a').click(function(e) {
          e.preventDefault();
          $(this).parent().addClass('active');
          $('#fluid-example').stalactite();
          updateLoader(function() {
            $('#fluid-example').fadeIn();
          });
        });

        $('#static-example').stalactite({
          fluid: false
        });
        updateLoader();

        function updateLoader(callback) {
          setTimeout(function() {
            $('.stalactite-loader')
              .css({
                position: 'fixed',
                background: '#fff',
                padding: '20px 20px 15px 20px',
                top: 0,
                left: 0
              });
              if (callback) {
                callback.call(this);
              }
          }, 1);
        }

      });

      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-5927630-16']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : '//www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
