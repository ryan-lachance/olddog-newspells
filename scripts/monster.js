




function populate() {
    let elements = document.querySelectorAll('.spell-tooltip');
    elements.forEach(element => {
        let link = element.href.split('/');
        let spell_components = link[link.length - 1].split('-');
        spell_components.shift();
        let spell_name = spell_components.join("-");



        if (spells[spell_name]) {
            let new_spell_id = spells[spell_name]
            element.href = `https://www.dndbeyond.com/spells/${new_spell_id}-${spell_name}`;
            element.setAttribute('data-tooltip-href', `//www.dndbeyond.com/spells/${new_spell_id}-tooltip?disable-webm=1&disable-webm=1`);
        }
    });

}


var spells = {
    "light": "2618996",
    "sacred-flame": "2618967",
    "hold-person": "2619153"
};



setInterval(populate, 500);