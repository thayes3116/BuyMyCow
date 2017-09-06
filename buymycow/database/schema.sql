CREATE DATABASE `cowauction`;

USE `cowauction`;

CREATE TABlE `Cows`
(
	id INT NOT NULL AUTO_INCREMENT, 
	`cow` VARCHAR(255), 
	PRIMARY KEY (`id`)
);

CREATE TABLE `Bids`
(	
	id INT NOT NULL AUTO_INCREMENT,
	`bidder` VARCHAR(255),
	`bidamount` INT,
	`cow_id` INT,
	PRIMARY KEY (`id`)
);