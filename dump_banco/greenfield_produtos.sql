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
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(255) NOT NULL,
  `id_entregador` int NOT NULL,
  `nome_do_produto` varchar(50) NOT NULL,
  `preco` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (101,'Camiseta branca de algodão',1,'Camiseta básica',15.55),(102,'Calça jeans rasgada estilo vintage',2,'Calça jeans fashion',15.5),(103,'Tênis de corrida ultraleve',3,'Tênis esportivo',200.5),(104,'Relógio de pulso analógico elegante',1,'Relógio clássico',90.3),(105,'Bolsa de couro sintético resistente',2,'Bolsa moderna',399.5),(106,'Um incrível dispositivo multifuncional para uso diário.',1,'Multifuncional Prime',100),(107,'Gadget avançado para simplificar suas tarefas tecnológicas.',2,'Tech Simplifier X200',101.1),(108,'A ferramenta definitiva para entusiastas de cozinha.',3,'ChefMaster Pro',40.6),(109,'Um acessório elegante e funcional para o seu escritório.',4,'Office Elegance Suite',5.99),(110,'O companheiro perfeito para suas aventuras ao ar livre.',5,'Outdoor Explorer Gear',599),(111,'Solução inovadora para suas necessidades de jardinagem.',1,'Garden Wizard Kit',9.99),(112,'Tecnologia de ponta para sua experiência de entretenimento.',2,'Entertainment Hub Ultra',5.99),(113,'Aparelho fitness para manter seu corpo em forma.',3,'Fitness Tracker Max',7.66),(114,'Equipamento de segurança para sua casa inteligente.',4,'Smart Home Guardian',9.59),(115,'Produto ecológico para um estilo de vida sustentável.',5,'EcoLiving Essentials',79.6);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
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
