import Footer from "../components/footer";
import Program from "../components/program";

const Home = () => {
  const getData = () => {
    fetch(`https://api-moscow-mba.herokuapp.com/products`)
      .then(res => res.json())
      .then(data => console.log(data.filter(obj => obj.specializedSubjects.length === 10)));
  };
  getData();
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
