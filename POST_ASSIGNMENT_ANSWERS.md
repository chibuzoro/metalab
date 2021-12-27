### Describe the major design/build decisions and why you made them.
I originally intended to build a backend system that will serve the api responses to the SPA rather than allow the application directly interface with third party apis as I intended to hide any authorization requirement that Github may need to grant more permissions to the application. 

However, I have opted otherwise hence the Github API for this usecase mostly allowed public api request with the only caveat being a rate-limit applied to each request. Thus to avoid hitting this limit early, I ensured all request to the Github API are delayed. caveats, there are some repos that will not allow viewing without permissions.
#
#### Architecture:
- `MVVM pattern`. The application is designed with separation of concerns in mind to ease extensibility and scale the application more rapidly. A data provider aggregates data from api responses and formats it for use by various components. Most components are not aware of the source of data beyond it available in a format they can present. Also,
I grouped respective domains of the application in their own respective folders. That is, components, apis, routes, configs, pages/views and shared resource (context) live independently and are further namespaced where applicable.
- `Shared Context`. Since the chart and list components must be aware of the users selected repos and other shared behaviors, I avoided having to pass down props through the hierarchy of components and instead taken advantage of Reacts Context API.
- `Css in components and Themes`.  Each individual component is styled for reuse. Albeit, the limitation imposed is I have not used css variables for true portability rather I have chosen to implement a theme based system where each component can be restyled by changing parameters in the global theme.
#
### How long did the assignment take (in hours)? Please break down your answer into buckets (e.g. "Learning Framework", "Coding", "Debugging").
Giving the amount of time available to me to commit to this task, My time estimates are based on an average of an hour per day in a given week.
- Learning: I spent significantly more time learning the nuances/changes in the React ecosystem since I last worked on the frontend including learning changes to libraries, CSS and design system framework I adopted. 2 days.
- Coding and debugging: 8 hours, debugging CSS cost me additional 2 hours
- Researching and Mock test: 1 hour or less for free chart libraries that have been adopted for React.
- initial backend build: 30 mins (no longer used but left in as a bonus)
#
### If you could go back and give yourself advice at the beginning of the project, what would it be?
- Frontend development is filled with overwhelming uncertainties and frequent changes, do no fret, just pick one and do your best.
- Don't try to perfect the design in one go, there are design requirements ahead that may get you in trouble. 
- Make changes as soon as you recognize them, time is valuable no 'what ifs' allowed.
- invest time in understanding the APIs and tools you need.
#
### Did you learn anything new?
Yes, I learned about when and how to use the Context API in react and the different styled components out in the wild. I also learned more about github api since i never got to use them before.
#
### Do you feel that this assignment allowed you to showcase your abilities effectively?
I feel the assignment allowed me to demonstrate my potential and resolve to meet project expectations irrespective of barriers and gaps in my knowledge of the current frontend needs/tooling. 
#
### Are there any significant web development-related skills that you possess that were not demonstrated in this exercise? If so, what are they?
- API design 
