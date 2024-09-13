CREATE DATABASE blogger;

CREATE TABLE IF NOT EXISTS blogger.`users`(
`id` INTEGER AUTO_INCREMENT,
`username` VARCHAR(255) NOT NULL,
`email` VARCHAR(255) NOT NULL UNIQUE,
`password` VARCHAR(255) NOT NULL,
`status` VARCHAR(255),
`orderhistory` VARCHAR(255),
PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS blogger.`products`(
`id` INTEGER AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL,
`description` VARCHAR(255),
`price` INTEGER,
`category` VARCHAR(255),
`image` VARCHAR(255),
`discount` VARCHAR(255),
`rating` VARCHAR(255),
`reviews` VARCHAR(255),
PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS blogger.`orders` (
`id` INTEGER AUTO_INCREMENT ,
`userid` INTEGER ,
`productid` INTEGER,
`quantity` INTEGER,
`totalprice` INTEGER,
`createdAt` DATETIME,
`updatedAt`INTEGER,
`satus` VARCHAR(255),
`shippingadress` VARCHAR(255),
`billingadress` VARCHAR(255),
`trackingnumber` INTEGER,
`paymentid` INTEGER,
PRIMARY KEY (`id`));