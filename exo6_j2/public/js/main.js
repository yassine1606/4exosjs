let nbrr;

nbrr = prompt(`Entre un nombre pour savoir s'il est divisible par 2`)

switch (true) {
    case nbrr%2=== 0:
        alert(`Votre nombre est un multiple de 2`);
        break;
    case nbrr%2!= 0:
        alert(`Ce n'est pas un multiple de 2`);
        break;
    default:
        alert(`Ceci n'est pas un nombre`);
        break;
}