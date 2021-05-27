(function($) {
    let searchGroup1 = $('#searchGroup1');
    let searchGroup2 = $('#searchGroup2');
    let skills = $('td');

    const sortProjects = (x) => {
        let clickedButton = $(`button:contains("${x}")`);
        if(clickedButton.hasClass('btn-primary')) {
            //clicked button is already highlighted
            //update clicked button
            clickedButton.attr('class', 'btn btn-secondary border border-dark');
            //unhighlight skill elements
            $('.col').find(`td:contains("${x}")`).attr("class", "");
        }
        else {
            //clicked button is not already highlighted
            //update clicked button
            clickedButton.attr('class', 'btn btn-primary border border-dark');
            //highlight skill elements
            $('.col').find(`td:contains("${x}")`).attr("class", "bg-primary");
        }
        
    }

    const loadSkills = () => {
        //TODO: if the screen is big enough, make it only use one searchGroup instead of both
        let skillSet = [];
        for(let x of skills) {
            if($(x).html() != "") skillSet.push($(x).html());
        }
        if(skillSet == []) console.log("That's pretty sad");
        
        skillSet = [...new Set(skillSet)];

        for(let x of skillSet) {
            let button = $('<button></button>').attr({
                type: "button",
                class: "btn btn-secondary border border-dark",
            }).html(x);
            button.on('click', () => sortProjects(x));
            if(searchGroup1.children().length < skillSet.length/2) button.appendTo(searchGroup1);
            else button.appendTo(searchGroup2);
        }
    }

    const startUp = () => {
        loadSkills();
    };

    startUp();

})(window.jQuery);