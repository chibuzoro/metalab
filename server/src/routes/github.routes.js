import {Router} from 'express';
import {getGitRepo, getCommitActivity} from "../controllers/GithubController";

const router = Router();

// api check
router.get('/', (req, res)=>{
    res.send('api works')
} )

router.get('/api/v1/search', getGitRepo)

router.get('/api/v1/commit-activity', getCommitActivity)


export default router
