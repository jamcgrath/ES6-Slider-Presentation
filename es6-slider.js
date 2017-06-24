/* Put all the slider data in an object.....so wrong!!!! */

const sliderData = [{
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTI1MTU4N15BMl5BanBnXkFtZTcwODg0OTY0Nw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
    name: "The Avengers",
    desc: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity."
}, {
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    name: "Iron Man",
    desc: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil."
}, {
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    name: "Thor",
    desc: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders."
}, {
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    name: "Guardians of the Galaxy",
    desc: "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe."
}, {
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    name: "Doctor Strange",
    desc: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts."
}, {
    img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SY1000_CR0,0,640,1000_AL_.jpg",
    name: "Captain America",
    desc: 'Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization'
}];

/*
  const is way to assign a variable
  const = constant
  const is an immutable binding (not immutable)

    const value = 10;
    value = 12; //Uncaught TypeError: Assignment to constant variable.

    const propUpdate = {
      name: 'james',
      occupation: 'freelance sorcerer supreme'
    }

    propUpdate.occupation = 'front end developer';
    console.log(propUpdate);
    // Object {name: "james", occupation: "front end developer"}

  const is block scoped

    {
      const inBlock = 'YOLO';
      console.log(inBlock);  //"YOLO"
    }

    console.log(inBlock); // Uncaught ReferenceError: inBlock is not defined

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

*/

const reverse = i => i % 2 ? 'flex-reverse' : '';

/*
  const reverse is a variable assigned an arrow function that implicitly
  returns a ternary operator (shorthand if statement: if this ? true : false)

  if the arg i is divisible by 2 then return 'flex-reverse';

  Arrow function:
  Are concise

    () => {}

  Can have implicit returns
    const addOne = num => num + 1;

    same as: (explicit return)

    const addOne = (num) => {
      return num + 1;
    }

    same as:

    const addOne = function(num) {
      return num + 1;
    }

    No arguments:

    const noArgFunc = () => "YOLO";

    Multiple Arguments:

    const multiArg = (num1, num2) => num1 + num2;

    return object literal:
     needs () around object

     const returnObj = () => ({
      name: 'james',
      occupation: 'freelance sorcerer supreme'
    });

    without produces error:

    const returnObj = () => {
      name: 'james',
      occupation: 'freelance sorcerer supreme'
    };
    // Uncaught SyntaxError: Unexpected token :

    Can set default values

    const defVal = (num = 1, num2) => num + num2;

    does not rebind this

    const clickMe = document.querySelector('.click-me');

    clickMe.addEventListener('click', function() {
      setTimeout( () => this.classList.toggle('clicked'), 100);
    });
    // this = clickMe

  Arrow functions are anonymous (see every arrow function above)

  NOTE: cannot contain a line break between parameters and arrow

  https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

for (let i = 0; i < sliderData.length; i++) {
    /*
      let is a way to assign a variable
      let can be reassigned / updated
      let is block scoped

        let fruit = 'apples';
        {
          console.log(fruit); // Uncaught ReferenceError: fruit is not defined

          let fruit = 'oranges';
          console.log(fruit) // "oranges"
        }

        console.log(fruit); // "apples"

        fruit = 'kiwi';
        console.log(fruit); // "kiwi"

      can't be redefined in the same scope

        let vegetable = "";
        let vegetable = "YOLO!"
        // Uncaught SyntaxError: Identifier 'veg' has already been declared

      NOTE: Using in for loop: let rebinds to each iteration of the loop.
      SEE: http://wesbos.com/for-of-es6/

      https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/let
    */

    const slider = document.querySelector(".slider");
    const { img, name, desc } = sliderData[i];
    /*
      Destructuring an object
      Extracts data from the object, multiple at a time, into variables
      Variable name is the key but can be renamed

        const { img: image, name, desc } = sliderData[i];

        is equvalent to:

        const image = sliderData[i].img;
        const name = sliderData[i].name;
        const desc = sliderData[i].desc;

      Can also set fallback values for properties

        const {
          img: image = "//marvel.com/dr-strange/drstrange.jpg",
          name = "Early Dr Strange Comics",
          desc = "The Worst Character Dialog EVER!"
        } = sliderData[i];

      https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    */

    const slideData = `
      <div class="slide ${i === 0 ? 'visible' : ''} ${reverse(i)}" data-slide="slide-${i}">
        <div class="slide-image">
         <img src="${img}" />
        </div>
        <div class="slide-caption">
          <div class="slide-caption-content">
            <div class="title-bg">
              <h1>${name}</h1>
            </div>
            <p>${desc}</p>
          </div>
        </div>
      </div>
    `;

    /*
      Template literals
      Uses ` (backtick aka grave accent) to wrap strings
      Allows for interpolation to evaluate expressions

        const firstName = 'Kanye';
        const lastName =  'West';
        const fullName = () => `${firstName} ${lastName}`; //interpolation

        const story = '\n After a long day of work, \n '
        + firstName + ' ' + lastName + ' goes to his ' + firstName + ' Nest\n ' +
        'to take his ' + firstName + ' Rest. \n ';

        const es6Story = `
          After a long day of work,
          ${fullName()} goes to his ${firstName} Nest
          to take his ${firstName} Rest.
        `;

      https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals
    */

    /* append all the slide data to make one long string.....such a bad idea! */
    slider.innerHTML += slideData;
}


/* Slider code */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
const slideInterval = setInterval(() => {
    slides[currentSlide].classList.remove("visible");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("visible");
}, 5000);
