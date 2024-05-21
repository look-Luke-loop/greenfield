CREATE DATABASE  IF NOT EXISTS `greenfield` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `greenfield`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: greenfield
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_user` int DEFAULT NULL,
  `id_entregador` int DEFAULT NULL,
  `data_pedido` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `endereco_entrega` varchar(255) DEFAULT NULL,
  `total_pedido` decimal(10,2) DEFAULT NULL,
  `avaliacao` int DEFAULT NULL,
  `estado` int DEFAULT NULL,
  `data_entrega` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
INSERT INTO `pedido` VALUES (1,1,2,'2024-05-13 22:20:25','Rua Não Principal, 143',30.00,NULL,1,NULL),(2,1,3,'2023-05-10 17:20:00','Rua das Flores, 45',120.50,4,1,'2023-05-15'),(3,2,1,'2023-05-11 12:15:00','Avenida Brasil, 100',75.20,5,2,NULL),(4,1,3,'2024-05-13 19:18:42','Rua Principal, 123',50.00,NULL,2,NULL),(5,4,2,'2023-05-13 19:30:00','Rua Azul, 78',230.00,4,2,NULL),(6,5,4,'2023-05-14 13:05:00','Avenida Central, 56',99.99,2,3,NULL),(7,1,1,'2023-05-15 11:00:00','Rua Nova, 150',350.75,5,1,'2023-05-18'),(8,2,3,'2023-05-16 16:25:00','Avenida Paulista, 222',47.30,4,1,'2023-05-19'),(9,3,5,'2023-05-17 14:50:00','Rua Amarela, 77',410.60,3,2,NULL),(10,4,2,'2023-05-18 18:10:00','Avenida do Sol, 90',55.00,4,1,'2023-05-21'),(11,5,4,'2023-05-19 10:45:00','Rua das Palmeiras, 33',205.40,5,2,NULL),(12,3,5,'2023-05-12 15:45:00','Rua Verde, 23',180.00,3,1,'2023-05-16');
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-21 10:18:37
