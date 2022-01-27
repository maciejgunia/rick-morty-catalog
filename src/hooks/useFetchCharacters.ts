import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import getUrlParams from "../helpers/getUrlParams";
import { RootState, setCharacters, setCount } from "../state/store";

const useFetchCharacters = () => {
    const criteria = useSelector((state: RootState) => state.criteria);
    const setSearchParams = useSearchParams()[1];
    const baseUrl = "https://rickandmortyapi.com/graphql";

    useEffect(() => {
        const currentParams = getUrlParams();
        let params: { page?: string; query?: string } = {};
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
            try {
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
            } catch (e) {
                setCharacters([]);
                setCount(0);
            }
        }

        fetchData();

        if (criteria.query !== currentParams.query || criteria.page !== currentParams.page) {
            if (criteria.query.length > 0) {
                params.query = criteria.query;
            }

            if (criteria.page > 1) {
                params.page = criteria.page;
            }
            setSearchParams(params);
        }
    }, [criteria, setSearchParams]);
};

export default useFetchCharacters;
