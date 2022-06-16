/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Home.module.css";
import Image from "next/image";
import fondo from "../public/images/bg.png";

const RickMorty = ({ results }) => {
  
  return (
    <div className={styles.main}>
      <Image  width={300} height={130} src={fondo} />
      <div className={styles.containerm}>
        {results.map((rickmorty, index) => (
          <div key={rickmorty.name}>
            <img 
              width={200}
              height={300}
              src={`https://rickandmortyapi.com/api/character/avatar/${
                index + 1
              }.jpeg`}
              alt={rickmorty.name}
            />

            <p><strong>Name: </strong>{rickmorty.name}</p>
            <p><strong>Species: </strong>{rickmorty.species}</p>
            <p><strong>Status: </strong>{rickmorty.status}</p>            

          </div>
          
        ))}
      </div>
    </div>
  );
};

RickMorty.getInitialProps = async () => {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();

    return {
      results: data.results,
    };
  } catch (error) {
    return {
      error: error.message,
    };
  }
};




export default RickMorty;
