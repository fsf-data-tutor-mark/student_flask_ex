CREATE TABLE EightStates (
	State VARCHAR(255) NOT NULL,
	State_Abbreviation VARCHAR(255) NOT NULL,
	Year INT NOT NULL,
	Gender VARCHAR(255) NOT NULL,
	EduLevel VARCHAR(255) NOT NULL,
	EduLevelCode INT NOT NULL,
	Births INT NOT NULL,
	AvgMotherAge FLOAT NOT NULL,
	AvgBirthWeight FLOAT NOT NULL
);



CREATE TABLE MergedGenders (
	State VARCHAR(255) NOT NULL,
	State_Abbreviation VARCHAR(255) NOT NULL,
	Year INT NOT NULL,
	EduLevel VARCHAR(255) NOT NULL,
	EduLevelCode INT NOT NULL,
	Births INT NOT NULL
);

CREATE TABLE MergedYears(
	State VARCHAR(255) NOT NULL,
	State_Abbreviation VARCHAR(255) NOT NULL,
	EduLevel VARCHAR(255) NOT NULL,
	EduLevelCode INT NOT NULL,
	Births INT NOT NULL
);