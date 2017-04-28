# HappyMe

[HappyMe live](https://happy-me.herokuapp.com/)

Every time I or my friends want to take advantage of the best happy hour deals nearby, we have to scour Yelp's reviews to 1) find places with happy hours, 2) find the actual happy hour specials or menu, and 3) determine the actual hours the happy hour deals run. Frustrated with Yelp's inadequacies, I decided to create a new web application that quickly and easily finds the best happy hour deals nearby. HappyMe is a web application inspired by Yelp to help you find the best Happy Hours near you. HappyMe is built using a PostgreSQL database, Ruby on Rails on the back-end, and React.js with a Redux architectural framework on the front-end.


### Features and Implementation

### Search/filters
Upon making a search, my program first checks for if a location is specified. If a location is specified, I first make an API request to Google Maps to get the geographic bounds (in latitude and longitude) of the location. If there is no location, the location bounds defaults to New York City.


I then narrow all of the restaurants in my database by matching the `lat` and `lng` to the bounds. From all of the restaurants within the bounds, I search through the restaurants' `name`s and `description`s and try to match it to the search query. The search feature is implemented using PgSearch, a Ruby Gem that uses PostgreSQL's full text search. Here I used the single-model search scope strategy, and configured PostgreSQL's full text search to match partial words and stemming (variants of words, for example "jumping" and "jumped" will result in a match).

### Map
After making a search, all locations matching the search will be marked on a map. With every subsequent search, the old markers are removed and new ones are placed, and the map resizes and rezooms to encompass the new result markers. This map functionality is implemented using the Google Maps API.


### Business page
All restaurants are stored in one table in the database, which contains columns for `id`, `name`, full address (as `address`, `city`, `state`, `zip`), `phone_number`, `description` and geographic location (`lat` and `lng`). Every restaurant also has a profile image, which is uploaded to Amazon Web Services using Paperclip.

Restaurants are rendered as four different components: `Restaurant Snippet` (used for the featured restaurants on the splash page), `RestaurantIndex` (rendered on the search results page, and contains and renders each `RestaurantPreview`), and `RestaurantShow`.

### Reviews/Ratings
Every review made by a user contains the following information stored in the database: `id`, `rating`, `review`, `author_id`, and `restaurant_id`.

Each review rendered consists of the following components: `ReviewIndex`, which contains and renders `Review`, which contains and renders `Rating`. This structure allows for very clean code and concise code, highlighted below:

ReviewIndex render:
```javascript
<div>
  { reviews }
</div>
```

Where each review in `reviews` is:
```javascript
const reviews = Object.values(this.props.reviews).map(review => {
  return(
    <Review key={ review.id }
            review={ review }
            currentUser={ this.props.currentUser }
            fetchReview={ this.props.fetchReview } />
  )
});
```

<!-- Review render:
```javascript
<article className="review">
  <div className="user">
    <img src={ reviewer.image_url } />

    <nav>
      <Link to={`/users/${reviewer.id}`}>{ reviewer.name }</Link>
      { editLink }
    </nav>
  </div>

  <div id="review">
    <div id="date">
      <Rating rating={ rating } />
      { date }
    </div>
    { review }
  </div>
</article>
``` -->

### User Profile Page
As great as it is for users to be able to search for happy hour locations and see what the general concensus of that place is, sometimes they would prefer to go off of their own personal reviews rather than others'.

The user's profile page aggregates all of the reviews they've ever made of happy hour locations, so they can quickly find that one place that they went to that serves the best fries or cocktail, but can't remember the name of. The user's profile page also allows them to change their profile picture, as well as see their activity stats.


## Future Directions for the Project
In addition to the features already implemented, I plan to continue adding features to this project to make it ready for full-scale consumer user.

### Default the Open Now Option
Ever find a ridiculously amazing place you want to try on Yelp, and when you're just about to tell everyone where to go, you realize it's closed because Yelp's search feature doesn't default to open now? It's okay, we fixed that! HappyMe will make sure that every time you search, you only get places that are open and ready for your business!

### Bookmarking
Sometimes, you find several amazing happy hour deals that cater to your interests, but you aren't able to hit up all these places before the end of happy hour. I plan to implement a bookmarking feature so you can keep track of every great happy hour place you find!

### Friending/MeetUp
Once you finally find a place to meet up for Happy Hour, you need to send your friends or coworkers the location. Maybe you can't decide on the location and end up sending them a barrage of options, eventually confusing everyone on the actual place you all are supposed to meet up. Enter MeetUp: create a MeetUp, set the time and location, and add your friends to it. It doesn't matter how indecisive you are now! With MeetUp, the location and time will be centrally displayed so there's no confusion on the night's plans!
