# inventory-management
 Grocery Management Application 

## How to use?

- Clone this repository locally
- Make a `.env` file and copy all data from '.env.example'
- Run command `npm install`
- Run command `npm start` to run the project


## Endpoints

- ### **User Management**
    
    - **Register (POST)**
        * `/api/v1/users/register`

    - **Login (POST)**
        * `/api/v1/users/login`

- ### **Category Management**
  
   - **All Category (GET)**
     * `/api/v1/categories/all-category`

   - **Get Category (GET)**
     * `/api/v1/categories/get-category/:categoryId`

   - **Add Category (POST)**
     * `/api/v1/categories/add-category`

   - **Update Category (PUT)**
     * `/api/v1/categories/update/:categoryId`

   - **Delete Category (DELETE)**
     * `/api/v1/categories/delete/:categoryId`

- ### **Product Management**
  
   - **All Products (GET)**
     * `/api/v1/products/all-products`

   - **Get Product (GET)**
     * `/api/v1/products/get-product/:productId`

   - **Add Product (POST)**
     * `/api/v1/products/add-product`

   - **Update Product (PUT)**
     * `/api/v1/products/update/:productId`

   - **Delete Category (DELETE)**
     * `/api/v1/products/delete/:categoryId`

### Playground

Postman

Find all the test cases here - https://www.postman.com/hsr-natch1-2023/workspace/grocery-management/collection/28960305-d42a9ec6-a4ef-4335-be72-9387da88083d?action=share&creator=28960305&active-environment=28960305-7a9719fd-e72f-48aa-abd5-79a097eb00c8


### Note

You must have to generate auth token before using any other endpoint except login and signup. All endpoint needs authorization token to access the endpoint so pass the token as Bearer token which you will get once you will be using login endpoint.