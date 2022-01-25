import { useEffect } from "react";
import { useSelector } from "react-redux";
import CharacterList from "./components/CharacterList";
import Pagination from "./components/Pagination";
import { RootState, setCharacters, setCount } from "./state/store";

function App() {
    const page = useSelector((state: RootState) => state.page);
    const baseUrl = "https://rickandmortyapi.com/graphql";
    const query = `{
        characters(page: ${page}) {
          info {
            count
          }
          results {
            id
            name
            image
          }
        }
    }`;

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(baseUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({ query })
            });

            const data = await response.json();
            setCharacters(data?.data.characters.results);
            setCount(data?.data.characters.info.count);
        }

        fetchData();
    }, [query]);

    return (
        <div className="App">
            <Pagination />
            <CharacterList />
        </div>
    );
}

export default App;
