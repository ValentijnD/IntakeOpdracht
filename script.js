// ------------------------ OPDRACHT 1 ----------------------------

function bereken() {
    
    let selected = document.getElementById("selection").value;
    let from = document.getElementById("van").value;
    from = from.replace(/,/g, ".");

    if (selected == "toDollar"){
        let to1 = parseFloat(from * 1.18);
        document.getElementById("naar").setAttribute("value", to1);
        from = from + ".";
        localStorage.setItem(from, to1);
    } else {
        let to2 = parseFloat(from * 0.85);
        document.getElementById("naar").setAttribute("value", to2);
        from = from + ".";
        localStorage.setItem(from, to2);
    }
    console.log(localStorage);
}

// ------------------------ OPDRACHT 2 ----------------------------

function vertaal() {

    var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    function hundred(num) {
        if (num > 99) {
            return ones[Math.floor(num / 100)] + " hundred " + ten(num % 100);
        } else {
            return ten(num);
        }
    }

    function ten(num) {
        if (num < 10) return ones[num];
        else if (num >= 10 && num < 20) return teens[num - 10];
        else {
            return tens[Math.floor(num / 10)] + " " + ones[num % 10];
        }
    }

    function convert(num) {
        if (num == 0) return "zero";
        else return hundred(num);
    }

    function main() {
        var number = document.getElementById("number").value;
        if (number > 999) {
            alert("Het getal is te hoog");
            document.getElementById("translation").innerHTML = "";
        } else { 
            translation = [];
            translation.push(number);
            for (var i = 0; i < translation.length; i++) {
                document.getElementById("translation").innerHTML = convert(translation[i]);
            }
        }
    }

    main();
}

// ------------------------ OPDRACHT 3 ----------------------------

function date() {
    $.ajax({url: "date.php", success: function(result){
        result = result.slice(1, -1);
        $("#time").html("Het is " + result + " uur");
    }});
}
