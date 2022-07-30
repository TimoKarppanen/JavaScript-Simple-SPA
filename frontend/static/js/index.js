import Dashboard from "./views/Dashboard.js";               // tuodaan Dashboard tiedosto tähän tiedostoon
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";

const navigateTo = url => {
    history.pushState(null,null,url);
    router();              
}

const router =  async () => {                   
    const routes = [        
        { path: "/", view: Dashboard }, 
        { path: "/posts", view: Posts},
        { path: "/settings", view: Settings},
    ];

    // Tarkistetaan että löytyykö samaa router osoitetta, tämä funktio palauttaa joko true tai false arvon.

    const potentialMatches = routes.map(route => {      // map funktio käy läpi jokaisen objektin ja palauttaa tiedon siitä, että onko isMatch true vai false.
        return{
            route: route,
            isMatch: location.pathname === route.path       // palauttaa true, mikäli pathname täsmää route.pathin kanssa
        };
    });

   console.log(potentialMatches);  // Tulostetaan potentialMatchein sisältö, jossa meillä on const routes, seulottuna läpi

   let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch); // Find funktio tarkistaa että täsmääkö potentialMatch, routerin Matchin kanssa

    // Jos find funktio ei löytäny samankaltaisuuksia, niin asetetaan routes alkamaan nollasta, eli alusta, mikä on Dashboard.

    if (!match){
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view1 = new match.route.view();

    document.querySelector("#app").innerHTML = await view1.getHtml();       // Tuodaan sivun sisältö app elementin sisälle

    console.log(match.route.view);  // the view property is going to be an actual function in our case

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {           // DOMContentLoaded tapahtuma suoritetaan kun HTML dokumentti on kokonaan ladattu.
                                                                // Kun tämä tapahtuu niin arrowfunktio suorittaa router(); funktion
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();       
});




