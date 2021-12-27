### What do you think are the greatest areas of risk in completing the project?

The greatest risk remains availability of resource (skilled persons) to complete the project.

However, where resource is available, frequency of change request (design and feature), communication and change in spec or availability of the API from third party services become a bottleneck
#
### What changes/additions would you make to the design?
Given the scope/objective of the project, the design properly caters for the minimum requirements. However, I would:
- add a limit to the number of repositories that can be added to the list and a behavior/message when that limit is exceeded.

- Exception handling - when an invalid api response is received, the user needs to know to try later.
#
### List two or three features that you would consider implementing in the future that would add significant value to the project.
- List of Contributors (highest) to the project/repo and ability to follow them
- Ability to follow/subscribe to a project of interest
- Analyze the stargazers and their contributions to a project
- Project Health stats, that is Open issues vs closed issues 
#
### Are there any clarifying questions you would ask? If you're able to make assumptions about these and continue, please record and share your assumptions
- What is the maximum allowed repos that can be on a list for comparison? I made the assumption to limit this to 3 given this reduced the clutter on the graph and made it more readable
- How many repos should be listed as options on the dropdown? I limited this to 6 with the assumption that the most relevant results will be within the first 10.
- In the event that a chart system doesn't allow the behavior depicted in the design, how much legroom do I have to alter the design to fit the behavior of the chart? I have had to make compromise here hence the design requires a mouse over on each week (point) for a given repo. Without having to shell out payments for a premium chart system that supports this, I have had to compromise and display the weekly information for all repos using the color indicators based off the limitation of my chosen chart system.
- Beyond chart, are the use of third party libraries/utilities allowed? I have used third party libraries as I believe in not re-inventing the wheel. I however take care to ensure the libraries are well known, documented and supported within the javascript and react ecosystem.
