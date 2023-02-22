// För att kolla om system föredrar dark eller lightmode 

// --------Import statement-------- //

//  import { 
//     systemPrefersDark,
//     darkmodeToLocal,
//     darkmodeFromLocal,
// } from "./module-of-darkness.js"

//------------------------//


//--------Kod för att pröva att allt funkar, --------//

darkmodeToLocal()
console.log(systemPrefersDark(), "Hejsan")
let something = darkmodeFromLocal();
console.log(something)
//-------- verkar funka :)-------------------------------- //


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

export function darkmodeToLocal() {
    //true eller false beroende på om system föredrar dark eller ej
    let darkPreference = systemPrefersDark()

    console.log("Sätter detta value till localStorage: ", darkPreference)

    //sätter key och value till local storage, prefersDarkness och dess value
    localStorage.setItem("prefersDarkness", darkPreference)
}

export function darkmodeFromLocal() {
    //variabel testDark som bör innehålla värdet från local storage
    let testDark = localStorage.getItem("prefersDarkness");

    //Tjabba Tjena Hallå
    console.log("Värde hämtat från localStorage", testDark)
    return testDark
}






