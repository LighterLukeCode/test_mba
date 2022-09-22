import React from "react";
import Footer from "../components/footer";
import Program from "../components/program";
import { fetchPrograms } from "../redux/programsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Home = () => {
  // const getData = async () => {
  //   const response = await fetch(`https://api-moscow-mba.herokuapp.com/products`);
  //   // .then(res => res.json())
  //   // .then(data => console.log(data.filter(obj => obj.specializedSubjects.length === 10)));
  //   const data = await response.json();
  //   console.log(data);
  // };
  // getData();
  const { items } = useAppSelector(state => state.programsSlice);
  const dispatch = useAppDispatch();

  const getData = () => {
    dispatch(fetchPrograms());
  };

  React.useEffect(() => {
    getData();
  }, []);

  console.log(items.filter(obj => obj.specializedSubjects.length === 10));

  return (
    <>
      <h1 className="title">Специализированные дисциплины</h1>
      <Program />
      <Program />
      <Footer />
    </>
  );
};

export default Home;
