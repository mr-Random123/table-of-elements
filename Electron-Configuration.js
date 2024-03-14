const elementsName = [ "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", "Tennessine", "Oganesson" ];
const elementsSymbol = [ "H", "He", "Li", "Be", "B", "C", "N", "O", "F", "Ne", "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", "Cs", "Ba", "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", "Fr", "Ra", "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og" ];
const elementsWeight = [ "1.0079", "4.0026", "6.941", "9.0122", "10.811", "12.0107", "14.0067", "15.9994", "18.9984", "20.1797", "22.9897", "24.305", "26.9815", "28.0855", "30.9738", "32.065", "35.453", "39.948", "39.0983", "40.078", "44.9559", "47.867", "50.9415", "51.9961", "54.938", "55.845", "58.9332", "58.6934", "63.546", "65.39", "69.723", "72.64", "74.9216", "78.96", "79.904", "83.8", "85.4678", "87.62", "88.9059", "91.224", "92.9064", "95.94", "98", "101.07", "102.9055", "106.42", "107.8682", "112.411", "114.818", "118.71", "121.76", "127.6", "126.9045", "131.293", "132.9055", "137.327", "138.9055", "140.116", "140.9077", "144.24", "145", "150.36", "151.964", "157.25", "158.9253", "162.5", "164.9303", "167.259", "168.9342", "173.04", "174.967", "178.49", "180.9479", "183.84", "186.207", "190.23", "192.217", "195.078", "196.9665", "200.59", "204.3833", "207.2", "208.9804", "209", "210", "222", "223", "226", "227", "232.0381", "231.0359", "238.0289", "237", "244", "243", "247", "247", "251", "252", "257", "258", "259", "262", "261", "262", "266", "264", "277", "268", "281", "282", "285", "286", "289", "290", "293", "294", "294" ];
const electronegativity = [
    2.20, "None", 
    0.98, 1.57,                                                                 2.04, 2.55, 3.04, 3.44, 3.98, "None", 
    0.93, 1.31,                                                                 1.61, 1.90, 2.19, 2.50, 3.16, "None", 
    0.82, 1.00,       1.36, 1.54, 1.63, 1.66, 1.55, 1.83, 1.88, 1.91, 1.90, 1.65, 1.81, 2.01, 2.18, 2.55, 2.96, 3.00, 
    0.82, 0.95,       1.22, 1.33, 1.60, 2.16, 1.90, 2.20, 2.28, 2.20, 1.93, 1.69, 1.78, 1.96, 2.05, 2.10, 2.66, 2.60,     
    0.79, 0.89,    1.10, 1.12, 1.13, 1.14, "None", 1.17, "None", 1.20, 1.10, 1.22, 1.23, 1.24, 1.25, "None", 1.27, 1.30, 1.50, 2.36, 1.90, 2.20, 2.20, 2.28, 2.54, 2.00, 1.62, 1.87, 2.02, 2.00, 2.20, 2.20, 
    0.79, 0.90,   1.10, 1.30, 1.50, 1.38, 1.36, 1.28, 1.13, 1.28, 1.30, 1.30, 1.30, 1.30, 1.30, 1.30, 1.30, "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None", "None"];
const electron_configuration = ["1s", "2s", "2p", "3s", "3p", "4s", "3d", "4p", "5s", "4d", "5p", "6s", "4f", "5d", "6p", "7s", "5f", "6d", "7p"];
const electronGroupSimple = {"H":1, "Li":1, "Na":1, "K":1, "Rb":1, "Cs":1, "Fr":1, "Be":2, "Mg":2, "Ca":2, "Sr":2, "Ba":2, "Ra":2, "B":3, "Al":3, "Ga":3, "In":3, "Tl":3, "Nh":3, "C":4, "Si":4, "Ge":4, "Sn":4, "Pb":4, "Fl":4, "N":5, "P":5, "As":5, "Sb":5, "Bi":5, "Mc":5, "O":6, "S":6, "Se":6, "Te":6, "Po":6, "Lv":6, "F":7, "Cl":7, "Br":7, "I":7, "At":7, "Ts":7, "He":8, "Ne":8, "Ar":8, "Kr":8, "Xe":8, "Rn":8, "Og":8,
    "Sc":"None", "Ti":"None", "V":"None",  "Cr":"None", "Mn":"None", "Fe":"None", "Co":"None", "Ni":"None", "Cu":"None", "Zn":"None",
    "Y":"None",  "Zr":"None", "Nb":"None", "Mo":"None", "Tc":"None", "Ru":"None", "Rh":"None", "Pd":"None", "Ag":"None", "Cd":"None",
    "Lu":"None", "Hf":"None", "Ta":"None", "W":"None",  "Re":"None", "Os":"None", "Ir":"None", "Pt":"None", "Au":"None", "Hg":"None",
    "Lr":"None", "Rf":"None", "Db":"None", "Sg":"None", "Bh":"None", "Hs":"None", "Mt":"None", "Ds":"None", "Rg":"None", "Cn":"None",
    "La":"None", "Ce":"None", "Pr":"None", "Nd":"None", "Pm":"None", "Sm":"None", "Eu":"None", "Gd":"None", "Tb":"None", "Dy":"None", "Ho":"None", "Er":"None", "Tm":"None", "Yb":"None",
    "Ac":"None", "Th":"None", "Pa":"None", "U":"None",  "Np":"None", "Pu":"None", "Am":"None", "Cm":"None", "Bk":"None", "Cf":"None", "Es":"None", "Fm":"None", "Md":"None", "No":"None"};
const elementColors = {"H":"#52ee61", "He":"#759fff", "Li":"#ecbe59", "Be":"#dee955", "B":"#3aefb6", "C":"#52ee61", "N":"#52ee61", 
  "O":"#52ee61", "F":"#52ee61", "Ne":"#759fff", "Na":"#ecbe59", "Mg":"#dee955", "Al":"#4cddf3", "Si":"#3aefb6", "P":"#52ee61", 
  "S":"#52ee61", "Cl":"#52ee61", "Ar":"#759fff", "K":"#ecbe59", "Ca":"#dee955", "Sc":"#fd8572", "Ti":"#fd8572", 
  "V":"#fd8572", "Cr":"#fd8572", "Mn":"#fd8572", "Fe":"#fd8572", "Co":"#fd8572", "Ni":"#fd8572", "Cu":"#fd8572", 
  "Zn":"#fd8572", "Ga":"#4cddf3", "Ge":"#3aefb6", "As":"#3aefb6", "Se":"#52ee61", "Br":"#52ee61", "Kr":"#759fff", 
  "Rb":"#ecbe59", "Sr":"#dee955", "Y":"#fd8572", "Zr":"#fd8572", "Nb":"#fd8572", "Mo":"#fd8572", "Tc":"#fd8572", 
  "Ru":"#fd8572", "Rh":"#fd8572", "Pd":"#fd8572", "Ag":"#fd8572", "Cd":"#fd8572", "In":"#4cddf3", "Sn":"#4cddf3", 
  "Sb":"#3aefb6", "Te":"#3aefb6", "I":"#52ee61", "Xe":"#759fff", "Cs":"#ecbe59", "Ba":"#dee955", "La":"#ec77a3", 
  "Ce":"#ec77a3", "Pr":"#ec77a3", "Nd":"#ec77a3", "Pm":"#ec77a3", "Sm":"#ec77a3", "Eu":"#ec77a3", "Gd":"#ec77a3", 
  "Tb":"#ec77a3", "Dy":"#ec77a3", "Ho":"#ec77a3", "Er":"#ec77a3", "Tm":"#ec77a3", "Yb":"#ec77a3", "Lu":"#ec77a3", 
  "Hf":"#fd8572", "Ta":"#fd8572", "W":"#fd8572", "Re":"#fd8572", "Os":"#fd8572", "Ir":"#fd8572", "Pt":"#fd8572", 
  "Au":"#fd8572", "Hg":"#fd8572", "Tl":"#4cddf3", "Pb":"#4cddf3", "Bi":"#4cddf3", "Po":"#4cddf3", "At":"#3aefb6", 
  "Rn":"#759fff", "Fr":"#ecbe59", "Ra":"#dee955", "Ac":"#c686cc", "Th":"#c686cc", "Pa":"#c686cc", "U":"#c686cc", 
  "Np":"#c686cc", "Pu":"#c686cc", "Am":"#c686cc", "Cm":"#c686cc", "Bk":"#c686cc", "Cf":"#c686cc", "Es":"#c686cc", 
  "Fm":"#c686cc", "Md":"#c686cc", "No":"#c686cc", "Lr":"#c686cc", "Rf":"#fd8572", "Db":"#fd8572", "Sg":"#fd8572", 
  "Bh":"#fd8572", "Hs":"#fd8572", "Mt":"#cccccc", "Ds":"#cccccc", "Rg":"#cccccc", "Cn":"#fd8572", "Nh":"#cccccc", 
  "Fl":"#4cddf3", "Mc":"#cccccc", "Lv":"#cccccc", "Ts":"#cccccc", "Og":"#cccccc"}


var canva = document.getElementById("main");
var ctx = canva.getContext("2d");
ctx.shadowColor = "blue";
ctx.shadowBlur = 12;
var button = document.getElementById("b");
function notations(prefix) {
    if (prefix[1] == "s") {
        return 2
    } else if (prefix[1] == "p") {
        return 6
    } else if (prefix[1] == "d") {
        return 10
    } else if (prefix[1] == "f") {
        return 14
    }
}
ctx.fillStyle = "black";
ctx.rect(0, 0, 1000, 1000);
ctx.fill();
button.onmousedown = ()=>{
    let atomic_number = document.getElementById("in").value;
    let elem = atomic_number;
    let out = document.getElementById("out");
    let out2 = document.getElementById("out2");
    let out3 = document.getElementById("out3");
    let eleconfig = "";
    console.log(atomic_number); 
    //let ratio = 50/ctx.width();

    if (isNaN(atomic_number)) {
        
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = 12;   
        out.value = "invalid";
        out2.value = "invalid";
        out3.value = "invalid";
        ctx.fillStyle = "black";
        ctx.rect(0, 0, 1000, 1000);
        ctx.fill();
        ctx.fillStyle =  "#ffffff";
        ctx.beginPath();
        ctx.strokeStyle =  "#ffffff";
        ctx.lineWidth = "5";
        ctx.rect(10, 10, canva.width-20, canva.height-20);
        ctx.stroke();
        ctx.font = "100px Arial";
        ctx.textAlign = 'center';
        ctx.textBaseline = "middle";
        ctx.fillText(atomic_number.slice(0, -(atomic_number.length-2)), canva.width/2, canva.height/2);
        ctx.font = "35px Arial";
        ctx.textAlign = 'left';
        ctx.textBaseline = "top";
        ctx.fillText(atomic_number.length+elementsName.length, 15, 15);
        ctx.font = "30px Arial";
        ctx.textAlign = 'center';
        ctx.textBaseline = "middle";
        ctx.fillText(atomic_number, canva.width/2, canva.height-35);
        ctx.font = "30px Arial";
        ctx.textAlign = 'right';
        ctx.textBaseline = "top";
        ctx.fillText("-1", canva.width - 15, 15);
    } else if (atomic_number > 0 && atomic_number <= elementsName.length) {
        ctx.shadowColor = elementColors[elementsSymbol[atomic_number-1]];
        ctx.shadowBlur = 12;   
        ctx.fillStyle = "black";
        ctx.rect(0, 0, 1000, 1000);
        ctx.fill();

        ctx.fillStyle = elementColors[elementsSymbol[atomic_number-1]];
        ctx.beginPath();
        ctx.strokeStyle = elementColors[elementsSymbol[atomic_number-1]];
        ctx.lineWidth = "5";
        ctx.rect(10, 10, canva.width-20, canva.height-20);
        ctx.stroke();
        ctx.font = "100px Arial";
        ctx.textAlign = 'center';
        ctx.textBaseline = "middle";
        ctx.fillText(elementsSymbol[atomic_number-1], canva.width/2, canva.height/2);
        ctx.font = "35px Arial";
        ctx.textAlign = 'left';
        ctx.textBaseline = "top";
        ctx.fillText(atomic_number.toString(), 15, 15);
        ctx.font = "40px Arial";
        ctx.textAlign = 'center';
        ctx.textBaseline = "middle";
        ctx.fillText(elementsName[atomic_number-1], canva.width/2, canva.height-35);
        ctx.font = "30px Arial";
        ctx.textAlign = 'right';
        ctx.textBaseline = "top";
        ctx.fillText(elementsWeight[atomic_number-1], canva.width - 15, 15);

        for (i = 0; i<electron_configuration.length; i++){
            num = notations(electron_configuration[i])
            if (elem == 0) {
                eleconfig = eleconfig.slice(0, -1);
                break;
            } else if (elem >= num) {
                eleconfig = `${eleconfig}${electron_configuration[i]}${num} `;
                elem=elem-num;
            } else if (elem <= num) {
                eleconfig = `${eleconfig}${electron_configuration[i]}${elem}`;
                break;
            }
            if (i==electron_configuration.length-1) {
                eleconfig = eleconfig.slice(0, -1);
            }
    
        }
        out.value = eleconfig;
        out2.value = electronegativity[atomic_number-1];
        out3.value = electronGroupSimple[elementsSymbol[atomic_number-1]];
    } else {
        out.value = "out of range (118)";
        out2.value = "out of range (118)";
        out3.value = "out of range (118)";
        ctx.fillStyle = "black";
        ctx.rect(0, 0, 1000, 1000);
        ctx.fill();
        ctx.fillStyle =  "#ffffff";
        ctx.beginPath();
        ctx.strokeStyle =  "#ffffff";
        ctx.lineWidth = "5";
        ctx.rect(10, 10, canva.width-20, canva.height-20);
        ctx.stroke();
        ctx.font = "100px Arial";
        ctx.textAlign = 'center';
        ctx.textBaseline = "middle";
        ctx.fillText("?", canva.width/2, canva.height/2);
        ctx.font = "35px Arial";
        ctx.textAlign = 'left';
        ctx.textBaseline = "top";
        ctx.fillText(atomic_number.toString(), 15, 15);
        ctx.font = "30px Arial";
        ctx.textAlign = 'center';
        ctx.textBaseline = "middle";
        ctx.fillText("NIL, None, NaN", canva.width/2, canva.height-35);
        ctx.font = "30px Arial";
        ctx.textAlign = 'right';
        ctx.textBaseline = "top";
        ctx.fillText("-1", canva.width - 15, 15);
    }
}

