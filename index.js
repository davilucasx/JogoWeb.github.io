var numbertToFind = 0;
var attemps = 0;
var dica = "";

function refresh(){

    attemps = 0;
    numbertToFind = parseInt(Math.random() * 100);

    console.log(numbertToFind)

}

function verifyNumber(){

    var num = document.getElementById("num").value;

    if(num > 100 || num < 1)
    {

        dica = "Número invalido";
        return
    }

    if(num > numbertToFind)
    {
        attemps++;
        dica = "O número sorteado é menor"
    }
    else if(num < numbertToFind)
    {
        attemps++;
        dica = "O número sorteado é maior"
    }
    else
    {
        dica = "Parabéns!! você acertou o número obtendo  " + attemps + " erros"
        refresh()
    }

    document.getElementById('dica').textContent = dica
}
refresh();