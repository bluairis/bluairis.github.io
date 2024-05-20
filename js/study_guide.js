document.addEventListener('DOMContentLoaded', () => {
    const link = "https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496";

    loadXML();

    function loadXML() {
      requestXML(link, {redirect: 'follow'});
      console.log('loadXML -- OK');
    }

    function requestXML(link) {
      var connect = new XMLHttpRequest();
      connect.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          parseXML(this.responseXML);
        }
      };
      connect.open("GET", link, true);
      connect.send();
      console.log('requestXML -- OK');
    };

    function parseXML(sourceXML) {
      
    };
});