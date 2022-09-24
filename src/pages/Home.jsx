import React from "react";
import Footer from "../components/footer";
import Program from "../components/program";
import { fetchPrograms } from "../redux/programsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Home = () => {
  const { items } = useAppSelector(state => state.programsSlice);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchPrograms());
  }, []);

  return (
    <>
      <h1 className="title">Специализированные дисциплины</h1>
      {items.length > 0 &&
        items
          .filter(obj => obj.specializedSubjects.length === 10)
          .slice(0, 5)
          .map(program => <Program key={program.id} program={program} />)}

      <Footer />
    </>
  );
};

export default Home;
