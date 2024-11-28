let players = [
  {
    "id":1,
    "name": "Lionel Messi",
    "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
    "position": "RW",
    "nationality": "Argentina",
    "flag": "https://cdn.sofifa.net/flags/ar.png",
    "club": "Inter Miami",
    "logo": "https://cdn.sofifa.net/meta/team/239235/120.png",
    "rating": 93,
    "pace": 85,
    "shooting": 92,
    "passing": 91,
    "dribbling": 95,
    "defending": 35,
    "physical": 65
  },
  {
    "id":2,
    "name": "Cristiano Ronaldo",
    "photo": "https://cdn.sofifa.net/players/020/801/25_120.png",
    "position": "ST",
    "nationality": "Portugal",
    "flag": "https://cdn.sofifa.net/flags/pt.png",
    "club": "Al Nassr",
    "logo": "https://cdn.sofifa.net/meta/team/2506/120.png",
    "rating": 91,
    "pace": 84,
    "shooting": 94,
    "passing": 82,
    "dribbling": 87,
    "defending": 34,
    "physical": 77
  },
  {
    "id":3,
    "name": "Kevin De Bruyne",
    "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
    "position": "CM",
    "nationality": "Belgium",
    "flag": "https://cdn.sofifa.net/flags/be.png",
    "club": "Manchester City",
    "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
    "rating": 91,
    "pace": 74,
    "shooting": 86,
    "passing": 93,
    "dribbling": 88,
    "defending": 64,
    "physical": 78
  },
  {
    "id":4,
    "name": "Kylian Mbappé",
    "photo": "https://cdn.sofifa.net/players/231/747/25_120.png",
    "position": "ST",
    "nationality": "France",
    "flag": "https://cdn.sofifa.net/flags/fr.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 92,
    "pace": 97,
    "shooting": 89,
    "passing": 80,
    "dribbling": 92,
    "defending": 39,
    "physical": 77
  },
  {
    "id":5,
    "name": "Virgil van Dijk",
    "photo": "https://cdn.sofifa.net/players/203/376/25_120.png",
    "position": "CB",
    "nationality": "Netherlands",
    "flag": "https://cdn.sofifa.net/flags/nl.png",
    "club": "Liverpool",
    "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
    "rating": 90,
    "pace": 75,
    "shooting": 60,
    "passing": 70,
    "dribbling": 72,
    "defending": 92,
    "physical": 86
  },
  {
    "id":6,
    "name": "Antonio Rudiger",
    "photo": "https://cdn.sofifa.net/players/205/452/25_120.png",
    "position": "CB",
    "nationality": "Germany",
    "flag": "https://cdn.sofifa.net/flags/de.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 88,
    "pace": 82,
    "shooting": 55,
    "passing": 73,
    "dribbling": 70,
    "defending": 86,
    "physical": 86
  },
  {
    "id":7,
    "name": "Neymar Jr",
    "photo": "https://cdn.sofifa.net/players/190/871/25_120.png",
    "position": "LW",
    "nationality": "Brazil",
    "flag": "https://cdn.sofifa.net/flags/br.png",
    "club": "Al-Hilal",
    "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
    "rating": 90,
    "pace": 91,
    "shooting": 83,
    "passing": 86,
    "dribbling": 94,
    "defending": 37,
    "physical": 61
  },
  {
    "id":8,
    "name": "Mohamed Salah",
    "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
    "position": "RW",
    "nationality": "Egypt",
    "flag": "https://cdn.sofifa.net/flags/eg.png",
    "club": "Liverpool",
    "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
    "rating": 89,
    "pace": 93,
    "shooting": 87,
    "passing": 81,
    "dribbling": 90,
    "defending": 45,
    "physical": 75
  },
  {
    "id":9,
    "name": "Joshua Kimmich",
    "photo": "https://cdn.sofifa.net/players/212/622/25_120.png",
    "position": "CM",
    "nationality": "Germany",
    "flag": "https://cdn.sofifa.net/flags/de.png",
    "club": "Bayern Munich",
    "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
    "rating": 89,
    "pace": 70,
    "shooting": 75,
    "passing": 88,
    "dribbling": 84,
    "defending": 84,
    "physical": 81
  },
  {
    "id":10,
    "name": "Jan Oblak",
    "photo": "https://cdn.sofifa.net/players/200/389/25_120.png",
    "position": "GK",
    "nationality": "Slovenia",
    "flag": "https://cdn.sofifa.net/flags/si.png",
    "club": "Atletico Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/7980/120.png",
    "rating": 91,
    "pace": 89,
    "shooting": 90,
    "passing": 78,
    "dribbling": 92,
    "defending": 50,
    "physical": 88
  },
  {
    "id":11,
    "name": "Luka Modrić",
    "photo": "https://cdn.sofifa.net/players/177/003/25_120.png",
    "position": "CM",
    "nationality": "Croatia",
    "flag": "https://cdn.sofifa.net/flags/hr.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 88,
    "pace": 74,
    "shooting": 78,
    "passing": 89,
    "dribbling": 90,
    "defending": 72,
    "physical": 65
  },
  {
    "id":12,
    "name": "Vinicius Junior",
    "photo": "https://cdn.sofifa.net/players/238/794/25_120.png",
    "position": "LW",
    "nationality": "Brazil",
    "flag": "https://cdn.sofifa.net/flags/br.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 89,
    "pace": 91,
    "shooting": 88,
    "passing": 85,
    "dribbling": 94,
    "defending": 39,
    "physical": 61
  },
  {
    "id":13,
    "name": "Brahim Diáz",
    "photo": "https://cdn.sofifa.net/players/231/410/25_120.png",
    "position": "LW",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Real Madrid",
    "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
    "rating": 82,
    "pace": 85,
    "shooting": 74,
    "passing": 78,
    "dribbling": 85,
    "defending": 31,
    "physical": 56
  },
  {
    "id":14,
    "name": "Karim Benzema",
    "photo": "https://cdn.sofifa.net/players/165/153/25_120.png",
    "position": "ST",
    "nationality": "France",
    "flag": "https://cdn.sofifa.net/flags/fr.png",
    "club": "Al-Ittihad",
    "logo" :"https://cdn.sofifa.net/meta/team/476/120.png",
    "rating": 90,
    "pace": 77,
    "shooting": 90,
    "passing": 83,
    "dribbling": 88,
    "defending": 40,
    "physical": 78
  },
  {
    "id":15,
    "name": "Erling Haaland",
    "photo": "https://cdn.sofifa.net/players/239/085/25_120.png",
    "position": "ST",
    "nationality": "Norway",
    "flag": "https://cdn.sofifa.net/flags/no.png",
    "club": "Manchester City",
    "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
    "rating": 91,
    "pace": 89,
    "shooting": 94,
    "passing": 65,
    "dribbling": 80,
    "defending": 45,
    "physical": 88
  },
  {
    "id":16,
    "name": "N'Golo Kanté",
    "photo": "https://cdn.sofifa.net/players/215/914/25_120.png",
    "position": "CDM",
    "nationality": "France",
    "flag": "https://cdn.sofifa.net/flags/fr.png",
    "club": "Al-Ittihad",
    "logo": "https://cdn.sofifa.net/meta/team/476/120.png",
    "rating": 87,
    "pace": 77,
    "shooting": 66,
    "passing": 75,
    "dribbling": 82,
    "defending": 88,
    "physical": 82
  },
  {
    "id":17,
    "name": "Alphonso Davies",
    "photo": "https://cdn.sofifa.net/players/234/396/25_120.png",
    "position": "LB",
    "nationality": "Canada",
    "flag": "https://cdn.sofifa.net/flags/ca.png",
    "club": "Bayern Munich",
    "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
    "rating": 84,
    "pace": 96,
    "shooting": 68,
    "passing": 77,
    "dribbling": 82,
    "defending": 76,
    "physical": 77
  },
  {
    "id":18,
    "name": "Yassine Bounou",
    "photo": "https://cdn.sofifa.net/players/209/981/25_120.png",
    "position": "GK",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Al-Hilal",
    "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
    "rating": 84,
    "pace": 81,
    "shooting": 82,
    "passing": 77,
    "dribbling": 86,
    "defending": 38,
    "physical": 83
  },
  {
    "id":19,
    "name": "Bruno Fernandes",
    "photo": "https://cdn.sofifa.net/players/212/198/25_120.png",
    "position": "CM",
    "nationality": "Portugal",
    "flag": "https://cdn.sofifa.net/flags/pt.png",
    "club": "Manchester United",
    "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
    "rating": 88,
    "pace": 75,
    "shooting": 85,
    "passing": 89,
    "dribbling": 84,
    "defending": 69,
    "physical": 77
  },
  {
    "id":20,
    "name": "Jadon Sancho",
    "photo": "https://cdn.sofifa.net/players/233/049/25_120.png",
    "position": "LW",
    "nationality": "England",
    "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
    "club": "Manchester United",
    "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
    "rating": 84,
    "pace": 85,
    "shooting": 74,
    "passing": 78,
    "dribbling": 88,
    "defending": 34,
    "physical": 63
  },
  {
    "id":21,
    "name": "Trent Alexander-Arnold",
    "photo": "https://cdn.sofifa.net/players/231/281/25_120.png",
    "position": "RB",
    "nationality": "England",
    "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
    "club": "Liverpool",
    "rating": 87,
    "pace": 76,
    "shooting": 66,
    "passing": 89,
    "dribbling": 80,
    "defending": 79,
    "physical": 71
  },
  {
    "id":22,
    "name": "Achraf Hakimi",
    "photo": "https://cdn.sofifa.net/players/235/212/25_120.png",
    "position": "RB",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Paris Saint-Germain",
    "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
    "rating": 84,
    "pace": 91,
    "shooting": 76,
    "passing": 80,
    "dribbling": 80,
    "defending": 75,
    "physical": 78
  },
  {
    "id":23,
    "name": "Youssef En-Nesyri",
    "photo": "https://cdn.sofifa.net/players/235/410/25_120.png",
    "position": "ST",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Fenerbahçe",
    "logo": "https://cdn.sofifa.net/meta/team/88/120.png",
    "rating": 83,
    "pace": 82,
    "shooting": 82,
    "passing": 63,
    "dribbling": 77,
    "defending": 36,
    "physical": 80
  },
  {
    "id":24,
    "name": "Noussair Mazraoui",
    "photo": "https://cdn.sofifa.net/players/236/401/25_120.png",
    "position": "LB",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "Manchester United",
    "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
    "rating": 81,
    "pace": 78,
    "shooting": 66,
    "passing": 77,
    "dribbling": 83,
    "defending": 77,
    "physical": 71
  },
  {
    "id":25,
    "name": "Ismael Saibari",
    "photo": "https://cdn.sofifa.net/players/259/480/25_120.png",
    "position": "CM",
    "nationality": "Morocco",
    "flag": "https://cdn.sofifa.net/flags/ma.png",
    "club": "PSV",
    "logo": "https://cdn.sofifa.net/meta/team/682/120.png",
    "rating": 83,
    "pace": 89,
    "shooting": 78,
    "passing": 80,
    "dribbling": 86,
    "defending": 55,
    "physical": 84
  },
  {
    "id":26,
    "name": "Gianluigi Donnarumma",
    "photo": "https://cdn.sofifa.net/players/230/621/25_120.png",
    "position": "GK",
    "nationality": "Italy",
    "flag": "https://cdn.sofifa.net/flags/it.png",
    "club": "Paris Saint-Germain",
    "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
    "rating": 89,
    "pace": 88,
    "shooting": 84,
    "passing": 75,
    "dribbling": 90,
    "defending": 50,
    "physical": 85
  }
]


let playersActive = [

]


let getPlanningSelect = document.getElementById("getPlanningSelect");
getPlanningSelect.value = "4-3-3";


// ************************* Call Functions ****************************
// *********************************************************************
// **********************************************************************

document.addEventListener("DOMContentLoaded",()=>{


    afficheListPlayers();
    afficheListChangement();
    teamPlanning();
    popUpAjoutSection();
    ajoutePlayer();
    searchFunction();
    editFunction();

})




// ================== afficher Players on list players ==================


function afficheListPlayers(){
    let listElement = document.getElementById("listElement");

    listElement.innerHTML = '';

    for(let i = 0; i < players.length; i++){
        listElement.innerHTML += `
        <div draggable="true" class="player w-full min-h-[60px] bg-[#2a2a30] flex items-center justify-between rounded-[5px]">
    
                <div onclick="selectPosition(${players[i].id})" class="flex items-center w-[80%] pl-5 cursor-pointer">
                        <div class="profileImage w-[40px] h-[40px] rounded-[50%] bg-[#bfbfbf] overflow-hidden">
                            <img src="${players[i].photo}" alt="${players[i].name}" class="w-[40px] h-[40px]">
                        </div>
                        <div class="playerInformation flex flex-col justify-evenly pl-4">
                            <h3 class="text-white namePlayer text-[14px]">${players[i].name}</h3>
                            <h6 class="text-[#b0b0b0] text-[13px] w-full">${players[i].nationality}</h6>
                        </div>
                </div>

                <div class="w-[20%] h-full flex justify-center items-center">
                    <i onclick="removePlayer(${i})" class="fa-solid fa-trash text-xl text-red-600 cursor-pointer"></i>
                </div>
            </div>

        `
    }
}

// ================== afficher Players on list Changement ==================


function afficheListChangement(){
  let changementElement = document.getElementById("changementElement");

  changementElement.innerHTML = '';

  for(let i = 0; i < players.length; i++){
      changementElement.innerHTML += `
      <div  onclick="openEditSection(${i})" draggable="true" class="changement w-full max-w-[200px] h-[280px] bg-[#1a1a1a] rounded-[15px] text-white shadow-[0px_0px_3px_-1px_yellow]">

                    <div class="topCardChangement h-[35%] w-full flex justify-center items-center">
                        <div class="profileChangement w-[80px] h-[80px] rounded-[50%] bg-[#6c6c6c] flex justify-center items-center overflow-hidden">
                            <img src="${players[i].photo}" alt="${players[i].name}" class="w-[80px] h-[80px]">
                        </div>
                    </div>
                    <div class="contentCardChangement w-full h-[65%]">
                        <div class="nameCard flex flex-col items-center h-20%">
                            <h2 class="font-bold text-md mb-[-3px]">${players[i].name}</h2>
                            <h3 class="font-medium text-sm text-[#868686]">${players[i].nationality}</h3>
                        </div>
                        <div class="competanceCard p-2 h-[60%] justify-center grid grid-cols-[auto_auto_auto] grid-rows-[auto_auto] gap-x-5">
                            <div>
                                <h5 class="text-[0.7rem] font-medium text-yellowColor mb-[-4px]">PAC</h5>
                                <h6 class="text-[1rem] font-semibold">${players[i].pace}</h6>
                            </div>
                            <div>
                                <h5 class="text-[0.7rem] font-medium text-yellowColor mb-[-4px]">SHO</h5>
                                <h6 class="text-[1rem] font-semibold">${players[i].shooting}</h6>
                            </div>
                            <div>
                                <h5 class="text-[0.7rem] font-medium text-yellowColor mb-[-4px]">PAS</h5>
                                <h6 class="text-[1rem] font-semibold">${players[i].passing}</h6>
                            </div>
                            <div>
                                <h5 class="text-[0.7rem] font-medium text-yellowColor mb-[-4px]">DRI</h5>
                                <h6 class="text-[1rem] font-semibold">${players[i].dribbling}</h6>
                            </div>
                            <div>
                                <h5 class="text-[0.7rem] font-medium text-yellowColor mb-[-4px]">DEF</h5>
                                <h6 class="text-[1rem] font-semibold">${players[i].defending}</h6>
                            </div>
                            <div>
                                <h5 class="text-[0.7rem] font-medium text-yellowColor mb-[-4px]">PHY</h5>
                                <h6 class="text-[1rem] font-semibold">${players[i].physical}</h6>
                            </div>
                        </div>
                        <div class="cardBottomChangement w-full h-[17%] flex justify-center gap-3">
                            <img src="${players[i].flag}" alt="Argentina" class="w-[30px] h-[20px]">
                            <img src="${players[i].logo}" alt="Inter Miami"  class="w-[20px] h-[20px]">
                        </div>
                    </div>
                </div>

      `
  }
}



// ========================= team planning ===========================


function teamPlanning(){
    let getTeamPosition = document.getElementsByClassName("card");

    getTeamPosition[0].style.opacity = "1";
            getTeamPosition[1].style.opacity = "0";
            getTeamPosition[2].style.opacity = "1";
            getTeamPosition[3].style.opacity = "0";
            getTeamPosition[4].style.opacity = "1";
            getTeamPosition[5].style.opacity = "1";
            getTeamPosition[6].style.opacity = "0";
            getTeamPosition[7].style.opacity = "1";
            getTeamPosition[8].style.opacity = "0";
            getTeamPosition[9].style.opacity = "1";
            getTeamPosition[10].style.opacity = "1";
            getTeamPosition[11].style.opacity = "1";
            getTeamPosition[12].style.opacity = "0";
            getTeamPosition[13].style.opacity = "1";
            getTeamPosition[14].style.opacity = "1";

    getPlanningSelect.onchange = ()=>{
      afficherCardPlayers();
        if(getPlanningSelect.value === "4-3-3"){
            getTeamPosition[0].style.opacity = "1";
            getTeamPosition[1].style.opacity = "0";
            getTeamPosition[2].style.opacity = "1";
            getTeamPosition[3].style.opacity = "0";
            getTeamPosition[4].style.opacity = "1";
            getTeamPosition[5].style.opacity = "1";
            getTeamPosition[6].style.opacity = "0";
            getTeamPosition[7].style.opacity = "1";
            getTeamPosition[8].style.opacity = "0";
            getTeamPosition[9].style.opacity = "1";
            getTeamPosition[10].style.opacity = "1";
            getTeamPosition[11].style.opacity = "1";
            getTeamPosition[12].style.opacity = "0";
            getTeamPosition[13].style.opacity = "1";
            getTeamPosition[14].style.opacity = "1";
        }else if(getPlanningSelect.value === "4-4-2"){
          afficherCardPlayers();
            getTeamPosition[0].style.opacity = "0";
            getTeamPosition[1].style.opacity = "1";
            getTeamPosition[2].style.opacity = "0";
            getTeamPosition[3].style.opacity = "1";
            getTeamPosition[4].style.opacity = "0";
            getTeamPosition[5].style.opacity = "1";
            getTeamPosition[6].style.opacity = "1";
            getTeamPosition[7].style.opacity = "0";
            getTeamPosition[8].style.opacity = "1";
            getTeamPosition[9].style.opacity = "1";
            getTeamPosition[10].style.opacity = "1";
            getTeamPosition[11].style.opacity = "1";
            getTeamPosition[12].style.opacity = "0";
            getTeamPosition[13].style.opacity = "1";
            getTeamPosition[14].style.opacity = "1";
        }else{
            getPlanningSelect.style.border = "2px solid red";
        }
    }
}





// ======================== POP UP Ajoute Section ==================


function popUpAjoutSection(){
  let ajouteSection = document.getElementById("ajouteSection");
  let addPlayerTeamSection = document.getElementById("addPlayerTeamSection");
  let openAjoutSection = document.getElementById("openAjoutSection");
  let closeAjoutSection = document.getElementById("closeAjoutSection");
  let closeAddPlayerTeam = document.getElementById("closeAddPlayerTeam");

  openAjoutSection.onclick = ()=>{
    ajouteSection.style.display = "flex";
  }
  closeAddPlayerTeam.onclick = ()=>{
    addPlayerTeamSection.style.display = "none";
  }
  closeAjoutSection.onclick = ()=>{
    ajouteSection.style.display = "none";

    let titleSection = document.getElementById("titleSection");
    let getNameElement = document.getElementById("getNameElement");
    let getImageElement = document.getElementById("getImageElement");
    let getPositionElement = document.getElementById("getPositionElement");
    let getNationalityElement = document.getElementById("getNationalityElement");
    let getClubElement = document.getElementById("getClubElement");
    let getRatElement = document.getElementById("getRatElement");
    let getPacElement = document.getElementById("getPacElement");
    let getShoElement = document.getElementById("getShoElement");
    let getPasElement = document.getElementById("getPasElement");
    let getDriElement = document.getElementById("getDriElement");
    let getDefElement = document.getElementById("getDefElement");
    let getPhyElement = document.getElementById("getPhyElement");
  
    let buttonSubmit = document.getElementById("buttonSubmit");
  

    buttonSubmit.value = "";

    titleSection.innerText = "Add Player";
    getNameElement.value = "";
    getImageElement.value = "";
    getPositionElement.style.display = "block";
    getNationalityElement.style.display = "block";
    getClubElement.style.display = "block";
    getRatElement.value = 10;
    getPacElement.value = 10;
    getShoElement.value = 10;
    getPasElement.value = 10;
    getDriElement.value = 10;
    getDefElement.value = 10;
    getPhyElement.value = 10;
    buttonSubmit.innerText = "ADD Player";
    buttonSubmit.value  = "";
  }
}


// ======================== Ajoute Player ==========================


function ajoutePlayer(){
  let getNameElement = document.getElementById("getNameElement");
  let getImageElement = document.getElementById("getImageElement");
  let getPositionElement = document.getElementById("getPositionElement");
  let getNationalityElement = document.getElementById("getNationalityElement");
  let getClubElement = document.getElementById("getClubElement");
  let getRatElement = document.getElementById("getRatElement");
  let getPacElement = document.getElementById("getPacElement");
  let getShoElement = document.getElementById("getShoElement");
  let getPasElement = document.getElementById("getPasElement");
  let getDriElement = document.getElementById("getDriElement");
  let getDefElement = document.getElementById("getDefElement");
  let getPhyElement = document.getElementById("getPhyElement");

  let buttonSubmit = document.getElementById("buttonSubmit");


  buttonSubmit.addEventListener("click",()=>{
    
    if(!buttonSubmit.value){

    getNameElement.style.border = "2px solid black";
    getImageElement.style.border = "2px solid black";
    getPositionElement.style.border = "2px solid black";
    getNationalityElement.style.border = "2px solid black";
    getClubElement.style.border = "2px solid black";
    getRatElement.style.border = "2px solid black";
    getPacElement.style.border = "2px solid black";
    getShoElement.style.border = "2px solid black";
    getPasElement.style.border = "2px solid black";
    getDriElement.style.border = "2px solid black";
    getDefElement.style.border = "2px solid black";
    getPhyElement.style.border = "2px solid black";
      if(getNameElement.value.trim() == ""){
        getNameElement.style.border = "2px solid red";
      }
      else if(getImageElement.value.trim() == ""){
        getImageElement.style.border = "2px solid red";

      }else if(getPositionElement.value.trim() == ""){
        getPositionElement.style.border = "2px solid red";
      }else if(getPositionElement.value != "LW" && getPositionElement.value != "LF" && getPositionElement.value != "CF" && getPositionElement.value != "RF" && getPositionElement.value != "RW" && getPositionElement.value != "CAM" && getPositionElement.value != "CM" && getPositionElement.value != "RM" && getPositionElement.value != "LM" && getPositionElement.value != "CDM" && getPositionElement.value != "CB" && getPositionElement.value != "LB" && getPositionElement.value != "RB" && getPositionElement.value != "LWB" && getPositionElement.value != "RWB" && getPositionElement.value != "GK"){
        getPositionElement.style.border = "2px solid red";
      }else if(getNationalityElement.value.trim() == ""){
        getNationalityElement.style.border = "2px solid red";
      }else if(getNationalityElement.value != "AG" && getNationalityElement.value != "PG" && getNationalityElement.value != "FR" && getNationalityElement.value != "BZ" && getNationalityElement.value != "EG" && getNationalityElement.value != "MR"){
        getNationalityElement.style.border = "2px solid red";
      }else if(getClubElement.value.trim() == ""){
        getClubElement.style.border = "2px solid red";
      }else if(getClubElement.value != "IM" && getClubElement.value != "AN" && getClubElement.value != "MC" && getClubElement.value != "RM" && getClubElement.value != "LP"){
        getClubElement.style.border = "2px solid red";
      }else if(getRatElement.value.trim() == "" || getRatElement.value < 0 || getRatElement.value > 100){
        getRatElement.style.border = "2px solid red";
      }else if(getPacElement.value.trim() == "" || getPacElement.value < 0 || getPacElement.value > 100){
        getPacElement.style.border = "2px solid red";
      }else if(getShoElement.value.trim() == "" || getShoElement.value < 0 || getShoElement.value > 100){
        getShoElement.style.border = "2px solid red";
      }else if(getPasElement.value.trim() == "" || getPasElement.value < 0 || getPasElement.value > 100){
        getPasElement.style.border = "2px solid red";
      }else if(getDriElement.value.trim() == "" || getDriElement.value < 0 || getDriElement.value > 100){
        getDriElement.style.border = "2px solid red";
      }else if(getDefElement.value.trim() == "" || getDefElement.value < 0 || getDefElement.value > 100){
        getDefElement.style.border = "2px solid red";
      }else if(getPhyElement.value.trim() == "" || getPhyElement.value < 0 || getPhyElement.value > 100){
        getPhyElement.style.border = "2px solid red";
      }
      else{
        let getID;
        if(players.length >= 1){
          getID = players[players.length -1].id + 1;
        }else{
          getID = 1;
        }

        let getFlag;
        if(getNationalityElement.value == "AG"){
          getFlag = "https://cdn.sofifa.net/flags/ar.png";
        }else if(getNationalityElement.value == "PG"){
          getFlag = "https://cdn.sofifa.net/flags/pt.png";
        }else if(getNationalityElement.value == "FR"){
          getFlag = "https://cdn.sofifa.net/flags/fr.png";
        }else if(getNationalityElement.value == "BZ"){
          getFlag = "https://cdn.sofifa.net/flags/br.png";
        }else if(getNationalityElement.value == "EG"){
          getFlag = "https://cdn.sofifa.net/flags/eg.png";
        }else if(getNationalityElement.value == "MR"){
          getFlag = "https://cdn.sofifa.net/flags/ma.png";
        }else{
          alert("Error Try Again");
          return;
        }


        let getLogo;
        if(getClubElement.value == "IM"){
          getLogo = "https://cdn.sofifa.net/meta/team/239235/120.png";
        }else if(getClubElement.value == "AN"){
          getLogo = "https://cdn.sofifa.net/meta/team/2506/120.png";
        }else if(getClubElement.value == "MC"){
          getLogo = "https://cdn.sofifa.net/players/239/085/25_120.png";
        }else if(getClubElement.value == "MR"){
          getLogo = "https://cdn.sofifa.net/meta/team/3468/120.png";
        }else if(getClubElement.value == "LP"){
          getLogo = "https://cdn.sofifa.net/meta/team/8/120.png";
        }else{
          alert("Error Try Again");
          return;
        }

        let getNationality;
        if(getNationalityElement.value == "AG"){
          getNationality = "Argentina";
        }else if(getNationalityElement.value == "PG"){
          getNationality = "Portugal";
        }else if(getNationalityElement.value == "FR"){
          getNationality = "France";
        }else if(getNationalityElement.value == "BZ"){
          getNationality = "Brazil";
        }else if(getNationalityElement.value == "MR"){
          getNationality = "Morocco";
        }else if(getNationalityElement.value == "EG"){
          getNationality = "Egypt";
        }else{
          alert("Error Try Again");
          return;
        }

        players.push({
          "id": getID,
          "name": getNameElement.value,
          "photo": getImageElement.value,
          "position": getPositionElement.value,
          "nationality": getNationality,
          "flag": getFlag,
          "club": getClubElement.value,
          "logo": getLogo,
          "rating": getRatElement.value,
          "pace": getPacElement.value,
          "shooting": getShoElement.value,
          "passing": getPasElement.value,
          "dribbling": getDriElement.value,
          "defending": getDefElement.value,
          "physical": getPhyElement.value
        })

        let ajouteSection = document.getElementById("ajouteSection");
        ajouteSection.style.display = "none";
        afficheListPlayers();
        afficheListChangement();

        let addSuccess = document.getElementById("addSuccess");
        addSuccess.innerHTML = `<div class="w-full max-w-[400px] bg-[#1dbb1d] h-full rounded-[5px] border-4 border-[green] flex items-center pl-5">
          <h6 class="font-semibold text-white">Player has been added avec success</h6>
      </div>`
        addSuccess.style.display = "flex";

        setTimeout(()=>{
          addSuccess.style.display = "none";
        },2000)

      }
    }
  })
}


// ====================== Search Function =========================



function searchFunction(){
  let getSearchInput = document.getElementById("getSearchInput");

  let getPlayers = document.getElementsByClassName("player");

  getSearchInput.onkeyup = ()=>{
    
    for(let i = 0; i < getPlayers.length; i++){
      let namePlayer = getPlayers[i].getElementsByClassName("namePlayer")[0];

      if(namePlayer.innerText.toUpperCase().indexOf(getSearchInput.value.trim().toUpperCase()) >= 0){
        getPlayers[i].style.display = "flex";
      }else{
        getPlayers[i].style.display = "none";
      }

    }

  }
}



// ====================== Remove Player Function =====================


function removePlayer(index){
  
  players.splice(index,1);
  afficheListPlayers();
  afficheListChangement();

}

// ====================== Affiche Edit Section ========================


function openEditSection(index){


  let ajouteSection = document.getElementById("ajouteSection");

  let titleSection = document.getElementById("titleSection");
  let getNameElement = document.getElementById("getNameElement");
  let getImageElement = document.getElementById("getImageElement");
  let getPositionElement = document.getElementById("getPositionElement");
  let getNationalityElement = document.getElementById("getNationalityElement");
  let getClubElement = document.getElementById("getClubElement");
  let getRatElement = document.getElementById("getRatElement");
  let getPacElement = document.getElementById("getPacElement");
  let getShoElement = document.getElementById("getShoElement");
  let getPasElement = document.getElementById("getPasElement");
  let getDriElement = document.getElementById("getDriElement");
  let getDefElement = document.getElementById("getDefElement");
  let getPhyElement = document.getElementById("getPhyElement");

  let buttonSubmit = document.getElementById("buttonSubmit");

  ajouteSection.style.display = "flex";

  titleSection.innerText = "Edit Player";
  getNameElement.value = players[index].name;
  getImageElement.value = players[index].photo;
  getPositionElement.style.display = "none";
  getNationalityElement.style.display = "none";
  getClubElement.style.display = "none";
  getRatElement.value = players[index].rating;
  getPacElement.value = players[index].pace;
  getShoElement.value = players[index].shooting;
  getPasElement.value = players[index].passing;
  getDriElement.value = players[index].dribbling;
  getDefElement.value = players[index].defending;
  getPhyElement.value = players[index].physical;
  buttonSubmit.innerText = "Edit";
  buttonSubmit.value = players[index].id;


}


function editFunction(){
  let ajouteSection = document.getElementById("ajouteSection");

  let titleSection = document.getElementById("titleSection");
  let getNameElement = document.getElementById("getNameElement");
  let getImageElement = document.getElementById("getImageElement");
  let getPositionElement = document.getElementById("getPositionElement");
  let getNationalityElement = document.getElementById("getNationalityElement");
  let getClubElement = document.getElementById("getClubElement");
  let getRatElement = document.getElementById("getRatElement");
  let getPacElement = document.getElementById("getPacElement");
  let getShoElement = document.getElementById("getShoElement");
  let getPasElement = document.getElementById("getPasElement");
  let getDriElement = document.getElementById("getDriElement");
  let getDefElement = document.getElementById("getDefElement");
  let getPhyElement = document.getElementById("getPhyElement");

  let buttonSubmit = document.getElementById("buttonSubmit");

  buttonSubmit.onclick = ()=>{

    getNameElement.style.border = "2px solid black";
    getImageElement.style.border = "2px solid black";
    getPositionElement.style.border = "2px solid black";
    getNationalityElement.style.border = "2px solid black";
    getClubElement.style.border = "2px solid black";
    getRatElement.style.border = "2px solid black";
    getPacElement.style.border = "2px solid black";
    getShoElement.style.border = "2px solid black";
    getPasElement.style.border = "2px solid black";
    getDriElement.style.border = "2px solid black";
    getDefElement.style.border = "2px solid black";
    getPhyElement.style.border = "2px solid black";
    if(buttonSubmit.value){
      if(getNameElement.value.trim() == ""){
        getNameElement.style.border = "2px solid red";
      }else if(getImageElement.value.trim() == ""){
        getImageElement.style.border = "2px solid red";
      }else if(getRatElement.value.trim() == "" || getRatElement.value < 0 || getRatElement.value > 100){
        getRatElement.style.border = "2px solid red";
      }else if(getPacElement.value.trim() == "" || getPacElement.value < 0 || getPacElement.value > 100){
        getPacElement.style.border = "2px solid red";
      }else if(getShoElement.value.trim() == "" || getShoElement.value < 0 || getShoElement.value > 100){
        getShoElement.style.border = "2px solid red";
      }else if(getPasElement.value.trim() == "" || getPasElement.value < 0 || getPasElement.value > 100){
        getPasElement.style.border = "2px solid red";
      }else if(getDriElement.value.trim() == "" || getDriElement.value < 0 || getDriElement.value > 100){
        getDriElement.style.border = "2px solid red";
      }else if(getDefElement.value.trim() == "" || getDefElement.value < 0 || getDefElement.value > 100){
        getDefElement.style.border = "2px solid red";
      }else if(getPhyElement.value.trim() == "" || getPhyElement.value < 0 || getPhyElement.value > 100){
        getPhyElement.style.border = "2px solid red";
      }else{
        getNameElement.style.border = "2px solid black";
        for(let i = 0; i < players.length; i++){
          if(players[i].id == buttonSubmit.value){
            players[i].name = getNameElement.value;
            players[i].photo = getImageElement.value;
            players[i].rating = getRatElement.value;
            players[i].pace = getPacElement.value;
            players[i].shooting = getShoElement.value;
            players[i].passing = getPasElement.value;
            players[i].dribbling = getDriElement.value;
            players[i].defending = getDefElement.value;
            players[i].physical = getPhyElement.value;

            titleSection.innerText = "Add Player";
            getNameElement.value = "";
            getImageElement.value = "";
            getPositionElement.style.display = "block";
            getNationalityElement.style.display = "block";
            getClubElement.style.display = "block";
            getRatElement.value = 10;
            getPacElement.value = 10;
            getShoElement.value = 10;
            getPasElement.value = 10;
            getDriElement.value = 10;
            getDefElement.value = 10;
            getPhyElement.value = 10;
            buttonSubmit.innerText = "ADD Player";
            ajouteSection.style.display = "none";

            afficheListChangement();
            afficheListPlayers();
            let addSuccess = document.getElementById("addSuccess");
            addSuccess.innerHTML = `<div class="w-full max-w-[400px] bg-[#1dbb1d] h-full rounded-[5px] border-4 border-[green] flex items-center pl-5">
        <h6 class="font-semibold text-white">Player has been edited avec success</h6>
    </div>`
            addSuccess.style.display = "flex";

            setTimeout(()=>{
              addSuccess.style.display = "none";
            },2000);
            console.log(players)
          }
          }
        }
      }

  }
}


// ======================= Select Position ==========================


function selectPosition(ID){

  let addPlayerTeamSection = document.getElementById("addPlayerTeamSection");

  let attackSelection = document.getElementById("attackSelection");
  let middelSelection = document.getElementById("middelSelection");
  let defanceSelection = document.getElementById("defanceSelection");
  let goalSelection = document.getElementById("goalSelection");

  let getNameElement = document.getElementById("getNameElements");

  let addPositionButton = document.getElementById("addPositionButton");

  attackSelection.style.display = "none";
  middelSelection.style.display = "none";
  defanceSelection.style.display = "none";
  goalSelection.style.display = "none";

  let positionSelected;
  let getPositionPlay;

  for(let i = 0; i < players.length; i++){
    if(players[i].id == ID){
      getNameElement.innerText = players[i].name;
      if(players[i].position == "LW" || players[i].position == "LF" || players[i].position == "CF" || players[i].position == "RF" || players[i].position == "RW" || players[i].position == "ST"){
        addPlayerTeamSection.style.display = "flex";
        attackSelection.style.display = "block";
        positionSelected = attackSelection.value;
        getPositionPlay = "ATT";
      }else if(players[i].position == "CAM" || players[i].position == "CM" || players[i].position == "RM" || players[i].position == "LM" || players[i].position == "CDM"){
        addPlayerTeamSection.style.display = "flex";
        middelSelection.style.display = "block";
        positionSelected = middelSelection.value;
        getPositionPlay = "MED";
      }else if(players[i].position == "CB" || players[i].position == "LB" || players[i].position == "RB" || players[i].position == "LWB" || players[i].position == "RWB"){
        addPlayerTeamSection.style.display = "flex";
        defanceSelection.style.display = "block";
        positionSelected = defanceSelection.value;
        getPositionPlay = "DEF";
      }else if(players[i].position == "GK"){
        addPlayerTeamSection.style.display = "flex";
        goalSelection.style.display = "block";
        positionSelected = goalSelection.value;
        getPositionPlay = "GOL";
      }else{
        addPlayerTeamSection.style.display = "none";
        alert("No position Selected")
      }
    }
  }

  attackSelection.onchange = ()=>{
    positionSelected = attackSelection.value;
  }
  middelSelection.onchange = ()=>{
    positionSelected = middelSelection.value;
  }
  defanceSelection.onchange = ()=>{
    positionSelected = defanceSelection.value;
  }
  goalSelection.onchange = ()=>{
    positionSelected = goalSelection.value;
  }


  addPositionButton.onclick = ()=>{
    for(let i = 0; i < players.length; i++){
      if(players[i].id == ID && playersActive.length <= 11){
        let answer = true;


        // if(playersActive.length > 0){
        //   for(let j = 0; j < playersActive.length; j++){
        //     if(playersActive[j].id == players[i].id){
        //       playersActive[j].active = positionSelected;
        //       answer = false;
        //       break;
        //     }else{
        //       answer = true;
        //     }
        //   }
        // }else{
        //   answer = true;
        // }

        for(let j = 0; j < playersActive.length; j++){
          if (getPositionPlay === "ATT") {
            if ((positionSelected === "LW" || positionSelected === "LF") && (playersActive[j].active === "LW" || playersActive[j].active === "LF")) {
                playersActive.splice(j, 1);
            } else if ((positionSelected === "RF" || positionSelected === "RW") && (playersActive[j].active === "RF" || playersActive[j].active === "RW")) {
                playersActive.splice(j, 1);
            } else if (positionSelected === "CF" && playersActive[j].active === "CF") {
                playersActive.splice(j, 1);
            }
        } else if (getPositionPlay === "MED") {
            if ((positionSelected === "CAM" || positionSelected === "RM") && (playersActive[j].active === "CAM" || playersActive[j].active === "RM")) {
                playersActive.splice(j, 1);
            } else if ((positionSelected === "LM" || positionSelected === "CDM") && (playersActive[j].active === "LM" || playersActive[j].active === "CDM")) {
                playersActive.splice(j, 1);
            } else if (positionSelected === "CM" && playersActive[j].active === "CM") {
                playersActive.splice(j, 1);
            }
        } else if (getPositionPlay === "DEF") {
            if ((positionSelected === "RB" || positionSelected === "RWB") && (playersActive[j].active === "RB" || playersActive[j].active === "RWB")) {
                playersActive.splice(j, 1);
            } else if (positionSelected === "LB" && playersActive[j].active === "LB") {
                playersActive.splice(j, 1);
            } else if (positionSelected === "CB" && playersActive[j].active === "CB") {
                playersActive.splice(j, 1);
            } else if (positionSelected === "LWB" && playersActive[j].active === "LWB") {
                playersActive.splice(j, 1);
            }
        } else if (getPositionPlay === "GOL" && positionSelected === "GK" && playersActive[j].active === "GK") {
            playersActive.splice(j, 1);
        }
        }
        
        for(let j = 0; j < playersActive.length; j++){
              if(playersActive[j].id == players[i].id){
                playersActive[j].active = positionSelected;
                answer = false;
                break;
              }
              
            }

        if(answer == true){

            
          
          playersActive.push({
            "id": players[i].id,
            "name": players[i].name,
            "photo": players[i].photo,
            "position": players[i].position,
            "nationality": players[i].nationality,
            "flag": players[i].flag,
            "club": players[i].club,
            "logo": players[i].logo,
            "rating": players[i].rating,
            "pace": players[i].pace,
            "shooting": players[i].shooting,
            "passing": players[i].passing,
            "dribbling": players[i].dribbling,
            "defending": players[i].defending,
            "physical": players[i].physical,
            "positionPlay": getPositionPlay,
            "active": positionSelected

          })

          console.log(playersActive)

          
          let addSuccess = document.getElementById("addSuccess");
          addSuccess.innerHTML = `<div class="w-full max-w-[400px] bg-[#1ebb1e] h-full rounded-[5px] border-4 border-[green] flex items-center pl-5">
      <h6 class="font-semibold text-white">Player added succesfulty</h6>
  </div>`
          addSuccess.style.display = "flex";

          setTimeout(()=>{
            addSuccess.style.display = "none";
          },2000);
        }else if(answer == false){
            let addSuccess = document.getElementById("addSuccess");
            addSuccess.innerHTML = `<div class="w-full max-w-[400px] bg-[#c7c418] h-full rounded-[5px] border-4 border-[orange] flex items-center pl-5">
        <h6 class="font-semibold text-white">Player change position</h6>
    </div>`
            addSuccess.style.display = "flex";

            setTimeout(()=>{
              addSuccess.style.display = "none";
            },2000);
          }else{
            let addSuccess = document.getElementById("addSuccess");
            addSuccess.innerHTML = `<div class="w-full max-w-[400px] bg-[#b22626] h-full rounded-[5px] border-4 border-[red] flex items-center pl-5">
        <h6 class="font-semibold text-white">Error try again</h6>
    </div>`
            addSuccess.style.display = "flex";

            setTimeout(()=>{
              addSuccess.style.display = "none";
            },2000);
          }
          
      }
    }
    addPlayerTeamSection.style.display = "none";

    afficherCardPlayers();
    
  }

}








function afficherCardPlayers(){
  let getTeamPosition = document.getElementsByClassName("card");
  let answer;
  let index;
  for(let j = 0; j < getTeamPosition.length; j++){
    if(getPlanningSelect.value == "4-3-3"){
      for(let i = 0; i < playersActive.length; i++){
        if (
          (j === 0 && playersActive[i].positionPlay === "ATT" && (playersActive[i].active === "LW" || playersActive[i].active === "LF")) ||
          (j === 4 && playersActive[i].positionPlay === "ATT" && (playersActive[i].active === "RF" || playersActive[i].active === "RW")) ||
          (j === 2 && playersActive[i].positionPlay === "ATT" && playersActive[i].active === "CF") ||
          (j === 9 && playersActive[i].positionPlay === "MED" && (playersActive[i].active === "CAM" || playersActive[i].active === "RM")) ||
          (j === 5 && playersActive[i].positionPlay === "MED" && (playersActive[i].active === "LM" || playersActive[i].active === "CDM")) ||
          (j === 7 && playersActive[i].positionPlay === "MED" && playersActive[i].active === "CM") ||
          (j === 10 && playersActive[i].positionPlay === "DEF" && (playersActive[i].active === "RB" || playersActive[i].active === "RWB")) ||
          (j === 11 && playersActive[i].positionPlay === "DEF" && playersActive[i].active === "LB") ||
          (j === 13 && playersActive[i].positionPlay === "DEF" && playersActive[i].active === "CB") ||
          (j === 14 && playersActive[i].positionPlay === "DEF" && playersActive[i].active === "LWB") ||
          (j === 17 && playersActive[i].positionPlay === "GOL" && playersActive[i].active === "GK")
      ) {
          answer = true;
          index = i;
          break;
      }else{
          answer = false;
        }
      }
    }else if(getPlanningSelect.value == "4-4-2"){
      for(let i = 0; i < playersActive.length; i++){
        if (
          (j === 1 && playersActive[i].positionPlay === "ATT" && (playersActive[i].active === "LW" || playersActive[i].active === "LF")) ||
          (j === 3 && playersActive[i].positionPlay === "ATT" && (playersActive[i].active === "RF" || playersActive[i].active === "RW")) ||
          (j === 5 && playersActive[i].positionPlay === "ATT" && playersActive[i].active === "CF") ||
          (j === 6 && playersActive[i].positionPlay === "MED" && (playersActive[i].active === "CAM" || playersActive[i].active === "RM")) ||
          (j === 8 && playersActive[i].positionPlay === "MED" && (playersActive[i].active === "LM" || playersActive[i].active === "CDM")) ||
          (j === 9 && playersActive[i].positionPlay === "MED" && playersActive[i].active === "CM") ||
          (j === 10 && playersActive[i].positionPlay === "DEF" && (playersActive[i].active === "RB" || playersActive[i].active === "RWB")) ||
          (j === 11 && playersActive[i].positionPlay === "DEF" && playersActive[i].active === "LB") ||
          (j === 13 && playersActive[i].positionPlay === "DEF" && playersActive[i].active === "CB") ||
          (j === 14 && playersActive[i].positionPlay === "DEF" && playersActive[i].active === "LWB") ||
          (j === 17 && playersActive[i].positionPlay === "GOL" && playersActive[i].active === "GK")
      ) {
          answer = true;
          index = i;
          break;
      }else{
          answer = false;
        }
      }
    }
      
    if(answer == true){
      getTeamPosition[j].innerHTML = `
        <div class="h-full w-full bg-[url(../img/badge_gold.webp)] bg-[length:100%_115%] bg-no-repeat bg-center">
            <div class="h-[35%] w-full relative flex flex-col justify-end pl-6  max-md:pl-3">
                <h2 class="font-bold text-[1rem] mb-[-2px] max-lg:text-[0.7rem] max-md:text-[0.5rem]">${playersActive[index].rating}</h2>
                <h3 class="text-[0.5rem] font-semibold max-lg:text-[0.5rem] max-md:text-[0.3rem]">RW</h3>
            </div>
            <div class="w-full h-[31%] flex items-end justify-center">
                <img src="${playersActive[index].photo}" alt="${playersActive[index].name}" class="w-[85px] h-[85px] max-lg:w-[50px] max-lg:h-[50px]">
            </div>
            <div class="w-full h-[28%]">
                <h2 class="w-full text-center text-[0.6rem] font-bold max-lg:text-[0.4rem]  max-md:text-[0.3rem]">${playersActive[index].name}</h2>
                <div class="w-full flex justify-center gap-2  max-lg:gap-[3px]">
                    <div>
                        <h5 class="text-[0.35rem] font-medium mb-[-4px] max-lg:text-[0.25rem] max-md:text-[0.2rem] max-md:mb-[-2px]">PAC</h5>
                        <h6 class="text-[0.6rem] font-semibold max-lg:text-[0.45rem] max-md:text-[0.4rem]">${playersActive[index].pace}</h6>
                    </div>
                    <div>
                        <h5 class="text-[0.35rem] font-medium mb-[-4px] max-lg:text-[0.25rem] max-md:text-[0.2rem] max-md:mb-[-2px]">SHO</h5>
                        <h6 class="text-[0.6rem] font-semibold max-lg:text-[0.45rem] max-md:text-[0.4rem]">${playersActive[index].shooting}</h6>
                    </div>
                    <div>
                        <h5 class="text-[0.35rem] font-medium mb-[-4px] max-lg:text-[0.25rem] max-md:text-[0.2rem] max-md:mb-[-2px]">PAS</h5>
                        <h6 class="text-[0.6rem] font-semibold max-lg:text-[0.45rem] max-md:text-[0.4rem]">${playersActive[index].passing}</h6>
                    </div>
                    <div>
                        <h5 class="text-[0.35rem] font-medium mb-[-4px] max-lg:text-[0.25rem] max-md:text-[0.2rem] max-md:mb-[-2px]">DRI</h5>
                        <h6 class="text-[0.6rem] font-semibold max-lg:text-[0.45rem] max-md:text-[0.4rem]">${playersActive[index].dribbling}</h6>
                    </div>
                    <div>
                        <h5 class="text-[0.35rem] font-medium mb-[-4px] max-lg:text-[0.25rem] max-md:text-[0.2rem] max-md:mb-[-2px]">DEF</h5>
                        <h6 class="text-[0.6rem] font-semibold max-lg:text-[0.45rem] max-md:text-[0.4rem]">${playersActive[index].defending}</h6>
                    </div>
                    <div>
                        <h5 class="text-[0.35rem] font-medium mb-[-4px] max-lg:text-[0.25rem] max-md:text-[0.2rem]  max-md:mb-[-2px]">PHY</h5>
                        <h6 class="text-[0.6rem] font-semibold max-lg:text-[0.45rem] max-md:text-[0.4rem]">${playersActive[index].physical}</h6>
                    </div>
                </div>
                <div class="flags flex justify-center items-center gap-2 h-[28%] items-end  max-lg:gap-1  max-md:h-[20%]">
                    <img src="${playersActive[index].flag}" alt="${playersActive[index].nationality}" class="w-[15px] h-[10px]  max-md:w-[8px]  max-md:h-[5px]">
                    <img src="${playersActive[index].logo}" alt="${playersActive[index].club}"  class="w-[10px] h-[10px]  max-md:w-[8px]  max-md:h-[8px]">
                </div>
            </div>
        </div>`
    }else{
      getTeamPosition[j].innerHTML = `<div class="h-full w-full bg-[url(../img/badge_gold.webp)] bg-[length:100%_115%] bg-no-repeat bg-center flex justify-center items-center ">
                <span class="text-6xl">+</span>
            </div>`
    }
  }

}

