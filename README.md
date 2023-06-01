# toy-land-web

This is a *React Js* project that implements a sales web site. The main intention was to consume the other project, which is an API made with C# that returns product information to fill the web page.

Once the product is returned, the user can go to the buy page and register a pre-order for the project based on the available quantity of it in the database. The information return is complete, but the order requests are still in development.

Soon, this project will be updated.

## Libraries & Tools
- Api calls: [Axios](https://axios-http.com/ptbr/docs/intro)
- Pre load actions: [useEffect](https://pt-br.legacy.reactjs.org/docs/hooks-effect.html)
- Data: [useState](https://pt-br.legacy.reactjs.org/docs/hooks-state.html)

## Running Features
- See products lists
- Create your own account
- Create products pre-orders
- Create a account orders list
- Edit account details

## Execution

Currently, I run this app with the Nodemon tool with the command below. Make sure to that in package.json scripts tag you have:

```Javascript
"dev": "nodemon Server.js",
```
```Javascript
npm start dev
```
