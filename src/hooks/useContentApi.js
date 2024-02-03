
import { useState, useEffect } from 'react';

const CONTENT_API_URL = "https://hackapi.hellozelf.com/frontend/api/v1/contents"

const useContentApi = (page = 1) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(CONTENT_API_URL + `?page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, [page]);

    return { data, loading };
}


export default useContentApi;