import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

const router: express.Router = express.Router();

router.get('/', (req: Request, res: Response, _: NextFunction) => {
    if (req.isAuthenticated()) {
        res.render('signin', {
            title: 'Sign in',
            isAuth: true,
        });
    } else {
        res.render('signin', {
            title: 'Sign in',
            isAuth: false,
        });
    }
});

router.post('/', passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/signin',
        failureFlash: true,
    }
));

export default router;
