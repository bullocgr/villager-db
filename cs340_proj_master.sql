
CREATE TABLE `island` (
`name` VARCHAR(255) NOT NULL,
`location` VARCHAR(255) NOT NULL,
`start_date` date,
PRIMARY KEY (`name`),
UNIQUE(`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


CREATE TABLE `player` (
`id` int(11) NOT NULL AUTO_INCREMENT,
`player_name` VARCHAR(255) NOT NULL,
`username` VARCHAR(255) NOT NULL,
`password` VARCHAR(255) NOT NULL,
`island_name` VARCHAR(255) NOT NULL,
CONSTRAINT `ownership_fk_1` FOREIGN KEY (`island_name`) REFERENCES `island` (`name`),
PRIMARY KEY (`id`),
UNIQUE(`id`),
UNIQUE(`password`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `flower` (
`name` VARCHAR(255) NOT NULL,
`color` VARCHAR(255) NOT NULL,
PRIMARY KEY (`name`,`color`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `fruit` (
`name` VARCHAR(255) NOT NULL,
`price` int(11) NOT NULL,
PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `villager` (
`image` VARCHAR(255) NOT NULL,
`name` VARCHAR(255) NOT NULL,
`personality` VARCHAR(255) NOT NULL,
`animal` VARCHAR(255) NOT NULL,
PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `has` (
`flower_name` VARCHAR(255) NOT NULL,
`flower_color` VARCHAR(255) NOT NULL,
`island_name` VARCHAR(255) NOT NULL,
CONSTRAINT `has_fk_1` FOREIGN KEY (`flower_name`,`flower_color`) REFERENCES `flower` (`name`,`color`),
CONSTRAINT `has_fk_2` FOREIGN KEY (`island_name`) REFERENCES `island` (`name`)

) ENGINE=InnoDB DEFAULT CHARSET=latin1;


-- for native its just going to be like the favorite


CREATE TABLE `grows` (
`fruit_name` VARCHAR(255) NOT NULL,
`island_name` VARCHAR(255) NOT NULL,
`native` BOOLEAN NOT NULL,
CONSTRAINT `grows_fk_1` FOREIGN KEY (`fruit_name`) REFERENCES `fruit` (`name`),
CONSTRAINT `grows_fk_2` FOREIGN KEY (`island_name`) REFERENCES `island` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



CREATE TABLE `member` (
`villager_name` VARCHAR(255) NOT NULL,
`island_name` VARCHAR(255) NOT NULL,
`rating` int(11) NOT NULL,
`favorite` boolean,
`join_date` date,
CONSTRAINT `member_fk_1` FOREIGN KEY (`villager_name`) REFERENCES `villager` (`name`),
CONSTRAINT `member_fk_2` FOREIGN KEY (`island_name`) REFERENCES `island` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;



INSERT INTO island VALUES ("=^.^=", "North", 2020-03-20);

INSERT INTO island VALUES ("my island", "South", 2020-03-25);

INSERT INTO island VALUES ("pen island", "South", 2020-03-30);

INSERT INTO island VALUES ("ooboon", "South", 2020-04-20);

INSERT INTO island VALUES ("beaver", "North", 2020-04-01);

INSERT INTO island VALUES ("kanto", "North", 2020-05-06);

INSERT INTO island VALUES ("han", "South", 2020-04-10);

INSERT INTO island VALUES ("i started late", "South", 2020-03-21);

INSERT INTO island VALUES ("terraria", "North", 2020-03-22);

INSERT INTO island VALUES ("noice", "North", 2020-03-22);

​

INSERT INTO player VALUES (1, "Grace", "gswizzle", "Password", (SELECT name FROM island WHERE name = "=^.^="));

INSERT INTO player VALUES (null, "Soren", "soccersoren", "Password", (SELECT name FROM island WHERE name = "my island"));

INSERT INTO player VALUES (null, "Gabi", "gabiv", "Password", (SELECT name FROM island WHERE name = "pen island"));

INSERT INTO player VALUES (null, "Reed", "bbr", "Password", (SELECT name FROM island WHERE name = "ooboon"));

INSERT INTO player VALUES (null, "Alex", "Alex1", "Password", (SELECT name FROM island WHERE name = "beaver"));

INSERT INTO player VALUES (null, "Eric", "Ickabon", "Password", (SELECT name FROM island WHERE name = "kanto"));

INSERT INTO player VALUES (null, "Will", "Will1", "Password", (SELECT name FROM island WHERE name = "han"));

INSERT INTO player VALUES (null, "Matthew", "matt", "Password", (SELECT name FROM island WHERE name = "i started late"));

INSERT INTO player VALUES (null, "Boy", "boi", "Password", (SELECT name FROM island WHERE name = "terraria"));

INSERT INTO player VALUES (null, "Karson", "kkslider", "Password", (SELECT name FROM island WHERE name = "noice"));

​

INSERT INTO villager VALUES ("https://vignette.wikia.nocookie.net/animalcrossing/images/0/07/Admiral_HD.png/revision/latest/scale-to-width-down/350?cb=20180518160412", 

    "Admiral", "Cranky", "Bird");

INSERT INTO villager VALUES ("https://vignette.wikia.nocookie.net/animalcrossing/images/d/dd/NH-Agent_S_poster.png/revision/latest/scale-to-width-down/100?cb=20200410184209", 

    "Agent S", "Peppy", "Squirrel");

INSERT INTO villager VALUES ("https://vignette.wikia.nocookie.net/animalcrossing/images/e/e8/NH-Agnes_poster.png/revision/latest/scale-to-width-down/100?cb=20200410185748", 

    "Agnes", "Sisterly", "Pig");

INSERT INTO villager VALUES ("https://vignette.wikia.nocookie.net/animalcrossing/images/3/33/NH-Aurora_poster.png/revision/latest/scale-to-width-down/100?cb=20200410190924", 

    "Aurora", "Normal", "Penguin");

INSERT INTO villager VALUES ("https://vignette.wikia.nocookie.net/animalcrossing/images/2/2a/NH-Beau_poster.png/revision/latest/scale-to-width-down/100?cb=20200328183936", 

    "Beau", "Lazy", "Deer");

INSERT INTO villager VALUES ("https://vignette.wikia.nocookie.net/animalcrossing/images/4/4c/NH-Bill_poster.png/revision/latest?cb=20200328184045", 

    "Bill", "Jock", "Duck");

INSERT INTO villager VALUES ("https://vignette.wikia.nocookie.net/animalcrossing/images/3/37/NH-Coco_poster.png/revision/latest?cb=20200410185633", 

    "Coco", "Normal", "Rabbit");

INSERT INTO villager VALUES ("https://vignette.wikia.nocookie.net/animalcrossing/images/9/95/NH-Derwin_poster.png/revision/latest/scale-to-width-down/100?cb=20200328200856", 

    "Derwin", "Lazy", "Duck");

INSERT INTO villager VALUES ("https://vignette.wikia.nocookie.net/animalcrossing/images/7/78/NH-Puddles_poster.png/revision/latest/scale-to-width-down/100?cb=20200328224601", 

    "Puddles", "Peppy", "Frog"); 

INSERT INTO villager VALUES ("https://vignette.wikia.nocookie.net/animalcrossing/images/0/0a/NH-Stitches_poster.png/revision/latest/scale-to-width-down/100?cb=20200328232329",

    "Stitches", "Lazy", "Cub");

​

INSERT INTO flower VALUES ("Cosmo", "Red");

INSERT INTO flower VALUES ("Cosmo", "White");

INSERT INTO flower VALUES ("Cosmo", "Yellow");

INSERT INTO flower VALUES ("Rose", "Red");

INSERT INTO flower VALUES ("Rose", "Yellow");

INSERT INTO flower VALUES ("Rose", "White");

INSERT INTO flower VALUES ("Tulip", "Red");

INSERT INTO flower VALUES ("Tulip", "White");

INSERT INTO flower VALUES ("Tulip", "Yellow");

INSERT INTO flower VALUES ("Pansie", "Red");

INSERT INTO flower VALUES ("Pansie", "White");

INSERT INTO flower VALUES ("Pansie", "Yellow");

INSERT INTO flower VALUES ("Lily", "Red");

INSERT INTO flower VALUES ("Lily", "White");

INSERT INTO flower VALUES ("Lily", "Yellow");

INSERT INTO flower VALUES ("Windflower", "Red");

INSERT INTO flower VALUES ("Windflower", "Orange");

INSERT INTO flower VALUES ("Windflower", "White");

INSERT INTO flower VALUES ("Hyacinth", "Red");

INSERT INTO flower VALUES ("Hyacinth", "White");

INSERT INTO flower VALUES ("Hyacinth", "Yellow");

INSERT INTO flower VALUES ("Mum", "Red");

INSERT INTO flower VALUES ("Mum", "White");

INSERT INTO fruit VALUES ("Orange", 400);

INSERT INTO fruit VALUES ("Cherry", 400);

INSERT INTO fruit VALUES ("Pear", 400);

INSERT INTO fruit VALUES ("Peach", 400);

INSERT INTO fruit VALUES ("Apple", 400);
INSERT INTO grows VALUES ((SELECT name FROM fruit WHERE name = "Pear"), (SELECT name FROM island WHERE name = "=^.^="), true);

INSERT INTO grows VALUES ((SELECT name FROM fruit WHERE name = "Apple"), (SELECT name FROM island WHERE name = "=^.^="), false);

INSERT INTO grows VALUES ((SELECT name FROM fruit WHERE name = "Peach"), (SELECT name FROM island WHERE name = "=^.^="), false);

INSERT INTO grows VALUES ((SELECT name FROM fruit WHERE name = "Cherry"), (SELECT name FROM island WHERE name = "=^.^="), false);

INSERT INTO grows VALUES ((SELECT name FROM fruit WHERE name = "Orange"), (SELECT name FROM island WHERE name = "=^.^="), false);

INSERT INTO grows VALUES ((SELECT name FROM fruit WHERE name = "Pear"), (SELECT name FROM island WHERE name = "my island"), false);

INSERT INTO grows VALUES ((SELECT name FROM fruit WHERE name = "Apple"), (SELECT name FROM island WHERE name = "my island"), false);

INSERT INTO grows VALUES ((SELECT name FROM fruit WHERE name = "Peach"), (SELECT name FROM island WHERE name = "my island"), true);

INSERT INTO grows VALUES ((SELECT name FROM fruit WHERE name = "Cherry"), (SELECT name FROM island WHERE name = "my island"), false);

INSERT INTO grows VALUES ((SELECT name FROM fruit WHERE name = "Orange"), (SELECT name FROM island WHERE name = "my island"), false);

INSERT INTO member VALUES ((SELECT name FROM villager WHERE name = "Admiral"), (SELECT name FROM island WHERE name = "=^.^="), 3, false, 2020-03-20);

INSERT INTO member VALUES ((SELECT name FROM villager WHERE name = "Agent S"), (SELECT name FROM island WHERE name = "my island"), 5, true, 2020-03-20);

INSERT INTO member VALUES ((SELECT name FROM villager WHERE name = "Agnes"), (SELECT name FROM island WHERE name = "pen island"), 3, false, 2020-04-20);

INSERT INTO member VALUES ((SELECT name FROM villager WHERE name = "Aurora"), (SELECT name FROM island WHERE name = "ooboon"), 5, true, 2020-03-21);

INSERT INTO member VALUES ((SELECT name FROM villager WHERE name = "Beau"), (SELECT name FROM island WHERE name = "beaver"), 5, true, 2020-05-01);

INSERT INTO member VALUES ((SELECT name FROM villager WHERE name = "Bill"), (SELECT name FROM island WHERE name = "kanto"), 2, false, 2020-04-06);

INSERT INTO member VALUES ((SELECT name FROM villager WHERE name = "Coco"), (SELECT name FROM island WHERE name = "han"), 4, true, 2020-04-06);

INSERT INTO member VALUES ((SELECT name FROM villager WHERE name = "Derwin"), (SELECT name FROM island WHERE name = "i started late"), 1, false, 2020-04-15);

INSERT INTO member VALUES ((SELECT name FROM villager WHERE name = "Puddles"), (SELECT name FROM island WHERE name = "terraria"), 1, false, 2020-03-21);

INSERT INTO member VALUES ((SELECT name FROM villager WHERE name = "Stitches"), (SELECT name FROM island WHERE name = "noice"), 5, true, 2020-03-27);

INSERT INTO has VALUES ((SELECT name FROM flower WHERE name = "Pansie" AND color = "Red"), "Red", (SELECT name FROM island WHERE name = "=^.^="));

INSERT INTO has VALUES ((SELECT name FROM flower WHERE name = "Lily" AND color = "White"), "White", (SELECT name FROM island WHERE name = "=^.^="));

INSERT INTO has VALUES ((SELECT name FROM flower WHERE name = "Hyacinth" AND color = "Yellow"), "Yellow", (SELECT name FROM island WHERE name = "=^.^="));

INSERT INTO has VALUES ((SELECT name FROM flower WHERE name = "Rose" AND color = "Red"), "Red", (SELECT name FROM island WHERE name = "=^.^="));

INSERT INTO has VALUES ((SELECT name FROM flower WHERE name = "Cosmo" AND color = "Yellow"), "Yellow", (SELECT name FROM island WHERE name = "=^.^="));

INSERT INTO has VALUES ((SELECT name FROM flower WHERE name = "Windflower" AND color = "Orange"), "Orange", (SELECT name FROM island WHERE name = "=^.^="));

INSERT INTO has VALUES ((SELECT name FROM flower WHERE name = "Pansie" AND color = "Red"), "Red", (SELECT name FROM island WHERE name = "my island"));

INSERT INTO has VALUES ((SELECT name FROM flower WHERE name = "Lily" AND color = "White"), "White", (SELECT name FROM island WHERE name = "my island"));

INSERT INTO has VALUES ((SELECT name FROM flower WHERE name = "Hyacinth" AND color = "Yellow"), "Yellow", (SELECT name FROM island WHERE name = "my island"));

INSERT INTO has VALUES ((SELECT name FROM flower WHERE name = "Rose" AND color = "Red"), "Red", (SELECT name FROM island WHERE name = "my island"));

INSERT INTO has VALUES ((SELECT name FROM flower WHERE name = "Cosmo" AND color ="Yellow"), "Yellow", (SELECT name FROM island WHERE name = "my island"));

INSERT INTO has VALUES ((SELECT name FROM flower WHERE name = "Windflower" AND color ="Orange"), "Orange", (SELECT name FROM island WHERE name = "my island"));

-- ALL INPUTED INFO IS DENOTED WITH : BEFORE

-- List all villagers general attributes
SELECT name, image, personality, animal FROM villager

-- Admin see how many ids (people registered) there are
SELECT id FROM player 

SELECT * FROM flower

SELECT * FROM fruit

-- Lists player name and friend code from user
SELECT player_name, island_name FROM player WHERE id = :selected_played_id

-- Lists players Flowers
SELECT flower_name, flower_color FROM has WHERE island_name = :selected_island_name_flowers

-- Lists players fruit
SELECT fruit_name, native FROM grows WHERE island_name = :selected_island_name_fruit

-- Lists players villagers
SELECT villager_name, rating FROM member WHERE island_name = :selected_island_name_villager


-- Show all fruits on player island
SELECT player.player_name, grows.fruit_name,
FROM player
INNER JOIN grows ON player.island_name=grows.island_name

-- Show all villagers on island
SELECT island.name, member.villager_name, member.favorite,
FROM island
INNER JOIN member ON island.name = member.island_name


-- Add new villager on island
INSERT INTO member (villager_name, island_name, rating, favorite) VALUES (:new_villager, :host_island_name, :villager_rating_input, :favorite_input)


-- Insert new player in database
INSERT INTO player (player_name, username, password, island_name) VALUES (:new_player, :new_user, :new_user_pass, :new_island)

-- ADD fruit to player Island
INSERT INTO grows (fruit_name, island_name, native) VALUES (:new_fruit, (SELECT island_name FROM player WHERE id = :selected_player_id), :native_input)


-- Change villager rating and favorite value for player 
UPDATE member SET rating = :new_rating, favorite = :new_favorite_input WHERE villager_name = :villager_name_change AND island_name = :user_island

UPDATE player SET island_name = :new_island_name, player_name = :new_player_name WHERE username = :username_change AND password = :user_password
 
UPDATE villager SET villager_name = :new_villager_name WHERE villager_name = :villager_name_change 

-- Delete Member from island
DELETE FROM member WHERE villager_name = :deleted_villager AND island_name = :user_island


-- Delete villager
DELETE FROM villager WHERE villager_name = :deleted_villager
