CREATE SCHEMA IF NOT EXISTS `aromacafe` DEFAULT CHARACTER SET utf8;

CREATE TABLE IF NOT EXISTS `aromacafe`.`products` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
    `unit_price` FLOAT NOT NULL,
    `status` TINYINT NOT NULL,
    PRIMARY KEY (`id_product`))
    ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `aromacafe`.`users` (
    `id_user` VARCHAR(200) NOT NULL,
    `name` VARCHAR(45),
    `email` VARCHAR(200) NOT NULL,
    `imageUrl` VARCHAR(200) NOT NULL,
    `role` VARCHAR(200) NOT NULL,
    PRIMARY KEY (`id_user`))
    ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `aromacafe`.`sales` (
   `id_sale` INT NOT NULL AUTO_INCREMENT,
   `total_value` FLOAT NOT NULL,
   `id_product` INT NOT NULL,
   `amount` INT NOT NULL,
   `unit_price` FLOAT NOT NULL,
   `date` DATE NOT NULL,
   `id_client` VARCHAR(200) NOT NULL,
    `id_seller` VARCHAR(200) NULL,
    `name_client` VARCHAR(200) NOT NULL,
    PRIMARY KEY (`id_sale`),
    INDEX `fk_product_idx` (`id_product` ASC) ,
    INDEX `fk_seller_idx` (`id_seller` ASC) ,
    CONSTRAINT `fk_product`
    FOREIGN KEY (`id_product`)
    REFERENCES `aromacafe`.`products` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
    CONSTRAINT `fk_seller`
    FOREIGN KEY (`id_seller`)
    REFERENCES `aromacafe`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
    ENGINE = InnoDB;
