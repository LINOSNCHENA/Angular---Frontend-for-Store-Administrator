USE presly;

DROP TABLE IF EXISTS ZCLIENTS;

CREATE TABLE IF NOT EXISTS `ZCLIENTS` (
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `active` TINYINT NOT NULL,
  PRIMARY KEY (`id`)) 

ENGINE=InnoDB;

INSERT INTO `presly`.`ZCLIENTS` 
(`username`, `password`, `active`) 
VALUES 
('presly@gmail.com', 'presly@gmail.com', 1),
('pemba@gmail.ru', 'pemba@gmail.ru', 1), 
('vasteras@yahoo.com', 'vasteras@yahoo.com', 0),
('zamzibar@2019', 'zamzibar@2019', 1);

select * from ZCLIENTS;