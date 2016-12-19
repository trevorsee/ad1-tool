document.addEventListener("DOMContentLoaded", function(event) {

  // Declare our variables
  $('#tokenfield').tokenfield()

  var content = document.getElementById("tokenfield");
  var content1 = document.getElementsByClassName("tokenfield")[0];
  console.log(content);
  /*-------------------------------------
   *  Deal with LocalStorage availability
   *  1.Test to see if LocalStorage is available.
   *  2.If available, set and get items, where good to go.
   *  3.If NOT available fire alert message to user.
   *------------------------------------*/

  function hasStorage() {  //1
    var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
    }
  };

  if(hasStorage() === true){  //2

    content1.addEventListener("keyup", function() {
      console.log("test");
      localStorage.setItem("textPad-content", $('#tokenfield').tokenfield('getTokensList'));
    });

    if(localStorage.getItem("textPad-content")) {
      $('#tokenfield').tokenfield('setTokens', localStorage.getItem("textPad-content"));
      console.log("two");
    }


  }else{  //3
    smoke.alert("Sorry, either your browser doesn't support LocalStorage, or you have exceeded storage limits!");
  };

  clear.addEventListener("click", function(e) {
    localStorage.removeItem('textPad-content');
    content.value = "";
  });


function close() {
  $('.close').on('click', function(){
  //  alert('OK!');
  });

  $(document).on('click', 'a.close', function(){
  //  alert('delete');
    console.log('o');
  });
  localStorage.setItem("textPad-content", $('#tokenfield').tokenfield('getTokensList'));
}

$('#tokenfield').change(function() {
  close();
})

});
