//take input from user and add to list

$(document).ready(function() {

var newTodo;

    $("input").on("keydown",function(e) {
    if(e.keyCode == 13) {
        newTodo = $(this).val();
        console.log(newTodo);
        return newTodo;
        //alert(newTodo);
    }
});


//     $('ul').append(
//     $('<li>').append(
//         $('<a>').attr('href','/user/messages').append(
//             $('<span>').attr('class', 'tab').append("Message center")
// )));    
});