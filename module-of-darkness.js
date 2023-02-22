

// --------Import statement-------- //

//  import { 
//     systemPrefersDark,
//     darkmodeToLocal,
//     darkmodeFromLocal,
// } from "./module-of-darkness.js"

//------------------------//


//--------Kod för att pröva att allt funkar, --------//

// darkmodeToLocal()
// console.log(systemPrefersDark(), "Hejsan")
// let something = darkmodeFromLocal();
// console.log(something)
//-------- verkar funka :)-------------------------------- //

// För att kolla om system föredrar dark eller lightmode 
export function systemPrefersDark() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Användaren föredrar Dark mode
        console.log("Dark mode is preferred by the user.");
        return true;
    } else {
        // Användaren föredrar Light mode
        console.log("Light mode is preferred by the user.");
        return false;
    }

}

//---Kod gällande Local storage, svårt att pröva här, gör det till små funktioner då det kanske blir lättare att se till en början--//

//--------Testkod---------
// let darkPreference = systemPrefersDark()
// darkmodeToLocal(darkPreference)
//-------------------------//

//--Funktion som sätter darkmodevalue till local, tar true eller false som argument//
export function darkmodeToLocal(darkValue) {
    //true eller false beroende på om system föredrar dark eller ej
    console.log("Sätter detta value till localStorage: ", darkValue)

    //sätter key och value till local storage, prefersDarkness och dess value
    localStorage.setItem("prefersDarkness", darkValue)
}

export function darkmodeFromLocal() {
    //variabel testDark som bör innehålla värdet från local storage
    let testDark = localStorage.getItem("prefersDarkness");

    //Tjabba Tjena Hallå
    console.log("Värde hämtat från localStorage", testDark)
    return testDark
}






//--Verkar inte kunna uppdatera hmhm----//