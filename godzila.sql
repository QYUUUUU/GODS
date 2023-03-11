-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : sam. 11 mars 2023 à 17:35
-- Version du serveur : 5.7.33
-- Version de PHP : 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `godzila`
--

-- --------------------------------------------------------

--
-- Structure de la table `personnage`
--

CREATE TABLE `personnage` (
  `Id_Personnage` int(11) NOT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `age` varchar(50) DEFAULT NULL,
  `genre` varchar(50) DEFAULT NULL,
  `instinct` varchar(50) DEFAULT NULL,
  `signeastro` varchar(50) DEFAULT NULL,
  `origine` varchar(50) DEFAULT NULL,
  `reputation` varchar(50) DEFAULT NULL,
  `depensee` int(11) DEFAULT NULL,
  `totale` int(11) DEFAULT NULL,
  `puissance` int(11) DEFAULT NULL,
  `resistance` int(11) DEFAULT NULL,
  `precicion` int(11) DEFAULT NULL,
  `reflexes` int(11) DEFAULT NULL,
  `connaissance` int(11) DEFAULT NULL,
  `perception` int(11) DEFAULT NULL,
  `volonte` int(11) DEFAULT NULL,
  `arts` int(11) DEFAULT NULL,
  `cite` int(11) DEFAULT NULL,
  `civilisations` int(11) DEFAULT NULL,
  `relationnel` int(11) DEFAULT NULL,
  `soins` int(11) DEFAULT NULL,
  `animalisme` int(11) DEFAULT NULL,
  `faune` int(11) DEFAULT NULL,
  `montures` int(11) DEFAULT NULL,
  `pistage` int(11) DEFAULT NULL,
  `territoire` int(11) DEFAULT NULL,
  `adresse` int(11) DEFAULT NULL,
  `armurerie` int(11) DEFAULT NULL,
  `artisanat` int(11) DEFAULT NULL,
  `mecanisme` int(11) DEFAULT NULL,
  `runes` int(11) DEFAULT NULL,
  `athletisme` int(11) DEFAULT NULL,
  `discretion` int(11) DEFAULT NULL,
  `flore` int(11) DEFAULT NULL,
  `vigilance` int(11) DEFAULT NULL,
  `voyage` int(11) DEFAULT NULL,
  `bouclier` int(11) DEFAULT NULL,
  `cac` int(11) DEFAULT NULL,
  `lancer` int(11) DEFAULT NULL,
  `melee` int(11) DEFAULT NULL,
  `tir` int(11) DEFAULT NULL,
  `eclats` int(11) DEFAULT NULL,
  `lunes` int(11) DEFAULT NULL,
  `mythes` int(11) DEFAULT NULL,
  `pantheons` int(11) DEFAULT NULL,
  `rituels` int(11) DEFAULT NULL,
  `malusphysique` int(11) DEFAULT NULL,
  `malusmanuel` int(11) DEFAULT NULL,
  `malussocial` int(11) DEFAULT NULL,
  `malushumain` int(11) DEFAULT NULL,
  `malusanimal` int(11) DEFAULT NULL,
  `malusoutils` int(11) DEFAULT NULL,
  `malusterres` int(11) DEFAULT NULL,
  `malusarme` int(11) DEFAULT NULL,
  `malusinconnu` int(11) DEFAULT NULL,
  `malusmental` int(11) DEFAULT NULL,
  `Id_Profil` int(11) DEFAULT NULL,
  `empathie` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `personnage`
--

INSERT INTO `personnage` (`Id_Personnage`, `nom`, `age`, `genre`, `instinct`, `signeastro`, `origine`, `reputation`, `depensee`, `totale`, `puissance`, `resistance`, `precicion`, `reflexes`, `connaissance`, `perception`, `volonte`, `arts`, `cite`, `civilisations`, `relationnel`, `soins`, `animalisme`, `faune`, `montures`, `pistage`, `territoire`, `adresse`, `armurerie`, `artisanat`, `mecanisme`, `runes`, `athletisme`, `discretion`, `flore`, `vigilance`, `voyage`, `bouclier`, `cac`, `lancer`, `melee`, `tir`, `eclats`, `lunes`, `mythes`, `pantheons`, `rituels`, `malusphysique`, `malusmanuel`, `malussocial`, `malushumain`, `malusanimal`, `malusoutils`, `malusterres`, `malusarme`, `malusinconnu`, `malusmental`, `Id_Profil`, `empathie`) VALUES
(1, 'Jo', '12', 'Male', 'Gardien', 'dfh', 'dfh', NULL, 0, 12, 1, 1, 1, 3, 4, 3, 3, 3, 1, 1, 0, 3, 0, 1, 2, 4, 0, 0, 3, 6, 2, 3, 1, 0, 0, 6, 1, 3, 4, 2, 5, 1, 1, 4, 2, 5, 1, 12, 12, 12, -12, 21, 21, 2, 21, 12, 4, NULL, 2);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `personnage`
--
ALTER TABLE `personnage`
  ADD PRIMARY KEY (`Id_Personnage`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `personnage`
--
ALTER TABLE `personnage`
  MODIFY `Id_Personnage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
