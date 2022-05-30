
console.log("LEVEL_2_1_!");
const roundTo = (Zahl, Genauigkeit) => {
    console.log(Zahl.toFixed(Genauigkeit));

}
roundTo(3.1415926535, 5);

console.log("LEVEL_2_2_!");

const oneToTen = () => {
    let inputPrompt = prompt("schätzen Sie die Nummer zwischen 1 und 10");
    console.log(inputPrompt);
    let random = Math.round(Math.random() * 10);
    console.log(random);
    if (Number(inputPrompt) == random) {
        console.log("SIE HABEN GEWONNEN!");
    } else {
        console.log("SIE HABEN VERLOREN");
    }
}
oneToTen();

console.log("LEVEL_2_3_!");

const minimaleWerte = () => {
    let minEltern = Math.min(66, 55);
    let minGeschwister = Math.min(26, 16, 18);
    let minFußballer = Math.min(26, 33, 44, 55, 66, 77);
    console.log(`Bei deinen Eltern ist die jüngste Person ${minEltern}. Bei deinen Geschwistern ist die Jüngste Person ${minGeschwister}. Bei den Fußballern ist die Jüngste Person ${minFußballer}. Die Jüngste Person von allen ist ${Math.min(minEltern, minGeschwister, minFußballer)}.`)
}
minimaleWerte();