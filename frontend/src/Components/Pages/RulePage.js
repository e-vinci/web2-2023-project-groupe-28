import { clearPage } from '../../utils/render';

const Rulepage = () => {
    clearPage();
    const main = document.querySelector('main');
    main.innerHTML = `
    <div id="page-container-rule" class="card w-72 mx-auto my-8 bg-base-100 text-primary-content p-4" >
        <div id="padding">
            <div id="card-body-rule" class="card-body">
                <h1 id="title-rule" class="card-title text-2xl">Rules</h1>
                <h3 id="second-title-rule" class="text-xl">Game Setup :</h3>
                <p class="mb-4">Each player places their fleet of ships on their own grid. The standard fleet consists of ships
                of varying lengths, such as aircraft carriers, battleships, cruisers, destroyers, and submarines.
                Players do not reveal their ship placements to their opponent.</p>
            
                <h3 id="second-title-rule" class="text-xl">Taking Turns :</h3>
                <p class="mb-4">Players take turns calling out coordinates to target their opponent's ships.
                    The opponent responds with "Hit" if the coordinate is part of a ship, "Miss" if it is not, or "Sunk" 
                    if the hit has completely destroyed a ship.</p>
            
                <h3 id="second-title-rule" class="text-xl">Winning the Game :</h3> 
                <p class="mb-4">The first player to successfully sink all of their opponent's ships wins the game.
                    Players can continue taking turns until one player's fleet is completely destroyed.</p>
            
                <h3 id="second-title-rule" class="text-xl">Special Rules :</h3>
                <p>Some versions of the game include special rules, such as having different ship arrangements.</p>    
            </div>
        </div>
    </div>
    `;
}

export default Rulepage;