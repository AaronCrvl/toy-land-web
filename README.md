# toy-land-web

This is a *React Js* project that implements a sales web page. The main intention was to consume the other project, which is an API made with C# that returns product information to fill the web page.

Once the product is returned, the user can go to the buy page and register a pre-order for the project based on the available quantity of it in the database. The information return is complete, but the order requests are still in development.

Soon, this project will be updated.


## Model

```C#
public class ProductModel
    {        
        public string idProduct;
        public string productName;
        public string shortDescription;
        public string imageUrl;
    }
```
## Execution

Currently, I run this app with the Nodemon tool with the command below. Make sure to that in package.json scripts tag you have:

```Javascript
"devStart": "nodemon Server.js",
```
```Javascript
npm start devStart
```
