
let in1 = document.getElementById("in1");
let in2 = document.getElementById("in2");
let in3 = document.getElementById("in3");
let in4 = document.getElementById("in4");
let in5 = document.getElementById("in5");


function clean(text, input) {
    switch (input) {
        case 1:
            var regex = /([^ATCG])/;
            text = text.replaceAll(regex, "");
            var tempText = '';
            for (let i=0; i<text.length+1;i++){
                if (i%3==0){
                    tempText += text.substring(i-3, i)+" "
                }
            }
            return tempText;
        case 2:
            var regex = /([^AUCG])/;
            text = text.replaceAll(regex, "");
            var tempText = '';
            for (let i=0; i<text.length+1;i++){
                if (i%3==0){
                    tempText += text.substring(i-3, i)+" "
                }
            }
            return tempText;

    }
}
function expand(obj) {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i],
            subkeys = key.split(/,\s?/),
            target = obj[key];
        delete obj[key];
        subkeys.forEach(function(key) { obj[key] = target; })
    }
    return obj;
}
const codon = expand({
    "UUU,UUC": "Phe",
    "UUA,UUG,CUU,CUC,CUA,CUG": "Leu",
    "AUU,AUC,AUA": "LLe",
    "AUG": "Met",
    "GUU,GUC,GUA,GUG": "Val",
    "UCU,UCC,UCA,UCG,AGU,AGC": "Ser",
    "CCU,CCC,CCA,CCG": "Pro",
    "ACU,ACC,ACA,ACG": "Thr",
    "GCU,GCC,GCA,GCG": "Ala",
    "UAU,UAC": "Tyr",
    "UAA,UAG,UGA": "Stop",
    "UGG": "Trp",
    "CAU,CAC": "His",
    "CAA,CAG": "Gin",
    "AAU,AAC": "Asn",
    "AAA,AAG": "Lys",
    "GAU,GAC": "Asp",
    "GAA,GAG": "Glu",
    "UGU,UGC": "Cys",
    "CGU,CGC,CGA,CGG,AGA,AGG": "Arg",
    "GGU,GGC,GGA,GGG": "Gly",
})
console.log(codon);
function build(text, input){
    if (text.length == 0){return false}
    text = text.toUpperCase();
    let DNA='';
    let RDNA='';
    let mRNA='';
    let tRNA='';
    let AA='';
    switch (input) {
        case 1:
            for (let i = 0; i<text.length; i++){
                DNA = text
                RDNA += DNA.charAt(i).replaceAll("A", "1").replaceAll("T", "A").replaceAll("G", "2").replaceAll("C", "G").replaceAll("1", "T").replaceAll("2", "C");
                mRNA += text.charAt(i).replaceAll("A", "1").replaceAll("U", "A").replaceAll("T", "A").replaceAll("G", "2").replaceAll("C", "G").replaceAll("1", "U").replaceAll("2", "C");
                tRNA += mRNA.charAt(i).replaceAll("A", "1").replaceAll("U", "A").replaceAll("G", "2").replaceAll("C", "G").replaceAll("1", "U").replaceAll("2", "C");
                console.log(mRNA);
                if (mRNA.length%3 == 0) {
                    console.log(mRNA.substring(Math.max(0, mRNA.length-3), mRNA.length));
                    AA += codon[mRNA.substring(Math.max(0, mRNA.length-3), mRNA.length)]+" ";
                }
                
            }
            return {"DNA":clean(DNA, 1), "RDNA":clean(RDNA, 1), "mRNA":clean(mRNA, 2), "tRNA":clean(tRNA, 2), "AA":AA.substring(0, AA.length-1)};
        case 2:
            for (let i = 0; i<text.length; i++){
                mRNA = text
                DNA += mRNA.charAt(i).replaceAll("A", "1").replaceAll("U", "A").replaceAll("G", "2").replaceAll("C", "G").replaceAll("1", "T").replaceAll("2", "C");
                RDNA += DNA.charAt(i).replaceAll("A", "1").replaceAll("T", "A").replaceAll("G", "2").replaceAll("C", "G").replaceAll("1", "T").replaceAll("2", "C");
                tRNA += mRNA.charAt(i).replaceAll("A", "1").replaceAll("U", "A").replaceAll("G", "2").replaceAll("C", "G").replaceAll("1", "U").replaceAll("2", "C");
                console.log(mRNA);
                if (tRNA.length%3 == 0) {
                    console.log(mRNA.substring(Math.max(0, mRNA.length-3), mRNA.length));
                    AA += codon[mRNA.substring(Math.max(0, mRNA.length-3), mRNA.length)];
                }
                
            }
            return {"DNA":clean(DNA, 1), "RDNA":clean(RDNA, 1), "mRNA":clean(mRNA, 2), "tRNA":clean(tRNA, 2), "AA":AA};
        case 3:
            for (let i = 0; i<text.length; i++){
                tRNA = text
                mRNA += tRNA.charAt(i).replaceAll("A", "1").replaceAll("U", "A").replaceAll("G", "2").replaceAll("C", "G").replaceAll("1", "U").replaceAll("2", "C");
                DNA += mRNA.charAt(i).replaceAll("A", "1").replaceAll("U", "A").replaceAll("G", "2").replaceAll("C", "G").replaceAll("1", "T").replaceAll("2", "C");
                RDNA += DNA.charAt(i).replaceAll("A", "1").replaceAll("T", "A").replaceAll("G", "2").replaceAll("C", "G").replaceAll("1", "T").replaceAll("2", "C");
                console.log(mRNA);
                if (mRNA.length%3 == 0) {
                    AA += codon[mRNA.substring(Math.max(0, mRNA.length-3), mRNA.length)];
                }
                
            }
            return {"DNA":clean(DNA, 1), "RDNA":clean(RDNA, 1), "mRNA":clean(mRNA, 2), "tRNA":clean(tRNA, 2), "AA":AA};
        case 4:
            for (let i = 0; i<text.length; i++){
                RDNA = text
                DNA += RDNA.charAt(i).replaceAll("A", "1").replaceAll("T", "A").replaceAll("G", "2").replaceAll("C", "G").replaceAll("1", "T").replaceAll("2", "C");
                mRNA += DNA.charAt(i).replaceAll("A", "1").replaceAll("U", "A").replaceAll("T", "A").replaceAll("G", "2").replaceAll("C", "G").replaceAll("1", "U").replaceAll("2", "C");
                tRNA += mRNA.charAt(i).replaceAll("A", "1").replaceAll("U", "A").replaceAll("G", "2").replaceAll("C", "G").replaceAll("1", "U").replaceAll("2", "C");
                console.log(mRNA);
                if (mRNA.length%3 == 0) {
                    AA += codon[mRNA.substring(Math.max(0, mRNA.length-3), mRNA.length)];
                }
                
            }
            return {"DNA":clean(DNA, 1), "RDNA":clean(RDNA, 1), "mRNA":clean(mRNA, 2), "tRNA":clean(tRNA, 2), "AA":AA};
    }
}
function action(text, input) {
    if ((text.length % 3 != 0)||(text.length == 0)) {
        in1.value = in2.value = in3.value = in4.value = in5.value = "";
        return
    }
    let test = build(text, input);
    in1.value = test["DNA"];
    in2.value = test["mRNA"];
    in3.value = test["tRNA"];
    in4.value = test["AA"];
    in5.value = test["RDNA"];

}


in1.addEventListener("change", (event) => {
    console.log(in1.value.replaceAll(/([^ATCG])/, ""));
    action(in1.value.replaceAll(/([^ATCG])/, ""), 1);
});
in2.addEventListener("change", (event) => {
    action(in2.value.replaceAll(/([^AUCG])/, ""), 2);
});
in3.addEventListener("change", (event) => {
    action(in3.value.replaceAll(/([^AUCG])/, ""), 3);
});
in5.addEventListener("change", (event) => {
    action(in5.value.replaceAll(/([^ATCG])/, ""), 4);
});