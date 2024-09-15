CREATE DATABASE blogger;

CREATE TABLE IF NOT EXISTS blogger.`users` (
`id` INTEGER AUTO_INCREMENT ,
 `fullname` VARCHAR(255) NOT NULL,
 `bio` TEXT NOT NULL,
 `email` VARCHAR(255) NOT NULL UNIQUE,
 `password` VARCHAR(255) NOT NULL,
 `createdAt` DATETIME NOT NULL,
 `updatedAt` DATETIME NOT NULL,
 PRIMARY KEY (`id`));

 CREATE TABLE IF NOT EXISTS blogger.`posts` (
`id` INTEGER AUTO_INCREMENT ,
`title` VARCHAR(255) NOT NULL,
 `category` TEXT NOT NULL,
 `date` DATETIME NOT NULL,
`views` INTEGER,
 `comments` INTEGER,
 `readTime` VARCHAR(255),
 `shares` INTEGER,
`bannerImage` VARCHAR(255) NOT NULL,
 `tags` TEXT NOT NULL,
`createdAt` DATETIME NOT NULL,
 `updatedAt` DATETIME NOT NULL,
 PRIMARY KEY (`id`));
 