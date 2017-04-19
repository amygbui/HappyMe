# HappyMe
[Heroku link](https://happy-me.herokuapp.com/)

## Minimum Viable Product

HappyMe is a web application inspired by Yelp to (help you find the best Happy Hours near you/help you fill that dark void inside with sugary goodness). HappyMe is built using Ruby on Rails and React/Redux.

### Features and Implementation
1. Authentication
    * New account creation
    * Login/logout for registered users
    * Guest/demo login
2. Production README
3. Hosted on Heroku
4. Search/filters
    * At top of every page
    * Allows search within/near specific areas
5. Business Page
    * Business info (name, address, website, phone number)
    * Business details (hours of operations, reservations, delivery, take-out, etc.)
    * Photos pertaining to business (pictures of food, menu, etc.)
6. Reviews / ratings
    * Allow users to rate business
    * Display average rating for business
    * Allow users to post review about business
7. Map
    * Display close-up map of business location on business show page
    * Allow search in a specified area
8. Bonus: Mark reviews funny, cool, useful etc.
9. Bonus: Profile
10. Bonus: Friends

## Design Documents
[View Wireframes](wireframes)

[React Components](components.md)

[Sample State](sample-state.md)

[DB Schema](schema.md)

[API Endpoints](api-endpoints.md)

## Implementation Timeline
### Week 1:
#### Tuesday: Roll auth, set up DB, make models and controllers, make JBuilder views, create ~10-20 seeds, push to Heroku

Objective: Functioning web application with front-end Authentication

#### Wednesday: Work on Header Component and search functionality. Include Matched Businesses Component and Business Preview Component.

Objective: Have full searching functionality. Allows users to make a search and display found matches. Each found match should display a small preview of the matched business.

#### Thursday: Start on Business Components and children (Business Info, Business Details, Reviews)

Objective: Upon clicking business from search page, should navigate away from search page and onto business show page. Business show page should contain all relevent info to the business: location, details, reviews.

#### Friday: Review Form (new for sure, potentially edit functionality if time permits).

Objective: Allow users to post new reviews on businesses. New review data should update business' average rating and should be displayed on business show page.

### Week 2:
#### Monday: Work on Map feature and add map into Business Component.

Objective: When searching, a map of the search area should be displayed, with pins on the location of the matched business. Map should also be displayed on business show page.

#### Tuesday: Add User Profile (link from Review component)

Objective: Allow users to view other users' profiles. Update Header Component to include User Details Dropdown that links to own profile. On review page, add link from a reviewer's name to their profile page.

#### Wednesday: Add bookmarking and friending feature.

Objective: Improve user experience by allowing them to bookmark businesses they're interested in. Should show on their display page. Potentially add feature where they can rank or add notes to their bookmarks?

#### Thursday: Marking reviews as funny, cool, interesting, useful, etc.

Objective: Continue to improve user experience by allowing users to mark reviews with additional comments.

#### Friday: Polish up CSS and perhaps look into refactoring and optimizing code.

Objective: Perfect project and ensure project is ready for submission.
