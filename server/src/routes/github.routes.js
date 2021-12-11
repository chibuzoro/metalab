import {Router} from 'express';
import {getGitRepo} from "../controllers/GithubController";

const router = Router();

// api check
router.get('/', (req, res)=>{
    res.send('api works')
} )

router.get('/api/v1/search', getGitRepo)


export default router
