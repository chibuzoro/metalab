import axios from 'axios';


const gitUrl = 'https://api.github.com';


/**
 * Fetch repo stats
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const getGitRepo = async (req, res) =>{
    const data = await axios.get(gitUrl);
     return res.status(200).send(data);
}


