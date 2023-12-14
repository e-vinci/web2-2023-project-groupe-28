/* eslint-disable prefer-destructuring */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */

import { clearPage } from '../../utils/render';
import { getAuthenticatedUser } from '../../utils/auths';

const listShip = [[1,'S'],[1,'é'],[1,'b'],[1,'a'],[2,'s'],[2,'t'],[2,'i'],[3,'e'],[3,'n'],[4,'o']];

class InitGame{    
    constructor(lvl){
        clearPage();
        this.compteurNavireJoueurTouche = 0;
        this.compteurNavireBotTouche = 0;
        this.grilleJ = [];
        this.grilleB = [];

        if(lvl === 'Easy'){
            this.difficult = 0;
        };
        if(lvl === 'Normal'){
            this.difficult = 1;
        };
        if(lvl === 'Hard'){
            this.difficult = 2;
            this.nombreCoupRate = 0;
        }
        this.lastHit = [false,-1]; 
        this.nombreCoup = 0;
        this.dimension = 10;
    }

    buildTable(dim){
        const tableau = [];
        for (let indexBis = 0; indexBis< dim; indexBis+=1) {
            tableau.push([]);
        }
        for (let index = 0; index < dim; index+=1) {  
            for (let indexBis = 0; indexBis< dim; indexBis+=1) {
                tableau[index].push([false,false]);
            }
        }
        return tableau;
    }
    
    tourJoueur(div){
        // Vérifie si la partie n'est pas fini en regardant si le nombre de navire touché est inférieur au nombre total de navire
        if(this.compteurNavireBotTouche !== 20 && this.compteurNavireJoueurTouche !== 20){
            // regarde si la case a déjà été joué
            if(!this.grilleJ[Math.floor((div.id-1)/this.dimension)][(div.id-1)%this.dimension][0]){                
                // mets à jour le status de la case à "a été joué"       
                this.grilleJ[Math.floor((div.id-1)/this.dimension)][(div.id-1)%this.dimension][0] = true;
                // regarde s'il y a un navire sur la case et agis en conséquence
                if(!this.grilleJ[Math.floor((div.id-1)/this.dimension)][(div.id-1)%this.dimension][1]){
                    div.style = "background-color: #00FF00";
                }
                else{
                    div.style = "background-color: #fb0404";
                    div.innerHTML = `<div class="cross"></div>`;  
                    this.compteurNavireBotTouche += 1;
                    const tabPlayer = document.querySelector('#j');
                    console.log(tabPlayer);
                    const recapNav = tabPlayer.querySelectorAll(`#${this.grilleJ[Math.floor((div.id-1)/this.dimension)][(div.id-1)%this.dimension][2]}`);
                    console.log(recapNav);
                    
                    for (let i = 0; i < recapNav.length; i+=1) {
                        if(recapNav[i].style.backgroundColor.toString() === "rgb(220, 220, 220)"){
                            recapNav[i].style = "background-color: #fb0404";
                            i = recapNav.length
                        }                     
                    }

                    // si le compteur interrompt le jeu
                    if(this.compteurNavireBotTouche === 20){
                        alert("Félicitation, tu as gagné");
                        sendVictory();
                    }                    
                    // empêche le bot de joueur et permet au joueur de rejouer
                    return false;          
                }                
                // donne le droit au bot de jouer
                return true;
            }
        }
        // empêche le bot de jouer si la partie est finie
        return false;
    }

    tourBot(divsBis){
        // variable gestion de la difficulté
        let memeLigne = 0;
        let ligneHautOuBas = 0;

        // variable indiquant qu'un coup est joué
        let coup = false;

        // si difficulté normal ou plus permet de compter les cases au tour du lasthit
        let nombreCaseJoue = 0;

        // permet de trouver une trouver une case non touché
        do{
            // choix de la case à jouer
            let coupJoue =Math.floor(Math.random() * (this.dimension * this.dimension));
            
            if(this.difficult > 1 && this.nombreCoupRate === 10){
                let verif = true;
                let parcours = 0;
                while(verif){
                    if(!this.grilleB[Math.floor(parcours/this.dimension)][(parcours%this.dimension)][0] && this.grilleB[Math.floor(parcours/this.dimension)][(parcours%this.dimension)][1]){
                        verif = false;
                        coupJoue = parcours;
                    }
                    else parcours +=1;
                }
    
            }

            if(this.difficult > 0 && this.lastHit[0] === true){
                // fixe le coup joue à la dernière case touchée
                coupJoue = this.lastHit[1];
                if(nombreCaseJoue === 0) {memeLigne = 1; ligneHautOuBas = 0;};
                if(nombreCaseJoue === 1) {memeLigne = -1; ligneHautOuBas = 0;};
                if(nombreCaseJoue === 2) {memeLigne = 0; ligneHautOuBas = 1;};
                if(nombreCaseJoue === 3) {memeLigne = 0; ligneHautOuBas = -1};
            }

            // ligne du coup joué
            const lig = Math.floor(coupJoue/this.dimension) + ligneHautOuBas;
            // colonne du coup joué
            const col = (coupJoue%this.dimension) + memeLigne;

            
            // si la case n'est pas jouée
            if((lig > -1 && lig < this.dimension && col > -1 && col < this.dimension) && !this.grilleB[lig][col][0]){
                coup = true;
                // dis que la case est jouée
                this.grilleB[lig][col][0] = true;
                // si la case contient un navire
                if(this.grilleB[lig][col][1]){
                    if(lig-1 >= 0 && col-1 >= 0){
                        this.grilleB[lig-1][col-1][0] = true;
                    }
                    if(lig-1 >= 0 && col+1 < this.dimension){
                        this.grilleB[lig-1][col+1][0] = true;
                    }
                    if(lig+1 < this.dimension && col-1 >= 0){
                        this.grilleB[lig+1][col-1][0] = true;
                    }
                    if(lig+1 < this.dimension && col+1 < this.dimension){
                        this.grilleB[lig+1][col+1][0] = true;
                    }

                    coup = false;

                    if(this.difficult > 1){
                        this.nombreCoupRate = 0;
                    }
                    // dis que le dernier coup a touché
                    this.lastHit[0] = true;
                    // enregistre le dernier coup
                    this.lastHit[1] = coupJoue + (ligneHautOuBas * 10) + (memeLigne);
                    // modifie le tableau pour afficher le coup
                    divsBis[(lig*10)+(col)].innerHTML += `<div class="cross"></div>`;
                    // augmente le nombre de navire touché
                    this.compteurNavireJoueurTouche+=1;

                    const tabPlayer = document.querySelector('#b');
                    console.log(tabPlayer);
                    const recapNav = tabPlayer.querySelectorAll(`#${this.grilleB[lig][col][2]}`);
                    console.log(recapNav);
                    
                    for (let i = 0; i < recapNav.length; i+=1) {
                        if(recapNav[i].style.backgroundColor.toString() === "rgb(220, 220, 220)"){
                            recapNav[i].style = "background-color: #fb0404";
                            i = recapNav.length
                        }                     
                    }
                    if(this.compteurNavireJoueurTouche === 20){
                        alert("Dommage, tu as perdu");
                        sendDefeat();
                    }
                }
                else {
                    // difficulté hard incrémente le nombre de coup raté
                    if(this.difficult > 1){
                        this.nombreCoupRate+=1;
                    }
                    // modifie la case si coup raté 
                    divsBis[(lig*10)+(col)].style = "background-color: #00FF00";
                }          
            }
            else if(this.difficult > 0){
                nombreCaseJoue+=1;                       
            }
            if(nombreCaseJoue >= 4){
                this.lastHit[0] = false;
            }
        }while(!coup);
    }
    
    randomPlacementShip(grilles){
        for (let i = 0; i < listShip.length; i+=1) {
            const direction = Math.floor(Math.random() * 2);
            // horizontale
            if(direction === 0){
                const lig = Math.floor(Math.random() * this.dimension);
                const col = Math.floor(Math.random() * (this.dimension - listShip[i][0]));
                let libre = true
                for (let j = -1; j <= listShip[i][0]; j+=1) {
                    if(col+j > -1 && col+1 < 10 && (grilles[lig][col+j][1] || lig-1 > -1 && grilles[lig-1][col+j][1] || lig+1 < this.dimension && grilles[lig+1][col+j][1])){
                        libre = false;
                    }                    
                }
                if(libre){
                    for (let j = 0; j < listShip[i][0]; j+=1) {
                        grilles[lig][col+j][1] = true;
                        grilles[lig][col+j].push(listShip[i][1]); 
                    }
                }
                else{
                    i-=1;
                }
                
            }
            // verticale
            else{
                const lig = Math.floor(Math.random() * (this.dimension - listShip[i][0]));
                const col = Math.floor(Math.random() * this.dimension);
                let libre = true
                for (let j = -1; j <= listShip[i][0]; j+=1) {
                    if(lig+j > -1 && lig+j < 10 && (grilles[lig+j][col][1] || col-1 > -1 && grilles[lig+j][col-1][1] || col+1 < this.dimension && grilles[lig+j][col+1][1])){
                        libre = false;
                    }                    
                }
                if(libre){
                    for (let j = 0; j < listShip[i][0]; j+=1) {
                        grilles[lig+j][col][1] = true;
                        grilles[lig+j][col].push(listShip[i][1]);  
                    }
                }
                else{
                    i-=1;
                }
            }       
        }
    }    

    getAllTableLinesAsString(grilles, grillesBis) {
        // placement des navires dans les attributs grilleJ et grilleB
        this.randomPlacementShip(grilles);
        this.randomPlacementShip(grillesBis);

        // variables utilisées pour générer les grilles en html
        let grilleNavireJ = ``;
        let ligneNavireJ = ``;
        let grilleBot = ``;
        let ligneNavireBot = ``;

        // initialisation du tableau avec les navires du joueur
        for(let i = 0; i < (this.dimension * this.dimension); i+=1){
            if((i > 0 && i%this.dimension === 0)){
                grilleNavireJ += `<tr> ${ligneNavireJ}</tr>`;
                ligneNavireJ = ``;          
            }
            if(!grillesBis[Math.floor(i/this.dimension)][i%this.dimension][1]) ligneNavireJ += `<td id =${i} class="color-div2" style="background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 2px solid #FF69B4; box-shadow: 0 0 10px #FF69B4;"></td>`;
            else ligneNavireJ += `<td id =${i} class="color-div2" style="background-color: #0000FF"></td>`;
            if(i === 99){
                grilleNavireJ += `<tr> ${ligneNavireJ}</tr>`;
                ligneNavireJ = ``;
            }
        }
        
        // création du tableau avec les navires du bot
        for(let i = 0; i < (this.dimension * this.dimension); i+=1){
            if((i > 0 && i%this.dimension === 0)){
                grilleBot += `<tr> ${ligneNavireBot}</tr>`;
                ligneNavireBot = ``;
            }
            if(!grilles[Math.floor(i/this.dimension)][i%this.dimension][0]) ligneNavireBot += `<td id =${i+1} class="color-div" style="background-color: rgba(255, 255, 255, 0.1); backdrop-filter: blur(10px); border: 2px solid #11FAEC; box-shadow: 0 0 10px #11FAEC;"></div></td>`;
            if(i === (this.dimension * this.dimension)-1){
                grilleBot += `<tr> ${ligneNavireBot}</tr>`;
                ligneNavireBot = ``;
            }
        }
        // recap navire
        let recapNavire = ``;
        let ligneTailleNav = ``;

        // création récap navire
        for(let i = 0; i < listShip.length; i+=1){
            if(i > 1 && listShip[i-1][0] !== listShip[i][0]){
                ligneTailleNav = `<tr>${ligneTailleNav}</tr>`
                recapNavire += ligneTailleNav;
                ligneTailleNav = ``;
            }
            for (let j = 0; j < listShip[i][0]; j+=1) {
                ligneTailleNav += `<td id=${listShip[i][1]} class="color-recap" style="background-color: #DCDCDC"></td>`;
            }
            ligneTailleNav += `<td class="color-recap"></td>`
        }
        
        ligneTailleNav = `<tr>${ligneTailleNav}</tr>`
        recapNavire += ligneTailleNav;
        
        grilleNavireJ = `<table>${grilleNavireJ}</table>`;
        grilleBot = `<table id="tab" style="float : right">${grilleBot}</table>`; 

        const jeu = `<div class="center"> <div class="center"> ${grilleNavireJ} ${grilleBot} </div></div>`;
        const jeuBis = `<div class="center">  
                            
                        </div> 
                        ${jeu} 
                        <div class="center">  
                            <div> <table id="b">${recapNavire}</table> </div>  
                            <div> <table id="j">${recapNavire}</table> </div> 
                        </div>  `

        return jeuBis;
    }

    getMenuTableAsString(grilles, grillesBis) {
        const menuTableLines = this.getAllTableLinesAsString(grilles, grillesBis);
        return menuTableLines;
    }

    renderMenuFromString() {
        this.grilleB = this.buildTable(this.dimension);
        this.grilleJ = this.buildTable(this.dimension);

        const menuTableAsString = this.getMenuTableAsString(this.grilleJ, this.grilleB);  
        const body = document.querySelector('main');
  
        body.innerHTML += menuTableAsString;
    }
}
/* eslint-disable */

async function sendDefeat(){
    const user = getAuthenticatedUser();
    const response = await fetch('/api/leaderboard/defeat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: user,
        }),
    });

    if (!response.ok) {
        throw new Error(`Erreur lors de l'envoi du résultat : ${response.status} - ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log(responseData.message);
}

async function sendVictory(){
    const user = getAuthenticatedUser();
    const response = await fetch('/api/leaderboard/victory', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            user: user,
        }),
    });

    if (!response.ok) {
        throw new Error(`Erreur lors de l'envoi du résultat : ${response.status} - ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log(responseData.message);
}
/* eslint enable */

export default InitGame;