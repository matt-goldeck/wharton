![](/projects/afterburner/assets/hero.png)

## links

https://afterburner.batstolabs.com

[i even made a playlist just for you](https://open.spotify.com/playlist/2WZzUnx1ZCeiZObyLNyzWJ?si=8da3951c6f2342cf)

## what is it?

Afterburner is a job application tracking platform. It automates your spreadsheet workflow, gives you a space to visualize your journey, and sprinkles in some AI-driven experiments.

It was ~~hastily cobbled together~~ artfully crafted with Next.js 14, FastAPI, and Supabase.

## what does it do?

### it tracks job listings

Log job listings you find. Store them as you apply, or save them to apply to later after you've had some coaching and crafted your resume.
![](/projects/afterburner/assets/demo.gif)

### it chronicles the application journey

Log the touchpoints in your application journey. Keep track of all the important information that comes up: names, next steps, gossip, office pets, etc.
![](/projects/afterburner/assets/outcome.gif)

### it does stupid AI stuff

~~Burn through my OpenAI tokens~~

Score resumes against a job listing and receive a tailored resume review.
![](/projects/afterburner/assets/score.gif)

When I have time: ask questions and receive coaching on how to nail the interview.

## but why?

My wife was looking for a new job.

Her industry is niche, old-school, and somewhat insular. Jobs aren't always syndicated on aggregators and often the best way to know about a job is to go straight to the source. This means you end up bookmarking dozens of company job pages and have to doomscroll through them regularly.

I started playing around with a browser extension and some serverless code to check for updates. My idea was to automate her very manual and boring workflow into a single page that mostly did the heavy lifting for her.

But then I took way too long and she found a job without me. So I shelved all that.

A while later I found there was a need for a similar application. I hated my existing workflow (google sheets and bookmarks) and wanted something smoother.

I also wanted to build something and have fun.

## but why 'Afterburner'?

I watched Top Gun (1986). I moved to SoCal. I bought a Miata. I may be having an early mid-life crisis? I'm not sure.

Top Gun is a flight school for pilots... The pilots compete with one another for the top spot... Flying a jet is hard, like finding a job...?

Look dude just indulge me.

Names should be fun. I will die on this hill.

There are a lot of professional reasons for this: fun names increase personal investment and ownership, they don't dictate scope of the application, and they're easy and universal identifiers for cross-functional orgs.

But I don't care about any of that. I think life should be fun. The more fun we can have, the better the world is for it.

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

The AI engine built in FastAPI and hosted through Railway.

Handles beefier tasks that will one day maybe be async. Resume uploads, AI tasks, etc. A lot TBD.

Directly connects to Supabase's postgres db and abstracts it with [SQLModel](https://sqlmodel.tiangolo.com/) which is just SQLAlchemy in a wig.

### Miramar

_Fightertown, USA._

It's a Supabase project, but I'm version controlling and deploying my migrations through a git repo and a GHA.

Repo: https://github.com/matt-goldeck/miramar

## roadmap (aka flightplan 😎)

I haven't had a chance to work on most of what I actually want to build. I needed a foundation to build from, and at bare minimum I needed a working data collection system.

So now I can do all the fun stuff.

### 🧰 Better AI Tooling

- You should be able to ask your wingman questions about the job.
- You should be able to get tips and recommendations.
- Maybe even generate a study plan?

All of this sounds cool for just my own personal use, but becomes tricky if I ever want anybody else to use this and don't want to spend a small fortune.

So I'd need to craft this in such a way that users are limited to the amount of queries they can make / AI resources they can use. Effectively, there need to be guardrails of some kind -- tokens, credits, etc.

### 📦 Make running this locally more pleasant (containerization)

I don't want your data. You don't want me to have your data. I don't want to pay for your AI usage. This is just a mess.

So it'd be cool if it was easier to run this locally. It's not terribly difficult now, but it would be much easier if you could:

- put in your OpenAI key
- spin up a Docker container
- go

### ⏰ Job Page Tracking

The best way to find a job is to go right to the source: the company. You can already track companies and relate jobs to them, but it'd be great if I could automate the process of checking those pages. 

There's a million ways to implement a job board, and while some boards implement APIs, they often gate them behind paywalls. This makes scraping meaningful information very difficult: I could spend the rest of my life building bespoke scrapers. 

So maybe the simplest solution is "check if this page changed" which is still a tricky question to answer (respecting robots.txt, TOS, not attacking webpages, etc) but more manageble.

### 🤖 Chrome Extension + Auto Scraping

Swivel chair-ing between tabs isn't super fun. It'd be great if you could just pop open an extension window and have the content magically scraped, or at very least not have to change tabs to copy and paste data.

### 📈 Data Export & Visualization

We love [the cool Reddit graphs](https://www.reddit.com/r/recruitinghell/comments/1136zb6/visualization_of_my_job_search_process_currently/). You should be able to make those.

And export your data if you want to do other things with it.

However: the Reddit graphs are most important.

### 👬 Sharing + Social Tools

Sharing job listings with friends and coworkers seems useful. 

During my wife's job hunt I'd look for jobs on her behalf and send things to her. It'd be useful if I could save these to a shared list that required no action on her part.

This presents a few challenges given my current data model but it's nothing insurmountable -- I'm just not sure if this is a usecase worth the effort.
