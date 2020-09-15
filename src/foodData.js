// //breakfast
// https://i.ibb.co/L8DTd0v/breakfast1.png
// https://i.ibb.co/gT5qBqK/breakfast2.png
// https://i.ibb.co/vXWKt0g/breakfast3.png
// https://i.ibb.co/KKBYMwK/breakfast4.png
// https://i.ibb.co/s1bWqZv/breakfast5.png
// https://i.ibb.co/mXT7tqB/breakfast6.png





const foodData=[
    {
        id:1,
        name:"Eggs Benedict",
        img:"https://i.ibb.co/L8DTd0v/breakfast1.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"breakfast",
        price:9.99
    },
    {
        id:2,
        name:"Breakfast Sandwich",
        img:"https://i.ibb.co/gT5qBqK/breakfast2.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"breakfast",
        price:8.50
    },
    {
        id:3,
        name:"Baked Chicken",
        img:"https://i.ibb.co/vXWKt0g/breakfast3.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"breakfast",
        price:6.70
    },
    {
        id:4,
        name:"Bagel and Creame Cheese",
        img:"https://i.ibb.co/KKBYMwK/breakfast4.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"breakfast",
        price:7.99
    },
    {
        id:5,
        name:"Fried Egg Toast Branch",
        img:"https://i.ibb.co/s1bWqZv/breakfast5.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"breakfast",
        price:5.99
    },

    {
        id:6,
        name:"Toast Croissant Fried Egg",
        img:"https://i.ibb.co/mXT7tqB/breakfast6.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"breakfast",
        price:9.10
    },


// // Lunch
// https://i.ibb.co/j4zQkh9/lunch1.png
// https://i.ibb.co/BCzfTFL/lunch2.png
// https://i.ibb.co/p1rGy01/lunch3.png
// https://i.ibb.co/gyz8Scf/lunch4.png
// https://i.ibb.co/NNqtRf4/lunch5.png
// https://i.ibb.co/jhV5x8R/lunch6.png

    {
        id:7,
        name:"Beef Steak",
        img:"https://i.ibb.co/j4zQkh9/lunch1.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"lunch",
        price:12.99
    },
    {
        id:8,
        name:"Honey-Soy-Glazed Salmon with Peepers",
        img:"https://i.ibb.co/BCzfTFL/lunch2.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"lunch",
        price:11.99
    },
    {
        id:9,
        name:"Tarragon-Rubbed-Salmon",
        img:"https://i.ibb.co/p1rGy01/lunch3.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"lunch",
        price:13.10
    },
    {
        id:10,
        name:"Indian Lunch",
        img:"https://i.ibb.co/gyz8Scf/lunch4.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"lunch",
        price:11.10
    },
    {
        id:11,
        name:"Fried Chicken Bento",
        img:"https://i.ibb.co/NNqtRf4/lunch5.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"lunch",
        price:9.10
    },
    {
        id:12,
        name:"Healthy Meal Plan",
        img:"https://i.ibb.co/jhV5x8R/lunch6.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"lunch",
        price:15.99
    },

//dinnar
// https://i.ibb.co/BNsnXsF/dinner1.png
// https://i.ibb.co/fnB5QqT/dinner2.png
// https://i.ibb.co/cYXh693/dinner3.png
// https://i.ibb.co/bWS8XXx/dinner4.png
// https://i.ibb.co/h7kBcyx/dinner5.png
// https://i.ibb.co/m9cRpLh/dinner6.png


    {
        id:13,
        name:"Baked Chicken",
        img:"https://i.ibb.co/BNsnXsF/dinner1.png",
        shortDescription:"How we dream about our future",
        description:"Food,  substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"dinner",
        price:11.99
    },
    {
        id:14,
        name:"Lemony Salmon Picatta",
        img:"https://i.ibb.co/fnB5QqT/dinner2.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"dinner",
        price:12
    },
    {
        id:15,
        name:"Garlic Butter Baked Salmon",
        img:"https://i.ibb.co/cYXh693/dinner3.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"dinner",
        price:12.50
    },
    {
        id:16,
        name:"French Fries with Cheese",
        img:"https://i.ibb.co/bWS8XXx/dinner4.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"dinner",
        price:12.99
    },
    {
        id:17,
        name:"Pork Tenderloin with Quinoa Pilaf",
        img:"https://i.ibb.co/h7kBcyx/dinner5.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"dinner",
        price:9.99
    },
    {
        id:18,
        name:"Salmon with Grape Fruit",
        img:"https://i.ibb.co/m9cRpLh/dinner6.png",
        shortDescription:"How we dream about our future",
        description:"Food, substance consisting essentially of protein, carbohydrate, fat, and other nutrients used in the body of an organism to sustain growth and vital processes and to furnish energy. The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.Food is an important topic of conversation to master. With a healthy food vocabulary, you’ll not only have valuable conversations with native English speakers, but you’ll also explore their culture through cuisine ",
        category:"dinner",
        price:10.10
    },
    
    
]
export default foodData