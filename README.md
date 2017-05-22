### Table of contents
- [Features](#features)
- [Installing](#installing)
- [Configuring](#configuring)
- [License](#license)
### Features  
- Focused on content  
- Fully responsive  
- Built in Bootstrap layout and plugins
- Netease comments(especially convenient for Chinese website)  
- Various sidebars avaliable(author info, tag cloud, friend links)
- Syntax highlight with prism
### Installing
#### Using Git
1. Navigate to your Ghost theme directory `ghost/content/themes`
2. Clone the theme repository using the command below
```sh
$ git clone https://github.com/ropeal/ghostrap/ "ghostrap"
```
3. Restart ghost and log in to your dashboard
4. In settings under themes select **ghostrap** and save
5. That's all, now its time to [configure](#configuring) your theme
#### Manually
1. Download the files using the [GitHub .zip download](https://github.com/ropeal/ghostrap/archive/master.zip) option
2. Unzip the files and rename the folder to `ghostrap`
4. Copy the folder into your Ghost theme directory `ghost/content/themes`
5. Restart ghost and log in to your dashboard
6. In settings under themes select **ghostrap** and save
7. That's all, now its time to [configure](#configuring) your theme
### Configuring
All configurable files are located in `ghostrap/partials/custom`.
#### navigation.hbs

Your site navigation items, markup template below.
```html
<li >
  <a href="#" target="_blank">
    Your menu
  </a>
</li>
```

### License
[MIT License]()
