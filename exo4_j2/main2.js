let jour;
jour =prompt(`Entrez un jour de la semaine`)
switch (jour) {
    case 'lundi':
    console.log(`Tu as sport le lundi soir`);
        break;
    case 'mardi':
        console.log(`Tu as école le mardi soir`);
        break;
    case 'mercredi':
        console.log(`Tu as foot le mercredi`);
        break;
    case 'jeudi':
        console.log(`Tu as rien jeudi`);
        break;
    case 'vendredi':
        console.log(`Tu as jumu3a vendredi`);
        break;
    case 'samedi':
        console.log(`Tu as congé samedi`);
        break;
    case 'dimanche':
        console.log(`Tu as zzzz dimanche`);
        break;

    default:
        console.log(`Entrez un jour de semaine valide`);
        break;
}