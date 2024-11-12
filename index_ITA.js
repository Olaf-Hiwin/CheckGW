var s_ser = "HGR", s_size = "15R", s_res = "non ancora valutato";
var no_ltot = parseFloat(document.getElementById("ltot").value);
var no_lsx = parseFloat(document.getElementById("lsx").value);
var no_ldx = parseFloat(document.getElementById("ldx").value);

window.onload = ChangeSeriesSelection();

/* Increments the displayed value by the specified amount */
function IncreaseNum(mno,mxo,ino,idn){

    var no = parseFloat(document.getElementById(idn).value);
    if(no + ino <= mxo)
        no += ino;
    document.getElementById(idn).value = no.toFixed(2);
    AdjValue(no,idn);
}

/* Decrements the displayed value by the specified amount */
function DecreaseNum(mno,mxo,ino,idn){

    var no = parseFloat(document.getElementById(idn).value);
    if(no - ino >= mno)
        no -= ino;
    document.getElementById(idn).value = no.toFixed(2);
    AdjValue(no,idn);
}

/* Checks the text input and corrects invalid data */
function LeaveTxt(mno,mxo,ino,idn){

    var no = document.getElementById(idn).value;
    AdjValue(no,idn);
    if(isNaN(no)){
        document.getElementById(idn).value = 0.00;
        AdjValue(0,idn);
    }
    if(no < mno){
        document.getElementById(idn).value = 0.00;
        AdjValue(0,idn);
    }
    if(no > mxo){
        document.getElementById(idn).value = mxo.toFixed(2);
        AdjValue(mxo,idn);
    }
}

/* Updates the value of the global variable for the current input text */
function AdjValue(val,idn){

    switch(idn){
        case "ltot":
            no_ltot = val;
            break;
        case "lsx":
            no_lsx = val;
            break;
        case "ldx":
            no_ldx = val;
            break;
    }
}

/* Updates selected series and shown sizes */
function ChangeSeriesSelection(){

    if(document.getElementById("hgr").checked==true){
        s_ser = "HGR";
        document.getElementById("l05r").style.display = "none";
        document.getElementById("l07r").style.display = "none";
        document.getElementById("l09r").style.display = "none";
        document.getElementById("l12r").style.display = "none";
        document.getElementById("l15r").style.display = "inline-flex";
        document.getElementById("l17r").style.display = "none";
        document.getElementById("l20r").style.display = "inline-flex";
        document.getElementById("l21r").style.display = "none";
        document.getElementById("l25r").style.display = "inline-flex";
        document.getElementById("l27r").style.display = "none";
        document.getElementById("l30r").style.display = "inline-flex";
        document.getElementById("l35r").style.display = "inline-flex";
        document.getElementById("l45r").style.display = "inline-flex";
        document.getElementById("l50r").style.display = "none";
        document.getElementById("l55r").style.display = "inline-flex";
        document.getElementById("l65r").style.display = "inline-flex";
        document.getElementById("l15t").style.display = "inline-flex";
        document.getElementById("l20t").style.display = "inline-flex";
        document.getElementById("l25t").style.display = "inline-flex";
        document.getElementById("l30t").style.display = "inline-flex";
        document.getElementById("l35t").style.display = "inline-flex";
        document.getElementById("l45t").style.display = "inline-flex";
        document.getElementById("l55t").style.display = "inline-flex";
        document.getElementById("l65t").style.display = "inline-flex";
        document.getElementById("l20rg1").style.display = "inline-flex";
        document.getElementById("l25rg1c").style.display = "inline-flex";
        document.getElementById("l20tg1").style.display = "inline-flex";
        document.getElementById("l15u").style.display = "none";
        document.getElementById("l30u").style.display = "none";
        document.getElementById("15r").checked = true;
    }
    if(document.getElementById("egr").checked==true){
        s_ser = "EGR";
        document.getElementById("l05r").style.display = "none";
        document.getElementById("l07r").style.display = "none";
        document.getElementById("l09r").style.display = "none";
        document.getElementById("l12r").style.display = "none";
        document.getElementById("l15r").style.display = "inline-flex";
        document.getElementById("l17r").style.display = "none";
        document.getElementById("l20r").style.display = "inline-flex";
        document.getElementById("l21r").style.display = "none";
        document.getElementById("l25r").style.display = "inline-flex";
        document.getElementById("l27r").style.display = "none";
        document.getElementById("l30r").style.display = "inline-flex";
        document.getElementById("l35r").style.display = "inline-flex";
        document.getElementById("l45r").style.display = "none";
        document.getElementById("l50r").style.display = "none";
        document.getElementById("l55r").style.display = "none";
        document.getElementById("l65r").style.display = "none";
        document.getElementById("l15t").style.display = "inline-flex";
        document.getElementById("l20t").style.display = "inline-flex";
        document.getElementById("l25t").style.display = "inline-flex";
        document.getElementById("l30t").style.display = "inline-flex";
        document.getElementById("l35t").style.display = "inline-flex";
        document.getElementById("l45t").style.display = "none";
        document.getElementById("l55t").style.display = "none";
        document.getElementById("l65t").style.display = "none";
        document.getElementById("l20rg1").style.display = "none";
        document.getElementById("l25rg1c").style.display = "none";
        document.getElementById("l20tg1").style.display = "none";
        document.getElementById("l15u").style.display = "inline-flex";
        document.getElementById("l30u").style.display = "inline-flex";
        document.getElementById("15r").checked = true;
    }
    if(document.getElementById("cgr").checked==true){
        s_ser = "CGR";
        document.getElementById("l05r").style.display = "none";
        document.getElementById("l07r").style.display = "none";
        document.getElementById("l09r").style.display = "none";
        document.getElementById("l12r").style.display = "none";
        document.getElementById("l15r").style.display = "inline-flex";
        document.getElementById("l17r").style.display = "none";
        document.getElementById("l20r").style.display = "inline-flex";
        document.getElementById("l21r").style.display = "none";
        document.getElementById("l25r").style.display = "inline-flex";
        document.getElementById("l27r").style.display = "none";
        document.getElementById("l30r").style.display = "inline-flex";
        document.getElementById("l35r").style.display = "inline-flex";
        document.getElementById("l45r").style.display = "inline-flex";
        document.getElementById("l50r").style.display = "none";
        document.getElementById("l55r").style.display = "none";
        document.getElementById("l65r").style.display = "none";
        document.getElementById("l15t").style.display = "none";
        document.getElementById("l20t").style.display = "none";
        document.getElementById("l25t").style.display = "none";
        document.getElementById("l30t").style.display = "none";
        document.getElementById("l35t").style.display = "none";
        document.getElementById("l45t").style.display = "none";
        document.getElementById("l55t").style.display = "none";
        document.getElementById("l65t").style.display = "none";
        document.getElementById("l20rg1").style.display = "none";
        document.getElementById("l25rg1c").style.display = "none";
        document.getElementById("l20tg1").style.display = "none";
        document.getElementById("l15u").style.display = "none";
        document.getElementById("l30u").style.display = "none";
        document.getElementById("15r").checked = true;
    }
    if(document.getElementById("wer").checked==true){
        s_ser = "WER";
        document.getElementById("l05r").style.display = "none";
        document.getElementById("l07r").style.display = "none";
        document.getElementById("l09r").style.display = "none";
        document.getElementById("l12r").style.display = "none";
        document.getElementById("l15r").style.display = "none";
        document.getElementById("l17r").style.display = "inline-flex";
        document.getElementById("l20r").style.display = "none";
        document.getElementById("l21r").style.display = "inline-flex";
        document.getElementById("l25r").style.display = "none";
        document.getElementById("l27r").style.display = "inline-flex";
        document.getElementById("l30r").style.display = "none";
        document.getElementById("l35r").style.display = "inline-flex";
        document.getElementById("l45r").style.display = "none";
        document.getElementById("l50r").style.display = "inline-flex";
        document.getElementById("l55r").style.display = "none";
        document.getElementById("l65r").style.display = "none";
        document.getElementById("l15t").style.display = "none";
        document.getElementById("l20t").style.display = "none";
        document.getElementById("l25t").style.display = "none";
        document.getElementById("l30t").style.display = "none";
        document.getElementById("l35t").style.display = "none";
        document.getElementById("l45t").style.display = "none";
        document.getElementById("l55t").style.display = "none";
        document.getElementById("l65t").style.display = "none";
        document.getElementById("l20rg1").style.display = "none";
        document.getElementById("l25rg1c").style.display = "none";
        document.getElementById("l20tg1").style.display = "none";
        document.getElementById("l15u").style.display = "none";
        document.getElementById("l30u").style.display = "none";
        document.getElementById("17r").checked = true;
    }
    if(document.getElementById("mgnr").checked==true){
        s_ser = "MGNR";
        document.getElementById("l05r").style.display = "inline-flex";
        document.getElementById("l07r").style.display = "inline-flex";
        document.getElementById("l09r").style.display = "inline-flex";
        document.getElementById("l12r").style.display = "inline-flex";
        document.getElementById("l15r").style.display = "inline-flex";
        document.getElementById("l17r").style.display = "none";
        document.getElementById("l20r").style.display = "none";
        document.getElementById("l21r").style.display = "none";
        document.getElementById("l25r").style.display = "none";
        document.getElementById("l27r").style.display = "none";
        document.getElementById("l30r").style.display = "none";
        document.getElementById("l35r").style.display = "none";
        document.getElementById("l45r").style.display = "none";
        document.getElementById("l50r").style.display = "none";
        document.getElementById("l55r").style.display = "none";
        document.getElementById("l65r").style.display = "none";
        document.getElementById("l15t").style.display = "none";
        document.getElementById("l20t").style.display = "none";
        document.getElementById("l25t").style.display = "none";
        document.getElementById("l30t").style.display = "none";
        document.getElementById("l35t").style.display = "none";
        document.getElementById("l45t").style.display = "none";
        document.getElementById("l55t").style.display = "none";
        document.getElementById("l65t").style.display = "none";
        document.getElementById("l20rg1").style.display = "none";
        document.getElementById("l25rg1c").style.display = "none";
        document.getElementById("l20tg1").style.display = "none";
        document.getElementById("l15u").style.display = "none";
        document.getElementById("l30u").style.display = "none";
        document.getElementById("05r").checked = true;
    }
    if(document.getElementById("mgwr").checked==true){
        s_ser = "MGWR";
        document.getElementById("l05r").style.display = "inline-flex";
        document.getElementById("l07r").style.display = "inline-flex";
        document.getElementById("l09r").style.display = "inline-flex";
        document.getElementById("l12r").style.display = "inline-flex";
        document.getElementById("l15r").style.display = "inline-flex";
        document.getElementById("l17r").style.display = "none";
        document.getElementById("l20r").style.display = "none";
        document.getElementById("l21r").style.display = "none";
        document.getElementById("l25r").style.display = "none";
        document.getElementById("l27r").style.display = "none";
        document.getElementById("l30r").style.display = "none";
        document.getElementById("l35r").style.display = "none";
        document.getElementById("l45r").style.display = "none";
        document.getElementById("l50r").style.display = "none";
        document.getElementById("l55r").style.display = "none";
        document.getElementById("l65r").style.display = "none";
        document.getElementById("l15t").style.display = "none";
        document.getElementById("l20t").style.display = "none";
        document.getElementById("l25t").style.display = "none";
        document.getElementById("l30t").style.display = "none";
        document.getElementById("l35t").style.display = "none";
        document.getElementById("l45t").style.display = "none";
        document.getElementById("l55t").style.display = "none";
        document.getElementById("l65t").style.display = "none";
        document.getElementById("l20rg1").style.display = "none";
        document.getElementById("l25rg1c").style.display = "none";
        document.getElementById("l20tg1").style.display = "none";
        document.getElementById("l15u").style.display = "none";
        document.getElementById("l30u").style.display = "none";
        document.getElementById("05r").checked = true;
    }
    if(document.getElementById("rgr").checked==true){
        s_ser = "RGR";
        document.getElementById("l05r").style.display = "none";
        document.getElementById("l07r").style.display = "none";
        document.getElementById("l09r").style.display = "none";
        document.getElementById("l12r").style.display = "none";
        document.getElementById("l15r").style.display = "inline-flex";
        document.getElementById("l17r").style.display = "none";
        document.getElementById("l20r").style.display = "inline-flex";
        document.getElementById("l21r").style.display = "none";
        document.getElementById("l25r").style.display = "inline-flex";
        document.getElementById("l27r").style.display = "none";
        document.getElementById("l30r").style.display = "inline-flex";
        document.getElementById("l35r").style.display = "inline-flex";
        document.getElementById("l45r").style.display = "inline-flex";
        document.getElementById("l50r").style.display = "none";
        document.getElementById("l55r").style.display = "inline-flex";
        document.getElementById("l65r").style.display = "inline-flex";
        document.getElementById("l15t").style.display = "inline-flex";
        document.getElementById("l20t").style.display = "inline-flex";
        document.getElementById("l25t").style.display = "inline-flex";
        document.getElementById("l30t").style.display = "inline-flex";
        document.getElementById("l35t").style.display = "inline-flex";
        document.getElementById("l45t").style.display = "inline-flex";
        document.getElementById("l55t").style.display = "inline-flex";
        document.getElementById("l65t").style.display = "inline-flex";
        document.getElementById("l20rg1").style.display = "none";
        document.getElementById("l25rg1c").style.display = "none";
        document.getElementById("l20tg1").style.display = "none";
        document.getElementById("l15u").style.display = "none";
        document.getElementById("l30u").style.display = "none";
        document.getElementById("15r").checked = true;
    }
    ChangeSizeSelection();
    MakeCode();
}

/* Updates selected size */
function ChangeSizeSelection(){

    if(document.getElementById("05r").checked==true){
        s_size = "05R";
    }
    if(document.getElementById("07r").checked==true){
        s_size = "07R";
    }
    if(document.getElementById("09r").checked==true){
        s_size = "09R";
    }
    if(document.getElementById("12r").checked==true){
        s_size = "12R";
    }
    if(document.getElementById("15r").checked==true){
        s_size = "15R";
    }
    if(document.getElementById("17r").checked==true){
        s_size = "17R";
    }
    if(document.getElementById("20r").checked==true){
        s_size = "20R";
    }
    if(document.getElementById("21r").checked==true){
        s_size = "21R";
    }
    if(document.getElementById("25r").checked==true){
        s_size = "25R";
    }
    if(document.getElementById("27r").checked==true){
        s_size = "27R";
    }
    if(document.getElementById("30r").checked==true){
        s_size = "30R";
    }
    if(document.getElementById("35r").checked==true){
        s_size = "35R";
    }
    if(document.getElementById("45r").checked==true){
        s_size = "45R";
    }
    if(document.getElementById("50r").checked==true){
        s_size = "50R";
    }
    if(document.getElementById("55r").checked==true){
        s_size = "55R";
    }
    if(document.getElementById("65r").checked==true){
        s_size = "65R";
    }
    if(document.getElementById("15t").checked==true){
        s_size = "15T";
    }
    if(document.getElementById("20t").checked==true){
        s_size = "20T";
    }
    if(document.getElementById("25t").checked==true){
        s_size = "25T";
    }
    if(document.getElementById("30t").checked==true){
        s_size = "30T";
    }
    if(document.getElementById("35t").checked==true){
        s_size = "35T";
    }
    if(document.getElementById("45t").checked==true){
        s_size = "45T";
    }
    if(document.getElementById("55t").checked==true){
        s_size = "55T";
    }
    if(document.getElementById("65t").checked==true){
        s_size = "65T";
    }
    if(document.getElementById("20rg1").checked==true){
        s_size = "20R G1";
    }
    if(document.getElementById("25rg1c").checked==true){
        s_size = "25R G1C";
    }
    if(document.getElementById("20tg1").checked==true){
        s_size = "20T G1";
    }
    if(document.getElementById("15u").checked==true){
        s_size = "15U";
    }
    if(document.getElementById("30u").checked==true){
        s_size = "30U";
    }
    MakeCode();
}

/* Returns the pitch of the rail depending on the series and size */
function PitchFromType(ty){

    var res;

    switch(ty){
        case "HGR15R":
            res = 60;
    break;
        case "HGR20R":
            res = 60;
    break;
        case "HGR25R":
            res = 60;
    break;
        case "HGR30R":
            res = 80;
    break;
        case "HGR35R":
            res = 80;
    break;
        case "HGR45R":
            res = 105;
    break;
        case "HGR55R":
            res = 120;
    break;
        case "HGR65R":
            res = 150;
    break;
        case "HGR15T":
            res = 60;
    break;
        case "HGR20T":
            res = 60;
    break;
        case "HGR25T":
            res = 60;
    break;
        case "HGR30T":
            res = 80;
    break;
        case "HGR35T":
            res = 80;
    break;
        case "HGR45T":
            res = 105;
    break;
        case "HGR55T":
            res = 120;
    break;
        case "HGR65T":
            res = 150;
    break;
        case "EGR15R":
            res = 60;
    break;
        case "EGR20R":
            res = 60;
    break;
        case "EGR25R":
            res = 60;
    break;
        case "EGR30R":
            res = 80;
    break;
        case "EGR35R":
            res = 80;
    break;
        case "EGR15U":
            res = 60;
    break;
        case "EGR30U":
            res = 80;
    break;
        case "EGR15T":
            res = 60;
    break;
        case "EGR20T":
            res = 60;
    break;
        case "EGR25T":
            res = 60;
    break;
        case "EGR30T":
            res = 80;
    break;
        case "EGR35T":
            res = 80;
    break;
        case "CGR15R":
            res = 60;
    break;
        case "CGR20R":
            res = 60;
    break;
        case "CGR25R":
            res = 60;
    break;
        case "CGR30R":
            res = 80;
    break;
        case "CGR35R":
            res = 80;
    break;
        case "CGR45R":
            res = 105;
    break;
        case "WER17R":
            res = 40;
    break;
        case "WER21R":
            res = 50;
    break;
        case "WER27R":
            res = 60;
    break;
        case "WER35R":
            res = 80;
    break;
        case "WER50R":
            res = 80;
    break;
        case "MGNR05R":
            res = 15;
    break;
        case "MGNR07R":
            res = 15;
    break;
        case "MGNR09R":
            res = 20;
    break;
        case "MGNR12R":
            res = 25;
    break;
        case "MGNR15R":
            res = 40;
    break;
        case "MGWR05R":
            res = 20;
    break;
        case "MGWR07R":
            res = 30;
    break;
        case "MGWR09R":
            res = 30;
    break;
        case "MGWR12R":
            res = 40;
    break;
        case "MGWR15R":
            res = 40;
    break;
        case "RGR15R":
            res = 30;
    break;
        case "RGR20R":
            res = 30;
    break;
        case "RGR25R":
            res = 30;
    break;
        case "RGR30R":
            res = 40;
    break;
        case "RGR35R":
            res = 40;
    break;
        case "RGR45R":
            res = 52.5;
    break;
        case "RGR55R":
            res = 60;
    break;
        case "RGR65R":
            res = 75;
    break;
        case "RGR15T":
            res = 30;
    break;
        case "RGR20T":
            res = 30;
    break;
        case "RGR25T":
            res = 30;
    break;
        case "RGR30T":
            res = 40;
    break;
        case "RGR35T":
            res = 40;
    break;
        case "RGR45T":
            res = 52.5;
    break;
        case "RGR55T":
            res = 60;
    break;
        case "RGR65T":
            res = 75;
    break;
        case "HGR20R G1":
            res = 60;
    break;
        case "HGR25R G1C":
            res = 60;
    break;
        case "HGR20T G1":
            res = 60;
    break;
        default:
            res = -1;
    }
    return res;
}

/* Evaluates the selected rail */
function EvaluateRail(){

    var resNum;
    var result;
    var v_ltot = parseFloat(document.getElementById("ltot").value);
    var v_lsx = parseFloat(document.getElementById("lsx").value);
    var v_ldx = parseFloat(document.getElementById("ldx").value);

    AdjValue(v_ltot,ltot);
    AdjValue(v_lsx,lsx);
    AdjValue(v_ldx,ldx);

    resNum = (no_ltot - no_lsx - no_ldx) / PitchFromType(s_ser + s_size);

    if(resNum % 1 == 0)
        result = ", GUIDA VALIDA";
    else
        result = ", GUIDA NON VALIDA"
    s_res = resNum + " passi (dimensione passo = " + PitchFromType(s_ser + s_size) + " mm)" + result;
    MakeCode();
}

/* Updates product code */
function MakeCode(){

    document.getElementById("resultlabel").innerHTML = "Risultato test guida " + s_ser + s_size + ": " + s_res;
}