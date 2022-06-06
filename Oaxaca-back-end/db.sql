/**
	<summary>Creates users table in the database, stores information about
	restourant staff and clients. Informationn: id, email, first name, surname,
	and type(client, waiter, kitchen staff)</summary>
**/
CREATE TABLE users (
	id serial PRIMARY KEY,
	email VARCHAR(100) UNIQUE NOT NULL,
	firstname VARCHAR(100) NOT NULL,
	surname VARCHAR(100) NOT NULL,
	type VARCHAR(20) NOT NULL
);
/**
<summary>Creates login table in the database, users log using email and password
information: id, hash and email</summary>
**/
CREATE TABLE login (
	id serial PRIMARY KEY,
	hash varchar(100) NOT NULL,
	email VARCHAR(100) UNIQUE NOT NULL
);

/**
<summary>Creates orders table in the databse, contains all customer oders.
Information: id, tablenumber, basketitems, timeordered, stage, totalcost,
paid</summary>
**/
CREATE TABLE orders (
	id serial PRIMARY KEY,
	tablenumber int NOT NULL,
	basketitems varchar(200) NOT NULL,
	timeordered varchar(100) NOT NULL,
	stage varchar(100) NOT NULL,
	totalcost decimal(6, 2) NOT NULL,
	paid boolean NOT NULL
);
/**
<summary>Creates food table in the database, stores infromation about all dishes
in the menu. Information: id, dish_name, price, description, type, allergy,
calories, available, imageURL</summary>
**/
CREATE TABLE food (
	id serial PRIMARY KEY,
	dish_name varchar(100) NOT NULL,
	price decimal(6, 2) NOT NULL,
	description varchar(100) NOT NULL,
	type varchar(50) NOT NULL,
	allergy varchar(100) NOT NULL,
	calories int NOT NULL,
	available boolean NOT NULL,
	imageURL varchar(300) NOT NULL
);
/**
<summary>Creates payments table in the database, stores information about client
card, order info (id) and amount to pay. Information: id, bankaccountnumber,
expirationdate, nameoncard, order_id, total_cost</summary>
**/
CREATE TABLE payments (
	id serial PRIMARY KEY,
	bankaccountnumber int NOT NULL,
	expirationdate int NOT NULL,
	nameoncard varchar(50) NOT NULL,
	order_id int NOT NULL,
	total_cost decimal(6, 2)
);
/**
<summary>Creates customercalls table in the database, used to signal the waiter
that customer needs assistance. Information:id, tablenumber, timecalled</summary>
**/
CREATE TABLE customercalls (
	id serial PRIMARY KEY,
	tablenumber int NOT NULL,
	timecalled varchar(100) NOT NULL
);
/**
<summary>Creates table tables, used to assign waiters to table that is still not
covered Information: tablenumber, assigned</summery>
**/
CREATE Table tables (
	tablenumber int NOT NULL,
	assigned boolean NOT NULL
);
/**
<summery>Insertion methods for creating restourant tables, not assign from defoult</summary>
**/
INSERT INTO tables(tablenumber, assigned)
VALUES (1, false);

INSERT INTO tables(tablenumber, assigned)
VALUES (2, false);

INSERT INTO tables(tablenumber, assigned)
VALUES (3, false);

INSERT INTO tables(tablenumber, assigned)
VALUES (4, false);

INSERT INTO tables(tablenumber, assigned)
VALUES (5, false);

INSERT INTO tables(tablenumber, assigned)
VALUES (6, false);

INSERT INTO tables(tablenumber, assigned)
VALUES (7, false);

INSERT INTO tables(tablenumber, assigned)
VALUES (8, false);

INSERT INTO tables(tablenumber, assigned)
VALUES (9, false);

INSERT INTO tables(tablenumber, assigned)
VALUES (10, false);

/**
<summary>insertion methods for filling food table with dishes</summary>
**/
INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Enchilada Chicken', 9.99, 'Tasty chicken enchilada as made in Mexico city.', 'starter', 'nuts', 700, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-enchilada-chicken-pinterest-still001-1533073454.jpg?crop=1xw:1xh;center,top&resize=980:*');

INSERT INTO food(dish_name, price, description,type, allergy, calories, available, imageURL)
VALUES ('Shrimp Enchiladas', 8.99, 'Give chicken a break.', 'starter', 'shrimp', 350, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/shrimp-enchiladas-vertical-1533651530.png?crop=1xw:1xh;center,top&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Burrito Egg Rolls', 11.99, 'This is the ultimate hybrid!!!', 'starter', 'egg', 300, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-burrito-egg-rolls-still002-1549561812.jpg?crop=0.451xw:1.00xh;0.199xw,0&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Chili Cheese Crunchwrap', 7.99, 'Better than the Taco Bell original...', 'starter', 'lactoze', 400, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-chili-cheese-crunchwrap-pin-1548972033.jpg?crop=1xw:0.7878151260504201xh;center,top&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Chicken Enchilada Sliders', 8.99, 'Your favorite chicken enchiladas sandwiched between a soft bun.', 'starter', 'lactoze', 500, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-chicken-enchilada-sliders-still003-1548793257.jpg?crop=0.45xw:1xh;center,top&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Shrimp Tostada Bites', 9.99, 'The perfect summer appetizer.', 'starter', 'shrimp', 400, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/09/1520215691-shot-6-456-1.jpg?crop=1.0xw:1xh;center,top&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Taco Roll-Ups', 9.99, 'Crescent rolls with beef taco filling.', 'starter', 'meat', 350, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/15/42/1444942054-taco-roll-ups-delish.jpg?crop=1.0xw:1xh;center,top&resize=768:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Black Bean Chili', 8.99, 'Turn up the heat with this zesty chicken and black bean chili.', 'starter', 'lactoze', 350, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/02/1452619463-delish-skinny-chili-quinoa-1.jpg?crop=1.0xw:1xh;center,top&resize=768:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Street Corn Nachos', 7.99, 'It is the nacho topping you never expected to fall insanely in love with.', 'starter', 'lactoze', 300, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/02/mexican-street-corn-nachos-800-3298.jpg?crop=1xw:0.999375xh;center,top&resize=768:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Mexican Rice', 6.99, 'You can not have a Mexican meal without rice and beans.', 'starter', 'none', 300, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/07/640x959/easy-mexican-pinto-beans-with-rice-5-683x1024.jpg?resize=768:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Lime Shredded Beef', 7.99, 'Slow-Cooked chili lime shredded beef straight out of the bowl.', 'starter', 'none', 300, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/07/slow-cooker-chili-lime-shredded-beef-1-1.jpg?crop=1xw:0.999375xh;center,top&resize=768:*');





INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Tacos with Pineapple', 12.99, 'You wll want to use the pineapple slaw on everything.', 'main', 'lactoze', 600, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pulled-pork-1529441523.jpg?crop=1xw:1xh;center,top&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Shredded Beef Enchiladas', 14.99, 'These enchiladas are the best excuse to visit us on a Friday night.', 'main', 'lactoze', 700, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/11/1489789764-delish-shredded-beef-enchiladas-1.jpg?crop=1.0xw:1xh;center,top&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Cheesy Beef Empanadas', 11.99, 'Everything you could ever want in one convenient pocket.', 'main', 'lactoze', 550, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/17/640x958/gallery-1493067166-delish-cheesy-beef-empanadas-pin-1.jpg?resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Posole', 8.99, 'Enjoy the comfort of this Mexican favorite without any of the work.', 'main', 'none', 350, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/1600x2399/gallery-1506455950-delish-posole-2.jpg?resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Chicken Enchilada Soup', 8.99, 'Best for cold winter evenings.', 'main', 'none', 550, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/49/640x959/gallery-1512441530-delish-crock-pot-chicken-enchilada-soup-pinterest-still003.jpg?resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Cheesy Chicken Tacos', 12.99, 'Plate of tacos is always great to share with friends.', 'main', 'lactoze', 650, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cheesy-baked-tacos-horizonal-1534962836.jpg?crop=1xw:1xh;center,top&resize=768:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Chicken Tamale Pie', 13.99, 'A layer of cornbread topped with cheesy shredded chicken.', 'main', 'lactoze', 460, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/45/640x959/gallery-1478560858-delish-chicken-tamale-pie-pin-3.jpg?resize=768:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Cheesy Burritos', 11.99, 'Plate of chicken burritos with extra cheese.', 'main', 'lactoze', 470, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/burrito-1530630225.jpg?crop=1xw:1xh;center,top&resize=768:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Chicken Fajita Quesadillas', 9.99, 'Quesadillas filled with chicken fajitas, melty pepper jack, and zingy cilantro pesto.', 'main', 'none', 390, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/13/2048x2528/gallery-1459724864-delish-cilantro-pesto-quesadilla.jpg?resize=768:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Corn Croquettes', 11.99, 'If you love Mexican street corn, just wait until you try it fried.', 'main', 'none', 490, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/07/mexican-street-corn-croquettes-3.jpg?crop=1.0xw:1xh;center,top&resize=768:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Beef Taco Boats', 10.99, 'Your new favorite way to eat a taco.', 'main', 'none', 390, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/41/1507827482-beef-taco-boats-delish.jpg?crop=0.9998000399920016xw:1xh;center,top&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Keto Taquitos', 10.99, 'Those taquitos are pefrect for shering', 'main', 'lactoze', 390, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-06-19-at-5-36-08-pm-1529444185.png?crop=1xw:1xh;center,top&resize=980:*');





INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Beignets', 6.99, 'These pillowy donuts are a Mardi Gras must.', 'dessert', 'yeast', 450, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-beignets-1521241009.png?crop=0.447xw:1.00xh;0.265xw,0&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Sweet Potato Pie', 7.99, 'If you only make this southern treat on Thanksgiving, it is time to expand your horizons.', 'dessert', 'egg', 600, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/1506636203-sweet-potato-pie-2.jpg?crop=1xw:1xh;center,top&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Pecan Pie', 6.99, 'Classical New Orleans peacan pie', 'dessert', 'egg', 600, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/1506635653-pecan-pie-1.jpg?crop=1xw:1xh;center,top&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Pecan Pie Cheesecake', 8.99, ' Cheesecake is better slathered in pecan pie filling.', 'dessert', 'peanuts', 500, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-pecan-pie-cheesecake-pin-1542049493.jpg?crop=1xw:0.9453781512605042xh;center,top&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Bourbon Pecan Pie', 10.99, 'This rich, crunchy pie is just boozy enough for Mardi Gras.', 'dessert', 'peanuts', 400, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/15/45/1446755788-dark-chocolate-bourbon-pecan-pie-15.jpg?crop=0.478xw:1.00xh;0.264xw,0&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Moon Rock Pudding', 8.99, 'This casserole-style take on bread pudding will feed the whole room.', 'dessert', 'none', 300, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/moon-rock-bread-pudding-vertical-002-1538689845.jpg?crop=0.881xw:0.882xh;0.0629xw,0.118xh&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Monkey Bread', 7.99, 'This colorfull bread is perfect for sweet ending.', 'dessert', 'none', 400, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mardi-gras-monkey-bread-13-1551210460.jpg?crop=0.794xw:1.00xh;0,0&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('Pecan Pie Martinis', 7.99, 'If there were ever a time to make dessert your drink...Mardi Gras could be it.', 'dessert', 'none', 200, true, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-pecan-pie-martinis-pinterest-still001-1-1540992296.jpg?crop=1xw:1xh;center,top&resize=980:*');

INSERT INTO food(dish_name, price, description, type, allergy, calories, available, imageURL)
VALUES ('New Orleans Pudding', 8.99, 'Bourbon sauce is a game changer when it comes to dressing up bread pudding.', 'dessert', 'none', 350, true, 'https://hips.hearstapps.com/del.h-cdn.co/assets/15/38/bread-pudding-b-vertical.jpg?crop=0.743xw:1.00xh;0.0476xw,0&resize=980:*');
