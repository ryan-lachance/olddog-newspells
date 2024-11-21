const elements = document.querySelectorAll('.spell-tooltip');
const jsonUrl = chrome.runtime.getURL('spells.json');
console.log('Fetching from:', jsonUrl);  // Ensure this log appears

fetch(jsonUrl)

spells = {}
spells['light'] = "2618996";

elements.forEach(element => {
    const link = element.href.split('/');
    const spell_name = link[link.length - 1].split('-')[1];
    console.log(spell_name)


    if (element.textContent == 'light') {
        console.log('tests')
        new_spell_id = "2618996";
        element.href = `https://www.dndbeyond.com/spells/${new_spell_id}-${spell_name}`;
        element.setAttribute('data-tooltip-href', `//www.dndbeyond.com/spells/${new_spell_id}-tooltip?disable-webm=1&disable-webm=1`);
    }
});
