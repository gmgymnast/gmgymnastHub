CREATE TABLE users (
	idUsers int(11) AUTO_INCREMENT PRIMARY NOT NULL,
    uidUsers TINYTEXT NOT NULL,
    emailUsers TINYTEXT NOT NULL,
    pwdUsers LONGTEXT NOT NULL,
    genderUsers TINYTEXT,
    bdMonthUsers INT(2) ZEROFILL,
    bdDayUsers INT(2) ZEROFILL,
   	bdYearUsers INT(2) ZEROFILL
);

CREATE TABLE pwdReset (
	pwdResetId int(11) PRIMARY KEY AUTO_INCREMENT NOT NULL,
    pwdResetEmail TEXT NOT NULL,
    pwdResetSelector TEXT NOT NULL,
    pwdResetToken LONGTEXT NOT NULL,
    pwdResetExpires TEXT NOT NULL
);

CREATE TABLE generaldiscussioncontents (
	idPosts int(11) not null AUTO_INCREMENT PRIMARY KEY,
    uid TEXT not null,
    title varchar(128) not null,
    date datetime not null,
    message TEXT not null
);