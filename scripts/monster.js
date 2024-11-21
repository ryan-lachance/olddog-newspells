




function populate() {
    let elements = document.querySelectorAll('.spell-tooltip');
    console.log("test")
    elements.forEach(element => {
        link = element.href.split('/');
        spell_components = link[link.length - 1].split('-');
        spell_components.shift();
        spell_name = spell_components.join("-")
        console.log(spell_name)



        if (spells[spell_name]) {
            console.log('tests')
            new_spell_id = spells[spell_name]
            element.href = `https://www.dndbeyond.com/spells/${new_spell_id}-${spell_name}`;
            element.setAttribute('data-tooltip-href', `//www.dndbeyond.com/spells/${new_spell_id}-tooltip?disable-webm=1&disable-webm=1`);
        }
    });

}


spells = {
    "light": "2618996",
    "sacred-flame": "2618967"
}



setInterval(populate, 1000);