/**
* @license StewartPrivateLicense-2.0.1
* Copyright (c) Aerell McKnight 2023
*
* You may not reproduce or distribute any code inside this file without the licenser's permission.
* You may not copy, modify, steal, skid, or recreate any of the code inside this file.
* You may not under any circumstance republish any code from this file as your own.
* 
* ALL TERMS STATED IN THE LINK BELOW APPLY ASWELL
* https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE
*/

/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

(async () => {
    let i = document.createElement('iframe');
    document.body.append(i);
    window.alert = i.contentWindow.alert.bind(window);
    i.remove();
    const { stateNode } = Object.values(document.querySelector('body div[class*="camelCase"]'))[1].children[0]._owner;
    if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
    else stateNode.setState({ enemyCard: { ...stateNode.state.enemyCard, strength: 0, charisma: 0, wisdom: 0 } });
})();