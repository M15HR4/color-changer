const body = document.querySelector("body");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "orangered":
                body.style.backgroundColor = "orangered";
                break;
            case "greenyellow":
                body.style.backgroundColor = "greenyellow";
                break;
            case "turquoise":
                body.style.backgroundColor = "turquoise";
                break;
            case "yellow":
                body.style.backgroundColor = "yellow";
                break;
            default:
        
                break;
        }
    });
});
