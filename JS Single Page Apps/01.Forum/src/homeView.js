import { showView } from "./util.js";

const section = document.getElementById('homeView');

document.getElementById('homeBtn').addEventListener('click',showHomePage);


export function showHomePage() {
    showView(section);
}




