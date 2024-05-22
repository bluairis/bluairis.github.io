document.addEventListener('DOMContentLoaded', () => {
    const link = "https://ochre.lib.uchicago.edu/ochre?uuid=a6e6049c-66dc-43ee-968d-e74c4909f496";

    loadXML();

    function loadXML() {
      requestXML(link, {redirect: 'follow'}); //
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
      let objectData = sourceXML.querySelectorAll("spatialUnit");

      objectData.forEach((element, index) => {
        //List
        let listValue = document.createElement("li");
        document.getElementById("myList").appendChild(listValue);
        listValue.innerHTML = element.children[0].children[0].innerHTML;
        
        //Table
        let newRow = document.createElement("tr");
        newRow.id = "row"+index;
        document.getElementById("myTableBody").appendChild(newRow); //linking it to the html

        //Columns in Table
        //col 1
        let newCol1 = document.createElement("td");
        newCol1.innerHTML = element.children[1].innerHTML
        document.getElementById("row"+index).appendChild(newCol1) //uses the row defined on line 28

        //repeat for col 2
        let newCol2 = document.createElement("td");
        newCol2.innerHTML = element.children[4].children[6].children[1].innerHTML
        document.getElementById("row"+index).appendChild(newCol2) //uses the row defined on line 28

        //repeat for col 3
        let newCol3 = document.createElement("td");
        newCol3.innerHTML = element.children[4].children[1].children[1].innerHTML;
        document.getElementById("row"+index).appendChild(newCol3)

        //repeat for col 4
        let newCol4 = document.createElement("td");
        newCol4.innerHTML = element.children[4].children[6].children[1].innerHTML + " x " + element.children[4].children[7].children[1].innerHTML + " x " + element.children[4].children[8].children[1].innerHTML;
        document.getElementById("row"+index).appendChild(newCol4)
      });
    };
});