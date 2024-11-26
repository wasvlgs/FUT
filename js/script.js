let players = [
    {
        "id": 1,
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
        "id": 2,
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
        "id": 3,
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
        "id": 4,
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
        "id": 5,
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
        "id": 6,
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
        "id": 7,
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
        "id": 8,
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
        "id": 9,
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
      }
]



// ************************* Call Functions ****************************
// *********************************************************************
// **********************************************************************

document.addEventListener("DOMContentLoaded",()=>{


    afficheListPlayers();
    teamPlanning();
    popUpAjoutSection();
    ajoutePlayer();

})




// ================== afficher Players on list players ==================


function afficheListPlayers(){
    let listElement = document.getElementById("listElement");

    listElement.innerHTML = '';

    for(let i = 0; i < players.length; i++){
        listElement.innerHTML += `
        <div class="player w-full min-h-[60px] bg-[#2a2a30] flex items-center justify-between rounded-[5px]">
    
                <div class="flex items-center w-[75%] pl-5 cursor-pointer">
                        <div class="profileImage w-[40px] h-[40px] rounded-[50%] bg-[#bfbfbf] overflow-hidden">
                            <img src="${players[i].photo}" alt="${players[i].name}" class="w-[40px] h-[40px]">
                        </div>
                        <div class="playerInformation flex flex-col justify-evenly pl-4 overflow-y-auto">
                            <h3 class="text-white">${players[i].name}</h3>
                            <h6 class="text-[#b0b0b0]">${players[i].nationality}</h6>
                        </div>
                </div>

                <div class="w-[20%] h-full flex justify-center items-center">
                    <i class="fa-solid fa-trash text-xl text-red-600 cursor-pointer"></i>
                </div>
            </div>

        `
    }
}


// ========================= team planning ===========================


function teamPlanning(){
    let getPlanningSelect = document.getElementById("getPlanningSelect");
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
  let openAjoutSection = document.getElementById("openAjoutSection");
  let closeAjoutSection = document.getElementById("closeAjoutSection");

  openAjoutSection.onclick = ()=>{
    ajouteSection.style.display = "flex";
  }
  closeAjoutSection.onclick = ()=>{
    ajouteSection.style.display = "none";
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
    if(getNameElement.value.trim() == ""){
      getNameElement.style.border = "2px solid red";
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
    }else if(getImageElement.value.trim() == ""){
      getImageElement.style.border = "2px solid red";
      getNameElement.style.border = "2px solid black";
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
    }else if(getPositionElement.value.trim() == ""){
      getPositionElement.style.border = "2px solid red";
      getNameElement.style.border = "2px solid black";
      getImageElement.style.border = "2px solid black";
      getNationalityElement.style.border = "2px solid black";
      getClubElement.style.border = "2px solid black";
      getRatElement.style.border = "2px solid black";
      getPacElement.style.border = "2px solid black";
      getShoElement.style.border = "2px solid black";
      getPasElement.style.border = "2px solid black";
      getDriElement.style.border = "2px solid black";
      getDefElement.style.border = "2px solid black";
      getPhyElement.style.border = "2px solid black";
    }else if(getPositionElement.value != "LW" && getPositionElement.value != "LF" && getPositionElement.value != "CF" && getPositionElement.value != "RF" && getPositionElement.value != "RW" && getPositionElement.value != "CAM" && getPositionElement.value != "CM" && getPositionElement.value != "RM" && getPositionElement.value != "LM" && getPositionElement.value != "CDM" && getPositionElement.value != "CB" && getPositionElement.value != "LB" && getPositionElement.value != "RB" && getPositionElement.value != "LWB" && getPositionElement.value != "RWB" && getPositionElement.value != "GK"){
      getPositionElement.style.border = "2px solid red";
      getNameElement.style.border = "2px solid black";
      getImageElement.style.border = "2px solid black";
      getNationalityElement.style.border = "2px solid black";
      getClubElement.style.border = "2px solid black";
      getRatElement.style.border = "2px solid black";
      getPacElement.style.border = "2px solid black";
      getShoElement.style.border = "2px solid black";
      getPasElement.style.border = "2px solid black";
      getDriElement.style.border = "2px solid black";
      getDefElement.style.border = "2px solid black";
      getPhyElement.style.border = "2px solid black";
    }else if(getNationalityElement.value.trim() == ""){
      getNationalityElement.style.border = "2px solid red";
      getNameElement.style.border = "2px solid black";
      getImageElement.style.border = "2px solid black";
      getPositionElement.style.border = "2px solid black";
      getClubElement.style.border = "2px solid black";
      getRatElement.style.border = "2px solid black";
      getPacElement.style.border = "2px solid black";
      getShoElement.style.border = "2px solid black";
      getPasElement.style.border = "2px solid black";
      getDriElement.style.border = "2px solid black";
      getDefElement.style.border = "2px solid black";
      getPhyElement.style.border = "2px solid black";
    }else if(getNationalityElement.value != "AG" && getNationalityElement.value != "PG" && getNationalityElement.value != "FR" && getNationalityElement.value != "BZ" && getNationalityElement.value != "EG"){
      getNationalityElement.style.border = "2px solid red";
      getNameElement.style.border = "2px solid black";
      getImageElement.style.border = "2px solid black";
      getPositionElement.style.border = "2px solid black";
      getClubElement.style.border = "2px solid black";
      getRatElement.style.border = "2px solid black";
      getPacElement.style.border = "2px solid black";
      getShoElement.style.border = "2px solid black";
      getPasElement.style.border = "2px solid black";
      getDriElement.style.border = "2px solid black";
      getDefElement.style.border = "2px solid black";
      getPhyElement.style.border = "2px solid black";
    }else if(getClubElement.value.trim() == ""){
      getClubElement.style.border = "2px solid red";
      getNameElement.style.border = "2px solid black";
      getImageElement.style.border = "2px solid black";
      getPositionElement.style.border = "2px solid black";
      getNationalityElement.style.border = "2px solid black";
      getRatElement.style.border = "2px solid black";
      getPacElement.style.border = "2px solid black";
      getShoElement.style.border = "2px solid black";
      getPasElement.style.border = "2px solid black";
      getDriElement.style.border = "2px solid black";
      getDefElement.style.border = "2px solid black";
      getPhyElement.style.border = "2px solid black";
    }else if(getClubElement.value != "IM" && getClubElement.value != "AN" && getClubElement.value != "MC" && getClubElement.value != "RM" && getClubElement.value != "LP"){
      getClubElement.style.border = "2px solid red";
      getNameElement.style.border = "2px solid black";
      getImageElement.style.border = "2px solid black";
      getPositionElement.style.border = "2px solid black";
      getNationalityElement.style.border = "2px solid black";
      getRatElement.style.border = "2px solid black";
      getPacElement.style.border = "2px solid black";
      getShoElement.style.border = "2px solid black";
      getPasElement.style.border = "2px solid black";
      getDriElement.style.border = "2px solid black";
      getDefElement.style.border = "2px solid black";
      getPhyElement.style.border = "2px solid black";
    }else if(getRatElement.value.trim() == "" || getRatElement.value < 0 || getRatElement.value > 100){
      getRatElement.style.border = "2px solid red";
      getNameElement.style.border = "2px solid black";
      getImageElement.style.border = "2px solid black";
      getPositionElement.style.border = "2px solid black";
      getNationalityElement.style.border = "2px solid black";
      getClubElement.style.border = "2px solid black";
      getPacElement.style.border = "2px solid black";
      getShoElement.style.border = "2px solid black";
      getPasElement.style.border = "2px solid black";
      getDriElement.style.border = "2px solid black";
      getDefElement.style.border = "2px solid black";
      getPhyElement.style.border = "2px solid black";
    }else if(getPacElement.value.trim() == "" || getPacElement.value < 0 || getPacElement.value > 100){
      getPacElement.style.border = "2px solid red";
      getNameElement.style.border = "2px solid black";
      getImageElement.style.border = "2px solid black";
      getPositionElement.style.border = "2px solid black";
      getNationalityElement.style.border = "2px solid black";
      getClubElement.style.border = "2px solid black";
      getRatElement.style.border = "2px solid black";
      getShoElement.style.border = "2px solid black";
      getPasElement.style.border = "2px solid black";
      getDriElement.style.border = "2px solid black";
      getDefElement.style.border = "2px solid black";
      getPhyElement.style.border = "2px solid black";
    }else if(getShoElement.value.trim() == "" || getShoElement.value < 0 || getShoElement.value > 100){
      getShoElement.style.border = "2px solid red";
      getNameElement.style.border = "2px solid black";
      getImageElement.style.border = "2px solid black";
      getPositionElement.style.border = "2px solid black";
      getNationalityElement.style.border = "2px solid black";
      getClubElement.style.border = "2px solid black";
      getRatElement.style.border = "2px solid black";
      getPacElement.style.border = "2px solid black";
      getPasElement.style.border = "2px solid black";
      getDriElement.style.border = "2px solid black";
      getDefElement.style.border = "2px solid black";
      getPhyElement.style.border = "2px solid black";
    }else if(getPasElement.value.trim() == "" || getPasElement.value < 0 || getPasElement.value > 100){
      getPasElement.style.border = "2px solid red";
      getNameElement.style.border = "2px solid black";
      getImageElement.style.border = "2px solid black";
      getPositionElement.style.border = "2px solid black";
      getNationalityElement.style.border = "2px solid black";
      getClubElement.style.border = "2px solid black";
      getRatElement.style.border = "2px solid black";
      getPacElement.style.border = "2px solid black";
      getShoElement.style.border = "2px solid black";
      getDriElement.style.border = "2px solid black";
      getDefElement.style.border = "2px solid black";
      getPhyElement.style.border = "2px solid black";
    }else if(getDriElement.value.trim() == "" || getDriElement.value < 0 || getDriElement.value > 100){
      getDriElement.style.border = "2px solid red";
      getNameElement.style.border = "2px solid black";
      getImageElement.style.border = "2px solid black";
      getPositionElement.style.border = "2px solid black";
      getNationalityElement.style.border = "2px solid black";
      getClubElement.style.border = "2px solid black";
      getRatElement.style.border = "2px solid black";
      getPacElement.style.border = "2px solid black";
      getShoElement.style.border = "2px solid black";
      getPasElement.style.border = "2px solid black";
      getDefElement.style.border = "2px solid black";
      getPhyElement.style.border = "2px solid black";
    }else if(getDefElement.value.trim() == "" || getDefElement.value < 0 || getDefElement.value > 100){
      getDefElement.style.border = "2px solid red";
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
      getPhyElement.style.border = "2px solid black";
    }else if(getPhyElement.value.trim() == "" || getPhyElement.value < 0 || getPhyElement.value > 100){
      getPhyElement.style.border = "2px solid red";
    }else{
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



      let getID;
      if(players.length >= 1){
        getID = players[players.length - 1] +1;
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
      }else if(getClubElement.value == "RM"){
        getLogo = "https://cdn.sofifa.net/meta/team/3468/120.png";
      }else if(getClubElement.value == "LP"){
        getLogo = "ttps://cdn.sofifa.net/meta/team/8/120.png";
      }else{
        alert("Error Try Again");
        return;
      }

      let getNationality;
      if(getNationality.value == "AG"){
        getNationality = "https://cdn.sofifa.net/meta/team/239235/120.png";
      }else if(getNationality.value == "PG"){
        getNationality = "https://cdn.sofifa.net/meta/team/2506/120.png";
      }else if(getNationality.value == "FR"){
        getNationality = "https://cdn.sofifa.net/players/239/085/25_120.png";
      }else if(getNationality.value == "BZ"){
        getNationality = "https://cdn.sofifa.net/meta/team/3468/120.png";
      }else if(getNationality.value == "EG"){
        getNationality = "ttps://cdn.sofifa.net/meta/team/8/120.png";
      }else{
        alert("Error Try Again");
        return;
      }

      players.push({
        "id": getID,
        "name": getNameElement.value,
        "photo": getImageElement.value,
        "position": getPositionElement.value,
        "nationality": getNationalityElement.value,
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

    }
  })
}


