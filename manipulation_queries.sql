
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


-- Change villager rating and favorite value for player 
UPDATE member SET rating = :new_rating, favorite = :new_favorite_input WHERE villager_name = :villager_name_change AND island_name = :user_island


-- Delete Member from island
DELETE FROM member WHERE villager_name = :deleted_villager AND island_name = :user_island


-- Delete villager
DELETE FROM villager WHERE villager_name = :deleted_villager