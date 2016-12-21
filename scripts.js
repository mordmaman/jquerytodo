//take input from user and add to list

$(document).ready(function() {

//var newTodo;

//takes user input and creates a new list item when enter key is pressed
    $("input").on("keydown",function(e) {
    if(e.keyCode == 13) {
        var  newTodo = $(this).val();
        console.log(newTodo);
        $('ul').append(
        $('<li><i class="fa fa-trash" aria-hidden="true"></i>').append(newTodo)
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


//slides the input up and down when click on plus icon
    $('.fa-plus').on('click', function(){
        $( ".inputForm" ).slideToggle( "slow", function() {
    // Animation complete.
        });
    });


//deletes li when click on trash icon
    // $("i").click(function(e){
    //     $(this).parent().fadeOut(500, function(){
    //         $(this).remove();
    //     });
    //     e.stopPropagation();
    // });

    $("ul").on('click', "i", function(e){
        $(this).parent().fadeOut(500, function(){
            $(this).remove();
        });
        e.stopPropagation();
    });


//     $('ul').append(
//     $('<li>').append(
//         $('<a>').attr('href','/user/messages').append(
//             $('<span>').attr('class', 'tab').append("Message center")
// )));    
});