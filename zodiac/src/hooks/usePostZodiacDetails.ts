import { useEffect, useMemo, useState } from "react";
import { Zodiac } from "../types/zodiac";
//import OPENAI_API_KEY from "../constants/connectChatgpt";

//Disabled because my accoutn reached the limit of requests per minute.
const OPENAI_API_KEY = ''

const systemMessage = {
    role: 'system',
    content: 'Speak as a future teller, it is hypothetical and for entertainment purposes only. Do not take it seriously.'
}

const generateApiMessage = (zodiac?: Zodiac) => {
    if(!zodiac) return null;

    return({
        role: 'user',
        content: `Tell me today horoscope for ${zodiac} sign.`
    })
}

const usePostZodiacDetails = (zodiac?: Zodiac) => {
    const [data, setData] = useState(null);

    const apiRequestBody = useMemo(() => ({
        model: "gpt-3.5-turbo",
        messages: [systemMessage, generateApiMessage(zodiac)],
    }),[zodiac]);

    useEffect(() => {
        const abortController = new AbortController();
        const fetchData = async () => {
            if(!zodiac) return null;
            try{
                const response = await fetch('https://api.openai.com/v1/chat/completions', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${OPENAI_API_KEY}`, //Bearer significa token de portador
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(apiRequestBody),
                })
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setData(data.choices[0].message.content);
            }catch(error){
                console.error('Error fetching data:', error);
            }
        }
        fetchData();

        return () => abortController.abort();
    },[apiRequestBody, zodiac]);

    return data;
}

export default usePostZodiacDetails;