![](/projects/afterburner/assets/hero.png)
https://afterburner.batstolabs.com

i've got the need: [the need for speed](https://www.youtube.com/watch?v=siwpn14IE7E)

## what is it?

Afterburner is a job application tracking platform that automates your spreadsheet workflow and sprinkles in some AI-driven experiments.

It was ~~hastily cobbled together~~ artfully crafted with Next.js 14, FastAPI, and Supabase.

## what does it do?

### it tracks job listings

Users can log job listings they find: either because they've applied to them, or that they'd like to apply later.
![](/projects/afterburner/assets/demo.gif)

### it chronicles the application journey

Users can log the touchpoints in the application journey to keep track of important information or folks they've met.
![](/projects/afterburner/assets/outcome.gif)

### it does stupid AI stuff

~~Burn through my OpenAI tokens~~

Users can ask the AI questions about a job listing and score different resumes against it.
![](/projects/afterburner/assets/score.gif)

This is honestly what I'm most interested in playing with but haven't yet because everything else has gotten in the way.

## but why?

My wife was looking for a job.

Her industry is somewhat niche and to an extant, old fashioned. Jobs aren't always syndicated on job boards and often the best way to look for these jobs is to go straight to the source. This means you end up bookmarking dozens of company job pages and have to doomscroll through them regularly.

I started playing around with a browser extension and some serverless tasks to check for updates. The idea was to automate a very manual and boring workflow into a single page that mostly does the heavy lifting for you.

But then I took way too long and she found a job without me. So I shelved all that.

A while later I found there was a need for a similar application. I hated my existing workflow (google sheets and bookmarks) and wanted something smoother.

I also wanted to build something and have fun.

## but why 'Afterburner'?

Names should be fun. I will die on this hill.

There are a lot of professional reasons for this: increased personal investment and ownership, changing product requirements, easy and universal identification.

But I don't care about any of that. I just think life should be fun, and the more fun we can have doing the mundane, the better the world is for it.

Also I watched Top Gun (1986). I moved to SoCal. I bought a Miata. I may be having a mid-life crisis? I'm not sure.

Top Gun is a flight school for pilots... The characters compete with one another for the top spot... Flying a jet is hard, like finding a job...?

Look dude just indulge me.

## how is it built?

![](/projects/afterburner/assets/diagram.png)

### Goose

_Your lovable, steadfast copilot._

Repo: https://github.com/matt-goldeck/goose

Built with Next.js because it's what I've worked with in the past and works very nicely with Supabase.

Interacts with the backend and the database via the Supabase API with strict RLS policies and [Supabase Auth](https://supabase.com/docs/guides/auth).

### Iceman

_Your misunderstood former rival, turned steadfast wingman._

Repo: https://github.com/matt-goldeck/iceman

Handles beefier tasks that will one day maybe be async. Resume uploads, AI tasks, etc. A lot TBD.

Directly connects to Supabase's postgres db and abstracts it with [SQLModel](https://sqlmodel.tiangolo.com/) which is like SQLAlchemy but for lazy people.

### Miramar

_Fightertown, USA._

It's a Supabase project, but I'm version controlling and deploying my migrations through a git repo and a GHA.

Repo: https://github.com/matt-goldeck/miramar

## roadmap (aka flightplan 😎)

I haven't had a chance to work on ,ost of what I actually want to build. I needed a foundation to build off of, and at bare minimum, a system to track jobs.

So this is all the fun stuff.

### 🧰 Better AI Tooling

- You should be able to ask your wingman questions about the job.
- You should be able to get tips and recommendations.
- Maybe even generate a study plan?

All of this sounds cool for just my own personal use, but becomes tricky if other people start using it. They won't, but I like to think they will.

So I'd need to craft this in such a way that users are limited to the amount of queries they can make / AI resources they can use. Effectively, there need to be guardrails of some kind -- tokens, credits, etc.

### 📦 Make running this locally more pleasant (containerization)

I don't want your data. You don't want me to have your data. This is just a mess.

So it'd be cool if it was easier to run this locally. It's not terribly difficult now, but it would be much easier if you could:

- put in your open ai api key
- spin up a docker container
- go

### 📈 Data Export & Visualization

We all love [the cool Reddit graphs](https://www.reddit.com/r/recruitinghell/comments/1136zb6/visualization_of_my_job_search_process_currently/). You should be able to make those.

And export your data if you want to do other things with it.

### 👬 Sharing + Social Tools

Sharing job listings with friends and coworkers seems useful.

This presents a few challenges given my current data model, but I'm confident I could iron them out. I'm just not sure the effort is worth it.
