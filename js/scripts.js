$(document).ready(function() {
  $("button#no").click(function() {
    alert("Awh...It is okay. But I really suggest checking it out!")
  });
    $("button#yes").click(function() {
      var flavors = ['Mint Chocolate Chip', 'Cookie Dough', 'Vanilla Bean'];
        flavors.forEach(function(flavor) {
          alert('I love ' + flavor + ' ice cream!');
    });
  });
});
