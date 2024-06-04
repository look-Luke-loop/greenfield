-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 03-Jun-2024 às 22:28
-- Versão do servidor: 8.0.31
-- versão do PHP: 8.0.26

--
-- Banco de dados: `crudreact`
--

CREATE DATABASE crudreact;
USE crudreact;

-- --------------------------------------------------------

--
-- Estrutura da tabela `entregadores`
--

DROP TABLE IF EXISTS `entregadores`;
CREATE TABLE IF NOT EXISTS `entregadores` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `data_nascimento` varchar(255) NOT NULL,
  `cidade` varchar(255) NOT NULL,
  `fone` varchar(255) NOT NULL,
  `bairro` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `senha` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `entregadores`
--

INSERT INTO `entregadores` (`id`, `nome`, `email`, `data_nascimento`, `cidade`, `fone`, `bairro`, `senha`) VALUES
(8, 'CRIATURA', 'fada@dd', '1999-12-12', 'Recife', '81992789357', 'Sítio dos Pintos', 'miau'),
(9, 'Gilvan', 'alves@gilva', '1999-10-04', 'Recife', '81992789357', 'Sítio dos Pintos', 'miau'),
(7, 'GILVAN ALVES', 'alvesgilvan9@gmail.com', '1999-12-12', 'Camaragibe', '81992789357', 'Santa Mônica', 'miau');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
CREATE TABLE IF NOT EXISTS `pedidos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_etg` int NOT NULL,
  `nome` varchar(255) NOT NULL,
  `valor` decimal(10,2) NOT NULL,
  `quantidade` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `pedidos`
--

INSERT INTO `pedidos` (`id`, `id_etg`, `nome`, `valor`, `quantidade`, `userId`) VALUES
(1, 8, 'picanha', '30.00', 1, 0),
(12, 9, 'cebola', '1.00', 2, 20),
(10, 8, 'picanha', '30.00', 1, 20),
(11, 8, 'picanha', '30.00', 1, 20),
(9, 8, 'repolho', '3.00', 2, 20),
(13, 9, 'tomate', '2.00', 5, 20);

-- --------------------------------------------------------

--
-- Estrutura da tabela `produtos`
--

DROP TABLE IF EXISTS `produtos`;
CREATE TABLE IF NOT EXISTS `produtos` (
  `idprimary` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `valor` varchar(255) NOT NULL,
  `id` int NOT NULL,
  PRIMARY KEY (`idprimary`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `produtos`
--

INSERT INTO `produtos` (`idprimary`, `nome`, `valor`, `id`) VALUES
(3, 'tomate', '2', 9),
(4, 'picanha', '30', 8),
(5, 'repolho', '3', 8),
(6, 'cebola', '1', 9);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fone` varchar(255) NOT NULL,
  `data_nascimento` varchar(255) NOT NULL,
  `cidade` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `bairro` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `senha` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `fone`, `data_nascimento`, `cidade`, `bairro`, `senha`) VALUES
(21, 'Xiva', 'xiva@xi', '81992789357', '1992-12-12', 'Recife', 'Sítio dos Pintos', 'xiva'),
(20, 'asf', 'asf@af', '81992789357', '1999-12-12', 'Recife', 'Sítio dos Pintos', 'coisinha');
COMMIT;
