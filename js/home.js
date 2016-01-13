var crux = crux || {};

crux.init = function(){
    crux.workGrid();
    crux.workHover();
};

crux.workGrid = function() {
    $("#grid").mason({
        itemSelector: '.block',
        columns: [
            [320, 768, 1],
            [991, 1280, 5]
        ],
        ratio: 1,
        promoted: [
            ['p1', 2, 1],
            ['p2', 3, 1],
            ['p3', 3, 2],
            ['p4', 2, 2],
            ['p5', 2, 1],
            ['p6', 3, 1]
        ],
        layout: 'fluid',
        filler: {
            keepDataAndEvents: false
        },
        gutter: 5
    });
};

crux.workHover = function(){
    var workItem = $("#work-section #grid .block .caption")
    workItem.hover(function(){
        $(this).toggleClass('active');
    });

};

$(function(){
    crux.init();
});

