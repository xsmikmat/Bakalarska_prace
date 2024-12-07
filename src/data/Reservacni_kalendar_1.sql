

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `Reservacni_kalendar_1` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Od` date NOT NULL,
  `Dod` date NOT NULL,
  `Potvrzeni` int(11) NOT NULL,
  `Prijmeni` text COLLATE latin2_czech_cs NOT NULL,
  `email` text COLLATE latin2_czech_cs NOT NULL,
  `Telefon` text COLLATE latin2_czech_cs NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin2 COLLATE=latin2_czech_cs AUTO_INCREMENT=526 ;


