import {Express, Request, Response} from 'express'
import {validationTerms, validate} from '../validation/validator'
import {getAllUrls, handleRedirect, getOneById, insertUrl, editUrl, deleteUrl} from '../controllers/shortUrlController';

function routes (app: Express) {
    app.get('/isAlive', (req: Request, res: Response) =>{
        console.log("Im Alive")
        return res.send("Im Alive")
    })

    app.get("/admin", getAllUrls)

    app.get("/redirect/:_shortId", handleRedirect);

    app.get("/api/:_shortId", getOneById)

    app.post("/api", validationTerms(), validate, insertUrl);

    app.put("/api/:_shortId", editUrl)
    
    app.delete("/api/:_shortId", deleteUrl)

}

export default routes