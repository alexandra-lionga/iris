# IRIS: Inspiring Radiance, Igniting Smiles

## Overview

IRIS is a platform focused on spreading positivity and uplifiting/inspiring stories. The app will focus on providing postive content to the user while also allowing them to contribute their own stories and news they find.

### Problem Space

In today's world, negativity and division dominates media and online spaces. Many people are looking for ways to stay positive and uplifit their spirits. Our app lets them tap into an ongoing feed of inspiring stories, good news, and motivational quotes to counterbalance the negative stressors of media.

### User Profile

Anyone who is looking for positive content can use the app. It is ideal for users seeking encouragement and a positive online experience. There will be an optional account creation for those who would like to track how many times they have seeked positivity and to save any story/quote they would like to revisit.

Users will be able to navigate and explore a feed of positive content while also contributing their own by submiting their personal stories, experiences and/or recommendations. The users will be able to interact through reaction buttons to express their sentiments towards the posted content. Users can also subscribe to a newsletter to keep them up to day with the website content.

**Special Considerations:**

- **Content Moderation:** User-generated content will be screened to ensure positivity and respect towards others on the platform at all times, based on community guidelines.
- **Accessibility:** The app should be usable and accessible for users and have compatibility with screen readers.

### Features

**Content Feed**

- Users can view a feed of uplifting stories, quotes, and news, filtered by category. For instance, showing most recent, most popular, or trendiest content.

**Submit Stories**

- Users can submit, edit and delete their own uplifting stories that may include media, subject to community standards.

**Moderation**

- Admins check submissions by users for approval before posting.

**Engagement Features**

- **Users** **are** **able to** interact with submited posts using reaction buttons and share them. Engagement stats are visible.

**User Profile**

- Profiles show submitted content, engagement stats, and personal details.

**Search**

- Users can search for stories, keywords.

**Notifications**

- Users shall receive push notifications regarding new feed, changes in the status of submitted stories, or interactions-likes/comments.

**Daily/Weekly Inspirational Challenges**

- The app could provide daily/weekly optional challenges that help inspire people to spread positivity and engage more frequently with it.

**Content Bookmarking/Favorites**

- Users should be able to save or "Bookmark" content that inspires them or they might like to come back to later.

**Newsletter**

- Users should be able to subscribe to a newsletter to receive content through their e-mails.

**Share Positive Initiatives**

- Users should be able to share and spread awareness of postive initiatives such as charity events, fundraisers, etc.

**Reporting and Feedback**

- Users should be able to report inappropriate content or submit app feedback.

## Implementation

### Tech Stack

- React
- Sass
- MySQL
- Express
- Nodemailer
- Client libraries: 
    - react
    - react-router
    - axios
    - Chart.js
- Server libraries:
    - knex
    - express
    - Socket.io

### APIs

- Newsdata.io (positive news feed).
- ZenQuotes API (daily inspiration).
- Unsplash API (visual enhancements).
- Firebase Cloud Messaging (user engagement).

### Sitemap

Welcome: Landing page/intro.

Home: Feed of positive content, options to interact.

Submit Story: Form for submitting stories with media.

Profile: User's personal info, history, and interactions.

Post Details: Single post with likes, comments, shares.

ImpactHub: share positive initiatives page.

### Mockups

***Welcome Page***
![welcome page](</src/assets/images/proposal/Welcome Page.png>)

***Main Content Page**
![Main Content](</src/assets/images/proposal/Main Page.png>)

***Category Details***
![category details](</src/assets/images/proposal/Category Details Page.png>)

***Submit Story***
![Submit Story](</src/assets/images/proposal/Submit Story.png>)

***User Account/Profile***
![User Account/Profile](</src/assets/images/proposal/User Account.png>)

***Impact Hub**
![Impact Hub Page](</src/assets/images/proposal/Impact Hub Page.png>)


### Data
![sql ](/src/assets/images/proposal/sql_diagram.png)
### Endpoints

***Content Feed***

**GET /feed**

Description: Fetches the feed of positive content (stories, quotes, and news).
Parameters:
category (optional, string)
sort (optional, string: "recent" or "popular")
Response:
json
```
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "title": "Heartwarming Story",
      "content": "This is an inspiring story...",
      "media_url": "https://example.com/image.jpg",
    }
  ]
}
```
**GET /post/{id}**

Description: Fetches detailed information about a specific post.
Parameters:
id (path parameter, integer)
Response:
json
```
{
  "status": "success",
  "data": {
    "id": 1,
    "title": "Heartwarming Story",
    "content": "This is the detailed story content...",
    "media_url": "https://example.com/image.jpg",
    "likes": 150,
  }
}
```

**DELETE /post/{postId}**

Purpose: Allows a user to delete one of their own posts.
Logic:
Validate that the requesting user owns the post.
Delete the post if it exists and belongs to the user.
Request Example:
json
```
{
  "userId": 123
}
```


**PUT /post/{postId}**

Purpose: Allows a user to edit the content of their own post.

Logic: Validate that the user owns the post.
Update the post’s content in the database.
Restrict which fields can be updated (e.g., title, content, or media, but not timestamps or ownership).
Request Example:

json
```
{
  "userId": 123,
  "title": "Updated Post Title",
  "content": "Updated post content goes here.",
  "media_url": "updated-media-url.jpg"
}
```

**Interactions**
**POST /like/{contentId}**

Description: Likes a specific piece of content.
Parameters:
contentId (path parameter, integer)
Response:
json
```
{
  "status": "success",
  "message": "Post liked successfully"
}
```
**DELETE /like/{contentId}**

Purpose: Allows a user to unlike a post they previously liked.
Logic:
Check if the user has liked the post.
Remove the like record from the database.
Request Example:
json
```
{
  "userId": 123
}
```
Response Example:
Success: 200 OK with a message:
json
```
{
  "status": "success",
  "message": "Like removed successfully."
} 
```


***User Profile***

**GET /profile/{userId}**

Description: Fetches user profile details.
Parameters:
userId (path parameter, integer)
Response:
json
```
{
  "status": "success",
  "data": {
    "username": "JohnDoe",
    "profile_picture": "https://example.com/profile.jpg",
    "posts": [
      {
        "id": 1,
        "title": "Heartwarming Story"
      }
    ],
    "likes": 120
  }
}
```

***User Stories***

**POST /submit-story**
Description: Allows users to submit a new story.
Parameters:
title (string)
description (string)
media_url (string, optional)
Response:
json
```
{
  "status": "success",
  "message": "Story submitted successfully and is pending review"
}
```

***Endpoints for the Impact Hub***

**GET /impact-hub**

Fetches all initiatives with filtering options.
Parameters: category, location, sort.

**POST /impact-hub/submit**

Allows users to submit a new initiative for review.
Parameters: title, description, media_url, category.

**GET /impact-hub/{initiativeId}**

Fetches details about a specific initiative.

**POST /impact-hub/{initiativeId}/like**

Likes an initiative.

**POST /impact-hub/{initiativeId}/comment**
Adds a comment


## Roadmap

Day 1-2: Set up React/Express.
Day 3-4: Implement user profile page and content feed.
Day 5-6: Add story submission, edit and adding likes
Day 7-8: Implement ImpactHub Pagge with all functionality.
Day 9: Test features, bug fixing, and UI refinements.
Day 10: Final testing and deployment.

---

## Future Implementations
- Gamification (badges, rewards).
- Multi-language support.
- Offline reading.
- AI-powered content recommendations.