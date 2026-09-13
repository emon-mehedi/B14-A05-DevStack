# Dev Stack Builder Website

## Description
A modern and interactive development stack builder that implements fetching data from a local API simulator (json), basic react components, hooks and external libraries like daisyUI, react icons, toastify etc. Users can browse technologies, view their details, and add or remove technologies from their stack.

## Technologies used:
- React.js
- Tailwind CSS 
- DaisyUI
- TypeScript
- React Icons
- React Toastify
- React-Toastify (NPM Package)
- JSON (for technology data)
- Vite (build tool)


## Features

- **Explore Technologies** — Browse different frontend, backend, database and development tools with their descriptions, ratings etc.
- **Build Your Own Stack** — Add technologies to your stack and remove when needed
- **Interactive Feedback** — Get success and error notifications when added or removed from stack


## Questions & Answers
1. What is JSX, and why is it used in React?
  Answer: Jsx is Javascript XML. Using jsx we can write html like syntax in javascript. It allows components to describe how ui should look like
2. What is the difference between props and state?
  Answer: Props are like arguments to the component functins. Props are used to render a component with the exact data we want. Whereas state is like variables that stores and remembers some specific data when a component re-renders.
3. What does the `useState` hook do, and where did you use it in this project?
  Answer: The `useState` hook helps to set initial value to a state and re-assign new value to it using a function when called. In this project I used `useState` to create an empty array of selected technologies, then used a fuction to re-assign a new array of added or removed technologies to render them in user's stack
4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
  Answer: `useEffect` is used to run code code after a component renders, normally for side effects like fetching data. In this project I did not use `useEffect`, used `use` state instead which fetches data from API, just like useEffect would do in this particular case.
5. Why does every item in a `.map()` list need a unique `key` prop?
  Answer: React creates a virtual DOM and re-renders only the part of ui which was changed. When we use map, each single child needs an identifier for react to identify it individualy to easily re-render that child if something in it is changed.
6. What is conditional rendering? Show one place you used it (example: the empty stack message).
  Answer: Conditional rendering means displaying different UI depending on a condition. I used it in this project to see if the stack is empty:
    ```jsx
    {stack.length === 0 ? (
      <button>Your stack is empty</button>
    ) : (
      <div>
        {/* Selected technologies */}
      </div>
    )}
    ```
7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
  Answer: React only sends data from parent to child components. Parent component sends data as props to child and the child recieves the props. The child uses the data or can even pass to it's child by props drilling. Child can not send data back to parents. But if the parent sends functions as props, the child can call the function and sends the data to parent.




  
