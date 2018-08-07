-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: shop
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `parts`
--

DROP TABLE IF EXISTS `parts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `parts` (
  `partsId` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `surplusstock` int(11) DEFAULT NULL,
  `merchantId` varchar(255) NOT NULL,
  PRIMARY KEY (`partsId`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parts`
--

LOCK TABLES `parts` WRITE;
/*!40000 ALTER TABLE `parts` DISABLE KEYS */;
INSERT INTO `parts` VALUES (0,'V6发动机','/images/engine_1.jpg','大众','中国上海 ','11.1',3000,2789,'1'),(1,'V8发动机','/images/engine_2.jpg','卡迪拉克','美国','22.2',4000,991,'3'),(2,'V8发动机','/images/engine_3.jpg','保时捷','德国','33.3',5000,2974,'7'),(3,'V6发动机','/images/engine_4.jpg','日产','日本','44.4',6000,4998,'5'),(4,'V8发动机','/images/engine_5.jpg','奥迪','德国','55.5',7000,6999,'4'),(5,'LED大灯','/images/LED大灯.jpg','菲利普','中国深圳','66.6',8000,7996,'8'),(6,'电动机','/images/power.jpg','博世','德国','77.7',9000,8998,'9'),(7,'轮胎','/images/tyer_1.jpg','邓禄普','日本','88.8',10000,10000,'10'),(8,'轮胎','/images/tyer_2.jpg','福尔达','德国','99.9',11000,11000,'2'),(9,'轮胎','/images/tyer_3.jpg','普利司通','中国广东','100',12000,11999,'4'),(10,'变速箱','/images/变速箱_1.jpg','ZF','德国','101',13000,13000,'6'),(11,'变速箱','/images/变速箱_2.jpg','爱信','日本','102',14000,13999,'8'),(12,'空调压缩机','/images/压缩机.jpg','光裕','中国上海','103',15000,15000,'1'),(13,'方向盘','/images/方向盘.jpg','安程','中国广东','104',16000,15890,'2'),(14,'火花塞','/images/火花塞.jpg','博世','德国','105',17000,17000,'3'),(15,'蓄电池','/images/蓄电池.jpg','风帆','中国保定','106',18000,17997,'9');
/*!40000 ALTER TABLE `parts` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-07 11:38:33
