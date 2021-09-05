import { Request, Response } from "express";
import shortUrl from "../models/shortUrlModel";

//get all urls
export async function getAllUrls(req: Request, res: Response) {
  //getting data from the db
  const short = await shortUrl.find().lean(); //lean improve performance in mongoDB it loses some unnecessary functionality 

  //null check
  if (!short) {
    return res.sendStatus(404);
  }

  res.json(short).send();
}

//handle redirect
export async function handleRedirect(req: Request, res: Response) {
  //extracting data from the request
  console.log(req.params)
  const { _shortId} = req.params;

  //search by id
  const short = await shortUrl.findOne({ _shortId });

  //null check
  if (!short) {
    return res.sendStatus(404);
  }

  //increments the clicks
  short._clicks++

  //save to db
  await short.save()

  res.redirect(short._fullUrl); // redirect to the full url origin
}

//find by id
export async function getOneById(req: Request, res: Response) {
    //getting the id from the params
    const {_shortId} = req.params

    //getting data from the db
    const short = await shortUrl.findOne({ _shortId }).lean(); //lean improve performance in mongoDB it loses some unnecessary functionality 

    //null check
    if (!short) {
      return res.sendStatus(404);
    }
  
    res.json(short).send();
}


//insert url
export async function insertUrl(req: Request, res: Response) {
  // get the full url from the request body
  const { _fullUrl } = req.body;

  // create a shortUrl
  const newUrl = await shortUrl.create({ _fullUrl }); // we can pass only the full url because the shortId + the clicks has default value for creation
  console.log(newUrl)

  // return the shortUrl
  res.send(newUrl);
}

//edit
export async function editUrl(req: Request, res: Response) {
  //extracting data from the request
  const { _shortId } = req.params;
  const { newShort } = req.body;

  //search by id in the db
  const short = await shortUrl.findOne({ _shortId})

  //null check
  if (!short) {
    return res.sendStatus(404);
  }

  //applying the new value
  short._shortId = newShort

  //saving the changes to the db
  await short.save()

  res.json(short).send();
}

//delete
export async function deleteUrl(req: Request, res: Response) {
  //extracting data from the request
  const { _shortId } = req.params;
  console.log(_shortId)
  //delete by id
  const short = await shortUrl.deleteOne({ _shortId })
  console.log(short)
  //null check
  if (!short) {
    return res.sendStatus(404);
  }

  res.sendStatus(200)
}