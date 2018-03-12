(() => {
  //cms handler stub
  console.log('cms handler loaded');

//variables always at the top. they select stuff frm the DOM, empty vars
  let submitButton = document.querySelector('.add-data'),
  targetForm = document.querySelector('form');

//functions here
  function addRecord(e) {
    e.preventDefault(); //kill the default submit action which triggers page reload. we dont want that.

    var formData = new FormData(targetForm);
    strData = {};

    for (var [key, value] of formData.entries()) {
      console.log(key, value);

      strData[key] = value;
    }


    //fetch section
    //run a fetch and do a post
    let url = "/api";

    fetch(url, {
      method : 'post',
      headers : {
        'Accept' : 'application/json, text-plain, */*',
        'Content-type' : 'application/json'
      },

      body : JSON.stringify(strData)
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
    })
    .catch(err => {
      console.log(err);
    });
  }

//event handling always goes at the bottom
  submitButton.addEventListener('click', addRecord);
})();
