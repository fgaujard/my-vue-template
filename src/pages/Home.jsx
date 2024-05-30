import { defineComponent, ref, watchEffect } from "vue";
import JSConfetti from "js-confetti";

export default defineComponent({
  name: "Home",
  setup() {
    let count = ref(0);

    const confetti = new JSConfetti();

    function handleClickInc() {
      count.value++;
    }

    function handleClickDec() {
      count.value--;
    }

    watchEffect(() => {
      confetti.addConfetti();
      console.log("Count has changed:", count.value);
    });

    return () => (
      <>
        <h2>Home</h2>
        <p>Welcome to the home page.</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            marginBottom: "2rem",
          }}
        >
          <button onClick={handleClickDec}>-</button>
          <p>{count.value}</p>
          <button onClick={handleClickInc}>+</button>
        </div>
        <a href="About">About Page</a>
      </>
    );
  },
});
