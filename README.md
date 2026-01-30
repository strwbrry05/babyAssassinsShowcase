# baby assassins showcase
[2025] Extremely creative React web app showcasing the Japanese movie trilogy - Baby Assasins. With three different views in one website, one per film, the user will find themselves shocked at how many features this site contains. Web app includes a call to the OMDB api, various slideshows, selectable viewing options, gallery filters, in-page movie trailers, etc.

![Home](ba_files/projectBA1.gif)
![Home](ba_files/projectBA2.gif)
![Home](ba_files/projectBA3.gif)

## About the Project
Accomplishing a feat like this page was incredible for me; I had never thought I'd be able to create something as complex as this. The Baby Assassins films are so so special to me choosing just one to showcase would have been my personal hell. Fortunately, I had come up with this design for something different but decided to implement it on this project. Creating small, fun features is always a great time. I find that focusing on getting the small things right, makes the larger picture look even better.

### Home Page
Webpage contains three different possible views. Sort of like a day and night mode. Here, the user can switch between the three films in the franchise and explore all of that respective films information. Below are each of the distinct home pages. Thematically aligned with each film.

<img src="ba_files/about_home.png" width="650"/>
<img src="ba_files/about_home_2.png" width="650"/>
<img src="ba_files/about_home_3.png" width="650"/>

Webpage connects to the OMDB api which provides information about films with an api call. This section also has links to the original website and to each film's trailer.

<img src="ba_files/about_info.png" width="650"/>

Following the synopsis section, we have the main actresses section which gives information on both of the main actresses and the roles they play.

<img src="ba_files/about_actors.png" width="650"/>

In order to entice the user to watch these movies, each film has been provided their own reviews section with real reviews from letterboxd. (Granted, I have specifically curated the best/my favorite reviews for this section). These reviews have been placed on an automatic slideshow with three reviews per slide. 

<img src="ba_files/about_reviews.png" width="650"/>

A movie is not complete without a director's influence. Here, a user is able to read a quick summary on the director and his life.

<img src="ba_files/about_director.png" width="650"/>

As previously mentioned, this web app contains three different viewable modes, each pertaining to a specific film. The first method to change the viewing mode is through clicking the title of the film on the hero. Which is quite subtle. The second method to change veiws is to select a film from the selection section located on the home page and on the cast page. Here, a user is able to directly select which film they wish to focus on.

<img src="ba_files/about_selection.png" width="650"/>
<img src="ba_files/about_selection_2.png" width="650"/>
<img src="ba_files/about_selection_3.png" width="650"/>

<img src="ba_files/about_pics.png" width="650"/>

Webpage footer is the same regardless of which film is currently selected. On the footer there is a disclaimer that states this is entirely a fan made work and not an official website for the franchise. Footer is clean and mature.

<img src="ba_files/footer.png" width="650"/>

### Cast Page
Pages purpose is to display all prominent actors for each movie and which character they portray. Depending on which movie you currently have selected, the actors on screen will change accordingly.

<img src="ba_files/cast.png" width="650"/>

Here, the user is able to switch between movies allowing them to see all of the actors per movie on the page.

<img src="ba_files/cast_options.png" width="650"/>

Included on the page is a watch now card. This creates temptation for the user and urges them to go to the Watch Now page to see the films.

<img src="ba_files/cast_watch.png" width="650"/>

### Gallery
Page is dedicated to hosting all types of images relating to each movie. On each load, all images are shuffled and displayed to the user. If needed, images can be filtered per movie. Images are also clickable allowing the user to see them on a larger scale. A download button is available for those who download any images onto their own devices.

<img src="ba_files/gallery.png" width="650"/>
<img src="ba_files/gallery_select.png" width="650"/>

Filtering the gallery to only display images from the first movie.

<img src="ba_files/gallery_ba1.png" width="650"/>

Filtering the gallery to only display images from the second movie.

<img src="ba_files/gallery_ba2.png" width="650"/>

Filtering the gallery to only display images from the third movie.

<img src="ba_files/gallery_ba3.png" width="650"/>

### Watch Now
Page lets the user know which streaming platforms the movies are currently hosted on. Clicking on a streaming service will redirect you to that page on a new tab. Also, lets the user know which streaming services offer the movie for free and which charge to rent. (May not be updated to most recent streaming services).

<img src="ba_files/watch.png" width="650"/>

## Responsive View
Designed desktop first, developed mobile first. Web app is responsive to all types of screens; however for optimal viewing experience, please use screens larger than mobile. Preferably, laptop and larger.

<span>
<img src="ba_files/mobile_home.png" width="250"/>
<img src="ba_files/mobile_nav.png" width="250"/>
<img src="ba_files/mobile_selection.png" width="250"/>
<img src="ba_files/mobile_cast.png" width="250"/>
<img src="ba_files/mobile_gallery.png" width="250"/>
<img src="ba_files/mobile_watch.png" width="250"/>
</span>

## Potential Improvements
- NAV: hovering change
- HERO: more animated change (a note that says click me?)
- REVIEWS: same size window despite changing slides.
- On reload: stay with the same (cookies) remember local storage?

## Built Using
- HTML
- CSS
- Tailwind CSS
- VSCode
- React + Vite
- NodeJS

## Contact
Any comments, questions, or concerns?\
Contact Jacqueline Molina: molina.jq19@gmail.com
