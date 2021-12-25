import axios from 'axios';


/**
 * Fetch repositories
 * @returns {Promise<*>}
 * @param query
 */
export const getGitRepo =  (query) => {
    // we could clean up query args more in the event of RCE, but we would let the external api deal with that for now.
    // Limiting the result to 6 (Hypothetical number where the most relevant searches may be found)
    const url = `/search/repositories?q=${query}&per_page=6`;
    return axios.get(url);
}


/**
 * Fetch repository stats
 * @returns {Promise<*>}
 * @param user
 * @param repo
 */
export const getCommitActivity = (user, repo) => {
    // we could clean up query args more in the event of RCE, but we would let the external api deal with that for now
    const url = `/repos/${user}/${repo}/stats/commit_activity`;
    return axios.get(url);
}
