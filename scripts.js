//take input from user and add to list

$(document).ready(function() {

//var newTodo;

//takes user input and creates a new list item when enter key is pressed
    $("input").on("keydown",function(e) {
    if(e.keyCode == 13) {
        var  newTodo = $(this).val();
        console.log(newTodo);
        $('ul').append(
        $('<li>').append(newTodo)
        )
         $("input").val("");
        //return newTodo;
    }
});

//toggles done class when click on list item
//includes delegated event for new li elements
    $('ul').on('click', 'li', function(){
        $(this).toggleClass("done");
    })

    $('.fa-plus').on('click', function(){
        console.log("your mum");
    });




//     $('ul').append(
//     $('<li>').append(
//         $('<a>').attr('href','/user/messages').append(
//             $('<span>').attr('class', 'tab').append("Message center")
// )));    
});