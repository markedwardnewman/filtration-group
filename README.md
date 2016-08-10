#Filtration Group
###An Employment Challenge

My submitted mockup: dist/[index.html](dist/index.html)

My [portfolio](http://markedwardnewman.com/).

##Project Notes

Before changing anything I would fix the current issues as revealed [here](https://validator.w3.org/nu/?doc=http%3A%2F%2Fwww.filtrationgroup.com%2FWFS%2FFGCBusiness%2Fen_US%2F-%2FUSD%2F&showoutline=yes). 

Once those quick fixes have been done:


####In `<head>`...

Add:

    `<meta charset="utf-8">
    <link rel="apple-touch-icon" href="apple-touch-icon.png" type="image/apple-touch-icon">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`

  Alter the description so that a Google search result displays a friendly description of what the company does:

	<meta name="description" content="Filtration Group | Visions of a Safer, Healthier and More Productive World">


  For good measure, add a few more industry specific keywords (as well as in the content of the page/s):

	<meta name="keywords" content="commercial, industrial, filter, filtration, health, quality, hepa, clean">

  As per: [https://www.google.com/fonts/specimen/Raleway](https://www.google.com/fonts/specimen/Raleway) - "Raleway is an elegant sans-serif typeface family intended for headings and other large size usage.". So I would switch to Roboto because...

- it renders well on small devices
- it is so popular most people already have it cached, which would reduce page load time.


####In `<body>`
In general:

- The site should be made HTML5 comliant.  All design and layout should be done entirely with css. 

- Make the site 100% wide and fluid.

- There is too much information given on the homepage.  Cookies used to be a good way to reduce clutter by serving relevant content based upon previous sessions.  Since cookies have recently come under fire, look into other acceptable ways to store session information for serving content.  See [https://www.w3.org/TR/webstorage/](https://www.w3.org/TR/webstorage/) for possible alternatives:   For example, I see *Quick Order*, *Buy Online*, and *Login* links.  Which one do I choose if I want to buy something?  Maybe only show the *Quick Order* for established clients? Something like that.

- In a nutshell, the homepage is suffering from having to be a product information and marketing tool while at the same time being a B2B portal.


In the `<header>`:

- Have only one main nav at the top, below the logo, with only these links (The other links can be moved to the footer):
	- About Us
    - Products (or Brands if absolutely necessary)
    - Contact Us
    - Login/Register

- Until a satisfactory Intershop search algorithm can be implemented, completely remove the search field. I quickly tested it by typing in "kaydon" (the first product I saw under the Brands drop-down), and got a "No Results Found".  Personally, except for a few extremely popular sites like Amazon, I have given up on using any built-in site search.  These days I usually get better results Googling the company name + whatever I am looking for.

In the main content section:

  - The hero image gallery / slider is nice.  I would maximize the width to 100%, fade the images, and overlay the copy with a subtle text shadow (or put a solid color behind the text, depending on how well the images work).

  - Move the "THE MOST COMPREHENSIVE AND ADVANCED SOLUTIONS IN THE INDUSTRY" header and its content to the hero area.

  - Keep the four "Brands" like they are layed out. Replace the images with the colored boxes that are currently below the "Learn more" links.  Remove the redundant Brand text (currently in grey divs).

  - Keep the "Become a Business Customer" section as is, but change the "Apply Today" button to "Join Today".

In the `<footer>`:

  - Remove the wall of text.  See here for fun: [https://blog.codinghorror.com/teaching-users-to-read/](https://blog.codinghorror.com/teaching-users-to-read/)

  - Make the "Quick Links" a horizontal menu on top.  Move the *Privacy Policy* and *Terms of Use* links to here.

  - If the Industries menu is necessary, use flexbox to spread out the different values in an appealing way. 


##Project Development Notes
**Environmental dependencies:**


- [Node.js](https://nodejs.org/en/)
- [Ruby](https://www.ruby-lang.org/en/)
- [SASS](http://sass-lang.com/)
- [npm](https://docs.npmjs.com/)- Node Package (module) Manager.  Modules:
	- [grunt-cli](https://www.npmjs.com/package/grunt-cli) - Required to run grunt commands using a CLI
	- [grunt](https://www.npmjs.com/package/grunt/) - A command line JavaScript Task Runner used to automate installed modules.
	- [grunt-contrib-sass](https://www.npmjs.com/package/grunt-contrib-sass) - Sass compiler
	- [grunt-contrib-watch](https://www.npmjs.com/package/grunt-contrib-watch) - Run predefined tasks whenever watched file patterns are added, changed or deleted. Useful to complile .scss file to .css file when changes are made.
	- [grunt-postcss](https://www.npmjs.com/package/grunt-postcss) - Apply several post-processors to your CSS.  Installed plugins include:
		- [autoprefixer](https://github.com/postcss/autoprefixer) - Adds browser specific prefixes -webkit css, etc.
		- [postcss-sorting](https://github.com/hudochenkov/postcss-sorting) - Standardizes the order of css rules
		- [uncss](https://www.npmjs.com/package/uncss) - Remove unused CSS styles
	    - [cssnano](https://github.com/ben-eb/cssnano) - Minify css
	- [grunt-w3c-html-validation](https://www.npmjs.com/package/grunt-w3c-html-validation) - W3C html validation

In order to use the package.json file to automatically install dependencies, *grunt-cli* must first be installed globally.  Open Git bash (or whatever CLI you prefer) in the project's root folder and initiate the following command:

    npm install -g grunt-cli

... the following command will then use the package.json file to install the listed dependencies:

	npm install
  
... to make sure everything is working (and compiles the .scss file to .css):

    grunt prod

... to automatically process the .scss to .css when a change is made to it:

	grunt watch

**Project Directories:**

*.sass-cache/*

- A directory that is automatically created the first time sass is used.
- Used to speed up sass compile.
- Should be listed in *.gitignore* file.

*dist/*

- Short for distribution,  it contains the processed files used in the final project.
- Could also be called *www/* or *public/*

*doc/*

- Contains additional project documentation.

*log/*

- Contains the project's log files.

*node_modules/*

- A directlory that is automatically created when `npm install` is first initiated.
- Contains all the modules required for the project
- Should be included in the *.gitignore* file.
 
*src/*

- Short for source, it contains the source files used before any processing has been done.  

**Important project files:**

*.gitignore*

- If using git, contains a list of files and directories that should not be pushed to the project's repository.

*package.json*

- lists project meta-data and contains a list of npm modules required for project development.

*Gruntfile.js*

- Contains npm module task specifications (paths, processes, etc.).

*README.md*

- A markdown file usually used for quick reference about the overall project.
- github and bitbucket both render this file automatically when viewed via a browser. 



  
