export const init = () => {
  const $component2 = document.querySelector("#component2");

  if ($component2) {
    async function getComponent() {
      const element = document.createElement("div");
      const { default: React } = await import(
        /* webpackChunkName: "react" */ "react"
      );

      const { default: ReactDOM } = await import(
        /* webpackChunkName: "react" */ "react-dom"
      );

      ReactDOM.render(
        React.createElement("div", null, `Hello World`),
        $component2
      );

      return element;
    }

    getComponent().then(component => {
      document.body.appendChild(component);
    });
  }
};
