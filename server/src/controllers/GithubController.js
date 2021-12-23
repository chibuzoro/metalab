import axios from 'axios';


/**
 * Fetch repositories
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
export const getGitRepo = async ({query}, res) => {
    // we could clean up query args more in the event of RCE, but we would let the external api deal with that for now
    const url = `/search/repositories?q=${query.q}`;
    const response = await axios.get(url); // we can improve this by also catching a 5xx api response
    return res.status(response.status).send(response.data);
}


/**
 * Fetch repository stats
 * @param query
 * @param res
 * @returns {Promise<*>}
 */
export const getCommitActivity = async ({query}, res) => {
    // we could clean up query args more in the event of RCE, but we would let the external api deal with that for now
    const url = `/repos/${query.user}/${query.repo}/stats/commit_activity`;
    const response = await axios.get(url); // we can improve this by also catching a 5xx api response
    return res.status(response.status).send(response.data);
}
