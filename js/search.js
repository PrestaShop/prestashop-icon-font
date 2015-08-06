$(function(){
    var iconsList = [];
    $('.glyphs').find('li').each(function(){
        var $this = $(this);
        iconsList.push({
            name: $this.find('input').val(),
            node: $this,
            visible: true
        });
    });
    var totalIconsList = iconsList.length;

    $('.search').find('input').keyup(function(){
        var $this = $(this);
        var val = $this.val();
        var id = 0;

        for (id = 0; id < totalIconsList; id++) {
            if (iconsList[id].name.indexOf(val) > -1) {
                if (iconsList[id].visible == false) {
                    iconsList[id].visible = true;
                    iconsList[id].node.show();
                }
            } else {
                if (iconsList[id].visible == true) {
                    iconsList[id].visible = false;
                    iconsList[id].node.hide();
                }
            }
        }
    });
});
