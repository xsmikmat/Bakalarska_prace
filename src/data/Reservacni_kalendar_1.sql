

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

--
-- Vypisuji data pro tabulku `Reservacni_kalendar_1`
--

INSERT INTO `Reservacni_kalendar_1` (`ID`, `Od`, `Dod`, `Potvrzeni`, `Prijmeni`, `email`, `Telefon`) VALUES
(500, '2024-11-18', '2025-03-23', 1, 'blokace', 'smikmator@seznam.cz', '777550788'),
(472, '2024-08-10', '2024-08-17', 1, 'Moškoř', 'moskor@centrum.cz', '731532501'),
(475, '2024-08-17', '2024-08-24', 1, 'Robková', 'hana.robkova@seznam.cz', '734422835'),
(477, '2024-07-13', '2024-07-20', 1, 'Koudelková ', 'katka.musilova@seznam.cz', '777246408'),
(479, '2024-08-03', '2024-08-10', 1, 'Cihlářová ', 'Cihlarova.n@seznam.cz', '608981422'),
(485, '2024-07-27', '2024-08-03', 1, 'Čermáková ', 'kam.c@seznam.cz', '603479441'),
(486, '2024-07-06', '2024-07-13', 1, 'Kočvara', 'tomas.kocvara22@gmail.com', '704427849'),
(490, '2024-08-24', '2024-08-31', 0, 'Weignerová', 'c.jane@seznam.cz', '777550787'),
(491, '2024-09-05', '2024-09-08', 1, 'Šlosarová', 'slosarová.dana@seznam.cz', '720105345'),
(492, '2024-05-16', '2024-05-19', 1, 'Renza ', 'agv@agv-ideal.cz', '603562572'),
(495, '2024-06-26', '2024-06-29', 1, 'Forst', 'josefforst@seznam.cz', '720994713'),
(496, '2024-07-20', '2024-07-27', 1, 'Stejskalova ', 'v.hrdinova@email.cz ', '+43 660 8637416'),
(497, '2024-06-21', '2024-06-23', 1, 'Gabura', 'gpat@email.cz', '00421905777222'),
(504, '2025-08-16', '2025-08-23', 1, 'Moškoř', 'moskor@centrum.cz', '731532501'),
(506, '2024-09-19', '2024-09-22', 0, 'Cabák', 'cabak@pronachem.cz', '777 727 831'),
(501, '2025-11-24', '2035-12-31', 1, 'blokace', 'smikmator@seznam.cz', '777550788'),
(503, '2025-05-28', '2025-06-01', 0, 'Wetter', 'iwa.prokes@gmail.com', '602307089'),
(505, '2025-08-09', '2025-08-16', 1, 'Robková', 'hana.robkova@seznam.cz', '734422835'),
(510, '2024-10-10', '2024-10-13', 0, 'Fyto 6', 'jaromir.jandak@seznam.cz', '777550788'),
(511, '2025-05-01', '2025-05-04', 1, 'Cvetkovic', 'jani.cvetkovic@gmail.com', '06642190556'),
(521, '2024-10-26', '2024-10-29', 1, 'Komárková', 'alenakomarkova.cz@gmail.com', '733100180'),
(513, '0000-00-00', '0000-00-00', 1, '', '', ''),
(514, '0000-00-00', '0000-00-00', 1, '', '', ''),
(515, '2025-07-12', '2025-07-19', 0, 'Koudelková ', 'katka.musilova@seznam.cz', '777246408'),
(516, '2025-04-18', '2025-04-21', 1, 'Zelnickova Lieblova', 'mlieblova@gmail.com', '602231072'),
(517, '2025-06-28', '2025-07-05', 1, 'Forst', 'josefforst@seznam.cz', '720994713'),
(518, '2025-07-26', '2025-08-02', 1, 'Kuběna', 'ckubena@seznam.cz', '775049884'),
(519, '2024-09-26', '2024-09-29', 1, 'Rech', 'x.thomas@seznam.cz', '721607647'),
(520, '2024-10-04', '2024-10-06', 1, 'Mužíková', 'leamuzikova@gmail.com', '604278262'),
(522, '0000-00-00', '0000-00-00', 1, '', '', ''),
(523, '0000-00-00', '0000-00-00', 1, '', '', ''),
(524, '2025-05-09', '2025-05-11', 0, 'Šmikmátorová', 'drobule93@gmail.com', '777550334'),
(525, '2024-10-18', '2024-10-20', 0, 'Šmikmátorová', 'bam.anna@seznam.cz', '602507109');


