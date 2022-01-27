const getUrlParams = (search: string = document.location.search) => {
    const query = new URLSearchParams(search).get("query") || "";
    const page = +(new URLSearchParams(search).get("page") || "1");

    return {
        query,
        page: isNaN(page) ? 1 : page
    };
};

export default getUrlParams;
