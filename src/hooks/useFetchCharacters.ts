import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { RootState, setCharacters, setCount } from "../state/store";

const useFetchCharacters = () => {
    const criteria = useSelector((state: RootState) => state.criteria);
    const setSearchParams = useSearchParams()[1];
    const baseUrl = "https://rickandmortyapi.com/graphql";

    useEffect(() => {
        const query = `{
            characters(page: ${criteria.page}, filter: { name: "${criteria.query}" }) {
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
        setSearchParams(criteria.page > 1 ? { page: criteria.page } : {});
    }, [criteria, setSearchParams]);
};

export default useFetchCharacters;
