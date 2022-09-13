import "./css/index.css";

import modal from "./js/modal";
import store from "./js/store";

document.addEventListener("alpine:init", () => {
    window.Alpine.data("modal", modal);

    window.Alpine.store("modal", store);
});
