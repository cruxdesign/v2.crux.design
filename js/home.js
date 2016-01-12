//$(document).ready( function() {
//    $(function() {
//        $("#grid").mason({
//            itemSelector: '.block',
//            ratio: 1,
//            sizes: [
//                [1,1]
//            ],
//            promoted: [
//                ['p1', 2, 1],
//                ['p2', 3, 1],
//                ['p3', 3, 2],
//                ['p4', 2, 2],
//                ['p5', 2, 1],
//                ['p6', 3, 1]
//            ],
//            columns: [
//                [0, 480, 6]
//            ],
//            filler: {
//                itemSelector: '.filler',
//                filler_class: 'mason-filler',
//                keepDataAndEvents: false
//            },
//            gutter: 5,
//            layout: 'fluid'
//        })
//    });
//});

$(document).ready( function() {
    $(function() {
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
        })
    });
});