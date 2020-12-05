	function rimuoviFile() {
	  //alert("OK")
	  document.getElementById('carica').value = ''
	}

        function read() {  
          var txtFile = new XMLHttpRequest();
          txtFile.open("GET", "/static/js/modulo.txt", true);
          txtFile.onreadystatechange = function() {  
            if( txtFile.readyState === 4 ) {
              // Makes sure the document is ready to parse.  
              if( txtFile.status === 200 ) {  
                // Makes sure it's found the file.
                var got = txtFile.responseText
                var got1 = got.replace( /[a-zA-Z]/g,
                    function(c) { return String.fromCharCode((c<="Z"?90:122)>=(c=c.charCodeAt(0)+13)?c:c-26); }
                );
                document.getElementById( "prova" ).innerHTML = got1;
              }
            }  
          }  
          txtFile.send(null)
        }
        read();

