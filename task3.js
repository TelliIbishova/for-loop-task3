// Tapşırıq 3: Verilmiş ədədin (məsələn, 17) 
// "sadə ədəd" (yalnız 1-ə və özünə qalıqsız bölünən) olub-olmadığını tapın.

let eded = prompt("Ededi daxil et:");
let sade = true;

if (eded <= 1) {
    sade = false;
} else {
    for (let i = 2; i < eded; i++) {
        if (eded % i === 0) {
            sade = false;
            break;
        }
    }
}
if (sade) {
    alert(" sade ededdir");
} else {
    alert(" sade eded deyil");
}