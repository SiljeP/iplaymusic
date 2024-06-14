import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export function useLoginStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios(`http://localhost:3000/api/cookies?name=isLoggedIn`)
            .then(function (response) {
                setIsLoggedIn(response.data.value === "true")
            })
    }, []);

    return isLoggedIn;
}