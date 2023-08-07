import ExerciseLayout from "@/components/ExerciseLayout";
import Image from "next/image";

const Exercise2 = () => {
  return (
    <ExerciseLayout>
      <h2>💪 The Flexible Box Layout: Exercise 6</h2>
      <p>
        In this exercise you will use Flexbox to create different social proof
        sections. Put each section in a separate component.
      </p>
      <h3>Current Code</h3>
      <div>
        <h4 className="grid-exercise-section">Section 1</h4>
        <div className="section-1">
          <h2>Trusted by the World's Best Companies</h2>
          <div className="wireframe-image" />
          <div className="wireframe-image" />
          <div className="wireframe-image" />
          <div className="wireframe-image" />
          <div className="wireframe-image" />
          <div className="wireframe-image" />
        </div>

        <h4 className="grid-exercise-section">Section 2</h4>
        <div className="section-2">
          <h2>The Publication</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="wireframe-block" />
          <div className="wireframe-block" />
          <div className="wireframe-block" />
          <div className="wireframe-block" />
          <div className="wireframe-block" />
        </div>

        <h4 className="grid-exercise-section">Section 3</h4>
        <div className="section-3">
          <p>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.”
          </p>
          <div className="wireframe-image" />
          <span>Maria Lopez, VP of Design at Meshery</span>
        </div>
      </div>

      <h3>End Result</h3>
      <Image
        src={"/social-proof.png"}
        alt="end result"
        width={1440}
        height={1095}
        className="image"
        objectFit={"contain"}
      />
    </ExerciseLayout>
  );
};
export default Exercise2;
