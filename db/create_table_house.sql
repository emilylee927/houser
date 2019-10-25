CREATE TABLE house (
    house_id SERIAL PRIMARY KEY,
    name VARCHAR (50),
    address VARCHAR (200),
    city VARCHAR (50),
    state VARCHAR (10),
    zip VARCHAR (10),
    image_url VARCHAR (500),
    mortgage INTEGER,
    rent INTEGER
);

INSERT INTO house
(name, address, city, state, zip, image_url, mortgage, rent)
VALUES
('Mansion', '89 S 300 E', 'Richfield', 'UT', '82335', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-house-2-1538579843.jpg?crop=1.00xw:0.731xh;0,0.264xh&resize=980:*', 2500, 3125),
('Triplex', '5906 N 23949 W', 'SLC', 'UT', '84349', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/modern-houses-7-1538582168.jpg?crop=1.00xw:0.752xh;0,0.106xh&resize=980:*', 1400, 1700),
('Giant Palace', '10210 Strait Ln', 'Dallas', 'TX', '75229','https://photos.zillowstatic.com/cc_ft_1536/ISesem1a04nhms1000000000.webp', 116754,72680);