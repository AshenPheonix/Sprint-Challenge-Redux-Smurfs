1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    .map
    .filter
    .concat
    we use .map or the spread operator

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions are objects that tell a reducer function what to do and provide additional data that may be needed. A reducer is a function that modifies the redux store via a new store object. The store a centralized state. The point of the store is to keep your whole state modifications in place, making it the final thing that your project dpends on to know how it is supposed to be.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    A compponent state is the state of a single component, while application state is the state of the whole application. A form would have a component state, but the response to that form might go in the application state (for example, a login response)

1.  What is middleware?

    a function that gets applied in the middle of the basic operations of another program

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    redux-thunk adds in the ability to put in thunks, functions that return other functions, to the redux store. it's use is to act as a delay mechanism for a function allowing for long term tasks to finish their job

1.  Which `react-redux` method links up our `components` with our `redux store`?

    connect() and mapStateToProps. connect does it directly, but mapStateToProps tells it which store components to use.