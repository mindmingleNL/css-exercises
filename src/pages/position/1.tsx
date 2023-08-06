import ExerciseLayout from "@/components/ExerciseLayout";
import Image from "next/image";

const Exercise1 = () => {
  return (
    <ExerciseLayout>
      <h2>🕺🏻 Positioned Layout: Exercise 1</h2>
      <p>
        In this exercise, you will use CSS positioning to position the "Target"
        element in the top right of the container. This f
      </p>
      <h3>Current Code</h3>
      <div className="ex-1-container">
        <p>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
          onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </p>
        <div className="ex-1-target">Target</div>
        <p>
          Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
          courgette tatsoi pea sprouts fava bean collard greens dandelion okra
          wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        </p>
      </div>

      <h3>End Result</h3>
      <Image src={"/pos-ex-1.png"} width={500} height={194} alt="end result" />
    </ExerciseLayout>
  );
};
export default Exercise1;
