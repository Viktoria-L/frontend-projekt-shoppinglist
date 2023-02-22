// För att kolla om system föredrar dark eller lightmode 

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // The user prefers a dark color scheme
    console.log("Dark mode is preferred by the user.");
} else {
    // The user does not prefer a dark color scheme
    console.log("Light mode is preferred by the user.");
}

