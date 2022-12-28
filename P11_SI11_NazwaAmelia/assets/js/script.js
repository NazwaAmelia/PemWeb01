// menangkap semnua elemen a
document.querySelectorAll("#opts a").forEach((a) =>
   // jika diklik akan menjalankan fungsi computerChoice
   a.addEventListener("click", (element) => {
    computerChoice(element);
   })
);
function computerChoice(element){
    // tangkap pilih user
    let pilihanUser = element.target.innerText;

    //menangkap element result dengan queryselector untuk menampung 
    // nilai hasil dari game 
    let pilihanComputer = document.querySelector("#result");
    
    //membuat array untuk komputer
    let choices = ["Rock", "Peper", "Scissors"];

    // pilihan random untuk komputer
    pilihanComputer.innerHTML =
    choices[Math.round(Math.random() * choices.length)];
    pilihanComputer = pilihanComputer.innerHTML;

    // jika pilihan komputer sama dengan pilihan user (draw)
    if (pilihanUser == pilihanComputer){
        alert ("DRAW");

    }
    // jika pilihan user yang menang 
    if (pilihanUser == "Rock" && pilihanComputer == "Scissores") {
        alert("YOU WIN");
    }else if (pilihanUser == "Paper" && pilihanComputer == "Rock") {
        alert("YOU WIN");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Papper"){
    alert("YOU WIN");
    }

    // jika pilihan user yang menang 
    if (pilihanUser == "Rock" && pilihanComputer == "Papper") {
        alert("COMPUTER WIN");
    }else if (pilihanUser == "Paper" && pilihanComputer == "Scissors") {
        alert("COMPUTER WIN");
    }else if (pilihanUser == "Scissors" && pilihanComputer == "Rock"){
    alert("COMPUTER WIN");
    }
}