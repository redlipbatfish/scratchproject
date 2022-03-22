CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    user_name VARCHAR(30) NOT NULL UNIQUE, 
    email VARCHAR(40) NOT NULL UNIQUE,
    password VARCHAR(40) NOT NULL
)

CREATE TABLE habits(
    id SERIAL PRIMARY KEY,
    habit_name VARCHAR(30) NOT NULL,
    is_boolean BOOLEAN NOT NULL
)

CREATE TABLE user_habits(
    user_id INTEGER,
    habit_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(habit_id) REFERENCES habits(id),
    target_num INTEGER,
    active BOOLEAN
)

CREATE TABLE user_habit_records(
    user_id INTEGER,
    habit_id INTEGER,
    FOREIGN KEY(user_id)  REFERENCES users(id),
    FOREIGN KEY(habit_id)  REFERENCES habits(id),
    date DATE,
    fullfilled_percent DECIMAL
)

CREATE TABLE daily_count(
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(id),
    date DATE,
    total_percent DECIMAL
)

-- Add users
INSERT INTO users (first_name, last_name, user_name, email, password)
VALUES('Yankun', 'Song', 'bigcat', 'yankun@gmail.com', '1234'),
('Ernest', 'Leung', 'Ernest', 'ernest@gmail.com', '1234');

-- Add Habits
INSERT INTO habits (habit_name, is_boolean)
VALUES('Water', false),
('Make Bed', true),
('Walk Dog', false),
('Sleep on Time', true),
('Stretch', false);

-- Add User-Habits
INSERT INTO user_habits (user_id, habit_id, target_num, active)
VALUES
(1, 2, NULL, true),(1, 4, NULL, true),(1, 1, 3, true),(1, 3, 3, true),(1, 5, 5, true),
(2, 2, NULL, true),(2, 4, NULL, true),(2, 1, 3, true),(2, 3, 5, true),(2, 5, 2, true)

-- Add user habit record
INSERT INTO user_habit_records (user_id, habit_id, date, fullfilled_percent)
VALUES
(1, 2, '2022-03-01', 0.18),(1, 5, '2022-03-01', 0.01),(1, 4, '2022-03-02', 0.55),
(1, 1, '2022-03-02', 0.29),(1, 3, '2022-03-03', 0.35),(1, 1, '2022-03-03', 0.75),
(1, 2, '2022-03-04', 1),(1, 2, '2022-03-05', 1),(1, 3, '2022-03-05', 1),
(1, 5, '2022-03-06', 1),(1, 1, '2022-03-06', 0.79),(1, 3, '2022-03-07', 0.67),
(1, 4, '2022-03-07', 0.05),(1, 4, '2022-03-08', 0.56),(1, 3, '2022-03-09', 1),
(1, 5, '2022-03-09', 1),(1, 4, '2022-03-10', 0.82),(1, 2, '2022-03-10', 0.34),
(1, 4, '2022-03-11', 0.73),(1, 2, '2022-03-11', 0.1),(1, 2, '2022-03-12', 0.4),
(1, 3, '2022-03-13', 0.24),(1, 4, '2022-03-13', 0.05),(1, 4, '2022-03-14', 0.11),
(1, 3, '2022-03-14', 0.71),(1, 1, '2022-03-15', 1),(1, 2, '2022-03-15', 1),
(1, 4, '2022-03-16',1),(1, 3, '2022-03-16', 0.28),(1, 4, '2022-03-17', 0.15),
(1, 1, '2022-03-18', 1),(1, 5, '2022-03-18', 1),(1, 1, '2022-03-19', 0.59),
(1, 4, '2022-03-19', 0.6),(1, 3, '2022-03-20', 0.01),(1, 2, '2022-03-20', 0.41),
(2, 5, '2022-03-01', 0.82),(2, 4, '2022-03-01', 0.7),(2, 3, '2022-03-02', 1),
(2, 5, '2022-03-02', 0.32),(2, 2, '2022-03-03', 0.68),(2, 4, '2022-03-03', 0.08),
(2, 5, '2022-03-04', 1),(2, 2, '2022-03-04', 0.13),(2, 3, '2022-03-05', 0.52),
(2, 1, '2022-03-05', 0.31),(2, 5, '2022-03-06', 1),(2, 2, '2022-03-06', 1),
(2, 5, '2022-03-07', 0.74),(2, 4, '2022-03-07', 0.2),(2, 3, '2022-03-08', 0.36),
(2, 5, '2022-03-08', 0.57),(2, 3, '2022-03-09', 0.09),(2, 1, '2022-03-09', 0.98),
(2, 4, '2022-03-10', 1),(2, 2, '2022-03-10', 1.0),(2, 5, '2022-03-11', 1),
(2, 2, '2022-03-11', 1),(2, 2, '2022-03-12', 0.98),(2, 1, '2022-03-12', 1),
(2, 2, '2022-03-13', 1),(2, 5, '2022-03-14', 0.13),(2, 2, '2022-03-14', 0.27),
(2, 5, '2022-03-15',1),(2, 2, '2022-03-15', 0.65),(2, 5, '2022-03-16', 0.61),
(2, 1, '2022-03-16', 0.7),(2, 3, '2022-03-17',1),(2, 5, '2022-03-17', 0.49),
(2, 1, '2022-03-18', 0.33),(2, 3, '2022-03-18', 1),(2, 1, '2022-03-19', 0.16),
(2, 2, '2022-03-19', 0.17),(2, 5, '2022-03-20', 0.65),(2, 4, '2022-03-20', 0.59)


-- Add March daily count
INSERT INTO daily_count (user_id, date, total_percent)
VALUES
(1,'2022-03-01', 0.47),(1,'2022-03-02', 0.53),(1,'2022-03-03', 0.06),
(1,'2022-03-04', 1),(1,'2022-03-05', 1),(1,'2022-03-06', 0.28),
(1,'2022-03-07', 1),(1,'2022-03-08', 1),(1,'2022-03-09', 0.09),
(1,'2022-03-10', 1),(1,'2022-03-11', 0.02),(1,'2022-03-12', 0.22),
(1,'2022-03-13', 1),(1,'2022-03-14', 0.79),(1,'2022-03-15', 0.33),
(1,'2022-03-16', 0.88),(1,'2022-03-17', 0.63),(1,'2022-03-18', 0.84),
(1,'2022-03-19', 0.29),(1,'2022-03-20', 0.02),(2,'2022-03-01', 0.7),
(2,'2022-03-02', 1),(2,'2022-03-03', 0.9),(2,'2022-03-04', 0.35),
(2,'2022-03-05', 0.65),(2,'2022-03-06', 1),(2,'2022-03-07', 1),
(2,'2022-03-08', 0.43),(2,'2022-03-09', 0.42),(2,'2022-03-10', 0.96),
(2,'2022-03-11', 0.26),(2,'2022-03-12', 0.22),(2,'2022-03-13', 0.94),
(2,'2022-03-14', 0.95),(2,'2022-03-15', 0.32),(2,'2022-03-16', 0.01),
(2,'2022-03-17', 0.29),(2,'2022-03-18', 0.65),(2,'2022-03-19', 0.41),
(2,'2022-03-20', 1)


-- Add Feb daily count
INSERT INTO daily_count (user_id, date, total_percent)
VALUES
(1,'2022-02-01', 0.15),(1,'2022-02-02', 0.58),(1,'2022-02-03', 0.87),
(1,'2022-02-04', 0.26),(1,'2022-02-05', 1),(1,'2022-02-06', 0.96),
(1,'2022-02-07', 1),(1,'2022-02-08', 0.45),(1,'2022-02-09', 0.2),
(1,'2022-02-10', 0.45),(1,'2022-02-11', 0.14),(1,'2022-02-12', 0.17),
(1,'2022-02-13', 0.63),(1,'2022-02-14', 0.3),(1,'2022-02-15', 0.94),
(1,'2022-02-16', 0.3),(1,'2022-02-17', 0.28),(1,'2022-02-18', 0.14),
(1,'2022-02-19', 0.33),(1,'2022-02-20', 0.2),(1,'2022-02-21', 0.36),
(1,'2022-02-22', 0.54),(1,'2022-02-23', 0.28),(1,'2022-02-24', 1),
(1,'2022-02-25', 1.0),(1,'2022-02-26', 1),(1,'2022-02-27', 1),
(1,'2022-02-28', 0.32),(2,'2022-02-01', 0.19),(2,'2022-02-02', 0.29),
(2,'2022-02-03', 0.63),(2,'2022-02-04', 0.07),(2,'2022-02-05', 0.28),
(2,'2022-02-06', 0.82),(2,'2022-02-07', 0.05),(2,'2022-02-08', 1),
(2,'2022-02-09', 0.97),(2,'2022-02-10', 0.38),(2,'2022-02-11', 0.23),
(2,'2022-02-12', 0.79),(2,'2022-02-13', 0.37),(2,'2022-02-14', 0.0),
(2,'2022-02-15', 0.62),(2,'2022-02-16', 1),(2,'2022-02-17', 0.36),
(2,'2022-02-18', 0.16),(2,'2022-02-19', 0.56),(2,'2022-02-20', 0.37),
(2,'2022-02-21', 0.64),(2,'2022-02-22', 0.88),(2,'2022-02-23', 0.52),
(2,'2022-02-24', 0.71),(2,'2022-02-25', 0.93),(2,'2022-02-26', 0.88),
(2,'2022-02-27', 0.43),(2,'2022-02-28', 0.69)


----Change server timezone
ALTER DATABASE fliqwumy SET timezone TO 'US/Pacific';


----Add new rows for presentation
INSERT INTO user_habit_records (user_id, habit_id, date, fullfilled_percent)
VALUES (1, 3, '2022-03-21', 0.01),(1, 2, '2022-03-21', 0.41),
(2, 5, '2022-03-21', 0.65),(2, 4, '2022-03-21', 0.59)