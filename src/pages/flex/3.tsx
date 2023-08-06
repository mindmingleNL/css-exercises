import ExerciseLayout from "@/components/ExerciseLayout";
import Image from "next/image";

const Exercise2 = () => {
  return (
    <ExerciseLayout>
      <h2>💪 The Flexible Box Layout: Exercise 3</h2>
      <p>
        In this exercise you will position the buttons for a modal using
        Flexbox.
      </p>
      <h3>Current Code</h3>
      <div className="flex-ex-3-container">
        <div className="wrapper">
          <div className="body">
            <h2>Are you sure?</h2>
            <p>This action cannot be undone.</p>
          </div>
          <footer className="actions">
            <button className="btn secondary">Cancel</button>
            <button className="btn primary">OK</button>
          </footer>
        </div>
      </div>

      <h3>End Result</h3>
      <Image
        src={"/flex-3.png"}
        alt="end result"
        width={416}
        height={188}
        className="image"
        style={{
          maxWidth: "410px"
        }}
        objectFit={"contain"}
      />
    </ExerciseLayout>
  );
};
export default Exercise2;
