USE PRESLY;

DROP TABLE IF EXISTS `ZORDERS`;

CREATE TABLE IF NOT EXISTS `ZORDERS`(
  `id` BIGINT UNSIGNED AUTO_INCREMENT,
  `clientName` VARCHAR(255) NOT NULL,
  `purchaseDate` DATETIME NOT NULL,
  `address` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
    `orderStatus` VARCHAR(255) NOT NULL,
  `dueDays` DECIMAL(9, 0),
    `totalUnits` BIGINT NOT NULL,
  `unitPrice` BIGINT NOT NULL,
    `totalBill`  BIGINT NOT NULL,
  PRIMARY KEY (`id`));  

INSERT INTO `presly`.`ZORDERS`
(`clientName`, `orderStatus`, `totalUnits`,`purchaseDate`, `address`,`description`, `unitPrice`,  `dueDays`,`totalBill`) 
VALUE ('Nikolas Marvin', '678', '858', '2021-01-28', 'Monze', 'Bread', '2100', '789', '29');

INSERT INTO `presly`.`ZORDERS` 
(`clientName`, `orderStatus`,`totalUnits`,`purchaseDate`, `address`,`description`, `unitPrice`, `dueDays`,`totalBill`) 
VALUE ('Donard-Trump', '4478', '888', '2007-11-28', 'Lusaka', 'SHOES', 28900, '789', 989*2);
INSERT INTO `presly`.`ZORDERS` 
(`clientName`,`orderStatus`, `totalUnits`,`purchaseDate`, `address`,`description`, `unitPrice`, `dueDays`,`totalBill`) 
VALUE ('Martin Lurther', '678', '85', '2021-11-28', 'NDOLA', 'Groceries', '23', '1789', '21'),
('Louis Nchena', '5678', '8448', '2017-10-28', 'MOSCOW', 'PIZZA', '23', '789', '21'),
('Cathrine Irene', '678', '8558', '2020-07-21', 'NEW-YORK', 'DISH-WASHA', '4567','1909', '21');

SELECT * from ZORDERS ORDER BY ID DESC LIMIT 10;