$(document).ready( function() {
    $(function() {
        $("#grid").mason({
            itemSelector: '.block',
            ratio: 1,
            promoted: [
                ['p1', 2, 1.5],
                ['p2', 3, 1.5],
                ['p3', 3, 2],
                ['p4', 2, 2],
                ['p5', 2, 1.5],
                ['p6', 3, 1.5]
            ],
            //columns: [
            //    [320, 767, 1],
            //    [768, 1440, 6],
            //    [1440, 1920, 6]
            //],
            filler: {
                keepDataAndEvents: false
            },
            layout: 'fluid',
            gutter: 8
        });
    });
});