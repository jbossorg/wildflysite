$(document).ready(function(){
    var listClasses = ["red", "orange", "yellow", "teal", "blue"];
    var blockClasses = ["red", "orange", "yellow", "teal"];

    // Random color class for blog feed on /blog 
    $(".blog-list-item").each(function(){
        $(this).addClass(listClasses[~~(Math.random()*listClasses.length)]);
    });

    // Random color class for blog feed in blocks format on homepage
    $(".blog-block-item").each(function(){
        $(this).addClass(blockClasses[~~(Math.random()*blockClasses.length)]);
    });
});
