-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : mar. 21 mars 2023 à 10:45
-- Version du serveur : 10.9.3-MariaDB
-- Version de PHP : 8.1.10

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
-- Structure de la table `control`
--

CREATE TABLE `control` (
  `Id_Personnage` int(11) NOT NULL,
  `Id_Profil` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

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
  `empathie` int(11) DEFAULT NULL,
  `maxblessurelegere` int(11) NOT NULL,
  `blessurelegere` int(11) NOT NULL,
  `maxblessuregrave` int(11) NOT NULL,
  `blessuregrave` int(11) NOT NULL,
  `maxblessuremortelle` int(11) NOT NULL,
  `blessuremortelle` int(11) NOT NULL,
  `maxeffort` int(11) NOT NULL,
  `effort` int(11) NOT NULL,
  `maxsangfroid` int(11) NOT NULL,
  `sangfroid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `personnage`
--

INSERT INTO `personnage` (`Id_Personnage`, `nom`, `age`, `genre`, `instinct`, `signeastro`, `origine`, `reputation`, `depensee`, `totale`, `puissance`, `resistance`, `precicion`, `reflexes`, `connaissance`, `perception`, `volonte`, `arts`, `cite`, `civilisations`, `relationnel`, `soins`, `animalisme`, `faune`, `montures`, `pistage`, `territoire`, `adresse`, `armurerie`, `artisanat`, `mecanisme`, `runes`, `athletisme`, `discretion`, `flore`, `vigilance`, `voyage`, `bouclier`, `cac`, `lancer`, `melee`, `tir`, `eclats`, `lunes`, `mythes`, `pantheons`, `rituels`, `malusphysique`, `malusmanuel`, `malussocial`, `malushumain`, `malusanimal`, `malusoutils`, `malusterres`, `malusarme`, `malusinconnu`, `malusmental`, `empathie`, `maxblessurelegere`, `blessurelegere`, `maxblessuregrave`, `blessuregrave`, `maxblessuremortelle`, `blessuremortelle`, `maxeffort`, `effort`, `maxsangfroid`, `sangfroid`) VALUES
(1, 'Jo', '12', 'L', 'Gardien', 'dfh', 'dfh', NULL, 0, 12, 3, 1, 1, 3, 3, 3, 3, 6, 1, 1, 4, 3, 0, 1, 2, 4, 0, 0, 1, 4, 2, 3, 1, 0, 2, 6, 2, 3, 6, 2, 5, 1, 2, 4, 2, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 7, 4, 5, 4, 4, 3, 14, 13, 11, 10);

-- --------------------------------------------------------

--
-- Structure de la table `profil`
--

CREATE TABLE `profil` (
  `Id_Profil` int(11) NOT NULL,
  `pseudo` varchar(20) NOT NULL,
  `passw` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `profil`
--

INSERT INTO `profil` (`Id_Profil`, `pseudo`, `passw`) VALUES
(1, 'mesmerde', '4c28ac101d0679d0485e61f6e723524798fb0163b907d4c78a4bbbfdfa3ec10e');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `control`
--
ALTER TABLE `control`
  ADD PRIMARY KEY (`Id_Personnage`,`Id_Profil`),
  ADD KEY `Id_Profil` (`Id_Profil`);

--
-- Index pour la table `personnage`
--
ALTER TABLE `personnage`
  ADD PRIMARY KEY (`Id_Personnage`);

--
-- Index pour la table `profil`
--
ALTER TABLE `profil`
  ADD PRIMARY KEY (`Id_Profil`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `personnage`
--
ALTER TABLE `personnage`
  MODIFY `Id_Personnage` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `profil`
--
ALTER TABLE `profil`
  MODIFY `Id_Profil` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `control`
--
ALTER TABLE `control`
  ADD CONSTRAINT `control_ibfk_1` FOREIGN KEY (`Id_Personnage`) REFERENCES `personnage` (`Id_Personnage`),
  ADD CONSTRAINT `control_ibfk_2` FOREIGN KEY (`Id_Profil`) REFERENCES `profil` (`Id_Profil`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
