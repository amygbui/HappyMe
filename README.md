# HappyMe

[HappyMe live](https://happy-me.herokuapp.com/)

Every time I or my friends want to take advantage of the best happy hour deals nearby, we have to scour Yelp's reviews to 1) find places with happy hours, 2) find the actual happy hour specials or menu, and 3) determine the actual hours the happy hour deals run. Frustrated with Yelp's inadequacies, I decided to create a new app that quickly and easily finds the best happy hour deals nearby.

HappyMe is a single-age web application inspired by Yelp to help you find the best Happy Hours near you. HappyMe is built using a PostgreSQL database, with Ruby on Rails on the back-end and React.js with a Redux architectural framework on the front-end.


## Features
* Account creation and authentication
* Search for businesses in a geographic location by name and description
* Visualization of business's location via Google Maps
* View business's show pages
    * Displays business details (address, telephone number, average rating)
    * Displays all reviews for the restaurant
    * Has option to create or edit reviews and upload a new profile picture for the business
* Create, read, and update reviews/ratings left on a business
    * Users may only edit reviews that they personally wrote
* View user profile
    * Displays all of a user's reviews
    * Allows users the ability to change their profile pictures


## Implementation
### User Authentication
User authentication is handled on the back-end. Passwords are hashed using BCrypt, and the resulting hash is stored in the database (passwords are never saved to the database). Whenever a user logs in, the password provided is rehashed and compared to the original encrypted password in order to verify the user's credentials.

### Search/Filters
Upon making a search, HappyMe first checks for if a location is specified. If a location is specified, it make an API request to Google Maps to get the geographic bounds (in latitude and longitude) of the location. If there is no location, the location bounds defaults to New York City.

HappyMe then narrow all of the restaurants in the database by matching the `lat` and `lng` to the bounds. From all of the restaurants within the bounds, it searches through the restaurants' `name`s and `description`s and tries to match restaurants to the search query.

The search feature is implemented using PgSearch, a Ruby Gem that uses PostgreSQL's full text search. HappyMe uses PgSearch's single-model search scope strategy, and configures PostgreSQL's full text search to match partial words and stemming (variants of words, for example "jumping" and "jumped" will result in a match).
![Screenshot of User Profile Page](/app/assets/images/readme_shots/r_index.png)

### Map
After making a search, all locations matching the search query will be marked on a map. With every subsequent search, the old markers are removed and new ones are placed. The map then automatically resizes and rezooms to encompass the new result markers. This map functionality is implemented using the Google Maps API.

### Business page
All restaurants are stored in one table in the database, which contains columns for `id`, `name`, full address (as `address`, `city`, `state`, `zip`), `phone_number`, `description` and geographic location (`lat` and `lng`). Every restaurant also has a profile image, which is uploaded to Amazon Web Services using Paperclip.
![Screenshot of User Profile Page](/app/assets/images/readme_shots/r_show.png)

### Reviews/Ratings
Every review made by a user contains the following information stored in the database: `id`, `rating`, `review`, `author_id`, and `restaurant_id`.

Every time a user creates or updates a review, the restaurant's overall rating is recalculated and updated. HappyMe uses React-Rating for its dynamic stars rating feature.

![Screenshot of User Profile Page](/app/assets/images/readme_shots/review.png)

### User Profile Page
The user's profile page aggregates all of the reviews that user has ever made of happy hour locations. This consolidation of data allows users to quickly find past locations they've patronized.

The user's profile page also allows them to change their profile picture (using Amazon Web Services and Paperclip), as well as see their total activity stats.

![Screenshot of User Profile Page](/app/assets/images/readme_shots/user_prof.png)


## Future Directions for the Project
In addition to the features already implemented, I plan to continue adding features to this project to make it ready for full-scale consumer user.

### Default the Open Now Option
Ever find a ridiculously amazing place you want to try on Yelp, and when you're just about to tell everyone where to go, you realize it's closed because Yelp's search feature doesn't default to open now? HappyMe will default the "Open Now" search filter to make sure that every time you search, you only get places that are open and ready for your business!

### Bookmarking
Sometimes, you find several amazing happy hour deals that cater to your interests, but you aren't able to hit up all these places before the end of happy hour. HappyMe will implement a bookmarking feature so you can keep track of every great happy hour place you find!

### Friending/MeetUp
Once you finally find a place to meet up for Happy Hour, you need to send your friends or coworkers the location. Maybe you can't decide on the location and end up sending them a barrage of options, eventually confusing everyone on the actual place you all are supposed to meet up. Enter MeetUp: create a MeetUp, set the time and location, and add your friends to it. It doesn't matter how indecisive you are now! With MeetUp, the location and time will be centrally displayed so there's no confusion on the night's plans!
