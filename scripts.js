//take input from user and add to list

$(document).ready(function() {

var newTodo;

//takes user input and creates a new list item when enter key is pressed
    $("input").on("keydown",function(e) {
    if(e.keyCode == 13) {
        newTodo = $(this).val();
        console.log(newTodo);
        $('ul').append(
        $('<li>').append(newTodo)
        )
         $("input").val("");
        //return newTodo;
    }
});

    $('ul').on('click', 'li', function(){
        $(this).toggleClass("done");
    })




//     $('ul').append(
//     $('<li>').append(
//         $('<a>').attr('href','/user/messages').append(
//             $('<span>').attr('class', 'tab').append("Message center")
// )));    
});