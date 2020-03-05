import "./styles/style.css";
import "./styles/style.scss";
import "./styles/style.sass";

import scripts from "./scripts/**/*.js";

scripts.forEach(script => {
  const { init } = script;

  init();
});
