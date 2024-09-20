I like doing things myself when I absolutely shouldn't.

Having never seriously worked in the frontend, I decided my wedding was the perfect low-stakes, low-stress, casual environment to try it out.

So thats what I did. Instead of using [The Knot](www.theknot.com) to manage RSVPs like everybody else, I cobbled together a shitty webapp.

You can find it [here](https://www.nicoleandmatt2022.com).

(Update Sep '24: Sike you can't! You think I'm gonna keep managing that infra? Dream on pal.)

![](/projects/the-knot/assets/landing.png)

## The AC

1. We need:
   - A way for our guests to RSVP
   - Information for guests to consult
2. The record of an RSVP needs persisted somewhere
   - That somewhere has to be reliable -- data loss is unacceptable
3. The interface needs to be frictionless and easy to use. Grandma, children, dogs... anybody should be able to use it.
   - Absolutely no confounding passcodes or email registration.
4. It needs to work on any device.

## The Stack

![](/projects/the-knot/assets/diagram.png)

- Data is stored in [MongoDB Atlas](https://www.mongodb.com/pricing) under the 'Shared' tier.
  - Cost: **Free**
- A simple RESTful API written with [FastAPI](https://fastapi.tiangolo.com/) exchanges RSVP data hosted on [Railway](https://railway.app/).
  - Cost: Under the 'developer' plan:
    - Memory: `$0.000231 / GB / Minute`
    - CPU: `$0.000463 / vCPU / Minute`
    - `$5.00` free credit every month
    - Usage never exceeded free credit -> **free**
- A [React](https://reactjs.org/) webapp serves up some text, images, and a form for submitting RSVP info. Hosted on [netlify.app](https://app.netlify.com/)
  - Cost: Page hosting free, but domain $12/yr through Google domains.

### Backend

[wedding-api](https://github.com/matt-goldeck/wedding-api) is a FastAPI hackjob hosted on [Railway](https://railway.app/). Railway is a handy IAAS alternative to Heroku that I saw mentioned on Reddit. I don't know much about it other than the fact its cheap, easy to use, and has a cool choo-choo train logo. YMMV.

The API has three endpoints.

1. `POST /rsvp/` - Accept an RSVP object via JSON and store it in the DB.
2. `GET /rsvps/` - Retrieve a list of all RSVP objects in the DB via JSON.
   - Supports a quick and dirty admin view that displays all received RSVPs.
3. `GET /rsvps_csv/` - Download a CSV file containing all RSVP objects in the DB.

The latter two [sit behind an API key](https://github.com/matt-goldeck/wedding-api/blob/master/main.py#L48). This 'key' is just configured as local env var on Railway and very professionally provided to the FE client by the user.

I expected to hit this second endpoint maybe a handful of times to monitor progress, and the third endpoint exactly once when it was time to make table arrangements. Probably not very secure at all? Eat your heart out, TMZ.

Data is [passed to Mongo](https://github.com/matt-goldeck/wedding-api/blob/master/clients/database.py#L19) via the MongoDB SDK which is handy. I'm a relational guy but at this small of scale and with this low of stakes it was nice to follow the path of least resistance.

### Frontend

[wedding](https://github.com/matt-goldeck/wedding) is a React app hacked together with next to no React knowledge and furious web searching.

I chose React because it's what I've touched before. Live fast, die young.

My app uses [ReactRouter](https://reactrouter.com/en/main/start/overview) to provide client-side routing so users can navigate around the site without having to make separate requests. This enables me to provide a slightly more performant experience with very limited (read: free) resources.

![](/projects/the-knot/assets/form.png)
_The RSVP submission form_

![](/projects/the-knot/assets/form-submitted.png)
_The form submitted_
