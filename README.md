# THE ROYAL PETS
#### Date, 2024/05/9
### Group Members: 
#### Bill Mageni, Ian Kuria , Daniel Wanjohi ,   Joel Langat , Lee Mwangi,Ted Muigai

#### API Used
Data to be used in the react page is obtained from this API : https://api.thedogapi.com/v1/breeds

## Description
#### DogCollection.js
The DogCollection.js component is responsible for displaying a collection of dog cards.

#### How it Works:
To use the DogCollection.js component, import it into your project and render it within your application where you want to display a collection of dog cards.

#### DogDetailsPopup.js
The DogDetailsPopup.js component is responsible for displaying details of a selected dog in a popup.

#### How it Works:
To use the DogDetailsPopup.js component, import it into your project and render it within your application where you want to display dog details in a popup.

#### DogSearchForm.js
The DogSearchForm.js component is responsible for allowing users to search for dog breeds and display search results.

#### How it Works :
To use the DogSearchForm.js component, import it into your project and render it within your application where you want to include a dog breed search form.


## STYLING
Tailwind.css , App.css , Index.css and DogSearch.css
The above css files were used to style the react apllication to make it more user friendly.


## Response Format
When a user opens the webpage, the fetch is:
```
 fetch('https://api.thedogapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => {
                console.log('API Response:', data); 
                setDogs(data);
                setLoading(false); 
            })
            .catch(error => {
                console.error( error);
                setLoading(false); 
            });
```
For a fetch request for example for a dog with its specific:
fetch("https://api.thedogapi.com/v1/breeds/search?q=Affenpinscher)
```json 
   Example Response:
   [
  {
    "weight": {
      "imperial": "6 - 13",
      "metric": "3 - 6"
    },
    "height": {
      "imperial": "9 - 11.5",
      "metric": "23 - 29"
    },
    "id": 1,
    "name": "Affenpinscher",
    "bred_for": "Small rodent hunting, lapdog",
    "breed_group": "Toy",
    "life_span": "10 - 12 years",
    "temperament": "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    "origin": "Germany, France",
    "reference_image_id": "BJa4kxc4X"
  }
]
   ```
   ## Installation and Project Setup
You use git clone to be able to download the documents in the GitHub

Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services.

Get a free API Key at:
```
https://github.com/iankuria668/dog-adoption-centre-phase-2-project
 ```
Clone the repo
```
git clone https://github.com/iankuria668/dog-adoption-centre-phase-2-project
```
And Lastly in the terminal, install relevent files with:
```
 npm install
 npm install react-router-dom@6
```
## Setup

After installation, run this command to get web application running:

```
 npm start
```

## Installation Requirements
Git

## Technologies Used
React.jsx, Javascript, Tailwind.css

## Refrences and Acknowledgements
For the planets and references, I woudl like to acknowldge the following:

 The public dog api help us use their data within our website and archive a beautiful web application:
```
https://thedogapi.com/
```


## Lisences
MIT License

Copyright (c)  GROUP 3 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.