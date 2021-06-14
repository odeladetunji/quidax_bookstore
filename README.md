#  quidax_bookstore
Quidax online bookstore (Ecommerce)

#### Technology
```

   Nodejs
   Express
   GraphQL
   PostGresql
   Sequelize
  
```

## Please note


```

> the .env file was not added to git, 
> Its needed for this project to run locally.
> I will provide it upon request.

  
```

## How to initialize the project

```

   1. git clone http://github.com/odeladetunji/quidax_bookstore.git
   
   2. make sure you have nodejs installed on your machine.
   
   3. Install postgresql
   
   > run the sql script on the postgres shell
   
   4. From the root directory of the project run the following command.
   
   > npm install --save
   
   this should install all the dependencies nessary to start the server
   
   5. run the command
   
   > supervisor app.js
   
   6. open the api collections in postman and begin to test
  
```

## How to test the various api

```

   1. Get An authentication Token using the fetchToken Api

   2. In the Authorization section of post man, set the 'Type' to 'Bearer Token'

   3. Past your token in the token input field.

   4 Endeavour to set the Token as global, failure to do it will result in all your requests as 'FORBIDDEN'
   
```


## Object Relational Mapping Using ORM

#### Sequelize was used to handle ORM, in other to avoid writing sql code up and down in the code, I believe sql should be written only when ORM cannot handle the query. 

#### An example of the schema for quidax_book_tags table is shown below. Visualizing it the schema below gives you an idea of what that table looks like

```
    const quidax_book_tags = sequelize.define('quidax_book_tags', {
    id: {
        field: 'id',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    book_id: {
        field: 'book_id',
        type: DataTypes.STRING,
        allowNull: false
    },
    tags: {
        field: 'tags',
        type: DataTypes.STRING,
        allowNull: false
    },
    user_uuid: {
        field: 'user_uuid',
        type: DataTypes.STRING,
        allowNull: false
    },
    deleted: {
        field: 'deleted',
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
    
}, {
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false,
    tableName: 'quidax_book_tags',
    underscored: false
  });

```

## Achitectural and Database Daigrame.

```
   
   Please check the file named quidax_achi_diagrame
   
   
```


## Api Collection.

```
   
   Please check the file named Quidax Api.postman_collection.json
   
   
```
