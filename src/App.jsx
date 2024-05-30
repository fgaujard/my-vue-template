import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import "./scss/main.scss";

export default defineComponent({
  name: "App",
  setup() {
    return () => (
      <>
        <h1>My Vue App</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
          }}
        >
          <img alt="Vite logo" src="./vite.svg" />
          <p>+</p>
          <img alt="Vue logo" src="./vue.svg" />
        </div>

        <RouterView />
      </>
    );
  },
});
