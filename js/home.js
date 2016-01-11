$(document).ready( function() {
    var mason;

    $(function(){
        mason = $("#grid").mason({
            itemSelector: '.block',
            ratio: 2,
            columns: [
                [480,780,1],
                [1200,1440,3],
                [1441,1920,3]
            ],
            sizes: [
                [1,1],
                [1,2],
                [2,2]
            ],
            layout: 'fluid',
            gutter: 5
        })
    });
});