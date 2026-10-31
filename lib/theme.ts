/** localStorage key for the visitor's explicit choice; absent means "system". */
export const THEME_STORAGE_KEY = "theme";

/**
 * Inlined in <head> so a saved choice is applied before the page paints and
 * the wrong theme never flashes. A string because it must run before React.
 */
export const THEME_SCRIPT = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;
