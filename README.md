# LinkedIn Promoted Content Blocker

I didn't enjoy seeing promoted corporate messages on my LinkedIn feed, so I created this script to remove all of them. There was
another script called [LinkedIn Unsponsered](https://greasyfork.org/en/scripts/379003-linkedin-unsponsored) that did the samething, but 
it wasn't working and hasn't been updated. It used a method of scanning for the word "promoted" and required users 
to participate and give different language variations of the word for the script to work for their specific native tongue--there's no need to do that for my script.

However, the script may affect the performance of LinkedIn: I could not disconnect the mutation observer because
scrolling through the feed causes new content to appear and the mutation observer is needed to check for the promoted
posts to pop-up.

| Before             |  After |
:-------------------------:|:-------------------------:
![linkedin-feed-before](https://github.com/miahj1/linkedin-promoted-content-blocker/assets/84815985/eda62a04-e0aa-4681-8808-6db7dcec50e2)  |  ![linkedin-feed-after](https://github.com/miahj1/linkedin-promoted-content-blocker/assets/84815985/a6ff7396-c1e0-43d0-805e-295cef01a632)

# Donate
If you like this script and want me to continue maintaining it, please consider a donation. Thank you.

https://ko-fi.com/jabedmiah

<img alt="Donate to the developer on Ko-Fi." width="50%" src="https://github.com/miahj1/direct-youtube-description-urls/assets/84815985/567eb7ac-5d8b-470f-a8ab-0d398d658c80"/>
