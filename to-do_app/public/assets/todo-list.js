$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');
        var todo = {item: item.val()};
  
        $.ajax({
          type: 'POST',
          contentType: "application/json; charset=utf-8",
          url: '/todo',
          data: todo,
          complete: function(data){
            console.log('here')
            // alert(data);
            //do something with the data via front-end framework
            // location.reload(); 
          },
          error: function(err) {
            console.log(err)
          }
        }).done(() => {console.log('tets')})
  
        return false;
  
    });
  
    // $('li').on('click', function(){
    //     var item = $(this).text().replace(/ /g, "-");
    //     $.ajax({
    //       type: 'DELETE',
    //       url: '/todo/' + item,
    //       success: function(data){
    //         //do something with the data via front-end framework
    //         location.reload();
    //       }
    //     });
    // });
  
  });