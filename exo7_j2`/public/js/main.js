
let nbr1 = prompt(`Entrez un nombre`);

let operateur = prompt(`Entrez un opérateur`);

let nbr2 = prompt(`Entrez un nombre2`);

switch (operateur) {
    case '+':
        console.log(nbr1+nbr2);
        break;
        case '-':
        console.log(nbr1-nbr2);
        break;
        case '/':
        console.log(nbr1/nbr2);
        break;
        case '*':
        console.log(nbr1*nbr2);
        break;

    default:
        break;
}