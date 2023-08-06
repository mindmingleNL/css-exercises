import Link from "next/link";
import { ReactNode } from "react";

const ExerciseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="exercise-layout">
      <Link className="back-link" href="/">
        Back to Home
      </Link>
      <div className="exercise-layout__content">{children}</div>
    </div>
  );
};

export default ExerciseLayout;
