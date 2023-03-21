import axios, { AxiosError } from 'axios';

async function getUserFromGithub(user: string) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        if(response.status !== 200){
            throw new Error('user not found')
        }
        console.log(response.data);
    } catch (error) {
        if(error instanceof AxiosError){
            console.error({
                statusCode: error.response?.status, 
                message: error.response?.data.message,
            });
        }
    }
}

getUserFromGithub('djunior97');
getUserFromGithub('djunioriqdivqv97');

async function getRepositories(repo: string) {
    try {
        const response = await axios.get(`https://api.github.com/repos/${repo}`)
        if(response.status !== 200){
            return        
        }
        console.log((response).data);
        
    } catch (error) {
        if(error instanceof AxiosError){
            console.error({
                statusCode: error.response?.status, 
                message: error.response?.data.message,
            });
        }
    }
}

getRepositories('marcelo-growdev/scrapbook-es6');
getRepositories('marcelo-growdev/qdbqqbqwn');