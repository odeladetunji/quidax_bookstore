const { DataTypes } = require('sequelize');
const sequelize = require('./dbconnection');

const quidax_books = sequelize.define('quidax_books', {
    id: {
        field: 'id',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    mime_type: {
        field: 'mime_type',
        type: DataTypes.STRING,
        allowNull: false
    },
    book_picture: {
        field: 'book_picture',
        type: DataTypes.STRING,
        allowNull: false
    },
    created_date: {
        field: 'created_date',
        type: DataTypes.DATE,
        allowNull: false,
    },
    created_by: {
        field: 'created_by',
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastactivity_by: {
        field: 'lastactivity_by',
        type: DataTypes.STRING,
        allowNull: false,
    },
    deleted: {
        field: 'deleted',
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    price: {
        field: 'price',
        type: DataTypes.BIGINT,
        allowNull: false
    },
    featured: {
        field: 'featured',
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    featured_count: {
        field: 'featured_count',
        type: DataTypes.BIGINT,
        allowNull: false
    },
},
 {
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false,
    tableName: 'quidax_books',
    underscored: false
  });

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
    }
    
});

const quidax_books_users = sequelize.define("quidax_books_users", {
    id: {
        field: 'id',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    user_uuid: {
        field: 'user_uuid',
        type: DataTypes.STRING,
        allowNull: false
    },
    user_name: {
        field: 'user_name',
        type: DataTypes.STRING,
        allowNull: true
    }
    
  }, {
    freezeTableName: true, // Model tableName will be the same as the model name
    timestamps: false,
    tableName: 'quidax_books_users',
    underscored: false
  });

const quidax_books_ratings = sequelize.define('quidax_books_ratings', {
    id: {
        field: 'id',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    ratings: {
        field: 'ratings',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    book_id: {
        field: 'book_id',
        type: DataTypes.BIGINT,
        allowNull: false
    },
    created_date: {
        field: 'created_date',
        type: DataTypes.DATE,
        allowNull: false,
    },
    user_uuid: {
        field: 'user_uuid',
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_picture: {
        field: 'user_picture',
        type: DataTypes.BLOB,
        allowNull: false,
    },
    lastactivity_date: {
        field: 'lastactivity_date',
        type: DataTypes.DATE,
        allowNull: false,
    },
    mime_type: {
        field: 'mime_type',
        type: DataTypes.BLOB,
        allowNull: false
    },
},
{
   freezeTableName: true, // Model tableName will be the same as the model name
   timestamps: false,
   tableName: 'quidax_books_ratings',
   underscored: false
 });


const quidax_books_shopping_cart = sequelize.define('quidax_books_shopping_cart', {
    id: {
        field: 'id',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        field: 'quantity',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price_per_piece: {
        field: 'price_per_piece',
        type: DataTypes.BIGINT,
        allowNull: false
    },
    book_id: {
        field: 'book_id',
        type: DataTypes.BIGINT,
        allowNull: false
    },
    create_date: {
        field: 'create_date',
        type: DataTypes.DATE,
        allowNull: false,
    },
    book_title: {
        field: 'book_title',
        type: DataTypes.STRING,
        allowNull: false,
    },
    deleted: {
        field: 'deleted',
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    user_uuid: {
        field: 'user_uuid',
        type: DataTypes.STRING,
        allowNull: false,
    },

},{
freezeTableName: true, // Model tableName will be the same as the model name
timestamps: false,
tableName: 'quidax_books_shopping_cart',
underscored: false
});

const quidax_book_likes = sequelize.define('quidax_book_likes', {
    id: {
        field: 'id',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    book_id: {
        field: 'book_id',
        type: DataTypes.BIGINT,
        allowNull: false
    },
    user_uuid: {
        field: 'user_name',
        type: DataTypes.STRING,
        allowNull: false
    },
    likes: {
        field: 'likes',
        type: DataTypes.INTEGER,
        allowNull: true
    }
    
});

const quidax_books_details = sequelize.define('quidax_books_details', {
    id: {
        field: 'id',
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    author: {
        field: 'author',
        type: DataTypes.STRING,
        allowNull: false,
    },
    book_id: {
        field: 'book_id',
        type: DataTypes.BIGINT,
        allowNull: false
    },
    copies_sold: {
        field: 'copies_sold',
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_by: {
        field: 'created_by',
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_date: {
        field: 'created_date',
        type: DataTypes.DATE,
        allowNull: false,
    },
    // book_title: {
    //     field: 'book_title',
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    genre: {
        field: 'genre',
        type: DataTypes.STRING,
        allowNull: false,
    },
    publisher: {
        field: 'publisher',
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        field: 'title',
        type: DataTypes.STRING,
        allowNull: false,
    },
    summary: {
        field: 'summary',
        type: DataTypes.STRING,
        allowNull: false,
    },
    release_date: {
        field: 'release_date',
        type: DataTypes.DATE,
        allowNull: false,
    },
    deleted: {
        field: 'deleted',
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    updated_by: {
        field: 'updated_by',
        type: DataTypes.STRING,
        allowNull: true,
    },

},
{
   freezeTableName: true, // Model tableName will be the same as the model name
   timestamps: false,
   tableName: 'quidax_books_details',
   underscored: false
 });

// async function testDb(){
// 	try {
// 		await sequelize.authenticate();
// 		console.log('Connection has been established successfully.');
// 	  } catch (error) {
// 		console.error('Unable to connect to the database:', error);
// 	  }
// }

// testDb();


module.exports = {quidax_books, 
                  quidax_book_tags, 
                  quidax_books_ratings, 
                  quidax_books_users,
                  quidax_books_shopping_cart,
                  quidax_books_details,
                  quidax_book_likes
                }
// const users = sequelize.define('users', {
//     id: {
//         field: 'userid',
//         type: DataTypes.BIGINT,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     email: {
//         field: 'email',
//         type: DataTypes.TEXT,
//         allowNull: false,
//         isEmail: true,   
//         validate: {
//             notEmpty:{
//                 args: true,
//                 msg: "Email Address is Required"
//             },
//             len: {
//                 args: [13, 25],
//                 msg: "Email address must be between the range of 13 to 25 Characters"
//             }
//         }
//     },
//     password: {
//         field: 'password',
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         validate: {
//             notEmpty:{
//                 args: true,
//                 msg: " Password is Required"
//             },
//             len: {
//                 args: [6, 8],
//                 msg: "Password must be between the range of 6 to 8 Characters"
//             }
//         }
//     }
// });

// const shapes = sequelize.define('shapes', {
//     id: {
//         field: 'shapeid',
//         type: DataTypes.BIGINT,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     email: {
//         field: 'email',
//         type: DataTypes.STRING,
//         allowNull: false,
//         isEmail: true, 
//         validate: {
//             notEmpty:{
//                 args: true,
//                 msg: "Email Address is Required"
//             },
//             len: {
//                 args: [13, 25],
//                 msg: "Email address must be between the range of 13 to 25 Characters"
//             }
//         }
//     },
//     shapetype: {
//         field: 'shapetype',
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     payload: {
//         field: 'payload',
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     area: {
//         field: 'area',
//         type: DataTypes.INTEGER,
//     }
// });

// async function testDb(){
// 	try {
// 		await sequelize.authenticate();
// 		console.log('Connection has been established successfully.');
// 	  } catch (error) {
// 		console.error('Unable to connect to the database:', error);
// 	  }
// }

// testDb();
