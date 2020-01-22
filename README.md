# Stubu

A budget tool for students with a student debt

> Commissioned by Nibud

## Concept
StuBu is a mobile website where students can gain insight into their finances and study debt. It is possible on this site to calculate your study debt and compare it with the average student.

The student can calculate his / her own budget and see what his / her income and expenses are. This data can also be compared with that of the average student.

The site is full of audio stories from students who tell about their own experiences regarding their study debt.

![Schermafbeelding 2020-01-22 om 08 44 34](https://user-images.githubusercontent.com/45428822/72875097-d961b480-3cf3-11ea-8e24-11a9c928ac12.png)
![Schermafbeelding 2020-01-22 om 08 45 09](https://user-images.githubusercontent.com/45428822/72875105-dff02c00-3cf3-11ea-8b7c-c9860352e86d.png)
![Schermafbeelding 2020-01-22 om 08 45 43](https://user-images.githubusercontent.com/45428822/72875114-e54d7680-3cf3-11ea-9568-ea0fbb9aee6c.png)
![Schermafbeelding 2020-01-22 om 08 50 41](https://user-images.githubusercontent.com/45428822/72875326-51c87580-3cf4-11ea-99e6-fd7f58567b54.png)

## Build Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/6ed0c348-6f16-445f-9792-d917b9cf16df/deploy-status)](https://app.netlify.com/sites/stubu/deploys)

## Build Setup
I assume that you have already installed node and npm on your computer. If this is not the case. make sure you do this before you install this project. Select the links below for more information about installing [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)

When you have installed node and npm it is time to get the app working. Follow the following steps:

1. Clone this repo by running `git clone https://github.com/MarcKunst/nibud.git`
2. `npm run install` to intall the dependencies
3. `npm run dev` This will give you a serve with hot reload at localhost:3000
4. `npm run build` & `npm run start` For building a production and launch server
5. `npm run generate` Will generate a static project when you're ready to deploy

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Data Visualisation
Vue-chart.js was used to create the data visualisations. This is a wrapper for chart.js Click [here for information about vue-chart.js](https://vue-chartjs.org/) and click [here for the extensive documentation on the use of chart.js](https://www.chartjs.org/)

## Data Usage
Most of the data used in the app is entered by the user. But of course other data is used to make comparisons.

Nibud wants its own data set not to be available for free use. That is why we used published data on the average income and expenditure of students. This data was outdated data from 2017. That is why we have calculated inflation on these data twice. This data is imported into the app as json for budget comparison.

We also use data from a survey that we have done ourselves. This data is not used as hard data but as fun facts.

## Credits

Thanks to [Nibud](https://www.nibud.nl/) for their enthusiasm and commitment throughout the project

Thanks to [Nuxt.js](https://nuxtjs.org/). For making their fantastic framework available for everyone

Thanks to [Chart.js](https://www.chartjs.org/) and the community behind it

Special thanks to [Maximilian Schwarzmüller](https://github.com/maxschwarzmueller). Thanks to his clear tutorial videos, I learned a lot within two weeks about using Nuxt and vuex.

## License
Unless stated otherwise, code is [MIT](https://github.com/MarcKunst/nibud/blob/master/LICENSE)
