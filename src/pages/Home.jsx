import Program from "../components/Program";

const Home = () => {
  const getData = () => {
    fetch(`https://api-moscow-mba.herokuapp.com/products`)
      .then(res => res.json())
      .then(data => console.log(data.filter(obj => obj.specializedSubjects.length === 10)));
  };
  getData();
  return (
    <>
      <Program />
    </>
  );
};

export default Home;
