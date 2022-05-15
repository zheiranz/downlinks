function set_Result(downlink){
    document.getElementById("result_field").value = downlink;
}
function calculate() {
    let table = document.getElementsByClassName('checkbox');
    let downlink = "41";
    for (let i=0; i<table.length; i++){
        if (table[i].checked){
            if (table[i].value === "transmit_period_text") {
                let hex = parseInt(document.getElementById("transmit_period_text").value).toString(16).toUpperCase();
                if (!(hex === "NAN")){
                    downlink += "01" + "0".repeat(4-hex.length) + hex;
                }
            } if (table[i].value === "history_period_text"){
                let hex = (parseInt(document.getElementById("history_period_text").value)*30).toString(16).toUpperCase();
                if (!(hex === "NAN")){
                    downlink += "15" + "0".repeat(4-hex.length) + hex;
                }
            } if (table[i].id === "time_stamping"){
                let radio_buttons = document.getElementsByName("time_stamping");
                for (let x=0; x<radio_buttons.length; x++){
                    if (radio_buttons[x].checked){
                        downlink += radio_buttons[x].value;
                    }
                }
            }
        }
    }
    set_Result(downlink)
}
function copy_Clipboard(element){
    element.select();
    element.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(element.value);
    document.getElementById("tooltip").innerHTML = "Copied!";
}