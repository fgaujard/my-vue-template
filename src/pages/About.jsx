import { defineComponent } from "vue";

export default defineComponent({
  name: "About",
  setup() {
    return () => (
      <>
        <h2>About</h2>
        <p>This template is made by Flavien GAUJARD</p>
        <a href="https://github.com/fgaujard" style={{ margin: "1rem" }}>
          Github : fgaujard
        </a>
        <a href="/">Home Page</a>
      </>
    );
  },
});
